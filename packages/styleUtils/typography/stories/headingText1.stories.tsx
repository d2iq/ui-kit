import * as React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { HeadingText1 } from "../index";

export default {
  title: "Typography/HeadingText1",
  decorators: [withKnobs],
  component: HeadingText1
};

export const Default = () => <HeadingText1>Primary Heading</HeadingText1>;

export const CustomTag = () => (
  <HeadingText1 tag="h2">{`Using a <h2> tag`}</HeadingText1>
);
