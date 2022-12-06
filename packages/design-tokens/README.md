# Design Tokens

UI Kit uses [style-dictionary](https://github.com/amzn/style-dictionary) to generate our design token distributions. This tool allows us to generate design token distributions for whatever platforms we want.

- [Categories](#categories)
- [Naming Conventions](#naming-conventions)
  - [Color](#color)
  - [Layout](#layout)
  - [Font](#font)
- [Builds](#builds)
  - [Primary Build](#primary-build)
  - [Markdown Documentation Build](#markdown-documentation-build)
- [Adding or Editing Design Tokens](#adding-or-editing-design-tokens)
  - [Add a New Design Token](#add-a-new-design-token)
  - [Edit an Existing Design Token](#edit-an-existing-design-token)
- [Distributions](#distributions)
  - [Adding Distributions](#adding-distributions)

## Categories

`properties/color/`: `properties/color/base.json` is where our full library of colors is stored. All other JSON files in this directory just contain [aliases](https://amzn.github.io/style-dictionary/#/properties?id=attribute-reference-alias) of the colors listed in `base.json`.

`properties/font/`: the visual attributes of UI Kit's typographic style.

`properties/layout/`: values that are used to determine how elements are layed out on the screen. For example: a spacing scale, sizing dimensions, and viewport width breakpoints.

`properties/theme/`: the default theme values. At the time of this writing, the only themeable design tokens are colors.

## Naming Conventions

Our JSON files use the [Category / Type / Item](https://amzn.github.io/style-dictionary/#/properties?id=category-type-item) structure.

```
{
    "color": { <====================================== Category
        "base": { <=================================== Type
            "purple": { <============================= Item
                "lighten": { <======================== Subitem
                    "1": { "value": "#8360FF" }, <==== State
                    // ...etc
                }
            }
        }
    }
}
```

The "base" key is ignored when design token variables are generated.

### Color

Color names that are not a specific type (e.g.: text, border) follow the pattern **Item / Subitem / State**
For example: `purpleDarken1`

Color names that are aliased or of a specific type follow the pattern **Type / Category / Item / Subitem**
For example: `textColorPrimaryInverted`

### Layout

Design tokens related to layout follow the pattern **Type / Item**
For example: `spaceL`

### Font

Design tokens related to font attributes follow the pattern **Category / Type / Item**
For example: `fontSizeM`

## Builds

### Primary Build

`npm run build:design-tokens`

Uses Amazon Style Dictionary to build design token distributions for JavaScript and LESS.

- `packages/design-tokens/build/` is for use inside of ui-kit
- `dist/packages/design-tokens/build` is for apps to import ui-kit's design tokens

The build is automatically run before Storybook is built, before tests are run, and before the main ui-kit `dist` is built.

#### Configuration

The JavaScript and Typescript distribution uses the configuration defined at: `packages/design-tokens/config.tsCompiled.json`

The LESS distribution uses the configuration defined at: `packages/design-tokens/config.manualPublish.json`

### Markdown Documentation Build

`npm run build:design-token-docs`

Uses Amazon Style Dictionary to generate markdown files in [design-guidelines/design-tokens](https://github.com/d2iq/ui-kit/tree/main/design-guidelines/design-tokens) to document design tokens.

When design tokens are updated, this script must be run manually to update the documentation.

#### Configuration

This build uses the configuration defined at `packages/design-tokens/config.designGuidelines.json`.

## Adding or Editing Design Tokens

All of our design tokens are stored in JSON files in the `properties/` directory. Our JSON files use the [Category / Type / Item](https://amzn.github.io/style-dictionary/#/properties?id=category-type-item) structure.

### Add a New Design Token

1. Check to see if the new design token fits in with a set of tokens in one of the existing JSON files
2. If there is no existing JSON file that is appropriate for the new token, create a new JSON file and new directory if necessary.

### Edit an Existing Design Token

Design token values can be edited without creating a breaking change. However, editing the name of a design token will cause a breaking change.

## Distributions

UI Kit generates design token distributions for JavaScript (or Typescript), and LESS.

### Adding Distributions

If you want to create a distribution for a new platform, you can use one of style-dictionary's [pre-defined formats](https://amzn.github.io/style-dictionary/#/formats?id=pre-defined-formats), or add a custom format to `packages/design-tokens/scripts/formats.js`.
