# Audit: live guide tables vs the serial tool (2026-07-12)

**Question:** do the hand-written serial tables on `/fender-guitars-serial-number-guide/`
agree with what the interactive tool actually answers?

**Method:** the v2 dataset (`src/data/fender-serials.ts`) is parity-proven identical to the
live tool (440-case gate, 0 mismatches), so it stands in for the tool. The live page's 21
tables were pulled 2026-07-12 (`live-guide.html`, extracted to `live-tables-dump.txt`);
tables 0 to 10 are the serial-decoding set compared here. Tables 11 to 20 are hardware and
model-spec content the tool does not cover, so they are out of scope.

**Verdict: mostly consistent, but the drift is real.** 3 genuine contradictions, 1 missing
row on the page, 3 under-informing tool answers, 2 cosmetic notes, 1 maintenance time bomb.
Joe is the authority on the facts; every item below is a "confirm with Joe" until he rules.

## Contradictions (page and tool disagree)

1. **Japanese O / P / Q letters — the big one.** The page's MIJ table says O, P, and Q
   (6 digits) are **Made in Japan, 1993 to 1994**, and its CIJ table says O = 1997 to 2000,
   P = 1999 to 2002, Q = 2002 to 2004. The tool never asks MIJ vs CIJ for these letters and
   flatly answers **O = "1997 (Crafted in Japan)", P = "1999", Q = "2002"**. So for a
   1993 MIJ O-serial the tool gives the wrong era and a single wrong-ish year while the
   page documents it correctly. The page matches standard Fender Japan serial charts; the
   tool is the simplistic side. **Likely v2 fix (Joe to confirm): give O/P/Q the same
   "Made in Japan or Crafted in Japan?" question B/T/U already get, with the page's year
   ranges.**

2. **F-plate 1966/1967 overlap (180000 to 199999).** The page shows 110000 to 200000 = 1966
   AND 180000 to 210000 = 1967 (a real production overlap). The tool answers a flat "1966"
   for anything 110001 to 199999 and never mentions the 1967 possibility. (Historical note:
   the original widget's dead `NUMERIC_RANGES` table HAD the 180000 to 210000 row for 1967,
   but the code path that runs never consults it.)

3. **N-prefix location wording.** The page puts American N serials on the FRONT of the
   headstock through 1995 and the BACK from 1996 on. The tool's N question offers only
   "Back of Headstock," and its result text always says "back of headstock serial" — so for
   an early-90s N serial the tool's location wording contradicts the page. Answer year is
   identical either way; wording-level fix.

## Missing on the page (tool knows it, page omits it)

4. **G-prefix MIJ row.** The tool decodes G + digits as "1987–1988 (Made in Japan)". The
   page's MIJ table lists 19 letters but has **no G row** (jumps F → H). If the tool's G
   rule is right (it matches the standard charts), the page table is missing a row.

## Tool under-informs (not wrong, but flatter than the page)

5. **CIJ O/P/Q year ranges** — page gives ranges (1997 to 2000, 1999 to 2002, 2002 to
   2004); tool gives single years (1997, 1999, 2002). Folded into item 1's fix.
6. **F-plate 1973/1974 overlap (500001 to 520000)** — the page shows both rows; the tool
   first-match answers a flat "1973" and never surfaces the 1974 possibility. Same class as
   item 2.
7. **Neck plate 6000 to 8000** — page row style implies the 1954/1955 overlap by listing
   the region in both rows; the tool DOES answer "1954–1955" here, but only via the
   ask-location path. Consistent; noted for completeness.

## Cosmetic / presentation notes

8. **Boundary style.** The page repeats boundaries across rows (L20000 appears in both the
   1963 and 1964 rows); the tool's data uses exact splits (20000 = 1963, 20001 = 1964). No
   serial gets a contradictory answer; a reader at an exact boundary sees mild ambiguity
   the tool resolves silently.
9. **Digit-count enforcement.** The page labels most MIJ letters "6 digits"; the tool only
   enforces digit counts for A and L. E.g. `F12` decodes as 1986–1987 with no length check.
   (Related quirk, shared by page-silence: any word starting with a known letter decodes —
   `HELLO` = H-prefix MIJ.)

## Maintenance time bomb

10. **US-prefix year cap.** The tool's table ends at **US26 = 2026 (this year)**. A US27
    serial in January 2027 falls through to the fallback. The page's wording ("first 2
    digits after US = year") has no such cap. v2 fix is trivial (compute the year from the
    two digits within a sane window, like MX does) — Joe to confirm.

## What this means for the Option A swap

None of this blocks swapping the v2 tool onto the guide page: v2 reproduces today's tool
behavior exactly, so the page gets strictly better (same answers, better markup) and the
existing tables stay as they are. But items 1 to 4 are pre-existing page/tool disagreements
that survive an Option A swap untouched — they are the working list for the Joe iteration
on the test page, and the O/P/Q item is the one with real-world wrong answers today.
