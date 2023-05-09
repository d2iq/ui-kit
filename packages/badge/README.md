# Badges

Badges are a lightweight method of annotating or labeling content. The font-size and line-height of a badge are inherited from its parent's properties.

## Badge Appearances

You may wish to display more than a single badge type, either to create separation in the importance of various actions or to communicate the state of an action or form. Badge states make this easy.

| State     | Purpose                                                                                                        |
| --------- | -------------------------------------------------------------------------------------------------------------- |
| Default   | A default badge.                                                                                               |
| Success   | Represents something positive.                                                                                 |
| Primary   | Represents something more significant than a default.                                                          |
| Danger    | Represents something in a danger or error state.                                                               |
| Warning   | Represents something that we want to warn the user about but not quite as extreme as a danger state.           |
| Outline   | Outline badges for when we want the density of the badge to be lighter e.g. when next to data in a table cell. |
| With Icon | If needed, we can add icons and tooltips to add further context.                                               |

## ButtonBadge

If a badge is interactive, a `ButtonBadge` may be used to render a component that looks just like the `Badge` component but is actually a button.

## ColorCodedBadge

A `ColorCodedBadge` may be used to represent a color-coded category. Unlike the plain `Badge` component, a `ColorCodedBadge` does not have different appearance options to represent various states (success, danger, warning).
