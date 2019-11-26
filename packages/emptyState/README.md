# Empty State
An empty state used is to communicate to a user why the expected content is not available and what they can do next.

## Parts

### Headline
The headline should concisely explain why the user is seeing an empty state. The headline copy generally conveys one of two pieces of information: why there is no content, or what action/s need to be taken.

### Body
Body text adds more details or context to what the headline says.

### Primary action
A primary action is the most important action for users to take. This action should trigger the next logical step a user can take to remedy the empty state. The copy for these buttons should be clear enough that the user can predict what's going to happen when they click this button—e.g.: "Create Cluster". This action should always use the `PrimaryButton` component.

### Secondary action
An optional secondary action can be displayed if there is an alternate path to remedy the empty state, or to link off to contextual information like documentation. A secondary action should not appear without a primary action. This action should always use the `SecondaryButton` component.

## Kinds of empty states

### Default
This is the `EmptyState` component. The primary focus is the text, and it's not meant to be visually engaging. This is typically used when empty state is not the only thing on the page and there are multiple actions available on the page. E.g. a region within a tab that is empty

### With an illustration
This is the `EmptyStateWithGraphic` component. This is used when an empty state takes up most of the screen space and is the primary focus. This style of empty state typically explains how to activate a feature and what benefit that feature has for the user.

## Spacing around an empty state
There is no prescribed spacing around an empty state, but it should not be touching or overlapping other elements on the page. For example: the empty state should not be touching the bottom broder of a `PageHeader`.
When an empty state is being rendered in parent element that does not have it's own spacing, wrap the empty state in the `EmptyStateWrapper` component to provide standard spacing around the empty state component.

## Do's and Dont's

### Do
- Use concise language to ensure the copy in the empty state is scannable
- Use verbs for the copy in the the primary or secondary action button
- Try to make the illustration in the `EmptyStateWithGraphic` as relevant to the content as possible

### Don't
- Use multiple `EmptyStateWithGraphic` components on the same screen
- Use a secondary action without a primary action
- Write a lot of copy for a headline
