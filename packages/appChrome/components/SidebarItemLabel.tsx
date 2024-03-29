import * as React from "react";
import { cx } from "@emotion/css";
import { flex, flexItem, padding } from "../../shared/styles/styleUtils";
import { sidebarItemHeight, sidebarNavItemIconWrap } from "../style";
import { IconShapes } from "../../icon/components/Icon";
import IconPropAdapter from "../../icon/components/IconPropAdapter";
import { IconSize } from "../../shared/types/iconSize";

export interface SidebarItemLabelProps {
  children?: React.ReactNode;
  icon?: IconShapes | React.ReactElement<HTMLElement>;
  iconWidth?: IconSize;
}

const SidebarItemLabel = ({
  children,
  icon,
  iconWidth = "s"
}: SidebarItemLabelProps) => {
  return (
    <div className={cx(flex({ align: "center" }), sidebarItemHeight)}>
      {icon && (
        <div
          className={cx(
            flexItem("shrink"),
            padding("right", "m"),
            sidebarNavItemIconWrap
          )}
        >
          <IconPropAdapter icon={icon} size={iconWidth} color="inherit" />
        </div>
      )}
      <div className={flexItem("grow")}>{children}</div>
    </div>
  );
};

export default SidebarItemLabel;
