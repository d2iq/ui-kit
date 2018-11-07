import * as React from "react";
import { cx } from "emotion";
import SidebarItemLabel from "./SidebarItemLabel";
import { appChromeInsetContent, sidebarNavItem } from "../style";
import Clickable from "../../clickable/components/clickable";

export interface SidebarItemProps {
  children?: React.ReactElement<HTMLElement> | string;
  icon?: React.ReactElement<HTMLElement> | string;
  isActive?: boolean;
  onClick: (event?: React.SyntheticEvent<HTMLElement>) => void;
}

class SidebarItem extends React.PureComponent<SidebarItemProps, {}> {
  public render() {
    const { children, icon, isActive, onClick } = this.props;
    const classNames = cx(appChromeInsetContent, sidebarNavItem(isActive));

    return (
      <Clickable action={onClick} tabIndex={0}>
        <li className={classNames}>
          <SidebarItemLabel icon={icon ? icon : ""}>
            {children}
          </SidebarItemLabel>
        </li>
      </Clickable>
    );
  }
}

export default SidebarItem;
