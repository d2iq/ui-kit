# Clickable

The Clickable is a higher order presentational component, children get the necessary a11y attributes added.

Use this whenever you want to bind an action on click onto a HTML element. The component will add the appropriate role attribute, add a tabIndex, add a focus state and bind the action to `onClick` and `onKeyDown`. The `onKeyDown` has a wrapping function which filters out everything except the space key and enter key events. This prevents that the function gets triggered by accident.
