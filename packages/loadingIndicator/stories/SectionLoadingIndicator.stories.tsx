import * as React from "react";
import { StoryFn, Meta } from "@storybook/react";

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

const Template: StoryFn = args => (
  <>
    <SectionLoadingIndicator {...args} />
  </>
);

export const Default = {
  render: Template
};
