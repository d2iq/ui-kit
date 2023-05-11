# Message Panel

An message panel is used in place of a view's usual content when something is preventing the usual content from appearing. For example, empty states and error states.

## Parts

### Headline

The headline should concisely explain why the user is not seeing the expected content or what action/s need to be taken to see the expected content.

### Body

Body text adds more details or context to what the headline says.

### Primary Action

A primary action is the most important action for users to take. This action should trigger the next logical step a user can take to remedy whatever problem has gotten the app into this state. The copy for these buttons should be clear enough that the user can predict what's going to happen when they click this button—e.g.: "Create Cluster". This action should always use the `PrimaryButton` component.

### Secondary Action

An optional secondary action can be displayed if there is an alternate path to remedy whatever problem has gotten the app into this state, or to link off to contextual information like documentation. A secondary action should not appear without a primary action. This action should always use the `SecondaryButton` component.

## Types of MessagePanels

### Default

This is the `MessagePanel` component. The primary focus is the text, and it's not meant to be visually engaging. This is typically used when the content replaced by the message panel is not the only thing on the page and there are multiple actions available on the page. For example, aregion within a tab that is empty.

### With an Illustration

This is the `MessagePanelWithGraphic` component. This is used when the content replaced by the message panel takes up most of the screen space and is the primary focus. This style of message panel typically explains how to activate a feature and what benefit that feature has for the user.

## Spacing

There is no prescribed spacing around an message panel, but it should not be touching or overlapping other elements on the page. For example: the message panel should not be touching the bottom border of a `PageHeader`.
When an message panel is being rendered in parent element that does not have it's own spacing, wrap the message panel in the `MessagePanelWrapper` component to provide standard spacing around the message panel component.

## Best Practices

### Do

- Use concise language to ensure the copy in the message panel is scannable
- Use verbs for the copy in the the primary or secondary action button
- Try to make the illustration in the `MessagePanelWithGraphic` as relevant to the content as possible

### Don't

- Use multiple `MessagePanelWithGraphic` components on the same screen
- Use a secondary action without a primary action
- Write a lot of copy for a headline
