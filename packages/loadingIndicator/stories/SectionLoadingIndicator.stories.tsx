import * as React from "react";
import { Story, Meta } from "@storybook/react";

import { SectionLoadingIndicator } from "..";

export default {
  title: "Feedback/Loading Indicators/Section Loading Indicator",
  component: SectionLoadingIndicator,
  argTypes: {
    color: {
      control: { type: "color" }
    }
  }
} as Meta;

const Template: Story = args => (
  <>
    <SectionLoadingIndicator {...args} />
  </>
);

export const Default = Template.bind({});
