import * as React from "react";
import { messagePanelContainer } from "../style";
import { Card } from "../../card";
import { SpacingBox } from "../../styleUtils/modifiers";
import { HeadingText2 } from "../../styleUtils/typography";
import { breakWord } from "../../shared/styles/styleUtils";
import MessagePanelActions from "./MessagePanelActions";

export interface MessagePanelProps {
  children?: React.ReactNode;
  /**
   * A heading to provide a brief overview of why an empty state is appearing
   */
  heading: string;
  /**
   * The most important action a user can take in the empty state
   */
  primaryAction?: React.ReactNode;
  /**
   * A secondary action a user can take in the empty state
   */
  secondaryAction?: React.ReactNode;
}

const MessagePanel: React.SFC<MessagePanelProps> = ({
  heading,
  children,
  primaryAction,
  secondaryAction
}: MessagePanelProps) => {
  const hasActions = primaryAction || secondaryAction;

  return (
    <div className={messagePanelContainer} data-cy="messagePanel">
      <Card paddingSize="xxl">
        <SpacingBox side="bottom" spacingSize="xs">
          <HeadingText2 align="center">{heading}</HeadingText2>
        </SpacingBox>
        {children && (
          <SpacingBox
            side="bottom"
            spacingSize={hasActions ? "l" : "none"}
            textAlign="center"
            className={breakWord}
          >
            {children}
          </SpacingBox>
        )}
        {(primaryAction || secondaryAction) && (
          <MessagePanelActions
            primaryAction={primaryAction}
            secondaryAction={secondaryAction}
          />
        )}
      </Card>
    </div>
  );
};

export default MessagePanel;
