import * as React from "react";
import { SpacingBox } from "../../styleUtils/modifiers";
import { HeadingText1 } from "../../styleUtils/typography";

const FormTitle: React.SFC = ({ children }) => (
  <SpacingBox side="bottom" spacingSize="l">
    <HeadingText1 dataCy="formTitle">{children}</HeadingText1>
  </SpacingBox>
);

export default FormTitle;
