# Modal

Modals are streamlined, but flexible, dialog prompts with the minimum required functionality and smart defaults.

We use modals for creating and editing new objects as well as alert dialogs.

## Modal sizes

Designer/Developer can choose whether to use a large or small modal depending on the content.

If the modal is complex and requires more than 4 navigation tabs then consider switching this to a full screen form.

## FullscreenModal vs FullscreenView

The FullscreenModal component is a layer that appears on top of all page content.
The FullscreenView component renders in the normal document flow.

The FullscreenModal uses the FullscreenView component, so the designs will always be in sync. The FullscreenView should be used when we want the same layout and style as a FullscreenModal, but we don't want any content to be rendered underneath.


## Closing modals

Modals can be dismissed by:

- Clicking outside the modal on the overlay
- Clicking the “x” action top right of the modal,
- Clicking any secondary action that indicates closing e.g. “Close” or “Cancel”
- Pressing the ESC key

## Do's and Dont's

### Do

Disable primary actions until user can proceed.
Use `DangerButton` to indicate destructive actions.
Focus on the first input field.
Bind the return key to the primary action.
Use primary action labels that enforce what taking the action does.

### Don't

Display an error message at the bottom of the modal body.
Center align text in the modal body.
Have sidebars in modals (use the tabbed navigation).
Use labels that are ambiguous at first glance e.g. use “Delete user” instead of “Are you sure?" and “Delete”.
Put a dialog modal inside of a dialog modal.
