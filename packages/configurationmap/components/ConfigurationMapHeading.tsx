import * as React from "react";
import { cx } from "@emotion/css";
import { padding, border } from "../../shared/styles/styleUtils";
import { configurationMapHeadingStyle } from "../style";
import {
  HeadingText1,
  HeadingText2,
  HeadingText3
} from "../../styleUtils/typography";

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

interface ConfigurationMapHeadingProps {
  /**
   * Priority of the heading. Numbers map to <h1> through <h6>
   */
  headingLevel?: HeadingLevel;
  /**
   * Which HTML tag to render the text in
   */
  tag?: keyof React.ReactHTML;
  /**
   * Allows custom styling
   */
  className?: string;
  /**
   * Human-readable selector used for writing tests
   */
  "data-cy"?: string;
  children: React.ReactNode;
}

const getHeadingTextComponent = (headingLevel: HeadingLevel) => {
  switch (headingLevel) {
    case 1:
      return HeadingText1;
    case 2:
      return HeadingText2;
    default:
      return HeadingText3;
  }
};

const ConfigurationMapHeading = ({
  children,
  headingLevel = 1,
  tag,
  className,
  "data-cy": dataCy = "configurationMapHeading"
}: ConfigurationMapHeadingProps) => {
  const headingTag: keyof React.ReactHTML = `h${headingLevel}` as
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6";

  const HeadingTextComponent = getHeadingTextComponent(headingLevel);

  return (
    <div
      className={cx(
        configurationMapHeadingStyle,
        padding("bottom", "xs"),
        border("bottom"),
        className
      )}
      data-cy={dataCy}
    >
      <HeadingTextComponent tag={tag || headingTag}>
        {children}
      </HeadingTextComponent>
    </div>
  );
};

export default ConfigurationMapHeading;
