import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Clickable, { ClickableProps } from "../components/clickable";
import { action } from "@storybook/addon-actions";

export default {
  title: "Utils/Clickable",
  component: Clickable,
  argTypes: {
    children: {
      control: { disable: true }
    },
    "data-cy": {
      control: { disable: true }
    }
  }
} as Meta;

const Template: StoryFn<ClickableProps> = args => (
  <Clickable tabIndex="0" {...args}>
    <span>Clickable Text</span>
  </Clickable>
);

export const Default = {
  render: Template,

  args: {
    action
  }
};
