import * as React from "react";
import { DonutChart } from "../index";
import { Meta } from "@storybook/react";
import { purple, pink, blue } from "../../design-tokens/build/js/designTokens";
import { css } from "@emotion/css";

const chartWrapper = css`
  max-width: 150px;
`;

export default {
  title: "Charts/DonutChart",
  component: DonutChart
} as Meta;

const Template = args => (
  <div className={chartWrapper}>
    <DonutChart
      data={[
        {
          percentage: 25,
          color: purple
        }
      ]}
      {...args}
    />
  </div>
);

export const Default = {
  render: Template
};

export const WithCenterLabelText = {
  render: Template,

  args: {
    label: "25%",
    text: "1 of 4"
  }
};

export const MultipleSegments = {
  render: Template,

  args: {
    data: [
      {
        percentage: 10,
        color: purple
      },
      {
        percentage: 30,
        color: pink
      },
      {
        percentage: 20,
        color: blue
      }
    ]
  }
};
