import * as React from "react";
import { withKnobs, select, object } from "@storybook/addon-knobs";
import SpacingBox from "../components/SpacingBox";
import { outlineDecorator } from "./helpers/outlineDecorator";
import {
  BoxSides,
  SpaceSize
} from "../../../shared/styles/styleUtils/modifiers/modifierUtils";

export default {
  title: "Style Utilities/SpacingBox",
  decorators: [withKnobs, outlineDecorator],
  component: SpacingBox
};

export const Default = () => <SpacingBox>Default spacing</SpacingBox>;

export const Side = () => {
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
};

export const SpacingSize = () => {
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
};

export const ResponsiveSpacingSize = () => {
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
};

export const SpacingSizePerSide = () => {
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
};

export const ResponsiveSpacingSizePerSide = () => {
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
};
