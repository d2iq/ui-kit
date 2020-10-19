import * as React from "react";
import { SpacingBox } from "../../styleUtils/modifiers";

const PageHeaderBody: React.FC = ({ children }) => (
  <SpacingBox side="top" spacingSize="l">
    {children}
  </SpacingBox>
);

export default PageHeaderBody;
