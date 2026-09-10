---
name: ux-design
description: Analyze and improve web user experience, user flows, information architecture, interaction patterns, forms, navigation, feedback, and conversion paths.
---

# UX Design Skill

## Goal
Make interfaces easy to understand, predictable, efficient, and pleasant to use.

## UX Workflow
1. Identify the user's primary goal on the page.
2. Identify secondary goals without letting them compete with the primary goal.
3. Review the user flow from entry to completion.
4. Remove unnecessary steps and cognitive load.
5. Make navigation and actions predictable.
6. Provide clear feedback after user actions.
7. Design edge cases before considering the task complete.

## UX Principles
- One primary action per major section when possible.
- Labels should describe what will happen.
- Do not make users guess whether something is clickable.
- Keep important actions visible.
- Preserve user input when validation fails.
- Explain errors and how to recover.
- Use progressive disclosure for complex information.
- Prefer recognition over recall.
- Keep terminology consistent throughout the product.

## Required States
For interactive flows consider:
- loading
- success
- error
- empty
- disabled
- validation
- offline/network failure where relevant
- destructive confirmation where relevant

## Forms
- Group related fields.
- Use appropriate input types.
- Validate close to the field.
- Avoid unnecessary fields.
- Make required/optional status clear.
- Keep error messages actionable.

## Navigation
- Make current location obvious.
- Keep primary navigation stable.
- On mobile, use an interaction pattern users recognize.
- Avoid hiding critical actions behind unnecessary menus.

## Output
When auditing UX, report:
1. Problem
2. User impact
3. Severity
4. Recommended change
5. Implementation location
