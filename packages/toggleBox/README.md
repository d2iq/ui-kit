# ToggleBox

## ToggleBox

A `ToggleBox` component is used to indicate whether a group of content is in an "on" or "off" state. This component renders as a clickable box that toggles between states.

## ToggleBoxGroup

The `ToggleBoxGroup` component is a higher-level component that provides an easier way to render a group of related `ToggleBox` components, and react to the selection of a `ToggleBox`. The `ToggleBoxGroup` component takes an array of options, each of which contains a label and a value, and renders a `ToggleBox` for each option.

The `ToggleBoxGroup` component handles the state changes of the `ToggleBox` components, and provides an `onToggle` callback that is invoked when a `ToggleBox` is selected. The `onToggle` callback receives the selected value as an argument, allowing the parent component to update its state based on the selection.
