import * as React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { ProgressBar, ProgressBarSegmentLegend } from "../index";
import { ProgressBarProps, ProgressBarSizes } from "../components/ProgressBar";
import { green, yellow } from "../../design-tokens/build/js/designTokens";

export default {
  title: "Charts/ProgressBar",
  component: ProgressBar,
  subcomponents: { ProgressBarSegmentLegend },
  argTypes: {
    size: {
      control: {
        options: ProgressBarSizes
      }
    },
    caption: {
      control: {
        type: "text"
      }
    }
  }
} as Meta;

const Template: StoryFn<ProgressBarProps> = args => (
  <ProgressBar data={[{ percentage: 40 }]} value="40%" {...args} />
);

export const Default = {
  render: Template
};

export const DataSegments = {
  render: Template,

  args: {
    data: [
      { color: green, percentage: 40 },
      { color: yellow, percentage: 20 }
    ]
  }
};

export const DataSegmentsWithLegend = {
  render: args => {
    const chartData = [
      { color: green, percentage: 40 },
      { color: yellow, percentage: 20 }
    ];
    return (
      <>
        <ProgressBar data={chartData} {...args} />
        <ProgressBarSegmentLegend data={chartData} />
      </>
    );
  }
};
