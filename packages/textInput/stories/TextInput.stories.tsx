import { StoryFn, Meta } from "@storybook/react";

import * as React from "react";
import { InputStoryWrapper } from "../../../decorators/inputStoryWrapper";

import { TextInput } from "..";
import { InputAppearance } from "../../shared/types/inputAppearance";

export default {
  title: "Forms/TextInput",
  decorators: [Story => <InputStoryWrapper>{Story()}</InputStoryWrapper>],
  component: TextInput,
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
    inputLabel: "Default Input Label"
  }
} as Meta;

const Template: StoryFn = args => (
  <TextInput
    id="standard.input"
    inputLabel="Standard"
    placeholder="Placeholder"
    hintContent="Hint text goes here."
    {...args}
  />
);

export const Default = {
  render: Template
};

export const ErrorWithMessages = {
  render: Template,

  args: {
    required: true,
    errors: ["Please enter a value.", "Value must not be empty."],
    inputLabel: "Require Field",
    appearance: InputAppearance.Error
  }
};

export const WithDefaultIconLongStringTooltip = {
  render: args => (
    <TextInput
      id="long.string.tooltip.input"
      inputLabel="Require Field"
      placeholder="Placeholder"
      hintContent="Enter a correct value here. e.g. not empty"
      required={true}
      tooltipContent="This is a very long string tooltip, created in order to test the maximum width"
      {...args}
    />
  )
};

export const WithDefaultIconHtmlElementTooltip = {
  render: args => (
    <TextInput
      id="element.tooltip.input"
      inputLabel="Require Field"
      placeholder="Placeholder"
      hintContent="Enter a correct value here. e.g. not empty"
      required={true}
      tooltipContent={<div>Tooltip containing HTML element</div>}
      {...args}
    />
  )
};
