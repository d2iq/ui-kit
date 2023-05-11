# InlineBorderedItems

The `InlineBorderedItems` component is used to group related elements, separated by a border. This is typically used in a header to help provide a summary of some data.

## Gutter Size

The default medium spacing size between the items will work for almost all cases. If the items appear too close together or too far away, the `gutterSize` prop can be used to change the size of the spacing between items. For example, if the items are visually heavy, they may appear cramped and need a larger `gutterSize`.

## Best Practices

### Do

- Limit the number of items: to keep the information easy to parse, limit the number of items in the component.
- Keep the content of each item as short as possible: it is not meant for displaying long strings of text or complex visual elements.

### Don't

- Avoid putting visually complex elements in the InlineBorderedItems. Instead, use this component for displaying simple and straightforward information.
