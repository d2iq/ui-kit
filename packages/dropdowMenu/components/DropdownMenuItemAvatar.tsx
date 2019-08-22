import * as React from "react";
import { iconSizeXs } from "../../design-tokens/build/js/designTokens";
import Avatar, { AvatarProps } from "../../avatar/components/Avatar";

interface DropdownItemAvatarProps extends AvatarProps {
  /**
   * Which side of the menu item the avatar appears on
   */
  position?: "start" | "end";
}

const DropdownMenuItemAvatar: React.SFC<DropdownItemAvatarProps> = props => (
  <Avatar {...props} />
);

DropdownMenuItemAvatar.defaultProps = {
  size: iconSizeXs,
  position: "start"
};

export default DropdownMenuItemAvatar;
