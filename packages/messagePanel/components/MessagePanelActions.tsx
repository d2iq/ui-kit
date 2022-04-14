import * as React from "react";
import { Flex, FlexItem } from "../../styleUtils/layout";

export interface MessagePanelActionsProps {
  primaryAction: React.ReactNode;
  secondaryAction?: React.ReactNode;
}

const MessagePanelActions = ({
  primaryAction,
  secondaryAction
}: MessagePanelActionsProps) => (
  <Flex align="center" justify="center" gutterSize="m">
    {secondaryAction ? (
      <FlexItem flex="shrink">{secondaryAction}</FlexItem>
    ) : null}
    {primaryAction ? <FlexItem flex="shrink">{primaryAction}</FlexItem> : null}
  </Flex>
);

export default MessagePanelActions;
