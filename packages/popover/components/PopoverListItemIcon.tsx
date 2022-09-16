import * as React from "react";
import Icon, { IconProps } from "../../icon/components/Icon";

interface PopoverListItemIconProps extends IconProps {
  /**
   * Which side of the menu item the icon appears on
   */
  position?: "start" | "end";
}

const PopoverListItemIcon = (props: PopoverListItemIconProps) => (
  <Icon {...props} />
);

PopoverListItemIcon.defaultProps = {
  size: "xs",
  position: "start"
};

export default PopoverListItemIcon;
