import * as React from "react";
import { Story, Meta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import ButtonCard, { ButtonCardProps } from "../components/ButtonCard";

export default {
  title: "Actions/ButtonCard",
  component: ButtonCard,
  argTypes: {
    paddingSize: {
      options: ["s", "m", "l", "xl"],
      defaultValue: "m"
    }
  }
} as Meta;

const Template: Story = args => <ButtonCard {...args}>default</ButtonCard>;

export const Default = Template.bind({});

export const Active = Template.bind({});
Active.args = {
  isActive: true
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
};

export const WithOnClick = Template.bind({});
WithOnClick.args = {
  onClick: action("button clicked")
};

export const ResponsivePaddingSize = Template.bind({});
ResponsivePaddingSize.args = {
  paddingSize: {
    default: "s",
    small: "m",
    medium: "l",
    large: "xl",
    jumbo: "xxl"
  }
};

export const AspectRatio = args => (
  <div style={{ maxWidth: "400px" }}>
    <ButtonCard aspectRatio={[2, 1]} {...args}>
      I stay at a 2:1 aspect ratio
    </ButtonCard>
  </div>
);
