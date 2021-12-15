import * as React from "react";
import { Story, Meta } from "@storybook/react";
import { Icon } from "../index";
import { SystemIcons } from "../../icons/dist/system-icons-enum";
import { textColorPrimary } from "../../design-tokens/build/js/designTokens";
import { IconProps } from "../components/Icon";
import {
  spacingSizeValues,
  systemIconLabels,
  systemIcons
} from "../../storybookHelpers/controlConstants";

export default {
  title: "Graphic Elements/Icon",
  component: Icon,
  argTypes: {
    color: {
      control: {
        type: "color"
      }
    },
    shape: {
      options: systemIcons,
      control: {
        type: "select"
      },
      mapping: systemIconLabels
    },
    size: {
      options: spacingSizeValues,
      control: {
        type: "select"
      }
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
  },
  args: {
    shape: SystemIcons.ArrowRight
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
