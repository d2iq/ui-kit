import * as React from "react";
import { withKnobs, select } from "@storybook/addon-knobs";
import { MonospaceText } from "../index";
import { FontSize } from "../../../shared/styles/styleUtils/typography/textSize";
import {
  themeTextColorDisabled,
  themeTextColorPrimary,
  themeTextColorSecondary,
  blue
} from "../../../design-tokens/build/js/designTokens";

export default {
  title: "Typography/MonospaceText",
  decorators: [withKnobs],
  component: MonospaceText
};

export const Default = () => (
  <MonospaceText>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  </MonospaceText>
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
    <MonospaceText size={size as FontSize}>
      Use the knobs to change the size
    </MonospaceText>
  );
};

export const Color = () => {
  const colors = {
    themeTextColorPrimary,
    themeTextColorSecondary,
    themeTextColorDisabled,
    blue
  };
  const color = select("color", colors, themeTextColorPrimary);

  return (
    <MonospaceText color={color}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </MonospaceText>
  );
};

export const MediumWeight = () => (
  <MonospaceText weight="medium">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  </MonospaceText>
);
