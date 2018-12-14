import * as React from "react";
import { cx } from "emotion";
import { Expandable } from "@dcos/ui-kit-expandable/dist";
import { SidebarItemLabelProps } from "./SidebarItemLabel";
import { SidebarSubMenuItemProps } from "./SidebarSubMenuItem";
import { sidebarNavItem, appChromeInsetContent, spaceMenuIcon } from "../style";
import { listReset } from "@dcos/ui-kit-shared/dist/styles/styleUtils";
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
    const iconWidth = this.props.iconWidth ? this.props.iconWidth : 0;
    return (
      <ul className={listReset}>
        {items.map((item, i) => (
          <li
            className={cx({
              [spaceMenuIcon(`${iconWidth}px`)]: Boolean(iconWidth)
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
      <Expandable
        labelClassName={cx(appChromeInsetContent, sidebarNavItem(false))}
        isOpen={isOpen}
        label={<div>{label}</div>}
      >
        {this.getSubItemList(children)}
      </Expandable>
    );
  }
}

export default SidebarSubMenu;
