import * as React from "react";
import { Story, Meta } from "@storybook/react";
import { ColorCodedBadge } from "../../index";
import { ColorCodedBadgeProps } from "../components/ColorCodedBadge";
import { SystemIcons } from "../../icons/dist/system-icons-enum";
import { textColorPrimary } from "../../design-tokens/build/js/designTokens";

export default {
  title: "Graphic Elements/ColorCodedBadge",
  component: ColorCodedBadge,
  argTypes: {
    color: {
      control: {
        type: "color"
      }
    },
    iconShape: {
      options: Object.keys(SystemIcons),
      mapping: SystemIcons
    }
  }
} as Meta;

const Template: Story<ColorCodedBadgeProps> = args => (
  <ColorCodedBadge {...args}>Color Coded Badge</ColorCodedBadge>
);

export const Default = Template.bind({});
