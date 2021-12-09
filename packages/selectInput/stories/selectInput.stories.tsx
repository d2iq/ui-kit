import * as React from "react";
import { Story, Meta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { SelectInput } from "../../index";
import { InputAppearance } from "../../shared/types/inputAppearance";
import { InputStoryWrapper } from "../../../decorators/inputStoryWrapper";
import { SystemIcons } from "../../icons/dist/system-icons-enum";

const defaultOptions = [
  { value: "exosphere", label: "Exosphere" },
  { value: "thermosphere", label: "Thermosphere" },
  { value: "mesosphere", label: "Mesosphere" },
  { value: "stratosphere", label: "Stratosphere" },
  { value: "troposphere", label: "Troposphere" },
  {
    value: "really-long",
    label: "A really long label just to test icon overlapping text"
  },
  { value: "disabled", label: "Can't touch this", disabled: true }
];

export default {
  title: "Forms/SelectInput",
  decorators: [Story => <InputStoryWrapper>{Story()}</InputStoryWrapper>],
  component: SelectInput,
  argTypes: {
    appearance: {
      defaultValue: "standard"
    },
    iconStart: {
      options: [SystemIcons.Donut, SystemIcons.Gear, SystemIcons.Check],
      defaultValue: SystemIcons.TriangleDown
    },
    inputLabel: {
      control: {
        type: "text"
      },
      defaultValue: "Input Label"
    },
    hintContent: {
      control: {
        type: "text"
      }
    },
    options: {
      defaultValue: defaultOptions
    },
    errors: {
      defaultValue: ["Example Error Message", "Other Error Message"]
    }
  }
};

const Template: Story = args => (
  <SelectInput
    options={defaultOptions}
    id="default"
    inputLabel="Atmosphere Layer"
    {...args}
  />
);

export const Default = Template.bind({});
