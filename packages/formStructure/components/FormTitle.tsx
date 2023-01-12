import * as React from "react";
import { SpacingBox } from "../../styleUtils/modifiers";
import { HeadingText1 } from "../../styleUtils/typography";

export interface FormTitleProps {
  children?: React.ReactNode;
  /**
   * Allows custom styling
   */
  className?: string;
  /**
   * Human-readable selector used for writing tests
   */
  "data-cy"?: string;
}

const FormTitle = ({
  children,
  className,
  "data-cy": dataCy = "formTitle"
}: FormTitleProps) => (
  <SpacingBox className={className} side="bottom" spacingSize="l">
    <HeadingText1 data-cy={dataCy}>{children}</HeadingText1>
  </SpacingBox>
);

export default FormTitle;
