import * as React from "react";
import { cx } from "emotion";
import { Expandable } from "../../expandable";
import { SidebarItemLabelProps } from "./SidebarItemLabel";
import { SidebarSubMenuItemProps } from "./SidebarSubMenuItem";
import { sidebarNavItem, appChromeInsetContent, spaceMenuIcon } from "../style";
import { listReset } from "../../shared/styles/styleUtils";
import { iconSizeS } from "../../design-tokens/build/js/designTokens";
import { withTheme } from "emotion-theming";
import { AppChromeTheme } from "../types";

export interface SidebarSubMenuProps {
  children: Array<React.ReactElement<SidebarSubMenuItemProps>>;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  label: React.ReactElement<SidebarItemLabelProps>;
  menuHasIcon?: boolean;
  iconWidth?: string;
  theme?: AppChromeTheme;
  disabled?: boolean;
}

export class SidebarSubMenuComponent extends React.PureComponent<
  SidebarSubMenuProps,
  {}
> {
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
    const { children, label, isOpen, theme, disabled } = this.props;
    const dataCy = [
      "sidebarSubMenu",
      ...(isOpen ? ["sidebarSubMenu.open"] : [])
    ].join(" ");

    return (
      <li data-cy={dataCy}>
        <Expandable
          labelClassName={cx(
            appChromeInsetContent(theme && theme.sidebarItemPaddingHor),
            sidebarNavItem(false, Boolean(disabled), theme)
          )}
          isOpen={isOpen}
          controlledIsOpen={
            disabled !== undefined && disabled === true ? false : undefined
          }
          label={<div>{label}</div>}
          indicatorPosition="right"
        >
          {this.getSubItemList(children)}
        </Expandable>
      </li>
    );
  }
}

export default withTheme(SidebarSubMenuComponent);
