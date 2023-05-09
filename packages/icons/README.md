# Icons

Icons are graphical symbols used to represent an object, action, or concept. They are essential for creating visual interest and improving the user experience.

## System Icons

System icons are glyphs that can be used as standalone actions or to support labels in actions. They are designed to be simple, clear, and consistent across all D2iQ products. System icons are often used in combination with text labels to provide users with additional context.

## Product Icons

Product icons are unique graphical symbols used to represent and convey the features and capabilities of the D2iQ product suite. Unlike system icons, product icons are not meant to be paired with actions. They are primarily used for pathfinding, context, and messaging. Each product icon is unique in its own right, though all product icons share a similar artistic style that is consistent with the D2iQ product look and feel.

Product icons can be used to represent a specific feature or capability, such as logging or monitoring, or to represent an overarching concept, such as security or reliability. When used appropriately, product icons can help users quickly understand the purpose and function of a particular feature or capability.

## Creating Icons

To create icons, add the svg to the folder based on the icon type (product or system). Make sure to remove any hard-coded fill colors and aligned the icon width, height and viewbox with the other icons. Next you will need to run `npm run dist` to add the icon to the respective sprite sheet.

## Best Practices

When using icons, it is important to follow best practices for accessibility and usability. Icons should be clear and easily recognizable, and they should not rely on color alone to convey meaning. If an icon is paired with text, the text should provide additional context or clarification.

It is also important to use icons consistently throughout the product, so that users can quickly learn and understand their meaning. If you need to create a new icon, ensure that it fits with the overall look and feel of the product, and that it is easily recognizable and meaningful to users.
