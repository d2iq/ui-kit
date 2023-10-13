/*
 *
 * This component should no longer be needed once we release a major version
 * and can make a breaking change where we only accept `IconShapes` for an
 * icon prop instead of `IconShapes` OR `React.ReactElement<HTMLElement>`.
 *
 * Some components were built before we had an Icon component, so we
 * needed to accept `<svg>` elements.
 *
 */
import * as React from "react";
import Icon from "../../icon/components/Icon";
import { IconSize } from "../../shared/types/iconSize";

interface IconPropAdapterProps {
  color?: string;
  icon: string;
  size?: IconSize;
}

const IconPropAdapter = ({ icon, color, size }: IconPropAdapterProps) =>
  typeof icon === "object" ? (
    icon
  ) : (
    <Icon shape={icon} size={size} color={color} />
  );

export default IconPropAdapter;
