import * as React from "react";
import { SpacingBox } from "../../styleUtils/modifiers";
import { HeadingText2 } from "../../styleUtils/typography";
import { EmptyStateProps } from "./EmptyState";
import EmptyStateActions from "./EmptyStateActions";
import { emptyStateGraphic, emptyStateWithGraphicBody } from "../style";

interface GraphicDimensions {
  width?: number;
  height?: number;
}

interface EmptyStateWithGraphicProps extends EmptyStateProps {
  /**
   * The source of the image that appears in the empty state
   */
  graphicSrc: string;
  /**
   * The expected width and/or height dimensions of the graphic
   */
  graphicDimensions?: GraphicDimensions;
}

const EmptyStateWithGraphic: React.SFC<EmptyStateWithGraphicProps> = ({
  graphicSrc,
  graphicDimensions,
  heading,
  children,
  primaryAction,
  secondaryAction
}) => {
  const hasActions = primaryAction || secondaryAction;
  return (
    <div data-cy="emptyStateWithGraphic">
      <SpacingBox spacingSize="xl" side="bottom">
        <img
          src={graphicSrc}
          height={graphicDimensions && graphicDimensions.height}
          width={graphicDimensions && graphicDimensions.width}
          className={emptyStateGraphic}
          //
          // this graphic is just decorative, so screenreaders should ignore it
          role="presentation"
          alt=""
        />
      </SpacingBox>
      <SpacingBox spacingSize={hasActions ? "xl" : "none"} side="bottom">
        <SpacingBox spacingSize="m" side="bottom">
          <HeadingText2 align="center">{heading}</HeadingText2>
        </SpacingBox>
        <div className={emptyStateWithGraphicBody}>{children}</div>
      </SpacingBox>
      {(primaryAction || secondaryAction) && (
        <EmptyStateActions
          primaryAction={primaryAction}
          secondaryAction={secondaryAction}
        />
      )}
    </div>
  );
};

export default EmptyStateWithGraphic;
