import * as React from "react";
import { SpacingBox } from "../../styleUtils/modifiers";

export interface FormSectionProps {
  children?: React.ReactNode;
  /**
   * Allows custom styling
   */
  className?: string;
}

const FormSection = ({ children, className }: FormSectionProps) => (
  <SpacingBox
    className={className}
    side="bottom"
    spacingSize="xl"
    data-cy="formSection"
  >
    {children}
  </SpacingBox>
);

export default FormSection;
