import * as React from "react";
import Avatar, { AvatarProps } from "../../avatar/components/Avatar";

const PopoverListItemAvatar = ({ size = "xs", ...props }: AvatarProps) => (
  <Avatar size={size} {...props} />
);

export default PopoverListItemAvatar;
