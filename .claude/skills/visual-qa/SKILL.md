---
name: visual-qa
description: Perform visual quality assurance on web interfaces, identifying layout inconsistencies, spacing problems, typography issues, responsive bugs, component drift, and implementation mismatches.
---

# Visual QA Skill

## Goal
Catch visual defects before considering a UI task complete.

## QA Workflow
1. Inspect the complete page.
2. Compare implementation against the project's design system or reference design.
3. Check desktop, tablet, and mobile.
4. Check component consistency.
5. Check interaction states.
6. Fix root causes rather than patching individual symptoms.
7. Re-check after changes.

## Inspect
- alignment
- spacing
- typography
- colors
- borders
- radius
- shadows
- icon sizing
- image cropping
- container width
- section height
- button dimensions
- card consistency
- navbar behavior
- footer alignment
- overflow

## Responsive QA
At minimum reason about:
320, 375, 390, 430, 768, 1024, 1280, 1440, 1920, 2560px.

## State QA
Check:
- hover
- focus
- active
- disabled
- loading
- error
- empty
- selected
- open/closed states

## Code Quality
If multiple visual issues originate from duplicated styles, consolidate them into shared components/tokens.

## Completion Criteria
Do not declare UI complete if there are obvious:
- horizontal scrollbars
- overlapping elements
- clipped content
- unreadable text
- broken mobile layouts
- inconsistent component variants
- missing focus states
- missing loading/error/empty states where required
