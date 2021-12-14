import * as React from "react";
import Stack, { StackProps } from "../components/Stack";
import { SpaceSize } from "../../../../shared/styles/styleUtils/modifiers/modifierUtils";
import { Story, Meta } from "@storybook/react";
import { spacingSizeValues } from "../../../../storybookHelpers/controlContants";

export default {
  title: "Layout/Stack",
  component: Stack,
  argTypes: {
    spacingSize: {
      options: spacingSizeValues,
      control: {
        type: "select"
      },
      defaultValue: "m"
    },
    className: {
      control: { disable: true }
    },
    "data-cy": {
      control: { disable: true }
    }
  }
} as Meta;

const Template: Story<StackProps> = args => (
  <Stack {...args}>
    <div>Lorem Ipsum is simply dummy text</div>
    <div>of the printing and typesetting industry.</div>
    <div>Lorem Ipsum has been the industry's</div>
    <div>standard dummy text ever since the 1500s,</div>
    <div>when an unknown printer took a galley of</div>
    <div>type and scrambled it to make a type </div>
    <div>specimen book. It has survived not only</div>
    <div>five centuries, but also the leap into</div>
    <div>electronic typesetting, remaining essentially</div>
    <div>unchanged. It was popularised in the 1960s.</div>
  </Stack>
);

export const Default = Template.bind({});

export const ResponsiveSpacingSize = Template.bind({});
ResponsiveSpacingSize.args = {
  spacingSize: {
    default: "none",
    small: "m",
    medium: "l",
    jumbo: "xl"
  }
};
