import * as React from "react";
import { Story, Meta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Textarea } from "../index";
import { InputAppearance } from "../../shared/types/inputAppearance";
import { InputStoryWrapper } from "../../../decorators/inputStoryWrapper";

export default {
  title: "Forms/Textarea",
  decorators: [Story => <InputStoryWrapper>{Story()}</InputStoryWrapper>],
  component: Textarea,
  argTypes: {
    inputLabel: {
      control: {
        type: "text"
      },
      defaultValue: "Default Label"
    },
    placeholder: {
      control: {
        type: "text"
      },
      defaultValue: "Placeholder"
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

const Template: Story = args => <Textarea {...args} />;

export const Default = Template.bind({});

export const ErrorWithMessages = Template.bind({});
ErrorWithMessages.args = {
  required: true,
  errors: ["Something is wrong here"],
  inputLabel: "Require Field",
  appearance: InputAppearance.Error
};

export const AdditionalRows = Template.bind({});
AdditionalRows.args = {
  rows: 10
};
