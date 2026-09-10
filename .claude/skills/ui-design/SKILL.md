---
name: ui-design
description: Design and improve modern web UI with strong visual hierarchy, consistency, spacing, typography, components, states, and polished interactions. Use when creating or redesigning interfaces.
---

# UI Design Skill

## Goal
Create polished, production-ready interfaces that are visually coherent, readable, responsive, accessible, and consistent with the project's existing brand.

## Workflow
1. Inspect the existing UI, components, styles, assets, and design tokens before changing anything.
2. Preserve existing brand identity unless the task explicitly requests a redesign.
3. Establish or reuse tokens for:
   - colors
   - typography
   - spacing
   - border radius
   - shadows
   - container widths
   - breakpoints
   - motion
4. Build hierarchy first: page title, supporting copy, primary action, secondary action, content.
5. Prefer reusable components over duplicated markup.
6. Design all important states: default, hover, focus, active, disabled, loading, empty, error, success.
7. Avoid visual clutter, excessive gradients, excessive shadows, arbitrary rounded corners, and inconsistent spacing.
8. Use semantic HTML and accessible interaction patterns.

## Visual Rules
- Use a clear 8px-based spacing rhythm when compatible with the project.
- Keep line lengths readable.
- Use font weights intentionally; do not overuse bold.
- Maintain strong text/background contrast.
- Keep primary CTAs visually dominant.
- Align related content to common grid/container edges.
- Use whitespace to create grouping and hierarchy.
- Avoid introducing new colors when existing tokens can be reused.

## React / Next.js
- Prefer reusable React components.
- Keep content/data separate from presentation when practical.
- Avoid unnecessary client components.
- Use Next.js Image for local/remote images when appropriate.
- Do not rewrite working architecture just to change visual styling.

## Before finishing
Verify visual consistency across the page and ensure no component introduces one-off styling that conflicts with the design system.
