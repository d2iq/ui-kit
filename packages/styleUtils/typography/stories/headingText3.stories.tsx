import * as React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { HeadingText3 } from "../index";

export default {
  title: "Typography/HeadingText3",
  decorators: [withKnobs],
  component: HeadingText3
};

export const Default = () => <HeadingText3>Tertiary Heading</HeadingText3>;

export const CustomTag = () => (
  <HeadingText3 tag="h4">{`Using a <h4> tag`}</HeadingText3>
);
