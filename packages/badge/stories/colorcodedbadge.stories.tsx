import * as React from "react";
import { Story, Meta } from "@storybook/react";
import { BadgeButton, ColorCodedBadge } from "../../index";
import {
  textColorPrimary,
  textColorSecondary,
  red,
  yellow,
  green,
  blue,
  purple
} from "../../design-tokens/build/js/designTokens";
import { ColorCodedBadgeProps } from "../components/ColorCodedBadge";
import {
  systemIconLabels,
  systemIcons
} from "../../storybookHelpers/controlConstants";

export default {
  title: "Graphic Elements/ColorCodedBadge",
  component: ColorCodedBadge,
  subcomponents: { BadgeButton },
  argTypes: {
    color: {
      control: {
        type: "color"
      }
    },
    iconShape: {
      options: systemIcons,
      control: {
        type: "select"
      },
      mapping: systemIconLabels
    }
  }
} as Meta;

ColorCodedBadge.displayName = "ColorCodedBadge";

const Template: Story<ColorCodedBadgeProps> = args => (
  <ColorCodedBadge {...args}>Color Coded Badge</ColorCodedBadge>
);

export const Default = Template.bind({});
Default.args = { color: colors.textColorPrimary };
