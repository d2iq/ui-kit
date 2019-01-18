import * as React from "react";
import { cx } from "emotion";
import { Expandable } from "../../expandable";
import { SidebarItemLabelProps } from "./SidebarItemLabel";
import { SidebarSubMenuItemProps } from "./SidebarSubMenuItem";
import { sidebarNavItem, appChromeInsetContent, spaceMenuIcon } from "../style";
import { listReset } from "../../shared/styles/styleUtils";
import { iconSizeS } from "../../design-tokens/build/js/designTokens";
export interface SidebarSubMenuProps {
  children: Array<React.ReactElement<SidebarSubMenuItemProps>>;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  label: React.ReactElement<SidebarItemLabelProps>;
  menuHasIcon?: boolean;
  iconWidth?: string;
}

class SidebarSubMenu extends React.PureComponent<SidebarSubMenuProps, {}> {
  constructor(props) {
    super(props);

    this.getSubItemList = this.getSubItemList.bind(this);
  }

  public getSubItemList(
    items: Array<React.ReactElement<SidebarSubMenuItemProps>>
  ) {
    const iconWidth = this.props.iconWidth ? this.props.iconWidth : iconSizeS;
    return (
      <ul className={listReset}>
        {items.map((item, i) => (
          <li
            className={cx({
              [spaceMenuIcon(`${iconWidth}px`)]: this.props.menuHasIcon
            })}
            key={i}
          >
            {item}
          </li>
        ))}
      </ul>
    );
  }

  public render() {
    const { children, label, isOpen } = this.props;

    return (
      <li>
        <Expandable
          labelClassName={cx(appChromeInsetContent, sidebarNavItem(false))}
          isOpen={isOpen}
          label={<div>{label}</div>}
        >
          {this.getSubItemList(children)}
        </Expandable>
      </li>
    );
  }
}

export default SidebarSubMenu;
