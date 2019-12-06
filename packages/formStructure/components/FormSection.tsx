import * as React from "react";
import { SpacingBox } from "../../styleUtils/modifiers";

const FormSection: React.SFC = ({ children }) => (
  <SpacingBox side="bottom" spacingSize="xl" dataCy="formSection">
    {children}
  </SpacingBox>
);

export default FormSection;
