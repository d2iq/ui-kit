import * as React from "react";
import ClickToCopy, { ClickToCopyBaseProps } from "./ClickToCopy";
import { Box } from "../../styleUtils/modifiers";
import Clickable from "../../clickable/components/clickable";
import Icon from "../../icon/components/Icon";
import { SystemIcons } from "../../icons/dist/system-icons-enum";
import { tintContent } from "../../shared/styles/styleUtils";
import { IconSize } from "../../shared/types/iconSize";

interface ClickToCopyButtonProps extends ClickToCopyBaseProps {
  /**
   * Color of the clipboard icon or button content
   */
  color?: React.CSSProperties["color"];
  /**
   * Color of the clipboard icon or button content
   */
  iconSize?: IconSize;
  /**
   * Content to show
   */

  tooltipContent?: React.ReactNode;
  /**
   * Custom ID used for tooltip's id and aria attributes
   */
  tooltipId?: string;
  children?: React.ReactNode | React.ReactNode[];
}

const ClickToCopyButton = ({
  children,
  color,
  iconSize,
  tooltipContent = "Copied to clipboard",
  ...other
}: ClickToCopyButtonProps) => {
  return (
    <ClickToCopy {...other}>
      {({ onClick }) => (
        <Clickable action={onClick} tabIndex={0}>
          {children ? (
            <div className={tintContent(color)}>{children}</div>
          ) : (
            <Box display="inline-block" tag="span">
              <Icon
                shape={SystemIcons.Clipboard}
                color={color}
                size={iconSize}
              />
            </Box>
          )}
        </Clickable>
      )}
    </ClickToCopy>
  );
};

export default ClickToCopyButton;
