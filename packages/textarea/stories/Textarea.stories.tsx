import * as React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Textarea } from "../index";
import { InputAppearance } from "../../shared/types/inputAppearance";
import { InputStoryWrapper } from "../../../decorators/inputStoryWrapper";

export default {
  title: "Forms/Textarea",
  decorators: [Story => <InputStoryWrapper>{Story()}</InputStoryWrapper>],
  component: Textarea,
  argTypes: {
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
    inputLabel: "Default Input Label",
    placeholder: "Placeholder"
  }
} as Meta;

export const Default = {};

export const ErrorWithMessages = {
  args: {
    required: true,
    errors: ["Something is wrong here"],
    inputLabel: "Require Field",
    appearance: InputAppearance.Error
  }
};

export const AdditionalRows = {
  args: {
    rows: 10
  }
};
