# Tooltip

Tooltips provide additional information or clarification about a UI element when it's hovered over or has focus. Tooltips should make use of consistent patterns, for example the style of the info icon used to trigger them.

## Best Practices

### Do

- Use Tooltips to show additional information when hovering or focusing a UI element, particularly if it's just an icon with no accompanying text.
- Use Tooltips to explain why a UI element is disabled.
- Keep the Tooltip content brief and concise.

### Don't

- Use Tooltips to display critical information that's necessary for the user to complete a task. Ideally, Tooltips should only be used for "nice-to-know" information.
- Rely heavily on Tooltips to help the user complete their task. If Tooltips are necessary for the user to understand the interface, it's a sign that the design needs to be more clear.

### Usage within Forms

- Use hint text below the field to provide information about what input is expected.
- Use a Tooltip to provide additional explanation about the field. Usually, Tooltips are triggered in form fields by an icon in the field's label.

### Using Icons with Tooltips

In the UI we use two distinct icons for tooltips: ( i ) and ( ? ). We have defined the context of each icon, describing when to use them to ensure clarity and consistency in their usage:

( i ) Icon:
The ( i ) icon is utilized to provide users with a definition of a specific term. These icons are often associated with information includes additional details, explanations, or contextual information about a specific element, feature, or term. This aids in enhancing user comprehension by offering explanations directly within the context. This is the default for the `TooltipIcon` component as it is most commonly used.

( ? ) Icon:
The ( ? ) icon serves the purpose of offering supplementary information that can guide users in making informed decisions. This information goes beyond simple definitions. It can be placed next to a complex feature or help with feature discoverability, offering users the option to learn more about it.
