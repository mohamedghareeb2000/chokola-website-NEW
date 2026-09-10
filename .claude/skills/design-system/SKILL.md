---
name: design-system
description: Create, maintain, and enforce a scalable web design system including design tokens, typography, colors, spacing, components, states, and responsive rules.
---

# Design System Skill

## Goal
Keep the entire product visually consistent and make future UI changes predictable.

## Token Categories
Define or reuse:
- colors
- typography
- spacing
- sizing
- radii
- borders
- shadows
- containers
- breakpoints
- z-index layers
- motion durations/easing

## Color System
Prefer semantic tokens such as:
- background
- foreground
- muted
- primary
- primary-foreground
- secondary
- accent
- border
- destructive
- success
- warning

Do not scatter arbitrary hex values through components.

## Typography
Define:
- font family
- display sizes
- heading sizes
- body sizes
- labels
- captions
- font weights
- line heights
- letter spacing

Maintain hierarchy rather than choosing sizes independently for every component.

## Components
Prioritize reusable primitives:
- Button
- Input
- Select
- Card
- Badge
- Modal/Dialog
- Navigation
- Section
- Container
- FormField
- Loading state
- Empty state
- Error state

## Component States
Every interactive component should consider:
default, hover, focus-visible, active, disabled, loading, error, and selected where applicable.

## Enforcement
Before adding new styling:
1. Search for an existing token/component.
2. Reuse it if possible.
3. Add a new token only when there is a real design requirement.
4. Avoid one-off values that create visual drift.

## Tailwind
Prefer Tailwind tokens/theme configuration and reusable component classes over repeated arbitrary values.
