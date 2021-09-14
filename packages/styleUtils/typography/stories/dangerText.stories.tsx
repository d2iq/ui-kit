import * as React from "react";
import { withKnobs, select } from "@storybook/addon-knobs";
import { DangerText } from "../index";
import { FontSize } from "../../../shared/styles/styleUtils/typography/textSize";

export default {
  title: "Typography/DangerText",
  decorators: [withKnobs],
  component: DangerText
};

export const Default = () => (
  <DangerText>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  </DangerText>
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
    <DangerText size={size as FontSize}>
      Use the knobs to change the size
    </DangerText>
  );
};

export const MediumWeight = () => (
  <DangerText weight="medium">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  </DangerText>
);
