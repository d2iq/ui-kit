import * as React from "react";
import { withKnobs, select } from "@storybook/addon-knobs";
import { WarningText } from "../index";
import { FontSize } from "../../../shared/styles/styleUtils/typography/textSize";

export default {
  title: "Typography/WarningText",
  decorators: [withKnobs],
  component: WarningText
};

export const Default = () => (
  <WarningText>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  </WarningText>
);

export const Size = () => {
  const sizes = {
    s: "s",
    m: "m",
    l: "l",
    xl: "xl"
  };
  const size = select("size", sizes, "m");
  return (
    <WarningText size={size as FontSize}>
      Use the knobs to change the size
    </WarningText>
  );
};

export const MediumWeight = () => (
  <WarningText weight="medium">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  </WarningText>
);
