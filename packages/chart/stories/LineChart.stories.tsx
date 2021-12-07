import * as React from "react";
import { Story, Meta } from "@storybook/react";
import { LineChart } from "../index";
import { LineChartProps } from "../components/LineChart";

export default {
  title: "Charts/LineChart",
  component: LineChart
} as Meta;

const Template: Story<LineChartProps> = args => (
  <LineChart
    data={{
      2006: 1,
      2007: 1,
      2008: 2,
      2009: 1,
      2010: 2,
      2012: 2,
      2013: 3,
      2014: 6,
      2015: 6,
      2016: 8,
      2017: 18,
      2018: 21,
      2019: 4
    }}
  />
);
export const Default = Template.bind({});
