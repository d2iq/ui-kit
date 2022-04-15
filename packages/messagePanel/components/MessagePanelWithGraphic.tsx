import * as React from "react";
import { SpacingBox } from "../../styleUtils/modifiers";
import { HeadingText2 } from "../../styleUtils/typography";
import { MessagePanelProps } from "./MessagePanel";
import MessagePanelActions from "./MessagePanelActions";
import { messagePanelGraphic, messagePanelWithGraphicBody } from "../style";

interface GraphicDimensions {
  width?: number;
  height?: number;
}

interface MessagePanelWithGraphicProps extends MessagePanelProps {
  /**
   * The source of the image that appears in the empty state
   */
  graphicSrc: string;
  /**
   * The expected width and/or height dimensions of the graphic
   */
  graphicDimensions?: GraphicDimensions;
}

const MessagePanelWithGraphic = ({
  graphicSrc,
  graphicDimensions,
  heading,
  children,
  primaryAction,
  secondaryAction
}: MessagePanelWithGraphicProps) => {
  const hasActions = primaryAction || secondaryAction;
  return (
    <div data-cy="messagePanelWithGraphic">
      <SpacingBox spacingSize="xl" side="bottom">
        <img
          src={graphicSrc}
          height={graphicDimensions && graphicDimensions.height}
          width={graphicDimensions && graphicDimensions.width}
          className={messagePanelGraphic}
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
        <div className={messagePanelWithGraphicBody}>{children}</div>
      </SpacingBox>
      {(primaryAction || secondaryAction) && (
        <MessagePanelActions
          primaryAction={primaryAction}
          secondaryAction={secondaryAction}
        />
      )}
    </div>
  );
};

export default MessagePanelWithGraphic;
