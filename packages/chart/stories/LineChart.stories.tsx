import * as React from "react";
import { LineChart } from "../index";

export default {
  title: "Charts/LineChart",
  component: LineChart
};

export const Default = () => (
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
