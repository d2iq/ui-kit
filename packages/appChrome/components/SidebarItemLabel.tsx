import * as React from "react";
import { cx } from "emotion";
import { flex, flexItem, padding } from "../../shared/styles/styleUtils";
import { sidebarItemHeight, sidebarNavItemIconWrap } from "../style";

export interface SidebarItemLabelProps {
  children?: React.ReactElement<HTMLElement> | string;
  icon?: React.ReactElement<HTMLElement> | string;
  isActive?: boolean;
}

class SidebarItemLabel extends React.PureComponent<SidebarItemLabelProps, {}> {
  public render() {
    const { children, icon } = this.props;

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
            {icon}
          </div>
        )}
        <div className={flexItem("grow")}>{children}</div>
      </div>
    );
  }
}

export default SidebarItemLabel;
