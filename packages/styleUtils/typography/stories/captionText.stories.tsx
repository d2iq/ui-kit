import * as React from "react";
import { CaptionText } from "../index";
import { StoryFn, Meta } from "@storybook/react";
import { SharedTextProps } from "../textTypes";

export default {
  title: "Typography/CaptionText",
  component: CaptionText
} as Meta;

const Template: StoryFn<SharedTextProps> = args => (
  <CaptionText {...args}>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  </CaptionText>
);

export const Default = {
  render: Template
};
