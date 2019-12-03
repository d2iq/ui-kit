import * as React from "react";
import { formFieldStack } from "../style";

const FormSectionBody = ({ children }) => (
  <div className={formFieldStack} data-cy="formSectionBody">
    {children}
  </div>
);

export default FormSectionBody;
