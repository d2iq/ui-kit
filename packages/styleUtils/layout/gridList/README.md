# GridList

The `GridList` component is a customizable list that displays its items in a grid. This is generally used for block-level elements, such as cards.

## Notes

- The grid-column-template property sets the width of the grid columns. It can be used to create columns of equal width, or to specify a different width for each column.
  The getResponsiveSpacingStyle function returns a CSS property that sets the gap between the grid items. It takes a string that specifies the CSS property name (e.g. "grid-gap") and a value that specifies the size of the gap.
- The listReset style resets the default list styles (e.g. margin and padding) that are applied to HTML list elements.
  The place-items property is used to center grid items vertically and horizontally within their grid cell. If centerItems is true, the value of place-items is set to "center", otherwise it is set to "normal".
- gutterSize is size of the space (gap) between each list item. Can be set for all viewport sizes, or configured to have different values at different viewport width breakpoints. The default size is set to medium ("m" = 16px).

## Grid vs Flexbox

Grid is better for two-dimensional layout, while Flexbox is better for one-dimensional layout. If you need to control both rows and columns of items, Grid is likely the better choice.

Grid provides a more precise control of the layout than Flexbox. It allows you to specify exact row and column sizes, gaps between elements, and more. If you need precise control over the layout, Grid is likely the better choice.

Grid is better for layouts that are not linear. If you need to create complex layouts that involve elements flowing in multiple directions or with varying sizes, Grid is likely the better choice.

Flexbox is better for layouts that involve changing the order of elements or aligning items in a single direction. If you need to reorder or align items within a single row or column, Flexbox is likely the better choice.
