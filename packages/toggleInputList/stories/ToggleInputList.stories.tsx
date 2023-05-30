import * as React from "react";
import ToggleInputListStoryHelper from "./helpers/ToggleInputListStoryHelper";
import ToggleInputList from "../components/ToggleInputList";
import { InputAppearance } from "../../shared/types/inputAppearance";
import { StoryFn, Meta } from "@storybook/react";

const options = [
  { inputLabel: "Exosphere", id: "id.1", value: "exosphere" },
  { inputLabel: "Thermosphere", id: "id.2", value: "thermosphere" },
  { inputLabel: "Stratosphere", id: "id.3", value: "stratosphere" }
];

export default {
  title: "Forms/ToggleInputList",
  component: ToggleInputList,
  argTypes: {
    listLabel: {
      control: {
        type: "text"
      }
    },
    hintContent: {
      control: {
        type: "text"
      }
    },
    selectedItems: {
      control: { disable: true }
    },
    items: {
      control: { disable: true }
    },
    errors: {
      control: { disable: true }
    }
  }
} as Meta;

const Template: StoryFn = args => (
  <ToggleInputListStoryHelper>
    {({ changeHandler, selectedItems }) => (
      <ToggleInputList
        id="checkbox"
        items={options}
        listLabel="Atmosphere layers"
        onChange={changeHandler}
        selectedItems={selectedItems}
        isRadioGroup={true}
        {...args}
      />
    )}
  </ToggleInputListStoryHelper>
);

export const Default = {
  render: Template
};

export const ErrorWithMessage = {
  render: Template,

  args: {
    errors: ["Please select an item."],
    required: true,
    labelAppearance: InputAppearance.Error
  }
};
