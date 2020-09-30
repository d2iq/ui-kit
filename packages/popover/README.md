# Popover

A Popover toggles an overlay with content. Unlike a DropdownMenu, a Popover is used to render dropdown content that is not in the format of a list of actions. It's similar to a modal dialog, except it does not take over the entire screen, and it is positioned in proximity to the button that was used to toggle it open.

## Do's and Dont's

### Do

- Avoid putting a lot of content inside a Popover
- Use a Popover to let a user access additional content without cluttering the screen
- Follow our standard button labeling guidelines for the button that toggles the Popover

### Don't

- Put multi-step flows in a Popover. Consider using a SmallDialogModal or LargeDialogModal instead
- Use a Popover to render a list of actions. Consider using a DropdownMenu instead
- Use an icon without text as a toggle label unless it is an icon we use in other places to toggle a dropdown overlay.
