import * as React from "react";
import { iconSizeXs } from "../../design-tokens/build/js/designTokens";
import Avatar, { AvatarProps } from "../../avatar/components/Avatar";

interface PopoverListItemAvatarProps extends AvatarProps {
  /**
   * Which side of the menu item the avatar appears on
   */
  position?: "start" | "end";
}

const PopoverListItemAvatar: React.SFC<PopoverListItemAvatarProps> = props => (
  <Avatar {...props} />
);

PopoverListItemAvatar.defaultProps = {
  size: iconSizeXs,
  position: "start"
};

export default PopoverListItemAvatar;
