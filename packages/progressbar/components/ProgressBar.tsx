import * as React from "react";
import { cx } from "emotion";
import { Flex, FlexItem } from "../../styleUtils/layout";
import { progressBar, progressBarStaged, progressBarFill } from "../style";
import {
  tintContentSecondary,
  textSize,
  padding,
  textWeight
} from "../../shared/styles/styleUtils";

export interface ProgressBarDatum {
  percentage: number;
  color?: React.CSSProperties["fill"];
}

export enum ProgressBarSizes {
  LARGE = "large",
  DEFAULT = "default"
}

export interface ProgressBarProps {
  /**
   * A very short description of the data being presented
   */
  caption?: React.ReactNode;
  /**
   * Objects that define the proportion and color of segments in the progress bar
   */
  data: ProgressBarDatum[];
  /**
   * Whether the data being represennted is still being calculated or is related to a task that is still in-flight
   */
  isProcessing?: boolean;
  /**
   * The primary piece of data being represented
   */
  value?: React.ReactNode;
  /**
   * Which size variant to use
   */
  size?: ProgressBarSizes;
}

class ProgressBar extends React.PureComponent<ProgressBarProps, {}> {
  public render() {
    const { caption, data, value, size, isProcessing } = this.props;

    return (
      <React.Fragment>
        <div className={padding("bottom", "xxs")} data-cy="progressBar-text">
          <Flex align="center" justify="flex-end" gutterSize="s">
            {caption ? (
              <FlexItem>
                <span className={cx(tintContentSecondary, textSize("s"))}>
                  {caption}
                </span>
              </FlexItem>
            ) : null}
            {value ? (
              <FlexItem flex="shrink">
                <span className={textWeight("medium")}>{value}</span>
              </FlexItem>
            ) : null}
          </Flex>
        </div>
        <svg
          className={cx(progressBar(size), {
            [progressBarStaged]: isProcessing
          })}
          data-cy="progressBar-chart"
        >
          {data.map((datum, i) => {
            const { percentage, color } = datum;
            const precedingTotal = data
              .slice(0, i)
              .reduce((acc, curr) => acc + curr.percentage, 0);

            return (
              <rect
                x={`${precedingTotal}%`}
                width={`${percentage}%`}
                height="100%"
                className={progressBarFill(color)}
                key={`pbSegment-${i}`}
              />
            );
          })}
        </svg>
      </React.Fragment>
    );
  }
}

export default ProgressBar;
