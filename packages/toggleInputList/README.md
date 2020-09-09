# ToggleInputList

Renders a list of related options a user can choose from. Currently, it only renders a list of `CheckboxInput`s, but radio inputs and toggle switches will be supported once they are added as components in ui-kit.

Handles the display of hint text about the set of options as well as error validation text.

Do not use ToggleInputList to render a very long list of options - use a `SelectInput`, `Typeahead`, or `DropdownMenu` instead. A `Typeahead` that filters options as a user types would be the ideal component to use if there are greater than 30 options.
