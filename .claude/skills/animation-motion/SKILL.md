---
name: animation-motion
description: Design and implement tasteful web animation and micro-interactions, especially with Framer Motion, CSS transitions, and reduced-motion accessibility.
---

# Animation & Motion Skill

## Goal
Use motion to communicate hierarchy, state, continuity, and feedback—not as decoration everywhere.

## Principles
- Motion should have a purpose.
- Keep interactions fast and subtle.
- Prefer transform and opacity for performant animations.
- Avoid animating layout-heavy properties unnecessarily.
- Use consistent easing and duration.
- Avoid excessive animation on initial page load.

## Recommended Patterns
Use motion for:
- menu open/close
- modal/dialog transitions
- hover feedback
- button press feedback
- section reveal when appropriate
- list insertion/removal
- tab transitions
- loading indicators

## Framer Motion
- Reuse variants when multiple components share behavior.
- Avoid duplicating large animation objects.
- Keep animations predictable.
- Do not introduce Framer Motion into simple elements when CSS is enough.

## Accessibility
Support `prefers-reduced-motion`.
When reduced motion is enabled, minimize or remove non-essential movement.

## Performance
Avoid:
- continuous expensive animations
- unnecessary scroll listeners
- huge numbers of animated DOM nodes
- layout animations everywhere

## Visual Direction
For premium interfaces, prefer subtle opacity/translate/scale transitions over dramatic effects unless the brand explicitly calls for them.
