import * as React from "react";
import { tintContent } from "../../shared/styles/styleUtils";
import { Badge } from "../";
import { Icon } from "../../icon";
import { iconSizeXxs } from "../../design-tokens/build/js/designTokens";
import { SystemIcons } from "../../icons/dist/system-icons-enum";
import { SpacingBox } from "../../styleUtils/modifiers";

interface ColorCodedBadgeProps {
  color?: React.CSSProperties["color"];
  iconShape?: SystemIcons;
}

const ICON_SIZE = iconSizeXxs;

const ColorCodedBadge: React.FC<ColorCodedBadgeProps> = ({
  children,
  color,
  iconShape
}) => {
  return (
    <Badge appearance="outline">
      {iconShape ? (
        <Icon shape={iconShape} size={ICON_SIZE} color={color} />
      ) : (
        <svg
          className={tintContent(color)}
          width={parseInt(ICON_SIZE, 10)}
          height={parseInt(ICON_SIZE, 10)}
          viewBox={`0 0 ${parseInt(ICON_SIZE, 10)} ${parseInt(ICON_SIZE, 10)}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx={parseInt(ICON_SIZE, 10) / 2}
            cy={parseInt(ICON_SIZE, 10) / 2}
            r={parseInt(ICON_SIZE, 10) / 2}
          />
        </svg>
      )}
      <SpacingBox display="inline-block" spacingSize="xxs" side="left">
        {children}
      </SpacingBox>
    </Badge>
  );
};

export default ColorCodedBadge;
