# ToggleInputList

Renders a list of related options a user can choose from.It can render either a list of checkbox inputs, or a list of radio inputs if `isRadioGroup` is set to true.

Handles the display of hint text about the set of options as well as error validation text.

Do not use ToggleInputList to render a very long list of options - use a `SelectInput`, `Typeahead`, or `DropdownMenu` instead. A `Typeahead` that filters options as a user types would be the ideal component to use if there are greater than 30 options.
