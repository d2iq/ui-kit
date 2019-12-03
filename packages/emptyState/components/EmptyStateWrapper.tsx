import * as React from "react";
import { SpacingBox } from "../../styleUtils/modifiers";

const EmptyStateWrapper: React.SFC = ({ children }) => (
  <SpacingBox spacingSize={{ default: "l", medium: "xl", large: "xxl" }}>
    {children}
  </SpacingBox>
);

export default EmptyStateWrapper;
