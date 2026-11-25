# Landing Page QA Report

Audit date: 2026-10-12 (Africa/Cairo)
Target: current uncommitted workspace at `C:/mohamed gharib/chokolaweb new`, served at `http://localhost:3000`.

## Executive Summary

The landing page serves successfully and contains the requested updated copy, a mobile-specific hero source, section anchors, accessible link names, and basic SEO metadata. Several implementation-level defects are confirmed. Browser execution was blocked, so visual quality and release readiness cannot be certified. Earlier screenshots and test results from this conversation are not treated as current audit evidence.

Eight findings: five confirmed, two potential, one enhancement.

| Severity | Confirmed | Potential | Enhancement | Total |
| --- | ---: | ---: | ---: | ---: |
| Critical | 0 | 0 | 0 | 0 |
| High | 2 | 1 | 0 | 3 |
| Medium | 3 | 1 | 0 | 4 |
| Low | 0 | 0 | 0 | 0 |
| Enhancement | 0 | 0 | 1 | 1 |

Main release risks are a full-menu CTA with no full-menu destination, very small mobile story text, insufficient text contrast, misleading product photography, and untested fit of longer copy in constrained sections. No application files, dependencies, configuration, or content were changed during this audit. Only this report was created.

## Test Environment

- Windows host; existing development server reused, not restarted.
- Application `web` version 0.1.0; Next.js 16.3.4; React/React DOM 19.2.8; TypeScript and ESLint installed.
- Read-only tools: PowerShell HTTP requests, source/CSS inspection, Node contrast calculations, local image viewer.
- Browser automation: Codex in-app browser attempted twice. Both attempts failed before navigation because the Windows sandbox helper could not start (`helper_unknown_error: setup refresh had errors`). No browser screenshots or browser traces were captured for this audit.
- `axe-core` exists locally. No top-level Playwright, Puppeteer, or Lighthouse package was found in project dependencies. No packages were installed. Axe could not execute without a working browser.
- The served HTML contains development HMR script markup; performance evidence below is not a production benchmark.
- Pending source changes existed before this audit, including hero/story/menu/location copy, root colors, favicon, and image assets. They were preserved.

### Completed Checks

- HTTP page response, generated HTML, heading inventory, image markup, metadata, fragment destinations, source-level CTA destinations.
- Asset file sizes and image endpoint responses.
- CSS-derived font sizes and text contrast calculations.
- Installed ESLint check of `src` completed with exit code 0 and no findings.
- All 14 unique image URLs extracted from served image markup plus the mobile source returned HTTP 200. Requests used explicit markup fallback sizes, not browser-selected sizes.
- Visual inspection of the Mini Pancakes source photo.
- Source inspection of mobile menu, responsive breakpoints, reduced-motion rules, layout constraints, accessible names, external link attributes, and form inventory.

### Blocked or Not Applicable

- All nine rendered viewport checks, zoom/reflow, menu clicking, keyboard navigation, actual focus visibility, anchor scrolling, screenshots, browser console and failed-request monitoring: blocked by browser startup failure.
- Safari/iPhone chrome, notch/safe-area behavior, Android Chrome, and physical touch testing: unavailable; desktop width emulation would not prove these behaviors anyway.
- Lighthouse, LCP, INP, CLS, and browser layout measurements: unavailable.
- External social/map destination validity and redirects: not tested; URL presence is not proof of destination success.
- Forms, validation, submission feedback, tabs, modals, and application loading/empty/error states: no such controls or data flows found. The mobile menu uses native `details`/`summary`.

## Detailed Findings

### QA-01: Full-menu CTA Returns to the Same Highlights Section

- Category: Functionality / user flow
- Severity: High
- Section: Menu Highlights, desktop and mobile
- Status: Confirmed (source and served HTML)
- Steps: Inspect `src/components/MenuHighlights.tsx:162` and `:366`, or inspect the served HTML for links labeled View Full Menu. Both have `href="#menu"`; the same containing section has `id="menu"`.
- Expected: The full-menu CTA opens a complete menu or a clearly identified menu destination.
- Actual: The CTA points back to the highlights section. No separate full-menu route, document, or panel is implemented.
- Evidence: Both links in source; HTTP HTML exposes only `/`, `#about`, `#menu`, and `#directions` as internal destinations. Actual click/scroll behavior was not tested.
- Recommended solution: Supply the approved full-menu URL/PDF or implement a complete menu, then point both CTAs to that destination.

### QA-02: Mobile Story Copy Uses Extremely Small Font Sizes

