import * as React from "react";
import { SpacingBox } from "../../styleUtils/modifiers";
import { HeadingText1 } from "../../styleUtils/typography";

export interface FormTitleProps {
  children?: React.ReactNode | React.ReactNode[];
}

const FormTitle = ({ children }: FormTitleProps) => (
  <SpacingBox side="bottom" spacingSize="l">
    <HeadingText1 data-cy="formTitle">{children}</HeadingText1>
  </SpacingBox>
);

export default FormTitle;
