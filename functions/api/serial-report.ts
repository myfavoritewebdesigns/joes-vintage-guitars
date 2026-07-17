/**
 * Cloudflare Pages Function — POST /api/serial-report
 *
 * Powers the OPTIONAL "email me this result" capture under the Fender serial
 * decoder. The decoder shows the year on-page immediately; this endpoint is a
 * pure value-add: it emails the visitor a templated dating report for the
 * serial they just decoded, and drops a lead notification in Joe's inbox so he
 * can follow up on a warm prospect (the seller-acquisition funnel).
 *
 * The visitor's YEAR comes from the client-side resolver (some serials need a
 * follow-up MIJ/CIJ answer the server can't reproduce from the number alone),
 * so every user-supplied string is HTML-escaped before it goes into the email.
 * The report BODY is a fixed template — the visitor cannot inject content, only
 * choose the recipient — which keeps this from being a general-purpose relay.
 *
 * Required env vars (CF Pages → Settings → Environment variables, as secrets):
 *   MAILGUN_API_KEY   Mailgun private API key
 *   MAILGUN_DOMAIN    e.g. "mg.joesvintageguitarsaz.com"
 *   MAILGUN_TO        where the lead notification lands (Joe)
 * Optional:
 *   MAILGUN_FROM      sender; defaults to "Joe's Vintage Guitars <noreply@<DOMAIN>>"
 *   MAILGUN_REGION    "us" (default) or "eu"
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

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!
  );

const BUSINESS = {
  name: "Joe's Vintage Guitars",
  phone: "(602) 900-6635",
  tel: "+16029006635",
  email: "joesvintageguitars94@gmail.com",
  address: "47 N Fraser Dr E, Mesa, AZ 85203",
  site: "https://www.joesvintageguitarsaz.com",
};

/** Cross-dating checklist links (mirror the on-page result card). */
const CROSS_DATE = [
  ["Pot codes (most reliable)", "/fender-guitars-serial-number-guide/#adv-pot-codes"],
  ["Neck heel date stamp", "/fender-guitars-serial-number-guide/#adv-neck-heel"],
  ["Body cavity stamp", "/fender-guitars-serial-number-guide/#adv-body-dates"],
  ["Pickup bobbin dating", "/fender-guitars-serial-number-guide/#adv-pickup-dates"],
  ["Neck profile dating", "/fender-guitars-serial-number-guide/#advanced-dating"],
  ["Logo & decal dating", "/fender-guitars-serial-number-guide/#logo-evolution"],
];

function reportHtml(serial: string, year: string): string {
  const s = escapeHtml(serial);
  const y = escapeHtml(year);
  const links = CROSS_DATE.map(
    ([label, href]) =>
      `<li style="margin:4px 0"><a href="${BUSINESS.site}${href}" style="color:#a03a1e">${label}</a></li>`
  ).join("");
  return `<div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:0 auto;color:#3e2a14">
  <h2 style="color:#a03a1e;margin:0 0 4px">Your Fender Dating Report</h2>
  <p style="margin:0 0 16px;color:#6b4f2e">From ${BUSINESS.name}</p>

  <table style="width:100%;border-collapse:collapse;background:#f5f0e8;border:1px solid #d9cdb8;border-radius:8px">
    <tr><td style="padding:16px 18px">
      <div style="font-size:12px;text-transform:uppercase;letter-spacing:.08em;color:#6b4f2e">Serial Number</div>
      <div style="font-size:18px;font-weight:bold;letter-spacing:.06em">${s}</div>
      <div style="margin-top:12px;font-size:12px;text-transform:uppercase;letter-spacing:.08em;color:#6b4f2e">Approximate Year</div>
      <div style="font-size:22px;font-weight:bold;color:#a03a1e">${y}</div>
    </td></tr>
  </table>

  <p style="margin:18px 0 6px;font-weight:bold">A real serial isn't proof of a real guitar.</p>
  <p style="margin:0 0 16px">Serial-number ranges are estimates, and fakes or parts-swapped guitars can carry
  legitimate-looking numbers. To confirm the year and originality, cross-date the physical details:</p>
  <ul style="margin:0 0 18px;padding-left:20px">${links}</ul>

  <h3 style="color:#a03a1e;margin:20px 0 6px">What affects the value</h3>
  <p style="margin:0 0 16px">Year and model are just the start. Originality of the finish, neck, pickups, and
  hardware, overall condition, and whether you still have the case and paperwork can each move the value
  substantially. The most accurate way to know what yours is worth is a hands-on look.</p>

  <table style="width:100%;border-collapse:collapse;margin:8px 0 20px">
    <tr><td style="background:#a03a1e;border-radius:8px;padding:14px 18px;text-align:center">
      <a href="${BUSINESS.site}/free-appraisal/" style="color:#fff;font-weight:bold;text-decoration:none;font-size:16px">
        Get Joe's Free Appraisal &rarr;
      </a>
    </td></tr>
  </table>

  <p style="margin:0 0 4px">Thinking about selling? Joe buys vintage Fenders nationwide and pays same-day.
  Call or text <a href="tel:${BUSINESS.tel}" style="color:#a03a1e">${BUSINESS.phone}</a>, reply to this email,
  or <a href="${BUSINESS.site}/contact-me/" style="color:#a03a1e">send some photos</a>.</p>

  <hr style="border:none;border-top:1px solid #d9cdb8;margin:22px 0 12px">
  <p style="font-size:12px;color:#6b4f2e;margin:0">
    You received this because you asked ${BUSINESS.name} to email you a dating report for serial ${s}.
    Not interested in follow-ups? Just reply and say so.<br>
    ${BUSINESS.name} &middot; ${BUSINESS.address} &middot; ${BUSINESS.phone}
  </p>
</div>`;
}

