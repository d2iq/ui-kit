import * as React from "react";
import { SpacingBox } from "../../styleUtils/modifiers";

const FormSectionFooter: React.FC = ({ children }) => (
  <SpacingBox side="top" spacingSize="m" data-cy="formSectionFooter">
    {children}
  </SpacingBox>
);

export default FormSectionFooter;
