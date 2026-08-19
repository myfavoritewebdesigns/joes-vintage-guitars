/**
 * Cloudflare Pages Function — POST /api/identify
 *
 * Backend for the AI guitar identifier on /guitar-identifier/. A grounded
 * conversational tool: Claude answers ONLY from Joe's own guide content
 * (functions/api/_serial-knowledge.json, generated from the built guide pages)
 * and from the deterministic Fender serial resolver in
 * src/data/fender-serials.ts — the model never invents a Fender date; the
 * parity-tested decoder does, and its follow-up questions (MIJ/CIJ, neck plate
 * vs heel) surface as conversation turns.
 *
 * The client sends the whole conversation each turn (stateless server, same as
 * the Messages API itself). Vision: the client attaches resized JPEG photos as
 * base64 image blocks; Claude identifies brand/era and tells the visitor where
 * the serial number lives on that guitar, using Joe's per-brand guidance.
 *
 * Cost controls: prompt caching on tools+system (repeat turns read ~90%
 * cheaper), conversation/turn/image caps below, max_tokens cap. Abuse: same
 * same-origin check as the other functions; pair with a CF WAF rate limit on
 * /api/identify before heavy promotion.
 *
 * Required env var (CF Pages → Settings → Environment variables, as a secret):
 *   ANTHROPIC_API_KEY
 */
import Anthropic from "@anthropic-ai/sdk";
import { decodeSerial, answerStep, STEPS, type Outcome, type StepId } from "../../src/data/fender-serials";
import knowledge from "./_serial-knowledge.json";

