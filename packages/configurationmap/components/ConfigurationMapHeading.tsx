import * as React from "react";
import { cx } from "emotion";
import { padding, border } from "../../shared/styles/styleUtils";
import { configurationMapHeadingStyle } from "../style";

interface ConfigurationMapHeadingProps {
  /**
   * What to render as the heading content
   */
  children: React.ReactNode;
  /**
   * Priority of the heading. Numbers map to <h1> through <h6>
   */
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
}

const ConfigurationMapHeading: React.StatelessComponent<ConfigurationMapHeadingProps> = props => {
  const { children, headingLevel = 1 } = props;
  // TODO: when we have our typographic scale and component for headings,
  // use those header components instead of HTML headings
  const Heading: keyof React.ReactHTML = `h${headingLevel}` as
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6";

  return (
    <Heading
      className={cx(
        configurationMapHeadingStyle,
        padding("bottom", "xs"),
        border("bottom")
      )}
      data-cy="configurationMapHeading"
    >
      {children}
    </Heading>
  );
};

export default ConfigurationMapHeading;