- Category: Responsive / readability
- Severity: High
- Section: Our Story
- Status: Confirmed (CSS-derived sizes; visual presentation not tested)
- Steps: Evaluate `.paragraph` font rules in `src/components/OurStory.module.css:108` and `:302` against the full-width canvas at each mobile viewport.
- Expected: Story copy remains comfortably readable without requiring zoom.
- Actual: At 320px the paragraph is 4.992px; at 375px it is 5.85px. At 390px and 430px, the normal 8px minimum applies. Moment descriptions have a 7px minimum and moment titles an 8px minimum. The layout scales the desktop canvas rather than giving mobile copy a readable layout.
- Evidence: `container-type: inline-size`, full-width canvas, `1.56cqw` below 389px, and `clamp(8px, 1.56cqw, 19px)` otherwise. These are exact CSS calculations, not screenshot measurements. No claim of automatic WCAG font-size failure is made solely from font size.
- Recommended solution: Use a mobile content flow with readable body type and adequate width, retaining images and brand styling; avoid shrinking an entire desktop composition to mobile size.

### QA-03: Text Color Combinations Have Insufficient Contrast

- Category: Accessibility
- Severity: Medium
- Section: Hero CTA, Visit Us, footer
- Status: Confirmed for authored color pairs
- Steps: Calculate relative luminance from CSS sRGB colors; for footer legal text first composite alpha 0.55 over its solid background.
- Expected: Normal text reaches 4.5:1; large text reaches 3:1 under WCAG AA contrast criteria.
- Actual: Hero View Menu text `#fff6f1` on `#cb6470`: 3.52:1 at 15px/600. Footer legal text composited to approximately `#9b8782` on `#fdf3ec`: 3.11:1 at 10-11px. Visit Us accent `#fff5f0` on base `#e3afb7`: 1.77:1, below even the large-text threshold. Decorative visit blobs may alter actual local contrast; final rendered sampling is pending.
- Evidence: `Hero.module.css` `.ctaPrimary`; `Footer.module.css` `.legalText`; `VisitUs.module.css` `.sweetTooth`; `globals.css` color tokens. Node calculations produced the listed ratios.
- Recommended solution: Adjust foreground/background combinations and test the composited rendered surfaces. Preserve the brand palette while choosing accessible variants.

### QA-04: Mini Pancakes Card Shows Crepes

- Category: Content / visual accuracy
- Severity: Medium
- Section: Menu Highlights
- Status: Confirmed
- Steps: Open `public/images/mh-pancakes.webp`, then compare its contents with the card title in `src/components/MenuHighlights.tsx`.
- Expected: The Mini Pancakes category displays representative pancake photography.
- Actual: The image visibly shows folded chocolate crepes on a plate. Both responsive versions use this source. Its alt text also explicitly identifies folded crepe rolls.
- Evidence: Source image inspected directly during this audit. The component's existing comment acknowledges it is not a dedicated pancake photo.
- Recommended solution: Replace with approved Mini Pancakes photography and matching alt text. Do not relabel the photo as pancakes while retaining the wrong product.

### QA-05: Mobile Menu Region References the Hidden Desktop Heading

- Category: Accessibility / semantics
- Severity: Medium
- Section: Menu Highlights
- Status: Confirmed (markup/CSS mismatch; accessibility-tree impact not tested)
- Steps: Compare `MenuHighlights.tsx:77`, `:107`, and `:205` with `MenuHighlights.module.css:439` onward.
- Expected: The region's accessible name references its visible heading at every breakpoint.
- Actual: The section's `aria-labelledby="menu-heading"` references the desktop h2, whose ancestor `.header` is hidden at <=860px. The visible mobile h2 has no ID. Hidden referenced text can still participate in accessible-name computation, so this is not evidence that the region is necessarily unnamed; it is an inconsistent semantic relationship requiring assistive-technology verification.
- Evidence: Served HTML contains both headings; the CSS hides desktop header and displays mobile header at the same breakpoint.
- Recommended solution: Prefer one responsive heading, or ensure each responsive section naming relationship points to the displayed heading without duplicate IDs.

### QA-06: Longer Copy May Overflow Fixed or Absolute Layouts

- Category: UI / responsive layout
- Severity: High
- Section: Hero, Our Story, Visit Us
- Status: Potential
- Steps: Render the requested viewport matrix, then test 200% zoom and longer text wrapping. Inspect clipped content and overlaps between story text, moments, and images.
- Expected: All copy and actions remain visible, with no overlapping or clipped content.
- Actual: Not visually verified. Desktop Hero is constrained to `height/min-height/max-height:100vh` with `overflow:hidden`. Desktop Visit Us similarly has a viewport height and clips overflow. Story copy is absolutely positioned inside a fixed-ratio canvas while the new paragraph is substantially longer.
- Evidence: `Hero.module.css:1`, `VisitUs.module.css:1`, `OurStory.module.css:9` and `:33`. These constraints establish risk, not proof of clipping at any specific viewport.
- Recommended solution: Reproduce first; if confirmed, let content determine minimum section height and provide responsive text flow rather than concealing overflow.

