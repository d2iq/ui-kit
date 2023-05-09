# Modal

Modals are streamlined, but flexible, dialog prompts with the minimum required functionality and smart defaults.

We use modals for creating, editing, and deleting objects as well as alert dialogs.

## Modal Sizes

Opt for a large or small modal depending on the amount of content to display.

### Small Dialog Modal

Small dialog modals are mostly used for alerts. For example, to confirm you want to continue with an action.

Alerts can require some small interaction from the user, but should be kept as simple as possible. For example, requiring the user to type the name of a cluster to confirm it should be deleted.

### Large Dialog Modal

Large dialog modals are used when the user would benefit from seeing the content underlying the content of the modal. These are generally used for content-heavy alerts. They can also be used for simple forms.

### Fullscreen Modal

Fullscreen modals are used for complex interactions such as large forms. They let the user focus on the complexity and importance of the modal content by covering the entire viewport.

Fullscreen modals are used for:

- Forms that affect high-priority features (Kommander Projects, and Kommander Clusters)
- Forms that have many input fields
- Content that requires navigation tabs

## FullscreenModal vs FullscreenView

The FullscreenModal component is a layer that appears on top of all page content.
The FullscreenView component renders in the normal document flow.

The FullscreenModal uses the FullscreenView component, so the designs will always be in sync. The FullscreenView should be used when we want the same layout and style as a FullscreenModal, but we don't want any content to be rendered underneath.

## Closing Modals

Modals can be dismissed by:

- Clicking outside the modal on the overlay
- Clicking the “x” action top right of the modal
- Clicking any secondary action that indicates closing e.g. “Close” or “Cancel”
- Pressing the ESC key

## Best Practices

### Do

- Disable primary actions until user can proceed
- Use `DangerButton` to indicate destructive actions
- Focus on the first input field
- Bind the return key to the primary action
- Use primary action labels that enforce what taking the action does

### Don't

- Display an error message at the bottom of the modal body
- Center align text in the modal body
- Have sidebars in modals (use the tabbed navigation)
- Use labels that are ambiguous at first glance e.g. use “Delete user” instead of “Are you sure?" and “Delete”
- Put a dialog modal inside of a dialog modal
