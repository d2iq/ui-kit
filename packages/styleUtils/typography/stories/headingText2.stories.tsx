import * as React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { HeadingText2 } from "../index";

export default {
  title: "Typography/HeadingText2",
  decorators: [withKnobs],
  component: HeadingText2
};

export const Default = () => <HeadingText2>Secondary Heading</HeadingText2>;

export const CustomTag = () => (
  <HeadingText2 tag="h3">{`Using a <h3> tag`}</HeadingText2>
);
