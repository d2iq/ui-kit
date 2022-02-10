# InlineBorderedItems

The `InlineBorderedItems` component is used to group related elements, separated by a border. This is typically used in a header to help provide a summary of some data.

## Gutter size

The default spacing between the items will work for almost all cases. If the items appear too close together or too far away, the `gutterSize` prop can be used to change the size of the spacing between items. For example, if the items are visually heavy, they may appear cramped and need a larger `gutterSize`.

## Do's and Dont's

### Do

- Limit the number of items in the component to keep the information easy to parse
- Keep the content of each item as short as possible

### Don't

- Put visually complex elements in the `InlineBorderedItems`
