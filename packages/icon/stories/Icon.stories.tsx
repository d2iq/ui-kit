import * as React from "react";
import { storiesOf } from "@storybook/react";
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
  blueDarken3
} from "../../design-tokens/build/js/designTokens";
import { iconSizes } from "../../shared/styles/styleUtils/layout/iconSizes";

import readme from "../README.md";

// used for Storybook knobs
const colors = {
  textColorPrimary,
  textColorSecondary,
  blueDarken3,
  red,
  yellow,
  green,
  blue,
  purple
};
const sizes = Object.keys(iconSizes).reduce((acc, curr) => {
  acc[curr] = curr;
  return acc;
}, {});
const shapes = {
  ["SystemIcons.ArrowRight"]: SystemIcons.ArrowRight,
  ["SystemIcons.Check"]: SystemIcons.Check,
  ["SystemIcons.Close"]: SystemIcons.Close,
  ["SystemIcons.Folder"]: SystemIcons.Folder,
  ["SystemIcons.Gear"]: SystemIcons.Gear,
  ["SystemIcons.Services"]: SystemIcons.Services,
  ["SystemIcons.Users"]: SystemIcons.Users,
  ["SystemIcons.LockData"]: SystemIcons.LockData
};

storiesOf("Graphic elements|Icon", module)
  .addParameters({
    readme: {
      sidebar: readme
    }
  })
  .addDecorator(withKnobs)
  .add("default", () => {
    // used for Storybook knobs
    const color = select("Color", colors, textColorPrimary);
    const size = select("Size", sizes, "s");
    const shape = select("Shape", shapes, SystemIcons.ArrowRight);

    return (
      <Icon shape={shape} color={color} size={size} ariaLabel="Sample icon" />
    );
  });
