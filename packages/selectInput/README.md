# SelectInput

A select input gives the user a way to pick one option out from a set of options.

Do: Use a select input when there are more than 4 options to select from, but less than 30 options to select from. If there are less than or equal to 4 options then use radio buttons. If there are greater than 30 options to select from, use a `Typeahead` that filters options as a user types.
Don’t: Use a select input when you want the user to manually input an option. Use a `TextInput` or a `Typeahead`.
Avoid using select input outside of forms. Use a dropdown instead of a select input when outside of forms.

## Placeholder text

Choose the most common option as the logical default for the select input.
If there is no logical default, then the placeholder text should say “Select…”

## Hint text

If the selection requires more explanation, use hint text below the field.
