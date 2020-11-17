import * as React from "react";
import { SpacingBox } from "../../styleUtils/modifiers";
import { HeadingText1 } from "../../styleUtils/typography";

const FormTitle: React.FC = ({ children }) => (
  <SpacingBox side="bottom" spacingSize="l">
    <HeadingText1 data-cy="formTitle">{children}</HeadingText1>
  </SpacingBox>
);

export default FormTitle;
