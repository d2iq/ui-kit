import * as React from "react";
import { Flex, FlexItem } from "../../styleUtils/layout";

export interface EmptyStateActionsProps {
  primaryAction: React.ReactNode;
  secondaryAction?: React.ReactNode;
}

const EmptyStateActions: React.SFC<EmptyStateActionsProps> = ({
  primaryAction,
  secondaryAction
}) => (
  <Flex align="center" justify="center" gutterSize="m">
    {secondaryAction ? (
      <FlexItem flex="shrink">{secondaryAction}</FlexItem>
    ) : null}
    {primaryAction ? <FlexItem flex="shrink">{primaryAction}</FlexItem> : null}
  </Flex>
);

export default EmptyStateActions;
