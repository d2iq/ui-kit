import * as React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { RadioInput } from "./";

import RadioInputStoryHelper from "./RadioInputStoryHelper";
import { InputStoryWrapper } from "../../decorators/inputStoryWrapper";

export default {
  title: "Forms/RadioInput",
  decorators: [Story => <InputStoryWrapper>{Story()}</InputStoryWrapper>],
  component: RadioInput,
  argTypes: {
    inputLabel: {
      control: {
        type: "text"
      }
    },
    hintContent: {
      control: {
        type: "text"
      }
    },
    errors: {
      control: { disable: true }
    }
  },
  args: {
    appearance: "standard",
    inputLabel: "Default Input Label"
  }
} as Meta;

const Template: StoryFn = args => (
  <RadioInputStoryHelper>
    {({ changeHandler, checkedValue }) => (
      <RadioInput
        id="default"
        inputLabel="Default"
        value="default"
        name="defaultRadioGroup"
        onChange={changeHandler}
        checked={checkedValue === "default"}
        {...args}
      />
    )}
  </RadioInputStoryHelper>
);

export const Default = {
  render: Template
};
