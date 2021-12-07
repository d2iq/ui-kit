import * as React from "react";
import { Story, Meta } from "@storybook/react";
import { Icon } from "../index";
import { SystemIcons } from "../../icons/dist/system-icons-enum";
import {
  blue,
  green,
  purple,
  red,
  textColorPrimary,
  textColorSecondary,
  yellow,
  blueDarken3
} from "../../design-tokens/build/js/designTokens";
import { IconProps } from "../components/Icon";

const colors = {
  textColorPrimary,
  textColorSecondary,
  blueDarken3,
  red,
  yellow,
  green,
  blue,
  purple
};

const sizes = ["xxs", "xs", "s", "m", "l", "xl", "xxl"];

const shapes = {
  ["SystemIcons.ArrowRight"]: SystemIcons.ArrowRight,
  ["SystemIcons.Check"]: SystemIcons.Check,
  ["SystemIcons.Close"]: SystemIcons.Close,
  ["SystemIcons.Folder"]: SystemIcons.Folder,
  ["SystemIcons.Gear"]: SystemIcons.Gear,
  ["SystemIcons.Services"]: SystemIcons.Services,
  ["SystemIcons.Users"]: SystemIcons.Users,
  ["SystemIcons.LockData"]: SystemIcons.LockData
};

export default {
  title: "Graphic Elements/Icon",
  component: Icon,
  argTypes: {
    color: {
      options: colors,
      control: {
        type: "select"
      }
    },
    shape: {
      options: shapes,
      control: {
        type: "select",
        labels: Object.keys(shapes)
      },
      defaultValue: SystemIcons.ArrowRight
    },
    size: {
      options: sizes,
      control: {
        type: "select"
      },
      defaultValue: "s"
    },
    block: {
      options: [true, false],
      control: {
        type: "boolean"
      }
    },
    ariaLabel: {
      control: { disable: true }
    },
    "data-cy": {
      control: { disable: true }
    }
  }
} as Meta;

const Template: Story<IconProps> = args => (
  <Icon
    shape={SystemIcons.ArrowRight}
    color={textColorPrimary}
    size="s"
    ariaLabel="Sample icon"
    {...args}
  />
);

export const Default = Template.bind({});
