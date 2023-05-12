# Toggle

The `ToggleContent` component allows users to switch between two different sections of content. This component is typically used to show or hide optional content, like a menu or an additional section of a form.

The component takes in two props, `contentOn` and `contentOff`, which are the contents to be displayed when the toggle is on and off respectively. The `tabIndex` prop can also be passed to the component to set the tabIndex of the underlying Clickable component.

When a user clicks on the `ToggleContent` component, the component's state changes and the content that is currently displayed is switched.

One notable feature of the `ToggleContent` component is that it prevents the toggle from toggling when the user is selecting text. This is done by checking if the user has selected any text before toggling the content.

The `ToggleContent` component provides a simple and flexible way to toggle between two contents with a click.
