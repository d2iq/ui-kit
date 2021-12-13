import * as React from "react";
import { Story, Meta } from "@storybook/react";
import { RadioInput } from "./";

import RadioInputStoryHelper from "./RadioInputStoryHelper";
import { InputStoryWrapper } from "../../decorators/inputStoryWrapper";

export default {
  title: "Forms/RadioInput",
  decorators: [Story => <InputStoryWrapper>{Story()}</InputStoryWrapper>],
  component: RadioInput,
  argTypes: {
    appearance: {
      defaultValue: "standard"
    },
    inputLabel: {
      control: {
        type: "text"
      },
      defaultValue: "Default"
    },
    hintContent: {
      control: {
        type: "text"
      }
    },
    errors: {
      control: { disable: true }
    }
  }
} as Meta;

const Template: Story = args => (
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

export const Default = Template.bind({});
