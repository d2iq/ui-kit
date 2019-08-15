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
    const dataCy = [
      "sidebarItem",
      ...(isActive ? ["sidebarItem.active"] : [])
    ].join(" ");

    const Item = styled("li")`
      ${props => {
        return css`
          ${sidebarNavItem(Boolean(isActive), props.theme)};
          padding-left: ${props.theme.sidebarItemPaddingHor
            ? spaceSizes[props.theme.sidebarItemPaddingHor]
            : spaceSizes.l};
          padding-right: ${props.theme.sidebarItemPaddingHor
            ? spaceSizes[props.theme.sidebarItemPaddingHor]
            : spaceSizes.l};
          padding-bottom: ${props.theme.sidebarItemPaddingVert
            ? spaceSizes[props.theme.sidebarItemPaddingVert]
            : spaceSizes.none};
          padding-top: ${props.theme.sidebarItemPaddingVert
            ? spaceSizes[props.theme.sidebarItemPaddingVert]
            : spaceSizes.none};
        `;
      }};
    `;

    return (
      <Clickable
        action={onClick}
        tabIndex={0}
        role="link"
        disableFocusOutline={true}
        dataCy={dataCy}
      >
        <Item>{children}</Item>
      </Clickable>
    );
  }
}

export default SidebarItemComponent;
