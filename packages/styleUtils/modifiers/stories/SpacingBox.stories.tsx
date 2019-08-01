import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, select } from "@storybook/addon-knobs";
import { withReadme } from "storybook-readme";
import SpacingBox from "../components/SpacingBox";
import { outlineDecorator } from "./helpers/outlineDecorator";
import {
  BoxSides,
  SpaceSize
} from "../../../shared/styles/styleUtils/modifiers/modifierUtils";

const readme = require("../README.md");

storiesOf("Style utilities/Modifiers/SpacingBox", module)
  .addDecorator(withReadme([readme]))
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
  });
