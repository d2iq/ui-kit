import * as React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { ToggleBox, ToggleBoxGroup } from "../index";
import ToggleBoxGroupStoryHelper from "./helpers/ToggleBoxGroupStoryHelper";
import { ToggleBoxGroupProps } from "../components/ToggleBoxGroup";
import { spacingSizeValues } from "../../storybookHelpers/controlConstants";

const directions = {
  column: "column",
  row: "row",
  columnReverse: "column-reverse",
  rowReverse: "row-reverse"
};
export default {
  title: "Forms/ToggleBoxGroup",
  component: ToggleBoxGroup,
  argTypes: {
    gutterSize: {
      options: spacingSizeValues,
      control: {
        type: "select"
      }
    },
    direction: {
      options: directions
    },
    selectedItems: {
      control: { disable: true }
    }
  }
} as Meta;

const Template: StoryFn<ToggleBoxGroupProps> = args => (
  <ToggleBoxGroupStoryHelper>
    {({ changeHandler, selectedItems }) => (
      <ToggleBoxGroup
        onChange={changeHandler}
        selectedItems={selectedItems}
        id="default"
        {...args}
      >
        <ToggleBox id="exosphere" value="exosphere">
          Exosphere
        </ToggleBox>
        <ToggleBox id="thermosphere" value="thermosphere">
          Thermosphere
        </ToggleBox>
        <ToggleBox id="mesosphere" value="mesosphere">
          Mesosphere
        </ToggleBox>
      </ToggleBoxGroup>
    )}
  </ToggleBoxGroupStoryHelper>
);

export const Default = {
  render: Template
};

export const WithLabel = {
  render: Template,

  args: {
    id: "withLabel",
    label: "Atmosphere Layer"
  }
};

export const MultiSelectWithSelectedItems = {
  render: Template,

  args: {
    id: "multiselect",
    multiSelect: true,
    selectedItems: ["exosphere", "thermosphere"]
  }
};
