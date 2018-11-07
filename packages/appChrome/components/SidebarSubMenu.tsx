import * as React from "react";
import { cx } from "emotion";
import { Expandable } from "../../expandable";
import SidebarItemLabel, { SidebarItemLabelProps } from "./SidebarItemLabel";
import { SidebarSubMenuItemProps } from "./SidebarSubMenuItem";
import { sidebarNavItem, appChromeInsetContent } from "../style";
import { listReset } from "../../shared/styles/styleUtils";

export interface SidebarSubMenuProps {
  children: Array<React.ReactElement<SidebarSubMenuItemProps>>;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  label: React.ReactElement<SidebarItemLabelProps>;
}

class SidebarSubMenu extends React.PureComponent<SidebarSubMenuProps, {}> {
  constructor(props) {
    super(props);

    this.getSubItemList = this.getSubItemList.bind(this);
  }

  public getSubItemList(
    items: Array<React.ReactElement<SidebarSubMenuItemProps>>
  ) {
    const { label } = this.props;
    const menuHasIcon =
      label.type === SidebarItemLabel && Boolean(label.props.icon);

    return (
      <ul className={listReset}>
        {items.map((item, i) => (
          <li className={cx({ menuHasIcon })} key={i}>
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
