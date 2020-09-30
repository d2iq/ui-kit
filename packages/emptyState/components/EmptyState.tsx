import * as React from "react";
import { emptyStateContainer, vertAlignHeading } from "../style";
import { Card } from "../../card";
import { SpacingBox } from "../../styleUtils/modifiers";
import { HeadingText2 } from "../../styleUtils/typography";
import { breakWord } from "../../shared/styles/styleUtils";
import EmptyStateActions from "./EmptyStateActions";
import { Icon } from "../../icon";
import { SystemIcons } from "../../icons/dist/system-icons-enum";
import {
  themeError,
  iconSizeXs
} from "../../design-tokens/build/js/designTokens";

export interface EmptyStateProps {
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

const EmptyState: React.FC<EmptyStateProps> = ({
  appearance,
  heading,
  children,
  primaryAction,
  secondaryAction
}) => {
  const hasActions = primaryAction || secondaryAction;

  return (
    <div className={emptyStateContainer} data-cy="emptyState">
      <Card paddingSize="xxl">
        <SpacingBox side="bottom" spacingSize="xs">
          <HeadingText2 align="center">
            {appearance === "error" ? (
              <>
                <Icon
                  shape={SystemIcons.CircleClose}
                  color={themeError}
                  size={iconSizeXs}
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
          <EmptyStateActions
            primaryAction={primaryAction}
            secondaryAction={secondaryAction}
          />
        )}
      </Card>
    </div>
  );
};

EmptyState.defaultProps = {
  appearance: "standard"
};

export default EmptyState;
