import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import { DonutChart } from "../index";
import { purple, pink, blue } from "../../design-tokens/build/js/designTokens";
import { css } from "emotion";

const readme = require("../README.md");

const chartWrapper = css`
  max-width: 150px;
`;

storiesOf("Charts/DonutChart", module)
  .addDecorator(withReadme([readme]))
  .add("default", () => (
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
  ))
  .add("with center label + text", () => (
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
  ))
  .add("multiple segments", () => (
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
  ));
