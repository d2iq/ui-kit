# Clickable

The `Clickable` component is a higher-order presentational component that adds necessary accessibility attributes to its children. It should be used whenever you want to bind an action to an element's click event.

The component adds the appropriate role attribute, tabIndex, focus state, and binds the action to both onClick and onKeyDown events. The onKeyDown event has a wrapping function that filters out all keys except the space key and enter key events, preventing accidental triggering of the function.