### QA-07: Mobile Hero Bypasses Optimization and Has Competing Preloads

- Category: Performance / image loading
- Severity: Medium
- Section: Hero
- Status: Potential download overhead; confirmed markup/asset facts
- Steps: Inspect `Hero.tsx:11-25`, served image preload links, and mobile Network panel at <=860px when a browser is available.
- Expected: Only the selected hero receives an appropriate preload and optimized responsive image delivery.
- Actual: Mobile `picture/source` requests a raw 535,538-byte PNG. The fallback Next Image remains priority/preloaded using the desktop image's srcset. The hidden-on-mobile drip also has an image preload. Actual redundant downloads were not measured, so no claim that all these resources necessarily download on mobile is made.
- Evidence: HTML preloads desktop hero, drip and logo; mobile source has a direct PNG URL with no width variants. Logo markup advertises 750/1920px sources although the mobile displayed height rule is 52px.
- Recommended solution: Measure requests and LCP on a production build; use art-direction-compatible optimized variants and breakpoint-aware preload behavior. Remove unnecessary priority hints where measurements support it.

### QA-08: Canonical and Social Share Metadata Are Absent

- Category: SEO / sharing
- Severity: Enhancement
- Section: Root layout
- Status: Potential improvement, not a rendering defect
- Steps: Inspect `src/app/layout.tsx:21` and the served head for canonical, Open Graph, and Twitter tags.
- Expected: If branded social sharing and canonical URL control are release requirements, explicit appropriate metadata exists.
- Actual: Title, description, theme color, default viewport, and icon are present. No canonical or Open Graph/Twitter card metadata was found. There is one h1, three logical section headings, and a duplicate responsive menu h2 in raw markup.
- Evidence: HTTP HTML and layout metadata object.
- Recommended solution: Add an approved production canonical URL and share title, description, and image after confirming the domain and desired preview. These are enhancements unless required by the release brief.

## Responsive Test Matrix

No viewport was rendered during this audit. The following matrix records exact CSS-derived facts and remaining tests, not browser passes.

| Requested viewport | Relevant source rules / derived facts | Rendered result | Issues to examine |
| --- | --- | --- | --- |
| 320 x 568 | Mobile menu/hero/menu cards; single-column visit; story paragraph 4.992px | Unable to verify | QA-02, QA-05, QA-06, QA-07; menu touch/focus/cropping |
| 375 x 812 | Same mobile rules; story paragraph 5.85px | Unable to verify | QA-02, QA-05, QA-06, QA-07 |
| 390 x 844 | Same mobile rules; story paragraph 8px | Unable to verify | QA-02, QA-05, QA-06, QA-07 |
| 430 x 932 | Same mobile rules; story paragraph 8px | Unable to verify | QA-02, QA-05, QA-06, QA-07 |
| 768 x 1024 | Mobile hero/nav/menu; single-column visit | Unable to verify | QA-05, QA-06, QA-07; product crop and large mobile canvas |
| 1024 x 768 | Desktop hero/nav/menu; two-column visit, viewport-height section | Unable to verify | QA-06; navbar/logo overlap and visit clipping |
| 1280 x 720 | Desktop rules; 720px fixed hero/visit heights | Unable to verify | QA-06; CTA and visit content visibility |
| 1440 x 900 | Desktop rules; 900px fixed hero/visit heights | Unable to verify | QA-06; text fit, whitespace, images |
| 1920 x 1080 | Desktop rules; 1080px fixed hero/visit heights | Unable to verify | QA-06; wide-screen balance and story scaling |

Root `overflow-x:hidden` can conceal overflow; its presence does not prove that responsive layouts fit. No horizontal-scroll pass is claimed. The mobile menu toggle is authored at 40 x 40px and social controls at 28-34px, above a 24px minimum in isolation but below a common 44px touch comfort recommendation; actual hitboxes/spacing are unverified and are not counted as confirmed target-size failures. Native focus outlines are not disabled in the inspected styles, but visible focus and keyboard order require browser testing.

## Performance Results

