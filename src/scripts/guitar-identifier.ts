/**
 * Client for the AI guitar identifier on /guitar-identifier/.
 *
 * Keeps the whole conversation in memory and sends it to /api/identify each
 * turn (the server is stateless). Photos are resized client-side to a ≤1280px
 * JPEG before being attached as base64 image blocks — same approach as
 * photo-upload.ts, including HEIC transcoding where the browser can decode it.
 *
 * Limits mirror the server's: 30 messages, 3 photos, 2000 chars per message.
 */

const MAX_MESSAGES = 30;
const MAX_IMAGES = 3;
const MAX_DIM = 1280;
const JPEG_QUALITY = 0.8;

type Block = { type: "text"; text: string } | { type: "image"; media_type: "image/jpeg"; data: string };
interface Msg {
  role: "user" | "assistant";
  content: Block[];
}

// Top-level export makes this a TS module: without it the file shares global
// script scope with photo-upload.ts and their identical constants collide.
export {};

const $ = <T extends HTMLElement>(id: string) => document.getElementById(id) as T | null;

const log = $("gid-log");
const form = $<HTMLFormElement>("gid-form");
const input = $<HTMLTextAreaElement>("gid-input");
const send = $<HTMLButtonElement>("gid-send");
const statusEl = $("gid-status");
const photoInput = $<HTMLInputElement>("gid-photo");

const messages: Msg[] = [];
let pendingPhoto: { data: string; preview: string } | null = null;
let photosUsed = 0;
let busy = false;

/** Guarded analytics — no-op without a tag manager, never throws. */
function track(event: string, params: Record<string, string | number> = {}): void {
  try {
    const w = window as unknown as { dataLayer?: Array<Record<string, unknown>> };
    w.dataLayer?.push({ event, ...params });
  } catch {
    /* analytics must never break the tool */
  }
}

// ─── Rendering ───────────────────────────────────────────────────────────────

function bubble(cls: string): HTMLDivElement {
  const div = document.createElement("div");
  div.className = `gid-msg ${cls}`;
  log?.appendChild(div);
  log?.scrollTo({ top: log.scrollHeight, behavior: "smooth" });
  return div;
}

interface ReplyImage {
  src: string;
  alt: string;
}

/** Assistant text → paragraphs, with Joe's site links made clickable. Built
 *  with createElement/textContent throughout — model output is never given to
 *  innerHTML. Reference photos come as a server-validated whitelist and render
 *  as clickable thumbnails under the text. */
function renderReply(text: string, images?: ReplyImage[]): void {
  const div = bubble("gid-msg--bot");
  for (const para of text.split(/\n{2,}/)) {
    const p = document.createElement("p");
    // Linkify site-relative paths (/free-appraisal/) and absolute site URLs.
    const parts = para.split(/(https?:\/\/(?:www\.)?joesvintageguitarsaz\.com[^\s)]*|(?<=^|[\s(])\/[a-z0-9-]+(?:\/[a-z0-9-]+)*\/(?=$|[\s.,)]))/g);
    for (const part of parts) {
      if (!part) continue;
      if (/^(https?:\/\/|\/)/.test(part)) {
        const a = document.createElement("a");
        a.href = part.replace(/^https?:\/\/(www\.)?joesvintageguitarsaz\.com/, "");
        a.textContent = part;
        p.appendChild(a);
      } else {
        p.appendChild(document.createTextNode(part));
      }
    }
    div.appendChild(p);
  }
  if (images?.length) {
    const strip = document.createElement("div");
    strip.className = "gid-photos";
    for (const img of images) {
      if (!/^\/images\//.test(img.src)) continue;
      const a = document.createElement("a");
      a.href = img.src;
      a.target = "_blank";
      a.rel = "noopener";
      const el = document.createElement("img");
      el.src = img.src;
      el.alt = img.alt;
      el.loading = "lazy";
      a.appendChild(el);
      strip.appendChild(a);
    }
    div.appendChild(strip);
  }
}

