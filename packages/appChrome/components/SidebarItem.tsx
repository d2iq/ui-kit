import * as React from "react";
import { cx } from "emotion";
import styled from "@emotion/styled";
import { sidebarNavItem } from "../style";
import Clickable from "../../clickable/components/clickable";
import { tintContentPrimary } from "../../shared/styles/styleUtils";
import { spaceSizes } from "../../../packages/shared/styles/styleUtils/modifiers/modifierUtils";

export interface SidebarItemProps {
  icon?: React.ReactElement<HTMLElement> | string;
  isActive: boolean;
  onClick: (event?: React.SyntheticEvent<HTMLElement>) => void;
}

class SidebarItem extends React.PureComponent<SidebarItemProps, {}> {
  static defaultProps = {
    isActive: false
  };
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
      <Clickable
        action={onClick}
        tabIndex={0}
        role="link"
        disableFocusOutline={true}
      >
        <Item className={classNames}>{children}</Item>
      </Clickable>
    );
  }
}

export default SidebarItem;
