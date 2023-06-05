import * as React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { ToggleBox } from "../index";
import ToggleBoxStoryHelper from "./helpers/ToggleBoxStoryHelper";
import { ToggleBoxProps } from "../components/ToggleBox";

export default {
  title: "Forms/ToggleBox",
  component: ToggleBox
} as Meta;

const Template: StoryFn<ToggleBoxProps> = args => (
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

export const Default = {
  render: Template
};
