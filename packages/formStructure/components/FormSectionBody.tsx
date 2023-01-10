import * as React from "react";
import { cx } from "@emotion/css";
import { formFieldStack } from "../style";

export interface FormSectionBodyProps {
  children?: React.ReactNode;
  /**
   * Allows custom styling
   */
  className?: string;
}

const FormSectionBody = ({ children, className }: FormSectionBodyProps) => (
  <div className={cx(formFieldStack, className)} data-cy="formSectionBody">
    {children}
  </div>
);

export default FormSectionBody;
