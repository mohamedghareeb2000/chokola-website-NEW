---
name: accessibility
description: Audit and improve web accessibility using semantic HTML, keyboard navigation, focus management, contrast, labels, screen-reader support, and WCAG-oriented practices.
---

# Accessibility Skill

## Goal
Make interfaces usable by keyboard users, screen readers, users with low vision, and users with different interaction needs.

## Semantic HTML
Prefer:
- header
- nav
- main
- section
- article
- footer
- button
- a
- form
- label

Do not use clickable `div` elements when a button or link is appropriate.

## Keyboard
Verify:
- all interactive elements are reachable
- focus is visible
- focus order is logical
- dialogs trap/restore focus appropriately
- Escape closes dismissible overlays when appropriate
- no keyboard traps exist

## Forms
- Every input needs a meaningful label.
- Associate errors with fields.
- Do not rely on placeholder text as the only label.
- Use appropriate autocomplete/input types where useful.

## Images
- Informative images need useful alt text.
- Decorative images should not create unnecessary screen-reader noise.
- Do not put essential information only inside images.

## Contrast
Check text and UI controls for sufficient contrast.
Never communicate meaning through color alone.

## Motion
Respect `prefers-reduced-motion`.
Avoid motion that is unnecessary, distracting, or difficult to stop.

## ARIA
Use native semantic HTML first.
Use ARIA only when semantics cannot provide the required behavior.
Never add ARIA attributes blindly.

## Audit Output
Report:
- issue
- affected component
- severity
- recommended fix
- whether the fix is visual, semantic, or behavioral
