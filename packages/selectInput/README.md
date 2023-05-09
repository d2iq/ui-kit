# SelectInput

A SelectInput component provides a way for users to choose one option from a set of options presented in a dropdown list.

## Best Practices

- **Do** use a SelectInput when there are more than 4 options to select from, but less than 30 options. If there are less than or equal to 4 options, consider using radio buttons instead. If there are more than 30 options, consider using a `Typeahead` component that filters options as the user types.
- **Don't** use a SelectInput when you want the user to manually input an option. In such cases, use a `TextInput` or a `Typeahead` instead.
- **Avoid** using a SelectInput outside of forms. Instead, use a dropdown when the SelectInput is not being used as part of a form.

## Placeholder Text

Choose the most common option as the default value for the SelectInput. If there is no logical default, then use a placeholder text such as "Select..." to prompt the user to choose an option.

## Hint Text

If the selection requires more explanation, use hint text below the field to provide additional context for the user.
