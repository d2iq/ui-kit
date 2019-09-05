import * as React from "react";
import ClickToCopy, { ClickToCopyBaseProps } from "./ClickToCopy";
import { Box } from "../../styleUtils/modifiers";
import Clickable from "../../clickable/components/clickable";
import Icon from "../../icon/components/Icon";
import { SystemIcons } from "../../icons/dist/system-icons-enum";
import { tintContent } from "../../shared/styles/styleUtils";

interface ClickToCopyButtonProps extends ClickToCopyBaseProps {
  children?: React.ReactNode;
  /**
   * Color of the clipboard icon or button content
   */
  color?: React.CSSProperties["color"];
}

const ClickToCopyButton = ({
  children,
  color,
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
              <Icon shape={SystemIcons.Clipboard} color={color} />
            </Box>
          )}
        </Clickable>
      )}
    </ClickToCopy>
  );
};

export default ClickToCopyButton;
