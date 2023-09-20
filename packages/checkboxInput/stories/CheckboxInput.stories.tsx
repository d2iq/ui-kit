import * as React from "react";
import { StoryFn, Meta } from "@storybook/react";
import CheckboxInput from "../components/CheckboxInput";
import { InputStoryWrapper } from "../../../decorators/inputStoryWrapper";

export default {
  title: "Forms/CheckboxInput",
  decorators: [Story => <InputStoryWrapper>{Story()}</InputStoryWrapper>],
  component: CheckboxInput,
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
    dropdown: {
      control: { disable: true }
    },
    id: {
      control: { disable: true }
    },
    errors: {
      control: { disable: true }
    }
  },
  args: {
    appearance: "standard",
    inputLabel: "Default"
  }
} as Meta;

const Template: StoryFn = args => {
  const [isChecked, setIsChecked] = React.useState<boolean>(false);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };
  return (
    <CheckboxInput
      id="default"
      inputLabel="Default"
      value="default"
      checked={!!isChecked}
      onChange={changeHandler}
      {...args}
    />
  );
};

export const Default = {
  render: Template
};
