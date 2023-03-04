import * as React from "react";
import Icon, { IconProps } from "../../icon/components/Icon";

const PopoverListItemIcon = ({ size = "xs", ...props }: IconProps) => (
  <Icon size={size} {...props} />
);

export default PopoverListItemIcon;
