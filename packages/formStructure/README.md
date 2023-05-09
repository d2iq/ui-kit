# Form Structure

These guidelines and components help us maintain consistent spacing in our forms, and optimize our forms for scannability.

## Components

### FormMessage

The `FormMessage` component appears above all form content and it describes the state of the form below. This component is most commonly used to display an error message about the form's input.

See the `InfoBox` component's documentation for more information about top-level messaging.

### FormTitle

A `FormTitle` is a concise piece of text to help users understand the purpose of the form on the screen. This should be the largest heading on the form.

Form titles are not required if there is enough contextual information on the screen for users to understand what form they're looking at.

### FormSection

A `FormSection` is used to group a related set of fields in a form. Every form has at least one section, but more complex forms could have multiple sections to make the form easier to scan. Breaking a complex form into sections helps the user think about their task in digestible pieces instead of one overwhelming collection of fields.

#### FormSectionHeader

The `FormSectionHeader` is the top part of a form section that shows a title and an optional subtitle. The title should be as concise as possible, but the subtitle can be a longer block of text.

Form section headers are optional, but they're recommended for forms that have multiple sections.

#### FormSectionBody

The `FormSectionBody` is the primary part of the form section where we render a set of related fields. This component maintains consistent spacing between each child element.

##### FormSubSection

A `FormSubSection` is a group of related fields nested within a form section; like a section within a section. Subsections are commonly grouped together because each subsection is an item in a set.

#### FormSectionFooter

The `FormSectionFooter` component is the bottom part of a form section that may contain informational text and/or actions for the form section it belongs to.

### FormField

A `FormField` is a single field within a form, such as a text input or checkbox.

#### FormLabel

The `FormLabel` component is used to label a `FormField`. The label should be descriptive and concise.

#### FormInput

The `FormInput` component is used for text input fields. It accepts several attributes to define the type of input, validation rules, and error messages.

#### FormSelect

The `FormSelect` component is used for dropdown select fields. It accepts an array of options to populate the select menu.

#### FormCheckbox

The `FormCheckbox` component is used for checkbox input fields.

#### FormRadio

The `FormRadio` component is used for radio input fields.

#### FormToggle

The `FormToggle` component is used for toggle switch input fields.

#### FormTextArea

The `FormTextArea` component is used for multiline text input fields.

#### FormDate

The `FormDate` component is used for date input fields. It accepts several attributes to define the format of the date input.

#### FormTime

The `FormTime` component is used for time input fields. It accepts several attributes to define the format of the time input.

#### FormDateTime

The `FormDateTime` component is used for date and time input fields. It accepts several attributes to define the format of the date and time input.

#### FormFileUpload

The `FormFileUpload` component is used for file upload input fields.

#### FormButton

The `FormButton` component is used for buttons within a form, such as submit or cancel buttons.

#### FormLinkButton

The `FormLinkButton` component is used for link buttons within a form.
