import * as React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { ToggleBox, ToggleBoxGroup } from "../index";
import { spacingSizeValues } from "../../storybookHelpers/controlConstants";
import { ToggleBoxGroupProps } from "../components/ToggleBoxGroup";

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

const Template: StoryFn<ToggleBoxGroupProps> = args => {
  const [selectedItems, setSelectedItems] = React.useState<string[]>([]);

  function handleChange(value: string[]) {
    setSelectedItems(value);
  }

  return (
    <ToggleBoxGroup
      onChange={handleChange}
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
  );
};

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
