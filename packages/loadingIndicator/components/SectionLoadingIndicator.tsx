import { css } from "@emotion/css";
import * as React from "react";
import { greyLight } from "../../design-tokens/build/js/designTokens";
import { sectionLoadingWrapper, sectionLoadingIndicator } from "../style";

export interface SectionLoadingIndicatorProps {
  /** Custom color for the loading indicator */
  color?: string;
}

const SectionLoadingIndicator = ({ color }: SectionLoadingIndicatorProps) => {
  return (
    <div className={sectionLoadingWrapper}>
      <div
        data-cy="sectionLoadingIndicator"
        className={css(sectionLoadingIndicator, {
          backgroundColor: color || greyLight
        })}
      />
    </div>
  );
};

export default SectionLoadingIndicator;
