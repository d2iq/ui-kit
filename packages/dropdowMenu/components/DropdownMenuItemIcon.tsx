import * as React from "react";
import { iconSizeXs } from "../../design-tokens/build/js/designTokens";
import Icon, { IconProps } from "../../icon/components/Icon";

interface DropdownItemAvatarProps extends IconProps {
  /**
   * Which side of the menu item the icon appears on
   */
  position?: "start" | "end";
}

const DropdownMenuItemIcon: React.SFC<DropdownItemAvatarProps> = props => (
  <Icon {...props} />
);

DropdownMenuItemIcon.defaultProps = {
  size: iconSizeXs,
  position: "start"
};

export default DropdownMenuItemIcon;