function reportText(serial: string, year: string): string {
  return [
    `Your Fender Dating Report — ${BUSINESS.name}`,
    "",
    `Serial Number: ${serial}`,
    `Approximate Year: ${year}`,
    "",
    "A real serial isn't proof of a real guitar. Ranges are estimates and fakes can carry",
    "legitimate-looking numbers. Cross-date the physical details to confirm the year:",
    ...CROSS_DATE.map(([label, href]) => `  - ${label}: ${BUSINESS.site}${href}`),
    "",
    "What affects the value: originality (finish, neck, pickups, hardware), condition, and",
    "whether you have the case and paperwork. The most accurate answer is a hands-on look.",
    "",
    `Get Joe's free appraisal: ${BUSINESS.site}/free-appraisal/`,
    "",
    `Thinking about selling? Joe buys vintage Fenders nationwide and pays same-day.`,
    `Call or text ${BUSINESS.phone}, reply to this email, or send photos at ${BUSINESS.site}/contact-me/`,
    "",
    "---",
    `You received this because you asked ${BUSINESS.name} to email you a dating report for`,
    `serial ${serial}. Not interested in follow-ups? Just reply and say so.`,
    `${BUSINESS.name} · ${BUSINESS.address} · ${BUSINESS.phone}`,
  ].join("\n");
}

async function mailgunSend(env: Env, fields: Record<string, string>): Promise<boolean> {
  const region = (env.MAILGUN_REGION ?? "us").toLowerCase();
  const host = region === "eu" ? "api.eu.mailgun.net" : "api.mailgun.net";
  const endpoint = `https://${host}/v3/${env.MAILGUN_DOMAIN}/messages`;
  const from = env.MAILGUN_FROM ?? `Joe's Vintage Guitars <noreply@${env.MAILGUN_DOMAIN}>`;

  const form = new FormData();
  form.set("from", from);
  for (const [k, v] of Object.entries(fields)) form.set(k, v);

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { Authorization: "Basic " + btoa(`api:${env.MAILGUN_API_KEY}`) },
      body: form,
    });
    if (!res.ok) {
      console.error(`[api/serial-report] Mailgun ${res.status}: ${await res.text()}`);
      return false;
    }
    return true;
  } catch (err) {
    console.error("[api/serial-report]", err);
    return false;
  }
}

export const onRequestPost = async ({ request, env }: PagesContext): Promise<Response> => {
  if (!env.MAILGUN_API_KEY || !env.MAILGUN_DOMAIN || !env.MAILGUN_TO) {
    console.error("[api/serial-report] Missing Mailgun env vars");
    return json({ ok: false, error: "Email reports are not configured yet." }, 500);
  }
  if (!originAllowed(request.headers.get("Origin"))) {
    return json({ ok: false, error: "Request blocked." }, 403);
  }

  let payload: Record<string, unknown>;
  try {
    payload = (await request.json()) as Record<string, unknown>;
  } catch {
    return json({ ok: false, error: "Invalid request body." }, 400);
  }

  // Honeypot: bots fill hidden fields. If present and non-empty, fake success.
  if (typeof payload._gotcha === "string" && payload._gotcha.trim() !== "") {
    return json({ ok: true });
  }

  const email = String(payload.email ?? "").trim();
  const serial = String(payload.serial ?? "").trim().slice(0, 40);
  const year = String(payload.year ?? "").trim().slice(0, 120);
  const consent = payload.consent === true || payload.consent === "true";

  if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return json({ ok: false, error: "A valid email is required." }, 400);
  }
  if (!consent) {
    return json({ ok: false, error: "Please check the box to have the report emailed to you." }, 400);
  }
  if (!serial || !year) {
    return json({ ok: false, error: "Decode a serial number first." }, 400);
  }

  // 1) The report, to the visitor.
  const reportOk = await mailgunSend(env, {
    to: email,
    subject: `Your Fender dating report — serial ${serial}`,
    text: reportText(serial, year),
    html: reportHtml(serial, year),
    "h:Reply-To": env.MAILGUN_TO,
  });
  if (!reportOk) {
    return json({ ok: false, error: "Could not send your report. Please try again." }, 502);
  }

  // 2) Lead notification, to Joe. Best-effort: the visitor already got their
  //    report, so a failure here shouldn't fail the request.
  await mailgunSend(env, {
    to: env.MAILGUN_TO,
    subject: `LEAD: Fender serial report — ${serial} (${year})`,
    text: [
      "A visitor requested an emailed Fender dating report from the serial tool.",
      "",
      `Email:   ${email}`,
      `Serial:  ${serial}`,
      `Year:    ${year}`,
      `When:    ${new Date().toISOString()}`,
      "",
      "They opted in to be contacted. Warm lead — consider a follow-up.",
    ].join("\n"),
    "h:Reply-To": email,
  });

  return json({ ok: true });
};
