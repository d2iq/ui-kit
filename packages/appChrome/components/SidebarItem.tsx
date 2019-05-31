import * as React from "react";
import { css } from "emotion";
import styled from "react-emotion";
import { sidebarNavItem } from "../style";
import Clickable from "../../clickable/components/clickable";
import { spaceSizes } from "../../../packages/shared/styles/styleUtils/modifiers/modifierUtils";

export interface SidebarItemProps {
  icon?: React.ReactElement<HTMLElement> | string;
  isActive?: boolean;
  onClick: (event?: React.SyntheticEvent<HTMLElement>) => void;
}

class SidebarItemComponent extends React.PureComponent<SidebarItemProps, {}> {
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
      ${props => {
        return css`
          ${sidebarNavItem(
            Boolean(isActive),
            props.theme.sidebarBackgroundColor
          )};
        `;
      }};
    `;
    /* tslint:enable:no-string-literal */

    return (
      <Clickable
        action={onClick}
        tabIndex={0}
        role="link"
        disableFocusOutline={true}
      >
        <Item>{children}</Item>
      </Clickable>
    );
  }
}

export default SidebarItemComponent;
