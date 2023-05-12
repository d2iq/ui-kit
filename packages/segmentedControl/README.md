# SegmentedControl

The `SegmentedControl` is a group of buttons that represent a list of options users can select from. Only one option can be selected at a time.

A SegmentedControl can be a good alternative to a dropdown or select input because it requires fewer interactions to make a selection. It can also be a good alternative to a group of radio buttons when there are space limitations or if form controls look visually awkward.

## Segment Tooltips

Each segmented control button can also render a tooltip when the user hovers. Show tooltip content to provide "nice-to-have" information about a segment button.

## Icons in Button Labels

Button labels can contain icons. When using an icon in a button label, the default icon size to use is `iconSizeXs`.

When an icon is the only button label content, be sure to provide text content to keep the buttons screen-reader accessible. If you're using the `Icon` component to render the icon, this is as simple as passing a string to the `ariaLabel` prop. It's also recommended to show a tooltip when an icon is the only button label content.

## Best Practices

### Do

- Limit the number of segments to 5 or less. If you need more than 5 segments, consider using a group of radio buttons or a SelectInput.
- Keep the content in each segment as consistent as possible. For example, all segments should only contain text or all segments should contain icons.

### Don't

- Use a SegmentedControl for navigation instead of Tabs.
- Put long strings in the segments.
- Rely completely on tooltip content to convey what a segment button does.
