/**
 * Client handler for the "send us photos" form on /thank-you/ (part two of the
 * seller flow). Drag-and-drop or pick up to 10 images, resize them in the
 * browser so the email stays small, then POST multipart to /api/upload-photos.
 *
 * Name / email / phone are pre-filled from the URL params the main form adds on
 * its redirect (see src/scripts/contact-form.ts), but stay editable.
 */

const MAX_FILES = 10;
const MAX_DIM = 1600; // longest edge after resize
const JPEG_QUALITY = 0.8;
const ALLOWED = ["image/jpeg", "image/png", "image/gif", "image/webp"];

const $ = <T extends HTMLElement>(id: string) => document.getElementById(id) as T | null;

/** Downscale + recompress to JPEG so phone photos fit under the email cap.
 *  GIFs and anything we can't decode are sent through unchanged. */
async function resize(file: File): Promise<{ blob: Blob; ext: string }> {
  if (file.type === "image/gif") return { blob: file, ext: "gif" };
  let bitmap: ImageBitmap;
  try {
    bitmap = await createImageBitmap(file);
  } catch {
    return { blob: file, ext: (file.type.split("/")[1] || "jpg").replace("jpeg", "jpg") };
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
    return { blob: file, ext: "jpg" };
  }
  ctx.drawImage(bitmap, 0, 0, width, height);
  bitmap.close();
  const blob = await new Promise<Blob | null>((res) => canvas.toBlob(res, "image/jpeg", JPEG_QUALITY));
  return blob ? { blob, ext: "jpg" } : { blob: file, ext: "jpg" };
}

const fmtSize = (b: number) => (b < 1024 * 1024 ? `${Math.round(b / 1024)} KB` : `${(b / 1024 / 1024).toFixed(1)} MB`);

function init() {
  const form = $<HTMLFormElement>("jvg-photo-form");
  if (!form) return;
  // These elements always render together with the form on /thank-you/. Cast to
  // non-null so the closures below don't trip TS "possibly null" on captured vars.
  const input = document.getElementById("pu-input") as HTMLInputElement;
  const dropzone = document.getElementById("pu-dropzone") as HTMLElement;
  const list = document.getElementById("pu-list") as HTMLUListElement;
  const submit = document.getElementById("pu-submit") as HTMLButtonElement;
  const status = document.getElementById("pu-status") as HTMLElement;

  // Pre-fill from the URL params the main form passes on redirect.
  const params = new URLSearchParams(location.search);
  for (const key of ["name", "email", "phone"] as const) {
    const el = $<HTMLInputElement>(`pu-${key}`);
    const val = params.get(key);
    if (el && val) el.value = val;
  }

  let files: File[] = [];

  const setStatus = (state: string, msg: string) => {
    status.dataset.state = state;
    status.textContent = msg;
  };

  function render() {
    list.innerHTML = "";
    files.forEach((f, i) => {
      const li = document.createElement("li");
      li.className = "pu-item";
      const span = document.createElement("span");
      span.className = "pu-item__name";
      span.textContent = `${f.name} · ${fmtSize(f.size)}`;
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "pu-item__remove";
      btn.setAttribute("aria-label", `Remove ${f.name}`);
      btn.textContent = "×";
      btn.addEventListener("click", () => {
        files.splice(i, 1);
        render();
      });
      li.append(span, btn);
      list.appendChild(li);
    });
    submit.disabled = files.length === 0;
    dropzone.dataset.count = String(files.length);
  }

  function add(fileList: FileList | File[]) {
    const incoming = Array.from(fileList).filter((f) => ALLOWED.includes(f.type));
    if (incoming.length === 0 && (fileList as FileList).length > 0) {
      setStatus("error", "Those files aren't supported. Use JPG, PNG, GIF, or WebP.");
      return;
    }
    for (const f of incoming) {
      if (files.length >= MAX_FILES) break;
      if (!files.some((x) => x.name === f.name && x.size === f.size)) files.push(f);
    }
    if (files.length >= MAX_FILES) setStatus("info", `That's the max of ${MAX_FILES} photos.`);
    else if (status.dataset.state === "error") setStatus("idle", "");
    render();
  }

  input.addEventListener("change", () => {
    if (input.files) add(input.files);
    input.value = "";
  });
  dropzone.addEventListener("click", (e) => {
    if ((e.target as HTMLElement).closest("button")) return;
    input.click();
  });
  dropzone.addEventListener("keydown", (e) => {
    const k = (e as KeyboardEvent).key;
    if (k === "Enter" || k === " ") {
      e.preventDefault();
      input.click();
    }
  });
  ["dragenter", "dragover"].forEach((ev) =>
    dropzone.addEventListener(ev, (e) => {
      e.preventDefault();
      dropzone.dataset.drag = "1";
    })
  );
  ["dragleave", "drop"].forEach((ev) =>
    dropzone.addEventListener(ev, (e) => {
      e.preventDefault();
      delete dropzone.dataset.drag;
    })
  );
  dropzone.addEventListener("drop", (e) => {
    const dt = (e as DragEvent).dataTransfer;
    if (dt?.files) add(dt.files);
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (files.length === 0) {
      setStatus("error", "Please add at least one photo.");
      return;
    }
    const email = $<HTMLInputElement>("pu-email")?.value.trim() ?? "";
    if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setStatus("error", "Please enter the email address you used so Joe knows whose photos these are.");
      $<HTMLInputElement>("pu-email")?.focus();
      return;
    }

    submit.disabled = true;
    setStatus("submitting", "Resizing and sending your photos…");

    const fd = new FormData();
    fd.set("name", $<HTMLInputElement>("pu-name")?.value.trim() ?? "");
    fd.set("email", email);
    fd.set("phone", $<HTMLInputElement>("pu-phone")?.value.trim() ?? "");
    fd.set("message", $<HTMLTextAreaElement>("pu-message")?.value.trim() ?? "");
    fd.set("_gotcha", $<HTMLInputElement>("pu-gotcha")?.value ?? "");

    try {
      for (const f of files) {
        const { blob, ext } = await resize(f);
        const base = f.name.replace(/\.[^.]+$/, "") || "photo";
        fd.append("photos", blob, `${base}.${ext}`);
      }
      const res = await fetch("/api/upload-photos", { method: "POST", body: fd });
      const body = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (res.ok && body.ok) {
        files = [];
        render();
        form.querySelector(".pu-grid")?.remove();
        setStatus("success", "Got them! Your photos are on the way to Joe. Thanks.");
        submit.remove();
      } else {
        setStatus("error", body.error || "Something went wrong sending your photos. Please try again.");
        submit.disabled = false;
      }
    } catch (err) {
      console.error("[photo-upload]", err);
      setStatus("error", "Network error. Please try again, or email your photos to Joe directly.");
      submit.disabled = false;
    }
  });

  render();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
