import * as React from "react";
import { SpacingBox } from "../../styleUtils/modifiers";

const MessagePanelWrapper: React.SFC = ({ children }) => (
  <SpacingBox spacingSize={{ default: "l", medium: "xl", large: "xxl" }}>
    {children}
  </SpacingBox>
);

export default MessagePanelWrapper;
