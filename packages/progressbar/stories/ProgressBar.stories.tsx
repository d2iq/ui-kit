import * as React from "react";
import { ProgressBar, ProgressBarSegmentLegend } from "../index";
import { ProgressBarSizes } from "../components/ProgressBar";
import { green, yellow } from "../../design-tokens/build/js/designTokens";

export default {
  title: "Charts/ProgressBar",
  component: ProgressBar,
  subcomponents: { ProgressBarSegmentLegend }
};

export const Default = () => <ProgressBar data={[{ percentage: 40 }]} />;

export const CustomFillColor = () => (
  <ProgressBar data={[{ color: green, percentage: 40 }]} />
);

export const Large = () => (
  <ProgressBar size={ProgressBarSizes.LARGE} data={[{ percentage: 40 }]} />
);

export const Processing = () => (
  <ProgressBar isProcessing={true} data={[{ percentage: 40 }]} />
);

export const CondensedLayout = () => (
  <ProgressBar
    isCondensedLayout={true}
    data={[{ percentage: 40 }]}
    value="40%"
  />
);

export const WithValueText = () => (
  <ProgressBar data={[{ percentage: 40 }]} value="40%" />
);

export const WithCaption = () => (
  <ProgressBar caption="Caption" data={[{ percentage: 40 }]} />
);

export const WithValueTextAndCaption = () => (
  <ProgressBar caption="Caption" data={[{ percentage: 40 }]} value="40%" />
);

export const DataSegments = () => (
  <ProgressBar
    data={[
      { color: green, percentage: 40 },
      { color: yellow, percentage: 20 }
    ]}
  />
);

export const DataSegmentsWithLegend = () => {
  const chartData = [
    { color: green, percentage: 40 },
    { color: yellow, percentage: 20 }
  ];
  return (
    <>
      <ProgressBar data={chartData} />
      <ProgressBarSegmentLegend data={chartData} />
    </>
  );
};
