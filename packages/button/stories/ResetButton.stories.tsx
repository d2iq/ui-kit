import * as React from "react";
import { Story, Meta } from "@storybook/react";
import { ResetButton } from "../../";
import { Text } from "../../styleUtils/typography";

export default {
  title: "Actions/ResetButton",
  component: ResetButton
} as Meta;

const Template: Story = args => (
  <div>
    {`The `}
    <Text tag="span" color="red">
      <ResetButton {...args}>red text</ResetButton>
    </Text>
    {` is a button, but it is not styled like one`}
  </div>
);

export const Default = Template.bind({});