function renderUser(text: string, photoPreview?: string): void {
  const div = bubble("gid-msg--user");
  if (photoPreview) {
    const img = document.createElement("img");
    img.src = photoPreview;
    img.alt = "Your guitar photo";
    div.appendChild(img);
  }
  if (text) {
    const p = document.createElement("p");
    p.textContent = text;
    div.appendChild(p);
  }
}

function renderError(text: string): void {
  const p = document.createElement("p");
  p.textContent = text;
  bubble("gid-msg--error").appendChild(p);
}

function setBusy(b: boolean): void {
  busy = b;
  if (send) send.disabled = b;
  if (statusEl) statusEl.hidden = !b;
}

// ─── Photo handling ──────────────────────────────────────────────────────────

/** Downscale + re-encode to JPEG. Returns base64 (no data: prefix) + preview
 *  data URL, or null when the browser can't decode the file (e.g. HEIC outside
 *  Safari). */
async function resizeToJpeg(file: File): Promise<{ data: string; preview: string } | null> {
  let bitmap: ImageBitmap;
  try {
    bitmap = await createImageBitmap(file);
  } catch {
    return null;
  }
  let { width, height } = bitmap;
  const longest = Math.max(width, height);
  if (longest > MAX_DIM) {
    const scale = MAX_DIM / longest;
    width = Math.round(width * scale);
    height = Math.round(height * scale);
  }
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    bitmap.close();
    return null;
  }
  ctx.drawImage(bitmap, 0, 0, width, height);
  bitmap.close();
  const preview = canvas.toDataURL("image/jpeg", JPEG_QUALITY);
  return { data: preview.split(",")[1] ?? "", preview };
}

photoInput?.addEventListener("change", async () => {
  const file = photoInput.files?.[0];
  photoInput.value = "";
  if (!file) return;
  if (photosUsed >= MAX_IMAGES) {
    renderError(`Photo limit reached (${MAX_IMAGES} per conversation), but you can still type serial numbers.`);
    return;
  }
  const resized = await resizeToJpeg(file);
  if (!resized) {
    renderError(
      "Couldn't read that image in this browser. If it's an iPhone HEIC photo, try Safari, or convert it to JPEG first.",
    );
    return;
  }
  pendingPhoto = resized;
  input?.focus();
  if (input && !input.value) input.placeholder = "Photo attached. Add a note or just hit Send";
});

// ─── Conversation loop ───────────────────────────────────────────────────────

async function submit(): Promise<void> {
  if (busy || !input) return;
  const text = input.value.trim();
  if (!text && !pendingPhoto) return;
  if (messages.length >= MAX_MESSAGES - 1) {
    renderError("This conversation's reached its limit. Refresh the page to start a new one, or take it to Joe directly.");
    return;
  }

  const content: Block[] = [];
  if (pendingPhoto) {
    content.push({ type: "image", media_type: "image/jpeg", data: pendingPhoto.data });
    photosUsed++;
    track("guitar_id_photo");
  }
  if (text) content.push({ type: "text", text });

  renderUser(text, pendingPhoto?.preview);
  messages.push({ role: "user", content });
  if (messages.length === 1) track("guitar_id_start");

  pendingPhoto = null;
  input.value = "";
  input.placeholder = "Type a serial number or describe your guitar…";
  setBusy(true);

  try {
    const res = await fetch("/api/identify", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ messages }),
    });
    const data = (await res.json()) as { ok: boolean; reply?: string; error?: string; images?: ReplyImage[] };
    if (!res.ok || !data.ok || !data.reply) {
      // Drop the failed turn so a retry re-sends it cleanly.
      messages.pop();
      renderError(data.error ?? "Something went wrong. Please try again.");
      return;
    }
    messages.push({ role: "assistant", content: [{ type: "text", text: data.reply }] });
    renderReply(data.reply, data.images);
    track("guitar_id_reply", { turn: Math.ceil(messages.length / 2) });
  } catch {
    messages.pop();
    renderError("Couldn't reach the identifier. Check your connection and try again.");
  } finally {
    setBusy(false);
    input.focus();
  }
}

form?.addEventListener("submit", (e) => {
  e.preventDefault();
  void submit();
});

// Enter sends, Shift+Enter makes a newline — the expected chat convention.
input?.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    void submit();
  }
});
