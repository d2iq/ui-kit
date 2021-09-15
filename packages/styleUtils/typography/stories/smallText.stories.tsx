import * as React from "react";
import { withKnobs, select } from "@storybook/addon-knobs";
import { SmallText } from "../";
import {
  themeTextColorDisabled,
  themeTextColorPrimary,
  themeTextColorSecondary,
  blue
} from "../../../design-tokens/build/js/designTokens";

export default {
  title: "Typography/SmallText",
  decorators: [withKnobs],
  component: SmallText
};

export const Default = () => (
  <SmallText>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  </SmallText>
);

export const Color = () => {
  const colors = {
    themeTextColorPrimary,
    themeTextColorSecondary,
    themeTextColorDisabled,
    blue
  };
  const color = select("color", colors, themeTextColorPrimary);

  return (
    <SmallText color={color}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </SmallText>
  );
};

export const MediumWeight = () => (
  <SmallText weight="medium">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  </SmallText>
);
