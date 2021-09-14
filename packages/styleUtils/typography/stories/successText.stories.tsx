import * as React from "react";
import { withKnobs, select } from "@storybook/addon-knobs";
import { SuccessText } from "../index";
import { FontSize } from "../../../shared/styles/styleUtils/typography/textSize";

export default {
  title: "Typography/SuccessText",
  decorators: [withKnobs],
  component: SuccessText
};

export const Default = () => (
  <SuccessText>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  </SuccessText>
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
    <SuccessText size={size as FontSize}>
      Use the knobs to change the size
    </SuccessText>
  );
};

export const MediumWeight = () => (
  <SuccessText weight="medium">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  </SuccessText>
);
