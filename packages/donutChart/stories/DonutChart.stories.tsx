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

export const Default = Template.bind({});

export const WithCenterLabelText = Template.bind({});
WithCenterLabelText.args = {
  label: "25%",
  text: "1 of 4"
};

export const MultipleSegments = Template.bind({});
MultipleSegments.args = {
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
};
