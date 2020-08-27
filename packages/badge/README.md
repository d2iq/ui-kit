# Badges

Badges are a lightweight method of annotating or labeling content. The font-size and line-height of a badge inherit from that of it’s parent’s properties.

## Badge Appearances

You may wish to display more than the single badge type, either to create separation in the importance of various actions or to communicate the state of an action or form badge states make this super easy.

| State     | Purpose                                                                                                       |
| --------- | ------------------------------------------------------------------------------------------------------------- |
| Default   |                                                                                                               |
| Success   | Represents something positive.                                                                                |
| Primary   | Represents something more significant than a default.                                                         |
| Danger    | Represents something in a danger or error state.                                                              |
| Warning   | Represents something that we want to warn the user about but not quite extreme as a danger state.             |
| Outline   | Outline badges for when we want the density of the badge to be lighter e.g. when next to data in a table cell |
| With Icon | If need be we can add icons and tooltips to add further context.                                              |

## ButtonBadge

If a badge is interactive, a `ButtonBadge` may be used to render a component that looks just like the `Badge` component but is actually a button.

## ColorCodedBadge

A `ColorCodedBadge` may be used to represent a color-coded category. Unlike the plain `Badge` component, a `ColorCodedBadge` does not have different appearance options to represent various states (e.g.: success, danger, warning).
