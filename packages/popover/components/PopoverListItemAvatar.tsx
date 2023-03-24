import * as React from "react";
import Avatar, { AvatarProps } from "../../avatar/components/Avatar";

interface PopoverListItemAvatarProps extends AvatarProps {
  /**
   * Which side of the menu item the avatar appears on
   */
  position?: "start" | "end";
}

const PopoverListItemAvatar = ({
  size = "xs",
  position = "start",
  ...props
}: PopoverListItemAvatarProps) => (
  <Avatar size={size} {...{ ...props, position }} />
);

export default PopoverListItemAvatar;