| Measurement | Result | Method / limitation |
| --- | --- | --- |
| Page HTTP status | 200 | Local dev server request |
| HTML length | 115,772 characters | Response string length, not compressed network bytes |
| Mobile hero PNG | 535,538 bytes | Local source file size |
| Square hero PNG | 2,319,442 bytes | Local file; not referenced by current hero source, so not counted as a page download |
| Favicon PNG | 587,947 bytes | Local icon source; 1254 x 1254 advertised by generated link |
| Story main source PNG | 3,108,615 bytes | Local source, not optimized browser transfer |
| Desktop hero source JPG | 675,879 bytes | Local source |
| Optimized desktop hero endpoint | 100,765 bytes, HTTP 200 | Explicit w=3840/q=75 HTTP request, not browser-selected transfer |
| Optimized logo endpoint | 29,862 bytes, HTTP 200 | Explicit w=1920/q=75 HTTP request |
| Optimized drip endpoint | 10,927 bytes, HTTP 200 | Explicit w=256/q=75 HTTP request |
| Optimized story main endpoint | 729,962 bytes, HTTP 200 | Explicit w=3840/q=75 HTTP request |
| Optimized menu crepe endpoint | 666,870 bytes, HTTP 200 | Explicit w=3840/q=75 HTTP request |
| LCP / INP / CLS | Unavailable | No functioning browser, no field data |
| Lighthouse performance / accessibility / best practices / SEO | Unavailable | No scores generated |
| Browser console errors / failed requests | Unavailable | No functioning browser; successful explicit asset requests are not a browser network trace |

Above-the-fold logo/desktop hero/drip have preload markup. Below-the-fold images use lazy loading. Font setup uses Next font with `display:swap`, but actual downloads, fallback behavior, and layout shifts were not measured. Duplicate desktop/mobile image markup is present, but hidden-image download behavior is not established by HTML inspection. Unused images in `public` are not assumed to download. Framer Motion is listed as a dependency; dependency presence alone does not establish bundle cost.

## Functional and Accessibility Evidence

- Internal fragment IDs `about`, `menu`, and `directions` exist. Link destination matching can be checked statically; actual scroll and focus behavior remains blocked.
- Native mobile disclosure has an accessible Menu label, but open/close, link selection, and dismissal were not exercised.
- Phone anchor uses `tel:+12168166399`; directions anchor has a Google Maps query for the stated address. No call or external action was triggered.
- Social links have accessible names and use `target="_blank"` with `rel="noopener noreferrer"`. Their final destinations were not validated.
- Hero has a single h1. Story/menu/location use h2. Main/footer/primary navigation landmarks exist; footer is nested inside main and landmark exposure should be checked with assistive technology.
- Informative image alt text is present; decorative drip has empty alt. Image clarity/cropping remains unverified except for the directly inspected crepe/pancake mismatch.
- Reduced-motion media rules shorten animations and transitions. Actual operating-system preference behavior remains untested.
- Root html/body have zero margin and padding with the existing pink canvas color. No safe-area inset CSS or `viewport-fit=cover` is present. The generated theme-color is `#cb6470`; this does not certify Safari browser chrome behavior.
- No real customer data was submitted. No irreversible action was taken.

## Prioritized Action Plan

### 1. Must Fix Before Release

1. Resolve QA-01 with an actual full-menu destination.
2. Make mobile story copy readable (QA-02).
3. Re-run all nine viewport and keyboard checks in a working browser, specifically confirming or dismissing QA-06 before approving release.

### 2. High-Priority Improvements

1. Correct contrast combinations in QA-03 and validate rendered contrast.
2. Use representative pancake photography (QA-04).
3. Align menu region naming with its visible heading (QA-05), then run axe and screen-reader checks.

### 3. Medium-Priority Improvements

1. Measure a production page's selected image requests, preload behavior, and LCP before adjusting QA-07.
2. Check external social/map links, touch targets, menu dismissal, focus visibility, zoom, and image crops.
3. Test Safari top UI on a physical iPhone with the deployed revision, recording browser/iOS version and tint settings.

### 4. Optional Enhancements

1. Add canonical and share metadata if relevant to launch goals (QA-08).
2. Generate a smaller optimized favicon while retainixx`xng approved artwork.
3. Consider a denser mobile story layout and larger comfortable touch targets after visual testing.

## Audit Limitations and Handoff

This report is an evidence-based partial audit, not an all-clear. Confirmed items were reproduced through current source, actual HTTP HTML, calculations, or direct source-image inspection. Potential items require browser reproduction. No production build, browser performance score, screenshot, viewport pass, physical-device pass, or external-link pass is implied. The development server was already running and was reused. Application changes require a separate user request.
