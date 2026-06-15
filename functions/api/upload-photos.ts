/**
 * Cloudflare Pages Function — POST /api/upload-photos
 *
 * Receives a multipart/form-data upload from the "send us photos" form on
 * /thank-you/ (part two of the original two-step seller flow) and emails the
 * images to Joe as Mailgun attachments. Photos are resized client-side before
 * upload (see src/scripts/photo-upload.ts), so the message stays under
 * Mailgun's ~25MB cap.
 *
 * Uses the same Mailgun env vars as functions/api/contact.ts:
 *   MAILGUN_API_KEY, MAILGUN_DOMAIN, MAILGUN_TO  (required)
 *   MAILGUN_FROM, MAILGUN_REGION                 (optional)
 *
 * Spam protection: honeypot field + same-origin check. No second captcha on
 * purpose, so the optional photo step stays low-friction (the lead already
 * cleared hCaptcha on step one). Pair with a Cloudflare WAF rate-limit on
 * /api/upload-photos if abuse appears.
 */

interface Env {
  MAILGUN_API_KEY: string;
  MAILGUN_DOMAIN: string;
  MAILGUN_TO: string;
  MAILGUN_FROM?: string;
  MAILGUN_REGION?: string;
}

interface PagesContext {
  request: Request;
  env: Env;
}

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  });

const MAX_FILES = 10;
const MAX_FILE_BYTES = 10 * 1024 * 1024; // 10MB per file (generous; client resizes first)
const MAX_TOTAL_BYTES = 22 * 1024 * 1024; // keep the whole message under Mailgun's 25MB
const ALLOWED_TYPES = new Set(["image/jpeg", "image/png", "image/gif", "image/webp"]);

/** Allow requests only from our own site (and the CF Pages preview). Empty
 *  Origin (some same-origin posts) is allowed; a present, foreign Origin is not. */
function originAllowed(origin: string | null): boolean {
  if (!origin) return true;
  try {
    const host = new URL(origin).hostname;
    return /(^|\.)joesvintageguitarsaz\.com$/.test(host) || /\.pages\.dev$/.test(host);
  } catch {
    return false;
  }
}

export const onRequestPost = async ({ request, env }: PagesContext): Promise<Response> => {
  if (!env.MAILGUN_API_KEY || !env.MAILGUN_DOMAIN || !env.MAILGUN_TO) {
    console.error("[upload-photos] Missing Mailgun env vars");
    return json({ ok: false, error: "Photo uploads are not configured yet." }, 500);
  }

  if (!originAllowed(request.headers.get("Origin"))) {
    return json({ ok: false, error: "Request blocked." }, 403);
  }

  let data: FormData;
  try {
    data = await request.formData();
  } catch {
    return json({ ok: false, error: "Invalid upload." }, 400);
  }

  // Honeypot: bots fill hidden fields. Pretend success.
  if (String(data.get("_gotcha") ?? "").trim() !== "") return json({ ok: true });

  const name = String(data.get("name") ?? "").trim();
  const email = String(data.get("email") ?? "").trim();
  const phone = String(data.get("phone") ?? "").trim();
  const message = String(data.get("message") ?? "").trim();

  const files = data.getAll("photos").filter((f): f is File => f instanceof File && f.size > 0);
  if (files.length === 0) return json({ ok: false, error: "Please add at least one photo." }, 400);
  if (files.length > MAX_FILES) return json({ ok: false, error: `Please send up to ${MAX_FILES} photos.` }, 400);

  let total = 0;
  for (const f of files) {
    if (!ALLOWED_TYPES.has(f.type)) {
      return json({ ok: false, error: "Only JPG, PNG, GIF, or WebP images are allowed." }, 400);
    }
    if (f.size > MAX_FILE_BYTES) {
      return json({ ok: false, error: "One of the images is too large to send by email." }, 400);
    }
    total += f.size;
  }
  if (total > MAX_TOTAL_BYTES) {
    return json({ ok: false, error: "Those photos are too large in total. Please send a few at a time." }, 400);
  }

  const text = [
    "New photo upload from joesvintageguitarsaz.com",
    "",
    name && `Name: ${name}`,
    email && `Email: ${email}`,
    phone && `Phone: ${phone}`,
    message && `Message: ${message}`,
    `Photos attached: ${files.length}`,
  ]
    .filter(Boolean)
    .join("\n");

  const region = (env.MAILGUN_REGION ?? "us").toLowerCase();
  const host = region === "eu" ? "api.eu.mailgun.net" : "api.mailgun.net";
  const endpoint = `https://${host}/v3/${env.MAILGUN_DOMAIN}/messages`;
  const from = env.MAILGUN_FROM ?? `Joe's Vintage Guitars <noreply@${env.MAILGUN_DOMAIN}>`;

  const out = new FormData();
  out.set("from", from);
  out.set("to", env.MAILGUN_TO);
  out.set("subject", `Website photos${name ? ` from ${name}` : ""}`);
  out.set("text", text);
  if (email && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) out.set("h:Reply-To", email);

  let i = 1;
  for (const f of files) {
    const ext = (f.type.split("/")[1] || "jpg").replace("jpeg", "jpg");
    out.append("attachment", f, `photo-${i++}.${ext}`);
  }

  const auth = "Basic " + btoa(`api:${env.MAILGUN_API_KEY}`);
  try {
    const res = await fetch(endpoint, { method: "POST", headers: { Authorization: auth }, body: out });
    if (!res.ok) {
      console.error(`[upload-photos] Mailgun ${res.status}: ${await res.text()}`);
      return json({ ok: false, error: "Could not send your photos. Please email them to Joe directly." }, 502);
    }
    return json({ ok: true });
  } catch (err) {
    console.error("[upload-photos]", err);
    return json({ ok: false, error: "Could not send your photos. Please try again." }, 502);
  }
};
