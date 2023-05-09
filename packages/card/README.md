# Card

Cards are used to visually group related content, making it easier for users to scan a view.

## Aspect Ratio

By default, a card will resize to fit its content. However, sometimes we want a card's size to obey a specific aspect ratio. When an aspect ratio is defined, the card's width and height will always follow that proportion, unless the content is too high, in which case the card's height will expand.

## ButtonCard

A `ButtonCard` component is used to render a card that a user can interact with. It has all of the same properties as a `Card` component, but can also appear in an "on", "off", or "disabled" state.

The `ButtonCard` should not contain other interactive content such as links or buttons.

## LinkCard

A `LinkCard` component is also interactive like a `ButtonCard`, but it's intended to be used when clicking the card links to another page or URL. It has all of the same properties as a `Card` component.

Please note that the `ButtonCard` and `LinkCard` components should not be used if you just need a container without any interactive functionality. In that case, use the `Card` component.
