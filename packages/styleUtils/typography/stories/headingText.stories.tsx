import * as React from "react";
import { HeadingText1, HeadingText2, HeadingText3 } from "../index";
import { Story, Meta } from "@storybook/react";
import { HeadingTextProps } from "../textTypes";
import { textAlignValues } from "../../../storybookHelpers/controlContants";

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

const Template: Story<HeadingTextProps> = args => (
  <HeadingText1 {...args}>Heading Text</HeadingText1>
);

export const DefaultHeadingText1 = Template.bind({});

export const DefaultHeadingText2: Story<HeadingTextProps> = args => (
  <HeadingText2 {...args}>Heading Text</HeadingText2>
);

export const DefaultHeadingText3: Story<HeadingTextProps> = args => (
  <HeadingText3 {...args}>Heading Text</HeadingText3>
);

export const CustomTag = Template.bind({});
CustomTag.args = { tag: "h3" };
