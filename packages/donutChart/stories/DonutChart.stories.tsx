import * as React from "react";
import { DonutChart } from "../index";
import { purple, pink, blue } from "../../design-tokens/build/js/designTokens";
import { css } from "@emotion/css";

const chartWrapper = css`
  max-width: 150px;
`;

export default {
  title: "Charts/DonutChart",
  component: DonutChart
};

export const Default = () => (
  <div className={chartWrapper}>
    <DonutChart
      data={[
        {
          percentage: 25,
          color: purple
        }
      ]}
    />
  </div>
);

export const WithCenterLabelText = () => (
  <div className={chartWrapper}>
    <DonutChart
      data={[
        {
          percentage: 25,
          color: purple
        }
      ]}
      label="25%"
      text="1 of 4"
    />
  </div>
);

export const MultipleSegments = () => (
  <div className={chartWrapper}>
    <DonutChart
      data={[
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
      ]}
    />
  </div>
);
