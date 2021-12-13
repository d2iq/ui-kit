import * as React from "react";
import { Story, Meta } from "@storybook/react";
import CheckboxInput from "../components/CheckboxInput";
import CheckboxStoryHelper from "../stories/helpers/CheckboxStoryHelper";
import { InputStoryWrapper } from "../../../decorators/inputStoryWrapper";

export default {
  title: "Forms/CheckboxInput",
  decorators: [Story => <InputStoryWrapper>{Story()}</InputStoryWrapper>],
  component: CheckboxInput,
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
    dropdown: {
      control: { disable: true }
    },
    id: {
      control: { disable: true }
    },
    errors: {
      control: { disable: true }
    }
  }
} as Meta;

const Template: Story = args => (
  <>
    <CheckboxStoryHelper>
      {({ changeHandler, isChecked }) => (
        <CheckboxInput
          id="default"
          inputLabel="Default"
          value="default"
          checked={!!isChecked}
          onChange={changeHandler}
          {...args}
        />
      )}
    </CheckboxStoryHelper>
  </>
);

export const Default = Template.bind({});
