import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, select } from "@storybook/addon-knobs";
import { withReadme } from "storybook-readme";
import BorderedBox from "../components/BorderedBox";
import { BoxSides } from "../../../shared/styles/styleUtils/modifiers/modifierUtils";
import { BorderRadii } from "../../../shared/styles/styleUtils/modifiers/border";
import SpacingBox from "../components/SpacingBox";

import readme from "../README.md";

storiesOf("Style utilities|BorderedBox", module)
  .addParameters({
    readme: {
      sidebar: readme
    }
  })
  .addDecorator(withKnobs)
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
      <BorderedBox side={side as BoxSides}>
        <SpacingBox spacingSize="s">
          Use the Knobs panel to change which sides the border appears on
        </SpacingBox>
      </BorderedBox>
    );
  })
  .add("heavy variant", () => {
    return (
      <BorderedBox side="all" variant="heavy">
        <SpacingBox spacingSize="s">
          Bordered with the "heavy" border variant
        </SpacingBox>
      </BorderedBox>
    );
  })
  .add("radius", () => {
    const radii = {
      none: "none",
      small: "small",
      default: "default"
    };
    const radius = select("radius", radii, "default");

    return (
      <BorderedBox side="all" radius={radius as BorderRadii}>
        <SpacingBox>Use the Knobs panel to change the border radius</SpacingBox>
      </BorderedBox>
    );
  });
