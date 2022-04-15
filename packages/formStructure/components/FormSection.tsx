import * as React from "react";
import { SpacingBox } from "../../styleUtils/modifiers";

const FormSection = ({ children }) => (
  <SpacingBox side="bottom" spacingSize="xl" data-cy="formSection">
    {children}
  </SpacingBox>
);

export default FormSection;
