import * as React from "react";
import { cx } from "@emotion/css";
import { tintSVG } from "../../shared/styles/styleUtils";
import { SystemIcons } from "../../icons/dist/system-icons-enum";
import { ProductIcons } from "../../icons/dist/product-icons-enum";
import { IconSize } from "../../shared/types/iconSize";
import { iconSizes } from "../../shared/styles/styleUtils/layout/iconSizes";
import { icon, blockIcon } from "../style";

const DEFAULT_ICON_SIZE: IconSize = "s";

export type IconShapes = SystemIcons | ProductIcons;
export interface IconProps {
  /**
   * If an icon is more than decorative and requires further context include a description for screen readers
   */
  ariaLabel?: string;
  /**
   * Allows custom styling
   */
  className?: string;
  /**
   * The fill color of the icon
   */
  color?: string;
  /**
   * The id of the SVG symbol we're rendering from a generated sprite
   */
  shape: SystemIcons | ProductIcons;
  /**
   * Which icon size to use for the width and height of the icon
   */
  size?: IconSize;
  /**
   * Human-readable selector used for writing tests
   */
  "data-cy"?: string;
  /**
   * Sets display to block if true
   */
  block?: boolean;
}

const Icon = ({
  color,
  size = DEFAULT_ICON_SIZE,
  shape,
  ariaLabel,
  "data-cy": dataCy,
  block,
  className
}: IconProps) => {
  const svgColor = color || "currentColor";
  const iconSize = iconSizes[size];

  return (
    <svg
      preserveAspectRatio="xMinYMin meet"
      width={parseInt(iconSize, 10)}
      height={parseInt(iconSize, 10)}
      viewBox={`0 0 ${parseInt(iconSize, 10)} ${parseInt(iconSize, 10)}`}
      role="img"
      aria-label={ariaLabel || `${shape} icon`}
      className={cx(icon, tintSVG(svgColor), block ? blockIcon : "", className)}
      data-cy={["icon", dataCy].filter(Boolean).join(" ")}
    >
      <use xlinkHref={`#${shape}`} />
    </svg>
  );
};

export default Icon;
