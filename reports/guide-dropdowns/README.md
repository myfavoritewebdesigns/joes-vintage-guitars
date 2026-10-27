# Collapsible Resource Center Guide Sections

Joe requested compact, clickable dropdowns for Identify Your Guitar and Condition And Selling Guides. Both now use native details/summary elements and start closed. They open independently, retain all twelve guide links and both heading anchors, and work without JavaScript.

Validation: the full verify command passes (322 built pages, zero Astro errors or warnings, zero hard copy failures). The 731 report-only copy warnings are pre-existing. The live-diff check has zero must-fix findings; its only warning concerns the two unchanged Reverb SVG icons' dimensions.

Browser checks passed at 1440, 768, 390 and 320 pixels. Mouse click, Enter and Space toggle the sections; open and closed sections have no scoped WCAG A/AA violations. The closed sections occupy about 134 pixels on desktop and 158 pixels on phones, with no horizontal overflow. A separate browser context confirmed the condition-guide anchor and native click behavior with JavaScript disabled. See browser-checks.json for results.
