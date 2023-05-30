import * as React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { ToggleWrapper } from "../index";

export default {
  title: "Utils/ToggleWrapper",
  component: ToggleWrapper,
  args: {
    isActive: false
  }
} as Meta;

const Template: StoryFn = args => (
  <ToggleWrapper value={""} {...args}>
    {({ isActive }) => (
      <span>
        The isActive render prop returns:
        <code>{` ${isActive}`}</code>
      </span>
    )}
  </ToggleWrapper>
);

export const Default = {
  render: Template
};
