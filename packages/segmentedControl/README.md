# SegmentedControl

A segmented control is group of two or more buttons that represent a list of options users can select from. Only one option can be selected at the same time.

A segmented control can be a good alternative to a dropdown or a select input because it requires less interactions to make a selection. They can be a good alternative to a group of radio buttons when there are space limitations or if form controls look visually awkward.

## Segment tooltips
Each segmented control button can also render a tooltip when the user hovers. Show tooltip content to show "nice-to-have" information about a segment button.

## Icons in button labels
Button labels can contain icons. When using an icon in a button label, the default icon size to use is `iconSizeXs`.

When an icon is the only button label content, be sure to provide text content to keep the buttons screenreader accessible. If you're using the `Icon` component to render the icon, this is as simple as passing a string to the `ariaLabel` prop. It's also recommended to show a tooltip when an icon is the only button label content.

## Do's and Dont's

### Do
- Limit the number of segments to 5 or less. If you find yourself needing more than 5 segments, consider a group of radio buttons or a SelectInput
- Keep the content in each segment consistent as much as possible. For example, all segments should just contain text or all segments should just contain icons

### Don't
- Use a segmented control for navigation instead of Tabs
- Put long strings in the segments
- Rely completely on the tooltip content to convey what a segment button does
