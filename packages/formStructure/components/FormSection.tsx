import * as React from "react";
import { SpacingBox } from "../../styleUtils/modifiers";

export interface FormSectionProps {
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

const FormSection = ({
  children,
  className,
  "data-cy": dataCy = "formSection"
}: FormSectionProps) => (
  <SpacingBox
    className={className}
    side="bottom"
    spacingSize="xl"
    data-cy={dataCy}
  >
    {children}
  </SpacingBox>
);

export default FormSection;
