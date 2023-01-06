import * as React from "react";
import { SpacingBox } from "../../styleUtils/modifiers";

export interface FormSectionFooterProps {
  className?: string;
  children?: React.ReactNode;
}

const FormSectionFooter = ({ children, className }: FormSectionFooterProps) => (
  <SpacingBox
    className={className}
    side="top"
    spacingSize="m"
    data-cy="formSectionFooter"
  >
    {children}
  </SpacingBox>
);

export default FormSectionFooter;
