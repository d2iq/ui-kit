import * as React from "react";
import { Story, Meta } from "@storybook/react";
import { ToggleBox } from "../index";
import ToggleBoxStoryHelper from "./helpers/ToggleBoxStoryHelper";

export default {
  title: "Forms/ToggleBox",
  component: ToggleBox,
  argTypes: {
    isActive: {
      control: "boolean",
      defaultValue: false
    }
  }
};

const Template: Story = args => (
  <ToggleBoxStoryHelper>
    {({ isActive, changeHandler }) => (
      <ToggleBox
        value="default"
        id="default"
        isActive={isActive}
        onChange={changeHandler}
        {...args}
      >
        Default
      </ToggleBox>
    )}
  </ToggleBoxStoryHelper>
);

export const Default = Template.bind({});
