import * as React from "react";
import Icon, { IconProps } from "../../icon/components/Icon";

interface PopoverListItemProps extends IconProps {
  /**
   * Which side of the menu item the icon appears on
   */
  position?: "start" | "end";
}

const PopoverListItemIcon: React.SFC<PopoverListItemProps> = props => (
  <Icon {...props} />
);

PopoverListItemIcon.defaultProps = {
  size: "xs",
  position: "start"
};

export default PopoverListItemIcon;
