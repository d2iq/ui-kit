# Forms

## TextInput
`TextInput` is a component used to enter text for forms.

### Required Props

 - `id`: String unique identifier used for the form input element.
 - `type`: defaults to `text`, sets the `type` for the input element.
 - `appearance`: defaults to `TextInputAppearance.Standard`, see `TextInput Appearance & States`
 - `inputLabel`: Sets the contents for the `input` `label` element. see `TextInput inputLabel`
 
### TextInput Appearance & States

**Appearance**
 
 - **Standard**: The default `appearance` prop value is `TextInputAppearance.Standard`.
 - **Error**: The `appearance` prop can be set to `TextInputAppearance.Error`  to render the `TextInput` as invalid. This should be used if the current value has been confirmed invalid.
 - **Success**: The `appearance` prop can be set to `TextInputAppearance.Success` to render the `TextInput` as validated. This should be used if the current value has confirmed valid.

**States**
 
 - **Disabled**: setting the `disabled` prop to `true` will put the `TextInput` into a disabled state. The `TextInput` will be rendered with a grey background and will not be able to take input.
 
### TextInput `inputLabel`

The `inputLabel` prop can be given either a `string` or `ReactNode` to render as a label for the `TextInput` component.

The `showInputLabel` prop can be set to `false` to hide the input's label. This prop defaults to `true`. 

## TextInputWithIcon
`TextInputWithIcon` extends the `TextInput` component but adds two additional props, `iconStart` & `iconEnd`. These props can be provided a `ReactNode` to be rendered either at the start or end of the `TextInput` or both.
