import { css, cx } from "@emotion/css";
import * as React from "react";
import { greyLight } from "../../design-tokens/build/js/designTokens";
import { sectionLoadingWrapper, sectionLoadingIndicator } from "../style";

export interface SectionLoadingIndicatorProps {
  /** Custom color for the loading indicator */
  color?: string;
  /**
   * Human-readable selector used for writing tests
   */
  "data-cy"?: string;
  /**
   * Allows custom styling
   */
  className?: string;
}

const SectionLoadingIndicator = ({
  color,
  className,
  "data-cy": dataCy = "sectionLoadingIndicator"
}: SectionLoadingIndicatorProps) => {
  return (
    <div className={cx(sectionLoadingWrapper, className)}>
      <div
        data-cy={dataCy}
        className={css(sectionLoadingIndicator, {
          backgroundColor: color || greyLight
        })}
      />
    </div>
  );
};

export default SectionLoadingIndicator;
