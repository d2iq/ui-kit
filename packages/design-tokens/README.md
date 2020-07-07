# Design Tokens

UI Kit uses [style-dictionary](https://github.com/amzn/style-dictionary) to generate our design token distributions. This tool allows us to generate design token distributions for whatever platforms we want.

`properties/color/`: `properties/color/base.json` is where our full library of colors is stored. All other JSON files in this directory just contain [aliases](https://amzn.github.io/style-dictionary/#/properties?id=attribute-reference-alias) of the colors listed in `base.json`.

`properties/font/`: the visual attributes of UI Kit's typographic style.

`properties/layout/`: values that are used to determine how elements are layed out on the screen. For example: a spacing scale, sizing dimensions, and viewport width breakpoints.

`properties/theme/`: the default theme values. At the time of this writing, the only themeable design tokens are colors.

## Adding or editing design tokens

All of our design tokens are stored in JSON files in the `properties/` directory. Our JSON files use the [Category / Type / Item](https://amzn.github.io/style-dictionary/#/properties?id=category-type-item) structure.

### Add a new design token:

1. Check to see if the new design token fits in with a set of tokens in one of the existing JSON files
2. If there is no existing JSON file that is appropriate for the new token, create a new JSON file and new directory if necessary.

### Edit an existing design token:

Design token values can be edited without creating a breaking change. However, editing the name of a design token will cause a breaking change.

## Distributions

UI Kit generates design token distributions for JavaScript (or Typescript), and LESS.

### Adding Distributions

If you want to create a distribution for a new platform, you can use one of style-dictionary's [pre-defined formats](https://amzn.github.io/style-dictionary/#/formats?id=pre-defined-formats), or add a custom format to `packages/design-tokens/scripts/formats.js`.

## Documentation

`npm run build:design-token-docs` will generate Markdown files based on the configuration in `packages/design-tokens/config.designGuidelines.json`. These Markdown files are saved to `design-guidelines/design-tokens/`.
