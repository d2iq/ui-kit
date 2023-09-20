import * as React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { RadioInput } from "./";

import { InputStoryWrapper } from "../../decorators/inputStoryWrapper";
import { RadioInputProps } from "./RadioInput";

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

const Template: StoryFn = args => {
  const [checkedValue, setCheckedValue] = React.useState<string>();

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedValue(event.target.value);
  };

  return (
    <RadioInput
      id="default"
      inputLabel="Default"
      value="default"
      name="defaultRadioGroup"
      onChange={changeHandler}
      checked={checkedValue === "default"}
      {...args}
    />
  );
};

export const Default = {
  render: Template
};
