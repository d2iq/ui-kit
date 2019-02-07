# CheckboxInput

CheckboxInputs are used to make a range of selections, or to toggle something on or off.

Sometimes we need a checkbox to render as neither checked or unchecked. In this case, we can use an indeterminate checkbox via the `indeterminate` prop. This situation typically only happens when a checkbox is used to toggle related checkboxes on or off - like the header checkbox in the CheckboxTable component.

CheckboxInputs typically appear as a list of choices, but may also appear on their own. This means we usually render a list of options using the `ToggleList` component.

Do not use a CheckboxInput if a user can only make one selection from a list of options
