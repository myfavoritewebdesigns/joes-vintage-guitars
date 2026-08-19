# Vintage Guitar AI: Abuse And Cost Controls

`/api/identify` calls the Anthropic API on every conversation turn, so every
request has a real cost. This is what stands between the endpoint and a runaway
bill, what each layer does, and what is still open.

## Layer 1: Origin Gate (in code, live)

`originAllowed()` in `functions/api/identify.ts`.

A request is accepted when it carries an `Origin` on `joesvintageguitarsaz.com`
or a `.pages.dev` preview, or when it carries `Sec-Fetch-Site: same-origin`.

**What changed and why it mattered.** The original check returned true for a
MISSING `Origin`, so a script sending no headers at all was treated as
same-origin and reached Claude freely. Verified against staging on 2026-08-19: a
plain `curl` with no `Origin` header got a full model response. Browsers always
attach `Origin` to a POST, including a same-origin one, so requiring it costs
real visitors nothing.

## Layer 2: Request Limiter (in code, live)

`functions/api/_rate-limit.ts`, applied before the API key is read so a throttled
request costs nothing.

| Rule | Limit |
|---|---|
| Burst, per isolate | 5 requests per 10 seconds |
| Per IP | 12 per minute |
| Per IP | 100 per hour |
| All visitors combined | 300 per minute |

One request is one conversation turn, so a normal conversation of six or eight
turns sits far inside these. Over the limit returns HTTP 429 with `Retry-After`
and a message pointing at Joe's phone number.

**This layer is a speed bump, not a guarantee, and it is worth being plain about
why.** It stores counters in the Cloudflare Cache API because the project has no
KV namespace, no Durable Object, and no wrangler config. That means:

- Counters are per data centre, so a client spread across several data centres
  gets roughly one budget per centre it reaches.
- Read-then-write is racy, so a simultaneous burst can slip a few requests past
  the limit before the counter catches up.
- It fails open. If the cache misbehaves the tool keeps working rather than
  locking visitors out.

## Layer 3: WAF Rate Limiting Rule (dashboard, NOT YET CREATED)

This is the authoritative control. It runs at Cloudflare's edge before the
Function is invoked, is accounted globally rather than per data centre, and is
the layer that actually caps spend. **It needs to exist before the tool is
promoted.**

Cloudflare dashboard, zone `joesvintageguitarsaz.com`, Security, WAF, Rate
limiting rules:

- **Rule name:** `identify-api-limit`
- **If incoming requests match:** `URI Path` equals `/api/identify`
- **Rate:** 20 requests per 1 minute
- **Counting characteristic:** IP with NAT support
- **Then:** Block, for 1 minute
- **Response:** 429

Set it above the in-code per-minute limit so the code layer is what a normal
over-eager visitor meets, and the WAF is what a script meets.

## Layer 4: Conversation Caps (in code, pre-existing)

Already in `identify.ts` and unchanged: 30 messages per conversation, 3 photos
per conversation, 4,000 characters per text block, roughly 2 MB per image, 5
server-side tool iterations, and a 1,024 token cap on each model reply.

## Still Open

- **Layer 3 does not exist yet.** Dashboard action, needs Josh.
- **`contact.ts`, `serial-report.ts` and `upload-photos.ts` are unlimited.**
  They cost Mailgun rather than Anthropic, so the exposure is smaller, but the
  limiter module is deliberately generic and can be applied to them.
- **The `.pages.dev` allowance is broad.** The origin gate accepts any
  `.pages.dev` hostname, which includes Pages projects that are not ours. It
  exists so branch previews work. Tightening it to
  `*.joes-vintage-guitars.pages.dev` would close that, at the cost of breaking
  any future renamed preview project.

## How To Verify

```bash
# Should be blocked: no Origin, no Sec-Fetch-Site
curl -s -o /dev/null -w '%{http_code}\n' -X POST <host>/api/identify \
  -H 'content-type: application/json' -d '{"messages":[]}'
# expect 403

# Should throttle after the burst allowance
for i in $(seq 1 12); do
  curl -s -o /dev/null -w '%{http_code} ' -X POST <host>/api/identify \
    -H 'content-type: application/json' -H 'Origin: https://<host>' \
    -d '{"messages":[{"role":"user","content":[{"type":"text","text":"hi"}]}]}'
done
# expect 200s then 429s
```
