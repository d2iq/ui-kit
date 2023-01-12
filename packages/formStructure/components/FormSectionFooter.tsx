import * as React from "react";
import { SpacingBox } from "../../styleUtils/modifiers";

export interface FormSectionFooterProps {
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

const FormSectionFooter = ({
  children,
  className,
  "data-cy": dataCy = "formSectionFooter"
}: FormSectionFooterProps) => (
  <SpacingBox className={className} side="top" spacingSize="m" data-cy={dataCy}>
    {children}
  </SpacingBox>
);

export default FormSectionFooter;
