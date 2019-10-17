# TableView
The `TableView` component is a helper for accurately create a layout that contains a `Table` component.

## Why does this need to exist?
Our `Table` component uses the [AutoSizer](https://github.com/bvaughn/react-virtualized/blob/master/docs/usingAutoSizer.md) component from the [react-virtualized](https://github.com/bvaughn/react-virtualized/) library. This requires the parent DOM node to have the correct height for our table's height to be autosized to fit (more info in [react-virtualized docs](https://github.com/bvaughn/react-virtualized/blob/master/docs/usingAutoSizer.md#why-is-my-autosizer-setting-a-height-of-0)).

The `TableView` component uses flexbox to introduce a reusable layout pattern to ensure that tables:
- fill their available height
- do not create unnecessary vertical page scrolling
- have a minimum height so they don't disappear on very short viewports

## Components
### TableView
Creates a flex [formatting context](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flow_Layout/Intro_to_formatting_contexts). This ensures the `TableViewBody` component fills the available height.

The height of a `TableView`'s parent container will dictate the height of the `TableView`.

### TableViewHeader
Contains the content that appears above the table. It's height depends on it's children.

### TableViewBody
Contains the table, and grows to fill up the available height inside of `TableView` after factoring in the height of the `TableViewHeader` and `TableViewFooter`.
This component can be used to specify a minimum height for the table, measured in number of rows.
For best results, only pass 1 child to this element.

### TableViewFooter
Contains the content that appears below the table. It's height depends on it's children.
