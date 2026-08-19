/**
 * Best-effort rate limiting for the paid endpoints, with no infrastructure.
 *
 * /api/identify calls the Anthropic API on every turn, so an unthrottled loop
 * against it spends real money. This project has no KV namespace, no Durable
 * Object and no wrangler config, so the limiter is built from what a Pages
 * Function already has: per-isolate memory for an instant burst check, and the
 * Cache API for a counter that survives across isolates in the same colo.
 *
 * BE HONEST ABOUT WHAT THIS IS. It is a speed bump, not a guarantee:
 *   - Cache API storage is per colo, so a client spread across data centres
 *     gets roughly one budget per colo it reaches.
 *   - Read-then-write is racy, so a simultaneous burst can slip a few requests
 *     past the limit before the counter catches up.
 *   - It fails OPEN. If the cache misbehaves the tool keeps working rather than
 *     locking visitors out.
 *
 * The authoritative control is a Cloudflare WAF rate-limiting rule on
 * /api/identify, which runs at the edge before the Function is invoked and is
 * accounted globally. See docs/identifier-abuse-controls.md. This module is
 * what protects the endpoint until that rule exists, and defence in depth after.
 */

export interface RateLimitRule {
  /** Requests allowed per window, per identity. */
  limit: number;
  /** Window length in seconds. */
  windowSec: number;
  /** Label used in the cache key and in logs. */
  name: string;
}

export interface RateVerdict {
  allowed: boolean;
  /** Seconds to wait, for the Retry-After header. */
  retryAfter: number;
  /** Which rule tripped, for logging. Never shown to the visitor verbatim. */
  rule?: string;
}

const ALLOWED: RateVerdict = { allowed: true, retryAfter: 0 };

/** Per-isolate burst memory. Cleared whenever the isolate recycles, which is
 *  fine: it only exists to stop a tight loop hitting one isolate. */
const recent = new Map<string, number[]>();
const BURST_WINDOW_MS = 10_000;
const BURST_MAX = 5;

function burstExceeded(id: string): boolean {
  const now = Date.now();
  const hits = (recent.get(id) ?? []).filter((t) => now - t < BURST_WINDOW_MS);
  hits.push(now);
  recent.set(id, hits);
  // Keep the map from growing without bound on a long-lived isolate.
  if (recent.size > 5000) recent.clear();
  return hits.length > BURST_MAX;
}

/** The visitor's IP as Cloudflare sees it. Falls back to a shared bucket so a
 *  missing header cannot be used to get an unlimited private budget. */
export function clientId(request: Request): string {
  return (
    request.headers.get("CF-Connecting-IP") ||
    request.headers.get("X-Forwarded-For")?.split(",")[0]?.trim() ||
    "unknown"
  );
}

async function bumpCounter(key: string, rule: RateLimitRule): Promise<number> {
  const cache = (caches as unknown as { default?: Cache }).default;
  if (!cache) return 0;
  // Fixed window: everyone in the same slice shares a bucket, so the key is
  // stable for the whole window and expires with it.
  const slice = Math.floor(Date.now() / 1000 / rule.windowSec);
  const cacheKey = new Request(`https://rate-limit.invalid/${rule.name}/${slice}/${encodeURIComponent(key)}`);
  let count = 0;
  const hit = await cache.match(cacheKey);
  if (hit) count = Number.parseInt(await hit.text(), 10) || 0;
  count += 1;
  await cache.put(
    cacheKey,
    new Response(String(count), {
      headers: { "cache-control": `max-age=${rule.windowSec}`, "content-type": "text/plain" },
    }),
  );
  return count;
}

/**
 * Check every rule for this identity. Returns the first verdict that denies.
 * Any internal failure resolves to allowed, deliberately.
 */
export async function checkRateLimit(
  request: Request,
  rules: RateLimitRule[],
  opts: { globalRule?: RateLimitRule } = {},
): Promise<RateVerdict> {
  const id = clientId(request);

  if (burstExceeded(id)) {
    return { allowed: false, retryAfter: 10, rule: "burst" };
  }

  try {
    for (const rule of rules) {
      const count = await bumpCounter(id, rule);
      if (count > rule.limit) {
        return { allowed: false, retryAfter: rule.windowSec, rule: rule.name };
      }
    }
    // A shared ceiling across all visitors. This is the one that caps spend if
    // the endpoint is found and hammered from many addresses at once.
    if (opts.globalRule) {
      const count = await bumpCounter("__all__", opts.globalRule);
      if (count > opts.globalRule.limit) {
        return { allowed: false, retryAfter: opts.globalRule.windowSec, rule: opts.globalRule.name };
      }
    }
  } catch {
    // Never let a limiter fault take the tool down.
    return ALLOWED;
  }
  return ALLOWED;
}

/** Limits for /api/identify. One request is one conversation turn. */
export const IDENTIFY_RULES: RateLimitRule[] = [
  { name: "ip-min", limit: 12, windowSec: 60 },
  { name: "ip-hour", limit: 100, windowSec: 3600 },
];

/** Shared ceiling. Generous next to real traffic, far below a runaway loop. */
export const IDENTIFY_GLOBAL: RateLimitRule = { name: "all-min", limit: 300, windowSec: 60 };
