/**
 * Cloudflare Pages Function — POST /api/contact
 *
 * Receives the JSON payload from any site form tagged `data-jvg-contact-form`
 * (handled client-side in src/scripts/contact-form.ts) and relays it to Joe's
 * inbox via the Mailgun HTTP API.
 *
 * Required env vars (CF Pages → Settings → Environment variables, as secrets):
 *   MAILGUN_API_KEY   Mailgun private API key
 *   MAILGUN_DOMAIN    e.g. "mg.joesvintageguitarsaz.com"
 *   MAILGUN_TO        recipient address (where leads land)
 * Optional:
 *   MAILGUN_FROM      sender; defaults to "Joe's Vintage Guitars <noreply@<DOMAIN>>"
 *   MAILGUN_REGION    "us" (default) or "eu" — picks the API host
 */

interface Env {
  MAILGUN_API_KEY: string;
  MAILGUN_DOMAIN: string;
  MAILGUN_TO: string;
  MAILGUN_FROM?: string;
  MAILGUN_REGION?: string;
  /** hCaptcha secret key. If unset, captcha verification is skipped (dev). */
  HCAPTCHA_SECRET?: string;
}

/** Verify an hCaptcha token against hcaptcha siteverify. */
async function verifyHcaptcha(secret: string, token: string, ip: string | null) {
  const body = new URLSearchParams({ secret, response: token });
  if (ip) body.set("remoteip", ip);
  try {
    const res = await fetch("https://api.hcaptcha.com/siteverify", {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      body,
    });
    const data = (await res.json()) as { success?: boolean; "error-codes"?: string[] };
    return { ok: data.success === true, errors: data["error-codes"] ?? [] };
  } catch (err) {
    console.error("[api/contact] hcaptcha verify failed", err);
    return { ok: false, errors: ["network-error"] };
  }
}

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  });

/** Subset of Cloudflare's Pages-Function context we use (typed locally so we
 *  don't pull @cloudflare/workers-types globals into the browser-side build). */
interface PagesContext {
  request: Request;
  env: Env;
}

export const onRequestPost = async ({ request, env }: PagesContext): Promise<Response> => {
  // Fail loudly in logs if the project isn't configured, but don't leak details.
  if (!env.MAILGUN_API_KEY || !env.MAILGUN_DOMAIN || !env.MAILGUN_TO) {
    console.error("[api/contact] Missing Mailgun env vars");
    return json({ ok: false, error: "Email is not configured." }, 500);
  }

  let payload: Record<string, unknown>;
  try {
    payload = (await request.json()) as Record<string, unknown>;
  } catch {
    return json({ ok: false, error: "Invalid request body." }, 400);
  }

  // Honeypot: bots fill hidden fields. If present and non-empty, pretend success.
  if (typeof payload._gotcha === "string" && payload._gotcha.trim() !== "") {
    return json({ ok: true });
  }

  // hCaptcha verification. Enforced whenever HCAPTCHA_SECRET is set; skipped
  // (with a warning) in dev so the pipe can be tested without a secret.
  if (env.HCAPTCHA_SECRET) {
    const token = String(payload["h-captcha-response"] ?? "");
    if (!token) {
      return json({ ok: false, error: "Captcha is required." }, 400);
    }
    const ip = request.headers.get("CF-Connecting-IP");
    const verdict = await verifyHcaptcha(env.HCAPTCHA_SECRET, token, ip);
    if (!verdict.ok) {
      console.warn("[api/contact] hcaptcha rejected:", verdict.errors.join(", "));
      return json({ ok: false, error: "Captcha verification failed." }, 400);
    }
  } else {
    console.warn("[api/contact] HCAPTCHA_SECRET not set — skipping captcha verification");
  }

  const formId = String(payload.formId ?? "unknown");
  const name = String(payload.name ?? payload["your-name"] ?? "").trim();
  const email = String(payload.email ?? payload["your-email"] ?? "").trim();
  // Make/Model box leads the subject line. It posts as "instrument" on the
  // combined-field forms and "model" on the brand pages (make implied). Fall
  // back to the name, then a generic label, if the seller left it blank.
  const makeModel = String(payload.instrument ?? payload.model ?? "").trim();

  // Minimal server-side validation (the client already validates too).
  if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return json({ ok: false, error: "A valid email is required." }, 400);
  }

  // Build a readable plaintext body from every submitted field.
  const skip = new Set(["_gotcha", "formId", "submittedAt", "h-captcha-response", "g-recaptcha-response"]);
  const lines = Object.entries(payload)
    .filter(([k, v]) => !skip.has(k) && v != null && String(v).trim() !== "")
    .map(([k, v]) => `${k}: ${String(v)}`);

  const text = [
    `New ${formId} submission from joesvintageguitarsaz.com`,
    "",
    ...lines,
    "",
    `Submitted: ${payload.submittedAt ?? new Date().toISOString()}`,
  ].join("\n");

  const region = (env.MAILGUN_REGION ?? "us").toLowerCase();
  const host = region === "eu" ? "api.eu.mailgun.net" : "api.mailgun.net";
  const endpoint = `https://${host}/v3/${env.MAILGUN_DOMAIN}/messages`;

  const from = env.MAILGUN_FROM ?? `Joe's Vintage Guitars <noreply@${env.MAILGUN_DOMAIN}>`;

  const form = new FormData();
  form.set("from", from);
  form.set("to", env.MAILGUN_TO);
  form.set("subject", `LEAD: ${makeModel || name || "New website lead"}`);
  form.set("text", text);
  if (email) form.set("h:Reply-To", email);

  const auth = "Basic " + btoa(`api:${env.MAILGUN_API_KEY}`);

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { Authorization: auth },
      body: form,
    });
    if (!res.ok) {
      const detail = await res.text();
      console.error(`[api/contact] Mailgun ${res.status}: ${detail}`);
      return json({ ok: false, error: "Could not send your message." }, 502);
    }
    return json({ ok: true });
  } catch (err) {
    console.error("[api/contact]", err);
    return json({ ok: false, error: "Could not send your message." }, 502);
  }
};
