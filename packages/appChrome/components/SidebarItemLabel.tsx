import * as React from "react";
import { cx } from "emotion";
import { flex, flexItem, padding } from "../../shared/styles/styleUtils";
import { sidebarItemHeight, sidebarNavItemIconWrap } from "../style";
import { IconShapes } from "../../icon/components/Icon";
import { iconSizeS } from "../../design-tokens/build/js/designTokens";
import IconPropAdapter from "../../icon/components/IconPropAdapter";

export interface SidebarItemLabelProps {
  children?: React.ReactElement<HTMLElement> | string;
  // TODO: only accept IconShapes when we make a big breaking change
  icon?: IconShapes | React.ReactElement<HTMLElement>;
  iconWidth?: string;
}

class SidebarItemLabel extends React.PureComponent<SidebarItemLabelProps, {}> {
  public static defaultProps: Partial<SidebarItemLabelProps> = {
    iconWidth: iconSizeS
  };

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
            <IconPropAdapter
              icon={icon}
              size={this.props.iconWidth}
              color="inherit"
            />
          </div>
        )}
        <div className={flexItem("grow")}>{children}</div>
      </div>
    );
  }
}

export default SidebarItemLabel;
