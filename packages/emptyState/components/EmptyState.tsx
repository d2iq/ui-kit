import * as React from "react";
import { emptyStateContainer } from "../style";
import { Card } from "../../card";
import { SpacingBox } from "../../styleUtils/modifiers";
import { HeadingText2 } from "../../styleUtils/typography";
import { breakWord } from "../../shared/styles/styleUtils";
import EmptyStateActions from "./EmptyStateActions";

export interface EmptyStateProps {
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

const EmptyState: React.SFC<EmptyStateProps> = ({
  heading,
  children,
  primaryAction,
  secondaryAction
}: EmptyStateProps) => {
  const hasActions = primaryAction || secondaryAction;

  return (
    <div className={emptyStateContainer} data-cy="emptyState">
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
          <EmptyStateActions
            primaryAction={primaryAction}
            secondaryAction={secondaryAction}
          />
        )}
      </Card>
    </div>
  );
};

export default EmptyState;
