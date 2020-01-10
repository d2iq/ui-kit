# Form structure

These guidlines and components help us maintain consistent spacing in our forms, and optimize our forms for scannability.

## Components

### FormMessage
The `FormMessage` appears above all form content and it describes the state of the form below. This component is most commonly used to display an error message about the form's input.

See the `InfoBox` component's documentation for more information about top-level messaging.

### FormTitle
A `FormTitle` is a concise piece of text to help users understand the form on the screen. This should be the largest heading on the form.

Form titles are not required if there is enough contextual information on the screen for users to understand what form they're looking at.

### FormSection
A `FormSection` is used to group a related set of fields in a form. Every form has at least 1 section, but more complex forms could have multiple sections to make the form easier to scan.

#### FormSectionHeader
The `FormSectionHeader` is the top part of a form section that shows a title and an optional subtitle. The title should be as concise as possible, but the subtitle can be a longer block of text.

Form section headers are optional, but they're recommended for forms that have multiple sections.

#### FormSectionBody
The `FormSectionBody` is the primary part of the form section where we render a set of related fields. This component maintains consistent spacing between each child element.

##### FormSubSection
A `FormSubSection` is a group of related fields nested within a form section; like a section within a section. Subsections are commonly grouped together because each subsection is an item in a set.

