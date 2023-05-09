# Links

## Link

A `Link` component renders a styled anchor tag that typically appears inline in a block of text.

When there is a call-to-action that is a link, use one of the button components instead such as the `SecondaryButton`, and pass the `url` prop.

## ResetLink

The `ResetLink` component allows for extending link behavior to elements, without them needing to be styled like a link. For example, sidebar navigation items (see the `SidebarItem` component).

## UnstyledLink

The `UnstyledLink` component renders an anchor tag without any predefined styles or decorations. It can be used to create links that need to be styled according to a particular design system or for cases where a link needs to appear as plain text, such as in a navigation menu or within a block of text. The component utilizes the `LinkComponentContext` context to allow for `UIKitProvider` link delegation, enabling the use of custom link components within the application.