interface Env {
  ANTHROPIC_API_KEY?: string;
  [key: string]: unknown;
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

/** CF Pages env vars have bitten us before with invisible characters pasted
 *  into the variable NAME (dashboard copy/paste). Exact lookup first, then a
 *  normalized scan so a poisoned name still resolves. */
function envStr(env: Env, name: string): string | undefined {
  const direct = env[name];
  if (typeof direct === "string" && direct) return direct;
  const norm = (s: string) => s.replace(/[^\x20-\x7e]/g, "").trim();
  for (const [k, v] of Object.entries(env)) {
    if (norm(k) === name && typeof v === "string" && v) return v;
  }
  return undefined;
}

// ─── Conversation limits ─────────────────────────────────────────────────────

const MAX_MESSAGES = 30;       // turns per conversation (client shows a wrap-up past this)
const MAX_TEXT_CHARS = 4_000;  // per text block
const MAX_IMAGES = 3;          // photos per conversation
const MAX_IMAGE_B64 = 2_800_000; // ~2MB decoded; client resizes to ≤1280px JPEG first
const MAX_TOOL_ITERATIONS = 5; // server-side tool loop bound

// ─── Grounding ───────────────────────────────────────────────────────────────

type BrandKey = keyof typeof knowledge.brands;
const BRAND_KEYS = Object.keys(knowledge.brands) as BrandKey[];

const BUSINESS = {
  name: "Joe's Vintage Guitars",
  phone: "(602) 900-6635",
  appraisal: "/free-appraisal/",
  site: "https://www.joesvintageguitarsaz.com",
};

/** Compact per-brand serial-location cheat sheet for the system prompt (kept
 *  hand-written and stable so the cached prefix doesn't churn with rebuilds).
 *  Full guide text is fetched on demand via the get_brand_guide tool. */
const SERIAL_LOCATIONS = `
Where serial numbers live, by brand (summarized from Joe's guides):
- Fender: neck plate (most vintage), bridge plate (50s Teles/Esquires and P-basses), headstock front or back (70s onward), or back of the neck heel on some reissues. Ask which location theirs is in — it changes the answer.
- Gibson: back of the headstock (stamped or inked), or on the orange/white label inside the soundhole or f-hole on hollowbodies and acoustics.
- Gretsch: label inside the body on hollowbodies, or stamped on the back of the headstock; 1970s serials are often hyphenated.
- Guild: stamped on the back of the headstock or on the label inside the body.
- Martin: stamped on the neck block inside the soundhole, next to the model number.
- Rickenbacker: on the jack plate (two-letter date code) or bridge on most models.
- Fender amps: tube chart date stamp inside the cabinet, transformer EIA codes, and chassis serial.`;

/** Reference photos the model can attach to a reply, by key. The model only
 *  ever names a key; paths come from this whitelist, so it cannot invent or
 *  leak URLs. All images are Joe's own, already published on the guide pages
 *  (the non-Fender ones are copied to public/images/serial-locate/ because
 *  src/assets URLs are content-hashed and unstable). */
interface Photo {
  src: string;
  alt: string;
}
const PHOTOS: Record<string, Photo> = {
  fender_neck_plate: { src: "/images/fender-sn/neck-plate-tool.jpg", alt: "Fender neck plate serial number" },
  fender_bridge_plate: { src: "/images/fender-sn/bridge-plate-tool.jpg", alt: "Fender bridge plate serial number" },
  fender_headstock: { src: "/images/fender-sn/headstock.jpg", alt: "Fender headstock serial number" },
  fender_neck_heel: { src: "/images/fender-sn/fender-back-of-neck-serial-number-scaled.jpg", alt: "Serial number on the back of a Fender neck heel" },
  gibson_headstock_stamp: { src: "/images/serial-locate/gibson-headstock-ink-stamp.jpg", alt: "Gibson ink-stamped serial number on the back of the headstock" },
  gibson_body_label: { src: "/images/serial-locate/gibson-label-inside-body.jpg", alt: "Gibson serial number on the label inside the body" },
  gretsch_headstock: { src: "/images/serial-locate/gretsch-headstock-serial.jpg", alt: "Gretsch serial number on the headstock" },
  gretsch_hyphenated: { src: "/images/serial-locate/gretsch-hyphenated-serial.jpg", alt: "1970s Gretsch hyphenated serial number" },
  gretsch_body_label: { src: "/images/serial-locate/gretsch-label-inside-body.jpg", alt: "Gretsch serial number on the label inside the body" },
  guild_locations: { src: "/images/serial-locate/guild-serial-locations.jpg", alt: "Where Guild serial numbers are located" },
  martin_neck_block: { src: "/images/serial-locate/martin-neck-block-serial.jpg", alt: "Martin serial and model number on the neck block" },
  rickenbacker_jack_plate: { src: "/images/serial-locate/rickenbacker-jack-plate-serial.jpg", alt: "Rickenbacker two-letter date code on the jack plate" },
  rickenbacker_bridge: { src: "/images/serial-locate/rickenbacker-bridge-serial.jpg", alt: "Rickenbacker serial number on the bridge" },
};
const PHOTO_KEYS = Object.keys(PHOTOS);
const MAX_REPLY_PHOTOS = 4;

/** Joe's videos the model can attach, by key. Same whitelist principle as
 *  PHOTOS: the model names a key, the ids live here. The timestamped entries
 *  deep-link into the moment of the dating video that demonstrates the
 *  technique being recommended. */
interface Video {
  youtubeId: string;
  start?: number;
  title: string;
}
const VIDEOS: Record<string, Video> = {
  fender_dating_video: { youtubeId: "PIRoB0KHEg0", title: "Joe's guide to dating a vintage Fender" },
  fender_pot_codes_video: { youtubeId: "PIRoB0KHEg0", start: 184, title: "How to read Fender pot codes" },
  fender_neck_date_video: { youtubeId: "PIRoB0KHEg0", start: 125, title: "Finding the neck date stamp" },
  martin_serial_video: { youtubeId: "WGF-pL6GB38", title: "Dating a Martin by serial number" },
  free_appraisal_video: { youtubeId: "uSu-Ld-xgnI", title: "How Joe's free appraisal works" },
};
const VIDEO_KEYS = Object.keys(VIDEOS);
const MAX_REPLY_VIDEOS = 2;

const SYSTEM_PROMPT = `You are the vintage guitar identification assistant on ${BUSINESS.name}'s website (${BUSINESS.site}). Joe is a vintage guitar dealer in Mesa, Arizona who buys vintage guitars and offers free appraisals.

Your job is a guided identification flow:
1. Offer the visitor two paths: upload a photo of the guitar, or enter a serial number directly.
2. If they send a photo: identify the brand, likely model, and era from what you can see (headstock shape, logo style, body, hardware). Say what you're confident about and what you're not. Then tell them exactly where to find the serial number on that guitar, using the brand guidance below, and ask them to type it in.
   Whenever you tell a visitor where to look for a serial number, also call attach_photos with the matching photo keys. Joe's reference photos then appear under your message, and you can point to them ("like the photo below"). Follow-up questions from the Fender decoder attach their own photos automatically.
   Joe also has videos you can attach with attach_videos when they genuinely fit: the pot codes video when you recommend pot-code cross-dating, the neck date video for neck-stamp checks, the Martin serial video for Martin dating, the appraisal video when someone is thinking of selling. At most one or two per reply, only when relevant.
3. When you have a serial number: for FENDER guitars and basses, you MUST call decode_fender_serial — never date a Fender serial yourself, the decoder is Joe's verified logic. If it asks a follow-up (returned in the tool result), relay that question conversationally with its choices, then call answer_fender_step with their answer. For other brands, call get_brand_guide and date the serial only from what Joe's guide says, quoting ranges from the guide. If the guide shows a serial is ambiguous (very common for Gibson), say so plainly and point to cross-dating (pot codes, neck stamps) — ambiguity is exactly why Joe offers a free appraisal.
4. After a successful identification, wrap up warmly: suggest Joe's free appraisal at ${BUSINESS.appraisal} (or calling ${BUSINESS.phone}) if they're curious what it's worth or thinking of selling.

Grounding rules — these are hard limits:
- Answer ONLY from the tool results, the brand guidance below, and what's visible in the visitor's photos. If Joe's guides don't cover something (a brand not listed, amps other than Fender, effects pedals), say the tool doesn't cover it and point them to Joe directly at ${BUSINESS.phone}.
- Never state a dollar value. Condition, originality, and market timing move prices too much for a chat estimate — that's what the free appraisal is for.
- Stay on vintage guitar identification. Politely decline anything else and steer back.
- Never present a guess as a fact. Confidence language matters: "the L-series plate suggests", not "this is".
${SERIAL_LOCATIONS}

Style: warm, plain-spoken, concise. This is a chat window, so keep replies to a few short paragraphs at most. No markdown headers or bullet walls; write like Joe's knowledgeable shop assistant. One question at a time. House copy rules: never use em dashes (use commas, periods, or parentheses instead) and never use emoji.

Answering: lead with the answer. Do not write a "let me look that up" preamble before calling a tool, and never claim you attached a photo or video unless the attach tool reported that exact key under "attached".`;

// ─── Tools ───────────────────────────────────────────────────────────────────

const TOOLS: Anthropic.Messages.ToolUnion[] = [
  {
    name: "decode_fender_serial",
    description:
      "Date a FENDER guitar/bass serial number using Joe's verified decoder. Always use this for Fender serials — never date one yourself. Returns either a year result, a follow-up question you must relay to the visitor (with the choices to offer), or a fallback meaning the serial isn't in the reference data.",
    input_schema: {
      type: "object",
      properties: {
        serial: { type: "string", description: "The serial number exactly as the visitor gave it" },
      },
      required: ["serial"],
    },
  },
  {
    name: "answer_fender_step",
    description:
      "Continue a Fender decode after the visitor answers a follow-up question. Pass the original serial, the step id from the previous tool result, and the choice value matching the visitor's answer.",
    input_schema: {
      type: "object",
      properties: {
        serial: { type: "string", description: "The same serial number as the original decode call" },
        step: { type: "string", description: "The step id from the previous decode result" },
        choice: { type: "string", description: "The choice value matching the visitor's answer" },
      },
      required: ["serial", "step", "choice"],
    },
  },
  {
    name: "attach_photos",
    description:
      "Attach Joe's reference photos to your reply, shown to the visitor under your message. Use when telling someone where to find a serial number. Pass the keys matching the locations you mention.",
    input_schema: {
      type: "object",
      properties: {
        keys: {
          type: "array",
          items: { type: "string", enum: PHOTO_KEYS },
          description: "Photo keys to attach, matching the locations mentioned in your reply",
        },
      },
      required: ["keys"],
    },
  },
  {
    name: "attach_videos",
    description:
      "Attach Joe's how-to videos to your reply, shown as playable embeds under your message. Use when a video demonstrates what you're recommending (pot codes, neck dates, Martin serials, the appraisal process).",
    input_schema: {
      type: "object",
      properties: {
        keys: {
          type: "array",
          items: { type: "string", enum: VIDEO_KEYS },
          description: "Video keys to attach",
        },
      },
      required: ["keys"],
    },
  },
  {
    name: "get_brand_guide",
    description:
      "Fetch the full text of Joe's serial-number guide for a brand (serial ranges, dating tables, cross-dating advice). Call this before dating any non-Fender serial, and when you need detail beyond the summary — e.g. Gibson's overlapping ranges or Rickenbacker letter codes.",
    input_schema: {
      type: "object",
      properties: {
        brand: {
          type: "string",
          enum: BRAND_KEYS,
          description: "Which of Joe's guides to fetch",
        },
      },
      required: ["brand"],
    },
  },
];

/** Serialize a decoder Outcome for the model, expanding ask-steps with the
 *  actual question and choices from STEPS so the model can relay them. Ask
 *  steps auto-attach their choice photos (neck plate vs bridge plate etc.) so
 *  the visitor sees what they're being asked about without model cooperation. */
function outcomeForModel(outcome: Outcome, attach: (p: Photo) => void): string {
  if (outcome.kind === "result") {
    return JSON.stringify({
      kind: "result",
      year: outcome.year,
      caveat: outcome.warn
        ? "Ranges overlap in this era — recommend cross-dating (pot codes, neck heel stamp) to narrow it."
        : undefined,
    });
  }
  if (outcome.kind === "ask") {
    const def = STEPS[outcome.step];
    for (const card of def.cards) {
      if (card.image) attach({ src: card.image.src, alt: card.image.alt });
    }
    return JSON.stringify({
      kind: "ask",
      step: outcome.step,
      question: def.label.replace(/^Step \d+: /, ""),
      choices: def.cards.map((c) => ({ value: c.value, label: c.label })),
      note: outcome.note,
    });
  }
  return JSON.stringify({
    kind: "fallback",
    guidance:
      "Serial not found in the reference data. Suggest double-checking the digits, then cross-dating via pot codes or neck stamps, and offer Joe's free appraisal for a definitive answer.",
  });
}

function runTool(
  name: string,
  input: Record<string, unknown>,
  attach: (p: Photo) => void,
  attachVideo: (v: Video) => void,
): string {
  switch (name) {
    case "decode_fender_serial":
      return outcomeForModel(decodeSerial(String(input.serial ?? "")), attach);
    case "answer_fender_step": {
      const step = String(input.step ?? "");
      if (!(step in STEPS)) return JSON.stringify({ error: `Unknown step "${step}"` });
      return outcomeForModel(answerStep(String(input.serial ?? ""), step as StepId, String(input.choice ?? "")), attach);
    }
    case "attach_photos": {
      // Rejected keys used to be dropped silently and reported as success, so
      // the model would tell the visitor "I attached a photo below" when
      // nothing had been attached. Name the rejects and the valid set instead.
      const asked = (Array.isArray(input.keys) ? input.keys : []).map(String);
      const ok = asked.filter((k) => k in PHOTOS);
      const rejected = asked.filter((k) => !(k in PHOTOS));
      ok.forEach((k) => attach(PHOTOS[k]));
      return JSON.stringify({
        attached: ok,
        ...(rejected.length
          ? {
              rejected,
              valid_keys: PHOTO_KEYS,
              warning:
                "The rejected keys do not exist and nothing was attached for them. Do NOT tell the visitor you attached them. Retry with a key from valid_keys, or say nothing about a photo.",
            }
          : {}),
      });
    }
    case "attach_videos": {
      const asked = (Array.isArray(input.keys) ? input.keys : []).map(String);
      const ok = asked.filter((k) => k in VIDEOS);
      const rejected = asked.filter((k) => !(k in VIDEOS));
      ok.forEach((k) => attachVideo(VIDEOS[k]));
      return JSON.stringify({
        attached: ok,
        ...(rejected.length
          ? {
              rejected,
              valid_keys: VIDEO_KEYS,
              warning:
                "The rejected keys do not exist and nothing was attached for them. Do NOT tell the visitor you attached them. Retry with a key from valid_keys, or say nothing about a video.",
            }
          : {}),
      });
    }
    case "get_brand_guide": {
      const brand = String(input.brand ?? "") as BrandKey;
      const guide = knowledge.brands[brand];
      if (!guide) return JSON.stringify({ error: `No guide for "${brand}"` });
      return `Joe's guide "${guide.title}" (${BUSINESS.site}${guide.url}):\n\n${guide.text}`;
    }
    default:
      return JSON.stringify({ error: `Unknown tool "${name}"` });
  }
}

// ─── Request validation ──────────────────────────────────────────────────────

type InText = { type: "text"; text: string };
type InImage = { type: "image"; media_type: string; data: string };
interface InMessage {
  role: "user" | "assistant";
  content: Array<InText | InImage>;
}

/** Validate + convert client messages to API params. Returns an error string
 *  on any violation — the client mirrors these limits, so hitting one here
 *  means someone is poking the endpoint directly. */
function toApiMessages(raw: unknown): Anthropic.Messages.MessageParam[] | string {
  if (!Array.isArray(raw) || raw.length === 0) return "No messages.";
  if (raw.length > MAX_MESSAGES) return "Conversation limit reached.";
  let images = 0;
  const out: Anthropic.Messages.MessageParam[] = [];
  for (const m of raw as InMessage[]) {
    if (m?.role !== "user" && m?.role !== "assistant") return "Bad role.";
    if (!Array.isArray(m.content) || m.content.length === 0 || m.content.length > 4) return "Bad content.";
    const blocks: Anthropic.Messages.ContentBlockParam[] = [];
    for (const block of m.content) {
      if (block?.type === "text") {
        if (typeof block.text !== "string" || block.text.length > MAX_TEXT_CHARS) return "Message too long.";
        blocks.push({ type: "text", text: block.text });
      } else if (block?.type === "image") {
        if (m.role !== "user") return "Bad content.";
        if (++images > MAX_IMAGES) return "Photo limit reached for this conversation.";
        if (block.media_type !== "image/jpeg" || typeof block.data !== "string" || block.data.length > MAX_IMAGE_B64)
          return "Unsupported image.";
        blocks.push({
          type: "image",
          source: { type: "base64", media_type: "image/jpeg", data: block.data },
        });
      } else {
        return "Bad content block.";
      }
    }
    out.push({ role: m.role, content: blocks });
  }
  if (out[out.length - 1].role !== "user") return "Last message must be from the visitor.";
  return out;
}

// ─── Handler ─────────────────────────────────────────────────────────────────

export const onRequestPost = async ({ request, env }: PagesContext): Promise<Response> => {
  if (!originAllowed(request.headers.get("Origin"))) {
    return json({ ok: false, error: "Request blocked." }, 403);
  }
  const apiKey = envStr(env, "ANTHROPIC_API_KEY");
  if (!apiKey) {
    console.error("[identify] Missing ANTHROPIC_API_KEY");
    return json({ ok: false, error: "The identifier is not configured yet." }, 500);
  }

  let body: { messages?: unknown };
  try {
    body = await request.json();
  } catch {
    return json({ ok: false, error: "Invalid request." }, 400);
  }
  const messages = toApiMessages(body.messages);
  if (typeof messages === "string") return json({ ok: false, error: messages }, 400);

  const client = new Anthropic({ apiKey });
  // Model override so Opus vs Haiku can be A/B tested from the dashboard
  // without a code change. Haiku 4.5 does not accept the effort parameter.
  const model = envStr(env, "ANTHROPIC_MODEL") ?? "claude-opus-5";

  // Reference photos accumulated across this turn's tool calls (deduped,
  // capped), returned alongside the reply for the client to render.
  const attachments: Photo[] = [];
  const attach = (p: Photo): void => {
    if (attachments.length < MAX_REPLY_PHOTOS && !attachments.some((a) => a.src === p.src)) {
      attachments.push(p);
    }
  };
  const videoAttachments: Video[] = [];
  const attachVideo = (v: Video): void => {
    if (
      videoAttachments.length < MAX_REPLY_VIDEOS &&
      !videoAttachments.some((a) => a.youtubeId === v.youtubeId && a.start === v.start)
    ) {
      videoAttachments.push(v);
    }
  };

  try {
    // Text the model emits IN THE SAME TURN as a tool call. Claude routinely
    // writes the actual answer ("Your Gibson dates to 1964...") alongside an
    // attach_photos / attach_videos call, and that turn's response object is
    // replaced on the next loop iteration. Collecting as we go is what keeps
    // the answer; reading only the final response throws it away.
    const textParts: string[] = [];
    const collectText = (r: Anthropic.Messages.Message): void => {
      const t = r.content
        .filter((b): b is Anthropic.Messages.TextBlock => b.type === "text")
        .map((b) => b.text)
        .join("\n")
        .trim();
      // The model sometimes restates its preamble after a tool result; keep the
      // first occurrence only so the reply does not read double.
      if (t && !textParts.includes(t)) textParts.push(t);
    };

    let response = await createMessage(client, model, messages);

    // Server-side tool loop: run decoder/guide tools locally, feed results back.
    for (let i = 0; i < MAX_TOOL_ITERATIONS && response.stop_reason === "tool_use"; i++) {
      collectText(response);
      const toolResults: Anthropic.Messages.ToolResultBlockParam[] = response.content
        .filter((b): b is Anthropic.Messages.ToolUseBlock => b.type === "tool_use")
        .map((b) => ({
          type: "tool_result",
          tool_use_id: b.id,
          content: runTool(b.name, b.input as Record<string, unknown>, attach, attachVideo),
        }));
      messages.push({ role: "assistant", content: response.content });
      messages.push({ role: "user", content: toolResults });
      response = await createMessage(client, model, messages);
    }

    // Opus 5 safety classifiers can decline (HTTP 200, stop_reason "refusal") —
    // check before reading content.
    if (response.stop_reason === "refusal") {
      return json({
        ok: true,
        reply: `I can't help with that here, but for anything vintage-guitar related, Joe's the person to ask: ${BUSINESS.phone}.`,
      });
    }

    collectText(response);
    const reply = textParts.join("\n\n").trim();

    return json({
      ok: true,
      reply: reply || "Sorry, I lost my train of thought. Could you say that again?",
      ...(attachments.length ? { images: attachments } : {}),
      ...(videoAttachments.length ? { videos: videoAttachments } : {}),
    });
  } catch (err) {
    console.error("[identify] API error", err);
    const status = err instanceof Anthropic.APIError && err.status === 429 ? 429 : 502;
    return json(
      {
        ok: false,
        error:
          status === 429
            ? "The identifier is busy right now. Give it a minute and try again."
            : "Something went wrong on our end. Try again, or call Joe at " + BUSINESS.phone + ".",
      },
      status,
    );
  }
};

function createMessage(client: Anthropic, model: string, messages: Anthropic.Messages.MessageParam[]) {
  return client.messages.create({
    model,
    max_tokens: 1024,
    // Balance chat latency against vision/dating judgment; raise to "high" if
    // photo IDs come back sloppy, lower to "low" if Joe finds it too slow.
    // Haiku models don't support the effort parameter, so omit it there.
    ...(model.includes("haiku") ? {} : { output_config: { effort: "medium" } }),
    tools: TOOLS,
    // Cache tools+system (render order: tools → system → messages), so every
    // turn after the first reads the prefix at ~10% price. Well over the
    // 512-token Opus 5 cacheable minimum.
    system: [{ type: "text", text: SYSTEM_PROMPT, cache_control: { type: "ephemeral" } }],
    messages,
  });
}
