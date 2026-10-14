# Les Paul Standard Guides: Independent Visual Review

Reviewed October 14, 2026 on the local production preview at `http://127.0.0.1:4322/`.

Scope: `/post/1958-gibson-les-paul-standard-guide/`, `/post/1959-gibson-les-paul-standard-guide/`, and `/post/1960-gibson-les-paul-standard-guide/`.

This is an independent review under `.claude/agents/live-diff-auditor.md`. These are new pages; a WordPress original and migration parity comparison do not exist. CUA browser automation provided the qualitative layer in place of the unavailable Playwright MCP. No application code was edited by this reviewer. The existing CLAUDE decision log was consulted.

## Must Fix Before Publication

- No unresolved visual defect remains from this review; the initially missing R0 photograph was supplied and passed the follow-up below.

## Should Fix Or Review

- Cross-model visual review was not run; the optional additional model-family pass described in the audit playbook remains unperformed, and this report must not be represented as cross-model consensus.

## Verified And Informational

- All three article openings were inspected at 1920 by 1080 and 390 by 844 pixels; no whole-page horizontal overflow was observed.
- Final browser verification after the 16:00:10 build found zero missing TOC targets on all three pages, with each Sources link pointing to `#resources-and-related-reading`; clicking the repaired 1960 Sources link landed its heading 110 pixels below the viewport top.
- The initial Sources-anchor typo and nested-link rendering defect were fixed during review; the final 1958 shipping-total FAQ reads as normal linked prose, with no residual Markdown fragments in any of the three article bodies.
- R8 and R9 photographs load and have explicit modern-reissue disclosures above the photograph at both widths.
- The desktop hero has an 820-pixel outer width and ends before the fixed sidebar begins; a complete ancestor and pseudo-element DOM walk confirmed no intervening decorative overflow.
- At 390 pixels, specification tables have 327-pixel scroll containers around 650-pixel content, with `overflow-x: auto`; an arrow-key probe moved the table horizontally while document horizontal scroll remained zero.
- The mobile Sections menu opens, changes the URL hash and closes after selection; the settled 1959 reissue-section heading landed 110 pixels below the viewport top.
- Author and closing-contact sections remain available; Joe's author image loaded after navigation toward the lower article, and the visible mobile author card was inspected.
- Shared contact fields expose labels, and the desktop contact form and footer were visually inspected; no test message was submitted.
- Desktop header and footer navigation remain readable in their existing rust and cream treatments.
- Each article has one H1; the implementer reported zero faults in the final cross-page link/FAQ verifier and six of six completeness checks passed for all three articles.
- Lazy images were checked after real navigation/scrolling rather than modifying page loading attributes.
- Screenshots were inspected through CUA tool output; standalone screenshot files and a cross-model pass were not produced.
- The temporary viewport override was reset and the review-only browser tab closed after verification.

## Limits

This review checks rendering and navigation, not historical fact approval, copyright provenance, valuation advice, form-delivery behavior, or publication readiness. Expert sign-off remains a separate editorial requirement. Every H2 ID was inventoried; representative interactive jumps were verified after scrolling settled rather than claiming a timed screenshot of every anchor.

## R0 Follow-Up After The 16:12:51 Build

- The 1960 guide now shows the supplied 2014 R0 photograph, and the image loaded successfully at 1920 by 1080 and 390 by 844 pixels.
- Its visible caption identifies the instrument as a modern reissue rather than a vintage 1960 example and appears above the photograph at both widths.
- Desktop DOM measurements show an 820-pixel hero ending at x1362.5 and the fixed contents sidebar beginning at x1398, leaving a positive gap; the ancestor and pseudo-element walk found no decorative overflow.
- Neither tested viewport showed whole-page horizontal overflow.
- The new `#what-joes-r0-photo-shows` target exists in both contents menus; the mobile Sections link navigated to the new heading, closed the menu and settled at y110.375 pixels.
- Every 1960 contents link resolved to an existing heading after the update.
- CUA used a temporary Chrome tab for this follow-up because the prior in-app browser connection was unavailable; screenshot review and DOM checks were limited to the changed 1960 page.
- This follow-up resolves the missing-photo visual finding and does not constitute expert approval of the historical claims.
