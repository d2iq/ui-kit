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
import { SystemIcons } from "../../icons/dist/system-icons-enum";
import { ColorCodedBadgeProps } from "../components/ColorCodedBadge";

const colors = {
  textColorPrimary,
  textColorSecondary,
  red,
  yellow,
  green,
  blue,
  purple
};

const shapes = {
  ["SystemIcons.CircleCheck"]: SystemIcons.CircleCheck,
  ["SystemIcons.Check"]: SystemIcons.Check,
  ["SystemIcons.Close"]: SystemIcons.Close,
  ["SystemIcons.Folder"]: SystemIcons.Folder,
  ["SystemIcons.Gear"]: SystemIcons.Gear,
  ["SystemIcons.Services"]: SystemIcons.Services,
  ["SystemIcons.Users"]: SystemIcons.Users
};

export default {
  title: "Graphic Elements/ColorCodedBadge",
  component: ColorCodedBadge,
  subcomponents: { BadgeButton },
  argTypes: {
    color: {
      options: colors,
      control: {
        type: "select"
      }
    },
    iconShape: {
      options: shapes,
      control: {
        type: "select",
        labels: Object.keys(shapes)
      }
    }
  }
} as Meta;

ColorCodedBadge.displayName = "ColorCodedBadge";

const Template: Story<ColorCodedBadgeProps> = args => (
  <ColorCodedBadge {...args}>Color Coded Badge</ColorCodedBadge>
);

export const Default = Template.bind({});
Default.args = { color: colors.textColorPrimary };
