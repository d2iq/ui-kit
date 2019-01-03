import * as React from "react";
import { cx } from "emotion";
import styled from "react-emotion";
import { sidebarNavItem } from "../style";
import Clickable from "../../clickable/components/clickable";
import { tintContentPrimary } from "../../shared/styles/styleUtils";
import { spaceSizes } from "../../../packages/shared/styles/styleUtils/modifiers/modifierUtils";

export interface SidebarItemProps {
  children?: React.ReactElement<HTMLElement> | string;
  icon?: React.ReactElement<HTMLElement> | string;
  isActive?: boolean;
  onClick: (event?: React.SyntheticEvent<HTMLElement>) => void;
}

class SidebarItem extends React.PureComponent<SidebarItemProps, {}> {
  public render() {
    const { children, isActive, onClick } = this.props;
    /* tslint:disable:no-string-literal */
    const Item = styled("li")`
      padding-left: ${props =>
        spaceSizes[props.theme.sidebarItemPaddingHor] || spaceSizes["l"]};
      padding-right: ${props =>
        spaceSizes[props.theme.sidebarItemPaddingHor] || spaceSizes["l"]};
      padding-bottom: ${props =>
        spaceSizes[props.theme.sidebarItemPaddingVert] || spaceSizes["none"]};
      padding-top: ${props =>
        spaceSizes[props.theme.sidebarItemPaddingVert] || spaceSizes["none"]};
    `;
    /* tslint:enable:no-string-literal */
    const classNames = cx(sidebarNavItem(isActive), {
      [tintContentPrimary]: isActive
    });

    return (
      <Clickable action={onClick} tabIndex={0} role="link">
        <Item className={classNames}>{children}</Item>
      </Clickable>
    );
  }
}

export default SidebarItem;
