import * as React from "react";
import { cx } from "emotion";
import { tintSVG } from "../../shared/styles/styleUtils";
import {
  iconSizeXxs,
  iconSizeXs,
  iconSizeS,
  iconSizeM,
  iconSizeL,
  iconSizeXl,
  iconSizeXxl
} from "../../design-tokens/build/js/designTokens";
import { SystemIcons } from "../../icons/dist/system-icons-enum";
import { ProductIcons } from "../../icons/dist/product-icons-enum";
import { icon } from "../style";

export type IconSizes =
  | typeof iconSizeXxs
  | typeof iconSizeXs
  | typeof iconSizeS
  | typeof iconSizeM
  | typeof iconSizeL
  | typeof iconSizeXl
  | typeof iconSizeXxl;

export type IconShapes = SystemIcons | ProductIcons;
export interface IconProps {
  /** Can be used to give a better description of the icon than just it's name */
  ariaLabel?: string;
  /** The fill color of the icon */
  color?: string;
  /** The id of the SVG symbol we're rendering from a generated sprite */
  shape: SystemIcons | ProductIcons;
  /** The width and height of the icon */
  size?: IconSizes;
  /** human-readable selector used for writing tests */
  dataCy?: string;
}

const Icon = (props: IconProps) => {
  const { color, size, shape, ariaLabel, dataCy } = props;
  const svgColor = color || "currentColor";
  const iconSize = size || iconSizeS;

  return (
    <svg
      preserveAspectRatio="xMinYMin meet"
      width={parseInt(iconSize, 10)}
      height={parseInt(iconSize, 10)}
      viewBox={`0 0 ${parseInt(iconSize, 10)} ${parseInt(iconSize, 10)}`}
      role="img"
      aria-label={ariaLabel || `${shape} icon`}
      className={cx(icon, tintSVG(svgColor))}
      data-cy={["icon", dataCy].filter(Boolean).join(" ")}
    >
      <use xlinkHref={`#${shape}`} />
    </svg>
  );
};

export default Icon;
