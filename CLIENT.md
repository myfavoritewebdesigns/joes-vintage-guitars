# Joe's Vintage Guitars — Client Workflow

A short guide for Joe Dampt on how to use the new website rebuild + how to build pages by prompting Claude (no code required).

> If you're looking for the technical operating playbook (for developers and Claude Code), that's `CLAUDE.md` in this same folder. This doc is the **human-facing** guide for the client-side prompt-driven workflow.

---

## What this is

Your website **joesvintageguitarsaz.com** is being rebuilt as a modern static site (Astro + Tailwind) hosted on Cloudflare Pages. The new build is faster, more secure, easier to update, and gives you a paste-and-prompt workflow for new pages.

**Three URLs you need to know:**

| URL | What it shows |
|---|---|
| **https://joes-vintage-guitars.pages.dev** | Live preview of the rebuild (production). What's currently merged to the `main` branch goes here automatically within ~2 minutes of any change. |
| **https://github.com/myfavoritewebdesigns/joes-vintage-guitars** | The source-of-truth repository. All code + content live here. You'll see your pull requests (PRs) on this page. |
| **https://claude.ai** (your Project) | Where you prompt your Claude to build pages. Setup steps are in the next section. |

---

## Your role — prompt-author, not coder

You don't write code. You write **prompts** that tell your Claude what you want, and your Claude does the coding, opens a pull request, and Cloudflare auto-deploys a preview link so you can see it before it goes live.

A normal session looks like this:

1. **You write a prompt** like *"Build a /sell-my-martin-guitar/ page using the live joesvintageguitarsaz.com page as the source. Use the sell-fender page as the structural template. Featured image should be the Martin D-28 on the homepage."*
2. **Your Claude** reads the project's CLAUDE.md (design rules), reads the existing `sell-my-fender-guitar.astro` and `sell-my-gibson-guitar.astro` as patterns, fetches the live page for content, drafts the new file on a feature branch, and opens a pull request.
3. **Your Claude tells you** (a) the PR number, (b) the preview URL Cloudflare will generate (looks like `joe-sell-martin.joes-vintage-guitars.pages.dev`), (c) what to look at.
4. **You click the preview URL** to see the new page rendered in real-time. If it looks wrong, you say so — your Claude will adjust the PR.
5. **When it looks good, merge it.** Merge the PR yourself on GitHub (mobile or laptop works), and the production preview rebuilds in ~2 min.

---

## How to phrase requests

Good prompts give your Claude three things: **what** to build, **what to use as a reference**, and **any specifics you care about**.

### Good prompts

> "Build a `/sell-my-martin-guitar/` page. Use the structure of sell-my-fender-guitar.astro. Get the page content from https://joesvintageguitarsaz.com/sell-my-martin-guitar/. Hero photo should be the Martin D-28 image, OG image is the one called sell-my-martin.jpg."

> "Add a 7th review to the testimonials section on sell-my-gibson-guitar.astro. The reviewer is named David Chen, the body is [paste copy here], the link goes to [paste link]. Move him to position 2."

> "Change the homepage hero subtitle from 'Pre-CBS Stratocasters...' to 'Pre-CBS Strats, Telecasters, and rare custom-color models.'"

> "Replace the Lyman photo on sell-my-gibson with this new one I just uploaded to public/images/lyman-2026.jpg."

### Less-good prompts

> "Make the page better" — *your Claude doesn't know what "better" means. Pick a specific thing.*

> "Build all the remaining pages I need" — *too big. Do one at a time so you can review.*

> "Same as Fender but for Gibson" — *Gibson page already exists. Be specific about which page you want to base on.*

If you're unsure how to phrase something, just describe it conversationally:

> "I want a page like the Fender one but for the Gretsch guitars I buy. They're hollow-body archtops, mostly 1950s and 60s. The 6120 is the famous one."

Your Claude will figure it out and ask follow-up questions.

---

## The preview URL is your best friend

Every time your Claude opens a pull request, Cloudflare automatically builds a preview of that exact change at a unique URL. **Always click it before merging.** That's how you see what you actually got, not what Claude thinks it built.

The URL pattern is: `joe-<branch-name>.joes-vintage-guitars.pages.dev`

It usually takes 1–2 minutes to build after the PR opens. Your Claude will tell you the exact URL or you can find it on the GitHub PR page as a green check labeled "Cloudflare Pages — Deployment successful."

---

## What NOT to ask your Claude to do

Your Claude has these instructions and will refuse or push back if you ask for any of them:

| Off-limits | Why |
|---|---|
| Edit `CLAUDE.md` | This is the developer playbook. Changes here affect every future build. Ask Josh. |
| Edit anything in `reference/` | These are scraped HTML snapshots of the live site, used as ground truth. Don't modify them. |
| Edit anything in `scripts/` | These are audit scripts. Touching them breaks Josh's tooling. |
| Push directly to the `main` branch | Always work on a feature branch + PR. Even if I ask, your Claude will refuse. |
| Change my phone number, email, or address in `src/config/site.ts` without explicit confirmation | These changes affect every page. Your Claude will ALWAYS confirm with you before making them, and you should think twice — small typos in a phone number break business calls site-wide. |

Everything else — page content, photos, copy, new pages, layout tweaks, new sections, fixing typos — is fair game.

---

## When something looks wrong

If the preview URL shows something off:

1. **Tell your Claude what's wrong, in plain words.** Examples: *"the hero photo is too dark, can you use the brighter one?"*, *"the buttons are blue, they should be rust"*, *"the page is missing the testimonials section."*
2. Your Claude will push a fix to the same PR branch. Cloudflare rebuilds the preview within ~2 min. Refresh the URL to see the update.
3. Repeat until you're happy with it.
4. Then merge the PR.

If your Claude can't figure out what you mean after 2 tries, it'll ask you for more detail — a screenshot, a more specific description, etc. Don't get frustrated, just give it the extra context. AI is good at building from clear specs but terrible at guessing.

---

## When you're done

After a PR merges:
- The change goes live at **https://joes-vintage-guitars.pages.dev/** within ~2 min
- The PR is closed (you can't merge it twice — that's normal)
- The feature branch is auto-deleted (also normal — the change is now in `main`)

If you want to make another change, start fresh: tell your Claude what's next. It'll open a new PR.

---

## Boundaries that aren't enforced by code (but should be respected)

Since the repository is on GitHub's free tier, technical branch protection isn't enabled — meaning nothing physically stops your Claude from pushing to `main` if you instruct it to. But:

- Your Claude has very firm instructions to NEVER push to main, only PR. **Don't override this in your prompts.** If you ever feel tempted to write *"just push directly to main, skip the PR,"* don't.
- If you ever notice your Claude did push to main without a PR, tell Josh immediately. He can roll back the change.

The honor system here works because there's only two people contributing — you (via Claude) and Josh. PRs keep both of you informed about what's happening.

---

## Questions

Anything not covered here, ask your Claude. It has the full project context and can explain the rebuild, the design decisions, why a particular section looks the way it does, and what tradeoffs were made. If your Claude doesn't know, it'll tell you to ask Josh.

Welcome to the rebuild. Send feedback as you find it.
