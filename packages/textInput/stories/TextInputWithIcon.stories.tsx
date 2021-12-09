import * as React from "react";
import { Story, Meta } from "@storybook/react";
import { TextInputWithIcon } from "../index";
import { SystemIcons } from "../../icons/dist/system-icons-enum";
import { InputStoryWrapper } from "../../../decorators/inputStoryWrapper";

export default {
  title: "Forms/TextInputWithIcon",
  decorators: [Story => <InputStoryWrapper>{Story()}</InputStoryWrapper>],
  component: TextInputWithIcon,
  argTypes: {
    appearance: {
      defaultValue: "standard"
    },
    inputLabel: {
      control: {
        type: "text"
      },
      defaultValue: "Input Label"
    },
    iconStart: {
      options: [SystemIcons.TriangleDown, SystemIcons.Funnel],
      defaultValue: SystemIcons.TriangleDown
    },
    iconEnd: {
      options: [SystemIcons.TriangleDown, SystemIcons.Close, SystemIcons.Funnel]
    },
    hintContent: {
      control: {
        type: "text"
      }
    },
    tooltipContent: {
      control: {
        type: "text"
      }
    },
    errors: {
      control: { disable: true }
    }
  }
} as Meta;

const Template: Story = args => (
  <TextInputWithIcon
    id="standard.input"
    iconStart={SystemIcons.TriangleDown}
    {...args}
  />
);

export const Default = Template.bind({});
