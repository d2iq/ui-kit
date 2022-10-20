import * as React from "react";
import { Story, Meta } from "@storybook/react";
import { ToggleBox } from "../index";
import ToggleBoxStoryHelper from "./helpers/ToggleBoxStoryHelper";
import { ToggleBoxProps } from "../components/ToggleBox";

export default {
  title: "Forms/ToggleBox",
  component: ToggleBox
} as Meta;

const Template: Story<ToggleBoxProps> = args => (
  <ToggleBoxStoryHelper>
    {({ isActive, changeHandler }) => (
      <ToggleBox
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
