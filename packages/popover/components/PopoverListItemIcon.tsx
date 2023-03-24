import * as React from "react";
import Icon, { IconProps } from "../../icon/components/Icon";

interface PopoverListItemIconProps extends IconProps {
  /**
   * Which side of the menu item the icon appears on
   */
  position?: "start" | "end";
}

const PopoverListItemIcon = ({
  size = "xs",
  position = "start",
  ...props
}: PopoverListItemIconProps) => (
  <Icon size={size} {...{ ...props, position }} />
);

export default PopoverListItemIcon;
