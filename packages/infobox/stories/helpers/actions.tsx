import * as React from "react";
import { Clickable } from "../../../clickable";
import { action } from "@storybook/addon-actions";

import { coreColors } from "../../../shared/styles/color";
const { purple } = coreColors();

const fakeButtonStyles = {
  cursor: "pointer",
  color: purple
};

export const PrimaryAction = () => (
  <Clickable action={action("primaryAction triggered")} tabIndex="0">
    <span style={fakeButtonStyles}>Primary Action</span>
  </Clickable>
);

export const SecondaryAction = () => (
  <Clickable action={action("secondaryAction triggered")} tabIndex="0">
    <span style={fakeButtonStyles}>Secondary Action</span>
  </Clickable>
);
