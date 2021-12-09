import * as React from "react";
import { ToggleContent } from "../../index";
import { Story, Meta } from "@storybook/react";
import { ToggleContentProps } from "../components/toggleContent";

const primary = () => <div>Primary Component</div>;
const secondary = () => <div>Secondary Component</div>;

export default {
  title: "Utils/Toggle",
  component: ToggleContent,
  argTypes: {
    // Turning off these controls until storybook/controls object error is resolved.
    contentOn: {
      control: { disable: true }
    },
    contentOff: {
      control: { disable: true }
    }
  }
} as Meta;

const Template: Story<ToggleContentProps> = args => (
  <ToggleContent contentOn="Hi" contentOff="Bye" {...args} />
);

export const Default = Template.bind({});

export const ToggleComponent = Template.bind({});
ToggleComponent.args = {
  contentOn: primary(),
  contentOff: secondary()
};
