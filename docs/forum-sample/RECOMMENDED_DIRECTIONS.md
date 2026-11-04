# Vintage Guitar Forum: Sample And Recommended Directions

**For:** Joe Dampt, after Josh reviews it. **Domain:** vintageguitarforum.com (Joe bought it on the 10/30 call).
**Sample:** the preview link in the pull request. It's a clickable mock-up, saved only on a preview branch, hidden
from Google, and nothing on joesvintageguitarsaz.com changes.

## What The Sample Shows

- A forum home with nine boards: Fender, Gibson, Martin and other flat tops, Gretsch and Rickenbacker, amps,
  serial numbers and dating, show your guitar, what is it worth, and guest posts from shops.
- Threads with replies, member profiles, and an Expert Page for Joe with room for his photos.
- A Forum Helper account that is plainly labeled as AI. It answers questions within the day, points people to
  your guides, and hands anything about value to you.
- A guest post page where shops, builders and collectors pitch a post and get a bio and a link back.
- A moderation queue showing how the helper holds spam, new signups and sales posts for a yes or no.
- Posting a thread or a reply works in the sample, but it saves only in your own browser.
- Every thread carries Google's forum markup (DiscussionForumPosting), which is how forum threads get shown in
  Google's discussion results.

## Ways To Build The Real One

### 1. Discourse, Hosted (Our Pick)

The forum software most modern communities run on. It handles signups, password resets, email digests, spam
filtering, moderation and the phone layout for us.

- **Cost:** Discourse's own hosting has a free tier and a Pro plan at $100 a month (5 staff seats, 500,000
  page views a month, custom domain). Self-hosting the same software is free, on a server of about $12 to $24
  a month.
- **Setup:** a few hours to point the domain, set the boards, add the Expert Page and guest post pages, and
  connect the AI helper through its built-in API.
- **Upkeep:** low. Discourse runs updates and backups on its hosting. The helper routine checks in twice a day.
- **Trade-Off:** it'll look like Discourse. We style colors and the header, not the whole layout.

### 2. Flarum Or phpBB On A Small Server

Free, open source forum software on a server we manage.

- **Cost:** about $5 to $10 a month for the server.
- **Setup:** about a day, including the theme.
- **Upkeep:** ours. Security updates, backups and spam plugins need someone every month, and an unpatched forum
  is a common target for spammers.
- **Trade-Off:** cheapest to run, most hands-on to keep healthy.

### 3. Custom Build On The Same Setup As Your Website

The sample is built this way: the same Astro and Cloudflare setup as joesvintageguitarsaz.com, with a Cloudflare
database added for members and posts.

- **Cost:** about $0 to $5 a month to run.
- **Setup:** the most work by far. Accounts, password resets, email, spam control and moderation all have to be
  built and tested. A realistic estimate is 30 to 60 hours before real members can join.
- **Upkeep:** ours, as code. Any new feature is a build job.
- **Trade-Off:** fastest pages and full control of the look, at the highest build cost.

## How We Fill It Before Members Arrive

On the call we talked about filling the forum with AI-written members. We recommend a different start, because
Google's spam rules name pages "generated for the primary purpose of manipulating search rankings" and
spam added through user accounts, and a forum of invented people fits both, which would put the new domain at
risk. And forum readers are quick to spot a fake crowd; if it came out, it would land on your name, because you
are the expert on the front page.

The same head start, done in the open:

- **Your Real Questions.** Appraisal and sell requests come in every week. With the sender's okay and their name
  removed, each one becomes a thread with your answer.
- **The AI Helper, Labeled.** It posts starter threads on the topics people search (dating a Strat, Gibson pot
  codes, Gretsch serials) and answers new questions, always under its own name and always pointing to your guides.
- **Grecia's Team And You, Posting As Yourselves.**
- **Guest Posts From Shops.** The guest post page gives shops and builders a reason to join and link to it.
- **Invitations.** People who already ask you questions on YouTube and by email get a personal invite.

## Next Step

Pick one. On a yes to Discourse, we set it up on vintageguitarforum.com, carry over the Expert Page,
guest post and helper ideas from the sample, and send you the link to try before anyone else sees it.
