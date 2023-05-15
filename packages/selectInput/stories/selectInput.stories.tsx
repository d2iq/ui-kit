import * as React from "react";
import { Story, Meta } from "@storybook/react";
import { SelectInput } from "../../index";
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
    iconStart: {
      options: Object.keys(SystemIcons),
      mapping: SystemIcons
    },
    inputLabel: {
      control: {
        type: "text"
      }
    },
    hintContent: {
      control: {
        type: "text"
      }
    }
  },
  args: {
    appearance: "standard",
    inputLabel: "Default Input Label",
    iconStart: SystemIcons.TriangleDown,
    options: defaultOptions,
    errors: ["Example Error Message", "Other Error Message"]
  }
} as Meta;

const Template: Story = args => (
  <SelectInput
    options={defaultOptions}
    id="default"
    inputLabel="Atmosphere Layer"
    {...args}
  />
);

export const Default = Template.bind({});
