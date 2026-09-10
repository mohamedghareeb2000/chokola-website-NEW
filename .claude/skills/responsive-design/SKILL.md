---
name: responsive-design
description: Build and audit responsive web layouts across mobile, tablet, desktop, large desktop, and unusual viewport sizes using mobile-first and fluid design principles.
---

# Responsive Design Skill

## Goal
Ensure the interface remains usable and visually intentional across viewport sizes.

## Required Viewports
Reason about at least:
- 320px
- 375px
- 390px
- 430px
- 768px
- 1024px
- 1280px
- 1440px
- 1920px
- 2560px

Do not assume only three breakpoints are enough.

## Rules
- Prefer mobile-first CSS.
- Use fluid sizing where appropriate.
- Avoid fixed widths that cause overflow.
- Use max-width containers for large screens.
- Let grids adapt naturally.
- Prevent horizontal scrolling unless explicitly intended.
- Keep touch targets comfortably usable.
- Never rely on hover as the only way to access functionality.
- Test long text, short text, large images, and missing images.
- Consider landscape mobile layouts.

## Typography
Prefer fluid typography when appropriate, for example `clamp()`, while preserving readable minimum and maximum sizes.

## Layout
Use:
- CSS Grid for structured layouts.
- Flexbox for one-dimensional alignment.
- Container queries when they materially improve component responsiveness.
- `minmax()`, `auto-fit`, and `auto-fill` where appropriate.

## Images
- Use responsive image sizing.
- Preserve intended focal points.
- Use object-fit/object-position deliberately.
- Avoid stretched images.

## Navigation
Verify:
- desktop navigation
- tablet behavior
- mobile menu
- menu closing behavior
- focus behavior
- long navigation labels

## Audit Checklist
Check:
- overflow
- clipping
- broken grids
- unreadable text
- oversized hero sections
- CTA placement
- inconsistent spacing
- awkward card wrapping
- viewport-height issues
- fixed-position elements covering content

Do not solve every problem by adding more breakpoints. Prefer flexible layout rules.
