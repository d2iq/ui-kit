import React from "react";
import { Story, Meta } from "@storybook/react";
import Clickable, { ClickableProps } from "../components/clickable";
import { action } from "@storybook/addon-actions";

export default {
  title: "Utils/Clickable",
  component: Clickable,
  argTypes: {
    children: {
      control: { disable: true }
    },
    "data-cy": {
      control: { disable: true }
    }
  }
} as Meta;

const Template: Story<ClickableProps> = args => (
  <Clickable action={action} tabIndex="0" {...args}>
    <span>Clickable Text</span>
  </Clickable>
);

export const Default = Template.bind({});
