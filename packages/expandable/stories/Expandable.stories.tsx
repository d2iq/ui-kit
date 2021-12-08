import * as React from "react";
import { Story, Meta } from "@storybook/react";
import Expandable from "../components/Expandable";

export default {
  title: "Actions/Expandable",
  component: Expandable
} as Meta;

const Template: Story = args => (
  <Expandable label="Expand for content" {...args}>
    <div>Check out this exciting content</div>
  </Expandable>
);

export const Default = Template.bind({});
