/**
 * Shared client-side submit handler for all contact forms on the site.
 *
 * Any <form> with `data-jvg-contact-form` will be intercepted on submit. The
 * payload is POSTed to /api/contact (a Cloudflare Pages Function — to be added
 * when Mailgun is wired). Until then, this script gracefully no-ops with a
 * console.info so dev clicks don't navigate.
 *
 * Each form should set `data-form-id="<source-name>"` so the handler knows
 * which form fired (e.g., "consultation", "contact", "free-appraisal").
 */

import { contact, hcaptchaSiteKey } from "../config/site";

type FormState = "idle" | "submitting" | "success" | "error";

/** Minimal shape of the global hCaptcha API we rely on (explicit-render mode). */
interface HCaptcha {
  render(el: HTMLElement, opts: { sitekey: string }): string;
  getResponse(widgetId?: string): string;
  reset(widgetId?: string): void;
}
declare global {
  interface Window {
    hcaptcha?: HCaptcha;
    onJvgHcaptchaLoad?: () => void;
  }
}

const HCAPTCHA_SRC =
  "https://js.hcaptcha.com/1/api.js?render=explicit&onload=onJvgHcaptchaLoad";

/** Render one widget per form, just above its submit button. Idempotent. */
function renderCaptchas() {
  const hcaptcha = window.hcaptcha;
  if (!hcaptcha) return;
  document
    .querySelectorAll<HTMLFormElement>("form[data-jvg-contact-form]")
    .forEach((form) => {
      if (form.dataset.hcaptchaId) return; // already rendered
      const mount = document.createElement("div");
      mount.className = "h-captcha-mount";
      mount.style.margin = "16px 0";
      const submit = form.querySelector('button[type="submit"]');
      if (submit) submit.before(mount);
      else form.appendChild(mount);
      try {
        form.dataset.hcaptchaId = hcaptcha.render(mount, { sitekey: hcaptchaSiteKey });
      } catch (err) {
        console.error("[contact-form] hcaptcha render failed", err);
      }
    });
}

/** Inject the hCaptcha script once; render widgets when it finishes loading. */
function loadHcaptcha() {
  if (document.querySelector('script[data-jvg-hcaptcha]')) return;
  window.onJvgHcaptchaLoad = renderCaptchas;
  const s = document.createElement("script");
  s.src = HCAPTCHA_SRC;
  s.async = true;
  s.defer = true;
  s.dataset.jvgHcaptcha = "1";
  document.head.appendChild(s);
}

function setState(form: HTMLFormElement, state: FormState, message?: string) {
  form.dataset.state = state;
  const submit = form.querySelector<HTMLButtonElement>('button[type="submit"]');
  if (submit) submit.disabled = state === "submitting";

  let banner = form.querySelector<HTMLDivElement>(".jvg-form-banner");
  if (!banner && state !== "idle") {
    banner = document.createElement("div");
    banner.className = "jvg-form-banner";
    banner.setAttribute("role", "status");
    banner.setAttribute("aria-live", "polite");
    form.appendChild(banner);
  }
  if (banner) {
    banner.textContent = message ?? "";
    banner.dataset.state = state;
  }
}

async function handleSubmit(e: SubmitEvent) {
  const form = e.currentTarget as HTMLFormElement;
  e.preventDefault();

  // Basic native validation pass
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  // Require a solved hCaptcha before we bother the server.
  const widgetId = form.dataset.hcaptchaId;
  const token = window.hcaptcha?.getResponse(widgetId) ?? "";
  if (form.dataset.hcaptchaId && !token) {
    setState(form, "error", "Please complete the “I'm human” check above.");
    return;
  }

  const data = new FormData(form);
  const payload: Record<string, unknown> = {
    formId: form.dataset.formId ?? "unknown",
    submittedAt: new Date().toISOString(),
  };
  for (const [k, v] of data.entries()) payload[k] = v;

  setState(form, "submitting", "Sending…");

  // Endpoint exists once Cloudflare Pages Functions + Mailgun are wired.
  // Until then, /api/contact returns 404 and we log + show a friendly message.
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    // On success (or the 404 dev-stub), restore the original two-step flow:
    // send the seller to /thank-you/, where they can optionally upload photos.
    // Carry the basics as URL params so part two pre-fills them.
    if (res.ok || res.status === 404) {
      const params = new URLSearchParams();
      const pick = (...keys: string[]) => {
        for (const k of keys) {
          const v = payload[k];
          if (v != null && String(v).trim() !== "") return String(v).trim();
        }
        return "";
      };
      const name = pick("name", "your-name");
      const email = pick("email", "your-email");
      const phone = pick("phone", "your-phone");
      if (name) params.set("name", name);
      if (email) params.set("email", email);
      if (phone) params.set("phone", phone);
      const qs = params.toString();
      window.location.assign(`/thank-you/${qs ? `?${qs}` : ""}`);
      return;
    }
    setState(form, "error", `Something went wrong. Please call ${contact.phone}.`);
    window.hcaptcha?.reset(widgetId);
  } catch (err) {
    console.error("[contact-form]", err);
    setState(form, "error", `Network error. Please call ${contact.phone}.`);
    window.hcaptcha?.reset(widgetId);
  }
}

function init() {
  const forms = document.querySelectorAll<HTMLFormElement>("form[data-jvg-contact-form]");
  if (forms.length === 0) return;

  // Defer the hCaptcha third-party script until the visitor first interacts with
  // a form (focus or pointer/touch). Keeps ~api.js off the initial-load critical
  // path; it still loads well before they can submit, since filling any field
  // fires focusin first. loadHcaptcha() is idempotent, so double-arming is safe.
  let armed = false;
  const armHcaptcha = () => {
    if (armed) return;
    armed = true;
    loadHcaptcha();
  };

  forms.forEach((form) => {
    if (form.dataset.bound === "1") return;
    form.dataset.bound = "1";
    form.addEventListener("submit", handleSubmit);
    form.addEventListener("focusin", armHcaptcha, { once: true });
    form.addEventListener("pointerdown", armHcaptcha, { once: true });
  });

  // If the script was already loaded by a prior init pass, render now.
  if (window.hcaptcha) renderCaptchas();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
