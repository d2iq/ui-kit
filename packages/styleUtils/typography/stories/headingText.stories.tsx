import * as React from "react";
import { HeadingText1, HeadingText2, HeadingText3 } from "../index";
import { StoryObj, StoryFn, Meta } from "@storybook/react";
import { HeadingTextProps } from "../textTypes";
import { textAlignValues } from "../../../storybookHelpers/controlConstants";

export default {
  title: "Typography/HeadingText",
  component: HeadingText1,
  subcomponents: { HeadingText2, HeadingText3 },
  argTypes: {
    color: {
      control: { type: "color" }
    },
    align: {
      options: textAlignValues,
      control: { type: "select" }
    },
    tag: {
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
      control: { type: "inline-radio" }
    },
    "data-cy": {
      control: { disable: true }
    }
  },
  args: {
    align: "inherit"
  }
} as Meta;

const Template: StoryFn<HeadingTextProps> = args => (
  <HeadingText1 {...args}>Heading Text</HeadingText1>
);

export const DefaultHeadingText1 = {
  render: Template
};

export const DefaultHeadingText2: StoryObj<HeadingTextProps> = {
  render: args => <HeadingText2 {...args}>Heading Text</HeadingText2>
};

export const DefaultHeadingText3: StoryObj<HeadingTextProps> = {
  render: args => <HeadingText3 {...args}>Heading Text</HeadingText3>
};

export const CustomTag = {
  render: Template,
  args: { tag: "h3" }
};
