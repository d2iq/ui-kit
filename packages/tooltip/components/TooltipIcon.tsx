import React from "react";
import { SystemIcons } from "../../icons/dist/system-icons-enum";
import { Icon } from "../../icon";
import { greyLightDarken1 } from "../../design-tokens/build/js/designTokens";
import { IconProps } from "../../icon/components/Icon";

interface TooltipIconProps extends Omit<IconProps, "shape"> {
  /**
   * Icon to display, choose either (i) or (?).
   */
  shape?: string;
}

const TooltipIcon = ({
  shape = SystemIcons.CircleInformation,
  ...iconProps
}: TooltipIconProps) => {
  return (
    <Icon shape={shape} size="xs" color={greyLightDarken1} {...iconProps} />
  );
};

export default TooltipIcon;
