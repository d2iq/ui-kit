import * as React from "react";
import { messagePanelContainer, vertAlignHeading } from "../style";
import { Card } from "../../card";
import { SpacingBox } from "../../styleUtils/modifiers";
import { HeadingText2 } from "../../styleUtils/typography";
import { breakWord } from "../../shared/styles/styleUtils";
import MessagePanelActions from "./MessagePanelActions";
import { Icon } from "../../icon";
import { SystemIcons } from "../../icons/dist/system-icons-enum";
import { themeError } from "../../design-tokens/build/js/designTokens";

export interface MessagePanelProps {
  /**
   * The tone of the message
   */
  appearance?: "error" | "standard";
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

const MessagePanel: React.FC<MessagePanelProps> = ({
  appearance,
  heading,
  children,
  primaryAction,
  secondaryAction
}) => {
  const hasActions = primaryAction || secondaryAction;

  return (
    <div className={messagePanelContainer} data-cy="messagePanel">
      <Card paddingSize="xxl">
        <SpacingBox side="bottom" spacingSize="xs">
          <HeadingText2 align="center">
            {appearance === "error" ? (
              <>
                <Icon
                  shape={SystemIcons.CircleClose}
                  color={themeError}
                  size="xs"
                />
                <SpacingBox
                  tag="span"
                  side="left"
                  spacingSize="xs"
                  className={vertAlignHeading}
                >
                  {heading}
                </SpacingBox>
              </>
            ) : (
              heading
            )}
          </HeadingText2>
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

MessagePanel.defaultProps = {
  appearance: "standard"
};

export default MessagePanel;
