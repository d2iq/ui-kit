import * as React from "react";
import { Story, Meta } from "@storybook/react";
import { TextInputWithIcon } from "../index";
import { SystemIcons } from "../../icons/dist/system-icons-enum";
import { InputStoryWrapper } from "../../../decorators/inputStoryWrapper";
import {
  systemIconLabels,
  systemIcons
} from "../../storybookHelpers/controlConstants";

export default {
  title: "Forms/TextInputWithIcon",
  decorators: [Story => <InputStoryWrapper>{Story()}</InputStoryWrapper>],
  component: TextInputWithIcon,
  argTypes: {
    inputLabel: {
      control: {
        type: "text"
      }
    },
    iconStart: {
      options: systemIcons,
      mapping: systemIconLabels
    },
    iconEnd: {
      options: systemIcons,
      mapping: systemIconLabels
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
  },
  args: {
    appearance: "standard",
    inputLabel: "Default Input Label",
    iconStart: SystemIcons.TriangleDown
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
