---
name: ux-audit
description: Conduct a structured UX audit of a web product or page, prioritizing usability, navigation, content clarity, interaction quality, accessibility, responsiveness, and conversion issues.
---

# UX Audit Skill

## Goal
Find the highest-impact UX problems and turn them into actionable implementation tasks.

## Audit Areas

### 1. First Impression
- Is the purpose clear immediately?
- Is the primary action obvious?
- Is the visual hierarchy understandable?

### 2. Navigation
- Can users predict where links lead?
- Is current location clear?
- Is mobile navigation usable?

### 3. Content
- Is content scannable?
- Are headings meaningful?
- Is terminology consistent?
- Are important details easy to find?

### 4. Interaction
- Are controls discoverable?
- Is feedback immediate?
- Are destructive actions protected?
- Are loading and error states handled?

### 5. Forms
- Are fields necessary?
- Are labels clear?
- Are validation errors actionable?
- Is user input preserved?

### 6. Responsive UX
- Does the experience remain usable on small screens?
- Are touch targets appropriate?
- Does content order make sense on mobile?
- Are important CTAs still easy to reach?

### 7. Accessibility
- Keyboard access
- visible focus
- semantic structure
- labels
- contrast
- reduced motion

### 8. Conversion
For transactional or marketing pages:
- Is the value proposition clear?
- Are CTAs placed logically?
- Is friction minimized?
- Are trust signals present?

## Severity
Classify findings:
- Critical: blocks task completion or causes serious usability failure.
- High: major friction or confusion.
- Medium: noticeable usability issue.
- Low: polish or minor inconsistency.

## Output Format
Return:
| Severity | Issue | User Impact | Recommendation | Implementation Area |
|---|---|---|---|---|

Then provide the top 3 priorities and explain why they should be fixed first.

## Important
Do not recommend changes merely because they are fashionable. Recommendations must improve usability, clarity, accessibility, consistency, or the product goal.
