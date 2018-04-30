# Clickable

The Clickable is a higher order presentational component, children get the necessary a11y attributes added.

Use this whenever you want to bind an action on click onto a HTML element. The component will add the appropiate role attribute, add a tabIndex, add a focus state and bind the action to `onClick` and `onKeyPress`. The `onKeyPress` has a wrapping function which filters out eveerything except the space key and enter key events. This prevents that the function gets triggered by accident.
