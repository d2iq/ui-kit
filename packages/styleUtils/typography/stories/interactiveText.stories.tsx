import * as React from "react";
import { withKnobs, select } from "@storybook/addon-knobs";
import { InteractiveText } from "../index";
import { FontSize } from "../../../shared/styles/styleUtils/typography/textSize";

export default {
  title: "Typography/InteractiveText",
  decorators: [withKnobs],
  component: InteractiveText
};

export const Default = () => <InteractiveText>Click me</InteractiveText>;

export const Size = () => {
  const sizes = {
    s: "s",
    m: "m",
    l: "l",
    xl: "xl"
  };
  const size = select("size", sizes, "m");
  return (
    <InteractiveText size={size as FontSize}>
      Use the knobs to change the size
    </InteractiveText>
  );
};

export const MediumWeight = () => (
  <InteractiveText weight="medium">Click me</InteractiveText>
);
