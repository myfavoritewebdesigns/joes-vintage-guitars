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

import { contact } from "../config/site";

type FormState = "idle" | "submitting" | "success" | "error";

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
    if (res.ok) {
      setState(form, "success", "Thanks — we'll be in touch shortly.");
      form.reset();
      return;
    }
    // 404 (no handler yet) — visual stub mode.
    if (res.status === 404) {
      console.info("[contact-form] /api/contact not wired yet. Payload:", payload);
      setState(form, "success", "Thanks — we got your details.");
      form.reset();
      return;
    }
    setState(form, "error", `Something went wrong. Please call ${contact.phone}.`);
  } catch (err) {
    console.error("[contact-form]", err);
    setState(form, "error", `Network error. Please call ${contact.phone}.`);
  }
}

function init() {
  const forms = document.querySelectorAll<HTMLFormElement>("form[data-jvg-contact-form]");
  forms.forEach((form) => {
    if (form.dataset.bound === "1") return;
    form.dataset.bound = "1";
    form.addEventListener("submit", handleSubmit);
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
