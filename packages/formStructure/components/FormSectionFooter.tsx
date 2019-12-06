import * as React from "react";
import { SpacingBox } from "../../styleUtils/modifiers";

const FormSectionFooter: React.SFC = ({ children }) => (
  <SpacingBox side="top" spacingSize="m" dataCy="formSectionFooter">
    {children}
  </SpacingBox>
);

export default FormSectionFooter;
