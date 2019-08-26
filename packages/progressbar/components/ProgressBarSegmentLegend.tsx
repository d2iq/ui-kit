import * as React from "react";
import { Flex, FlexItem } from "../../styleUtils/layout";
import { ProgressBarDatum } from "./ProgressBar";
import { legendDot } from "../style";

export interface ProgressBarProps {
  /**
   * Objects that define the size and color of segments in the progress bar
   */
  data: ProgressBarDatum[];
}

const LegendItem = ({ color, percentage }: ProgressBarDatum) => (
  <Flex align="center" gutterSize="xxs">
    <FlexItem flex="shrink">
      <div className={legendDot(color)} />
    </FlexItem>
    <FlexItem>{percentage}%</FlexItem>
  </Flex>
);

const ProgressBarSegmentLegend = ({ data }) => (
  <Flex align="center" gutterSize="s">
    {data.map((datum, i) => (
      <FlexItem flex="shrink" key={`pbSegmentLegend-${i}`}>
        <LegendItem {...datum} />
      </FlexItem>
    ))}
  </Flex>
);

export default ProgressBarSegmentLegend;
