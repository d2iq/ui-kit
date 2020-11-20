import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";

import { LineChart } from "../index";

import readme from "../README.md";

storiesOf("Charts|LineChart", module)
  .addParameters({
    readme: {
      sidebar: readme,
    },
  })
  .add("default", () => (
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
  ));
