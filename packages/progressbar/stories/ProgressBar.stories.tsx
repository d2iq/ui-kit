import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import { ProgressBar, ProgressBarSegmentLegend } from "../index";
import { ProgressBarSizes } from "../components/ProgressBar";
import { green, yellow } from "../../design-tokens/build/js/designTokens";

const readme = require("../README.md");

storiesOf("Charts| ProgressBar", module)
  .addDecorator(withReadme([readme]))
  .add("default", () => <ProgressBar data={[{ percentage: 40 }]} />)
  .add("custom fill color", () => (
    <ProgressBar data={[{ color: green, percentage: 40 }]} />
  ))
  .add("large", () => (
    <ProgressBar size={ProgressBarSizes.LARGE} data={[{ percentage: 40 }]} />
  ))
  .add("isProcessing", () => (
    <ProgressBar isProcessing={true} data={[{ percentage: 40 }]} />
  ))
  .add("using condensed layout", () => (
    <ProgressBar
      isCondensedLayout={true}
      data={[{ percentage: 40 }]}
      value="40%"
    />
  ))
  .add("with value text", () => (
    <ProgressBar data={[{ percentage: 40 }]} value="40%" />
  ))
  .add("with caption", () => (
    <ProgressBar caption="Caption" data={[{ percentage: 40 }]} />
  ))
  .add("with value text and caption", () => (
    <ProgressBar caption="Caption" data={[{ percentage: 40 }]} value="40%" />
  ))
  .add("data segments", () => (
    <ProgressBar
      data={[
        { color: green, percentage: 40 },
        { color: yellow, percentage: 20 }
      ]}
    />
  ))
  .add("data segments with legend", () => {
    const chartData = [
      { color: green, percentage: 40 },
      { color: yellow, percentage: 20 }
    ];
    return (
      <React.Fragment>
        <ProgressBar data={chartData} />
        <ProgressBarSegmentLegend data={chartData} />
      </React.Fragment>
    );
  });
