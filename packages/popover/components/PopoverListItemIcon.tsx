import * as React from "react";
import { iconSizeXs } from "../../design-tokens/build/js/designTokens";
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
  size: iconSizeXs,
  position: "start"
};

export default PopoverListItemIcon;
