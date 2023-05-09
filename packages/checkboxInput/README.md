# CheckboxInput

CheckboxInputs are used to make multiple selections or to toggle something on or off.

When we need a checkbox to render as neither checked nor unchecked, we can use an indeterminate checkbox via the `indeterminate` prop. This situation usually only occurs when a checkbox is used to toggle related checkboxes on or off, such as the header checkbox in a Table component.

CheckboxInputs typically appear as a list of choices but may also appear on their own. An alternative option to render a list of selectable options is the `ToggleList` component.

Do not use a CheckboxInput if a user can only make one selection from a list of options. In that case, consider using a radio button or a dropdown instead.
