import * as React from "react";
import Avatar, { AvatarProps } from "../../avatar/components/Avatar";

interface PopoverListItemAvatarProps extends AvatarProps {
  /**
   * Which side of the menu item the avatar appears on
   */
  position?: "start" | "end";
}

const PopoverListItemAvatar = (props: PopoverListItemAvatarProps) => (
  <Avatar {...props} />
);

PopoverListItemAvatar.defaultProps = {
  size: "xs",
  position: "start"
};

export default PopoverListItemAvatar;
