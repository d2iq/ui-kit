import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, select, object } from "@storybook/addon-knobs";
import { withReadme } from "storybook-readme";
import SpacingBox from "../components/SpacingBox";
import { outlineDecorator } from "./helpers/outlineDecorator";
import {
  BoxSides,
  SpaceSize
} from "../../../shared/styles/styleUtils/modifiers/modifierUtils";

import readme from "../README.md";

storiesOf("Style utilities|SpacingBox", module)
  .addParameters({
    readme: {
      sidebar: readme
    }
  })
  .addDecorator(withKnobs)
  .addDecorator(outlineDecorator)
  .add("default", () => <SpacingBox>Default spacing</SpacingBox>)
  .add("side", () => {
    const sides = {
      all: "all",
      top: "top",
      right: "right",
      bottom: "bottom",
      left: "left",
      horiz: "horiz",
      vert: "vert"
    };
    const side = select("side", sides, "all");

    return (
      <SpacingBox side={side as BoxSides}>
        Use the Knobs panel to change which sides the spacing appears on
      </SpacingBox>
    );
  })
  .add("spacingSize", () => {
    const sizes = {
      xxs: "xxs",
      xs: "xs",
      s: "s",
      m: "m",
      l: "l",
      xl: "xl",
      xxl: "xxl",
      none: "none"
    };
    const size = select("side", sizes, "m");

    return (
      <SpacingBox spacingSize={size as SpaceSize}>
        Use the Knobs panel to change the size of the spacing
      </SpacingBox>
    );
  })
  .add("responsive spacingSize", () => {
    return (
      <SpacingBox
        spacingSize={{
          default: "none",
          small: "m",
          medium: "l",
          jumbo: "xl"
        }}
      >
        Resize your viewport width to see the spacing change
      </SpacingBox>
    );
  })
  .add("spacingSizePerSide", () => {
    const defaultValue = {
      top: "m",
      bottom: "xs",
      horiz: "xl"
    };
    const spacingSizePerSide = object(
      "spacingSizePerSide",
      defaultValue,
      "spacingSizePerSide"
    );

    return (
      <SpacingBox
        spacingSizePerSide={
          spacingSizePerSide as { [Side in BoxSides]?: SpaceSize }
        }
      >
        Use the Knobs panel to change the sizes of the spacing per side
      </SpacingBox>
    );
  })
  .add("responsive spacingSizePerSide", () => {
    return (
      <SpacingBox
        spacingSizePerSide={{
          vert: {
            default: "none",
            medium: "l"
          },
          horiz: {
            default: "none",
            medium: "xl"
          }
        }}
      >
        Resize your viewport width to see the spacing change
      </SpacingBox>
    );
  });
