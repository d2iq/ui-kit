import * as React from "react";
import {
  themeBorder,
  themeBrandPrimary
} from "../../design-tokens/build/js/designTokens";
import { tintContentSecondary } from "../../shared/styles/styleUtils/typography/color";
import { hexToRgbA } from "../../shared/styles/color";
import getCSSVarValue from "../../utilities/getCSSVarValue";

interface DonutChartDatum {
  percentage: number;
  color?: React.CSSProperties["stroke"];
}

export interface DonutChartProps {
  /**
   * objects that define the size and color of segments in the donut chart
   */
  data: DonutChartDatum[];
  /**
   * the primary piece of data in the chart - appears large
   */
  label?: string;
  /**
   * a caption for the label
   */
  text?: string;
}

class DonutChart extends React.PureComponent<DonutChartProps, {}> {
  public render() {
    const { data, label, text } = this.props;
    const strokeWidth = 1.5;
    const radius = 100 / (Math.PI * 2);
    const diameter = radius * 2 + strokeWidth;
    const circleCenter = diameter / 2;

    return (
      <svg viewBox={`0 0 ${diameter} ${diameter}`} data-cy="donutChart">
        <circle
          cx={circleCenter}
          cy={circleCenter}
          r={radius}
          fill="transparent"
          strokeWidth={strokeWidth}
          style={{ stroke: hexToRgbA(getCSSVarValue(themeBorder), 0.65) }}
        />
        {data.map((datum, i) => {
          const { percentage, color } = datum;
          const precedingTotal = data
            .slice(0, i)
            .reduce((acc, curr) => acc + curr.percentage, 0);

          // total - sum of preceding segments + 1/4 total to offset the segments -90deg
          const dashoffset = 100 - precedingTotal + 25;

          return (
            <circle
              key={i}
              cx={circleCenter}
              cy={circleCenter}
              r={radius}
              fill="none"
              strokeWidth={strokeWidth}
              strokeDasharray={`${percentage} ${100 - percentage}`}
              strokeDashoffset={dashoffset}
              style={{ stroke: color || themeBrandPrimary }}
            />
          );
        })}
        <text
          x={circleCenter}
          y={circleCenter}
          style={{ textAnchor: "middle" }}
        >
          <tspan
            dominantBaseline={text ? "unset" : "central"}
            fontSize={6}
            data-cy="donutChart-label"
          >
            {label}
          </tspan>
          {text && (
            <tspan
              x={circleCenter}
              y={circleCenter + 3 * 1.4} // adding font size plus a line height of 1.4 to create a visual line break
              fontSize={3}
              className={tintContentSecondary}
              data-cy="donutChart-text"
            >
              {text}
            </tspan>
          )}
        </text>
      </svg>
    );
  }
}

export default DonutChart;
