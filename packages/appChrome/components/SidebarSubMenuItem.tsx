import * as React from "react";
import {
  subMenuItem,
  subMenuItemText,
  appChromeInsetContent,
  sidebarNavItem
} from "../style";
import { cx } from "emotion";
import {
  textSize,
  flex,
  tintContentSecondary,
  tintContentPrimary
} from "@dcos/ui-kit-shared/dist/styles/styleUtils";
import Clickable from "@dcos/ui-kit-clickable/dist/components/clickable";

export interface SidebarSubMenuItemProps {
  children?: React.ReactElement<HTMLElement> | string;
  isActive?: boolean;
  onClick: (event?: React.SyntheticEvent<HTMLElement>) => void;
}

class SidebarSubMenuItem extends React.PureComponent<
  SidebarSubMenuItemProps,
  {}
> {
  public render() {
    const { children, isActive, onClick } = this.props;
    const classNames = cx(
      subMenuItem,
      appChromeInsetContent,
      tintContentSecondary,
      sidebarNavItem(isActive),
      textSize("small"),
      flex({ align: "center" }),
      {
        [tintContentPrimary]: isActive
      }
    );

    return (
      <Clickable action={onClick} tabIndex={0}>
        <div className={classNames}>
          <span className={subMenuItemText}>{children}</span>
        </div>
      </Clickable>
    );
  }
}

export default SidebarSubMenuItem;
