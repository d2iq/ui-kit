import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import { select, withKnobs } from "@storybook/addon-knobs";
import { Icon } from "../index";
import { SystemIcons } from "../../icons/dist/system-icons-enum";
import {
  blue,
  green,
  purple,
  red,
  textColorPrimary,
  textColorSecondary,
  yellow,
  iconSizeXxs,
  iconSizeXs,
  iconSizeS,
  iconSizeM,
  iconSizeL,
  iconSizeXl,
  iconSizeXxl
} from "../../design-tokens/build/js/designTokens";

const readme = require("../README.md");

// used for Storybook knobs
const colors = {
  textColorPrimary,
  textColorSecondary,
  red,
  yellow,
  green,
  blue,
  purple
};
const sizes = {
  iconSizeXxs,
  iconSizeXs,
  iconSizeS,
  iconSizeM,
  iconSizeL,
  iconSizeXl,
  iconSizeXxl
};
const shapes = {
  ["SystemIcons.ArrowRight"]: SystemIcons.ArrowRight,
  ["SystemIcons.Check"]: SystemIcons.Check,
  ["SystemIcons.Close"]: SystemIcons.Close,
  ["SystemIcons.Folder"]: SystemIcons.Folder,
  ["SystemIcons.Gear"]: SystemIcons.Gear,
  ["SystemIcons.Services"]: SystemIcons.Services,
  ["SystemIcons.Users"]: SystemIcons.Users
};

storiesOf("Graphic elements|Icon", module)
  .addDecorator(withReadme([readme]))
  .addDecorator(withKnobs)
  .add("default", () => {
    // used for Storybook knobs
    const color = select("Color", colors, textColorPrimary);
    const size = select("Size", sizes, iconSizeS);
    const shape = select("Shape", shapes, SystemIcons.ArrowRight);

    return (
      <Icon shape={shape} color={color} size={size} ariaLabel="Sample icon" />
    );
  });
