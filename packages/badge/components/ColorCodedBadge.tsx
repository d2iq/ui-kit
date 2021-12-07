import * as React from "react";
import { tintContent } from "../../shared/styles/styleUtils";
import { Badge } from "../";
import { Icon } from "../../icon";
import { SystemIcons } from "../../icons/dist/system-icons-enum";
import { SpacingBox } from "../../styleUtils/modifiers";
import { iconSizes } from "../../shared/styles/styleUtils/layout/iconSizes";

export interface ColorCodedBadgeProps {
  color?: React.CSSProperties["color"];
  iconShape?: SystemIcons;
  children?: JSX.Element | string;
}

const ICON_SIZE = "xxs";

const ColorCodedBadge = ({
  children,
  color,
  iconShape
}: ColorCodedBadgeProps) => {
  const iconSize = parseInt(iconSizes[ICON_SIZE], 10);

  return (
    <Badge appearance="outline">
      {iconShape ? (
        <Icon shape={iconShape} size={ICON_SIZE} color={color} />
      ) : (
        <svg
          className={tintContent(color)}
          width={iconSize}
          height={iconSize}
          viewBox={`0 0 ${iconSize} ${iconSize}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx={iconSize / 2} cy={iconSize / 2} r={iconSize / 2} />
        </svg>
      )}
      <SpacingBox display="inline-block" spacingSize="xxs" side="left">
        {children}
      </SpacingBox>
    </Badge>
  );
};

export default ColorCodedBadge;
