import * as React from "react";
import { SpacingBox } from "../../styleUtils/modifiers";

export interface FormSectionFooterProps {
  children?: React.ReactNode | React.ReactNode[];
}

const FormSectionFooter = ({ children }: FormSectionFooterProps) => (
  <SpacingBox side="top" spacingSize="m" data-cy="formSectionFooter">
    {children}
  </SpacingBox>
);

export default FormSectionFooter;
