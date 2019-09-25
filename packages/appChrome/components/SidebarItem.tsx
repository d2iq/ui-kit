import * as React from "react";
import { css } from "emotion";
import styled from "react-emotion";
import { sidebarNavItem } from "../style";
import Clickable from "../../clickable/components/clickable";
import { spaceSizes } from "../../../packages/shared/styles/styleUtils/modifiers/modifierUtils";
import { ThemeProvider } from "emotion-theming";

export interface SidebarItemProps {
  icon?: React.ReactElement<HTMLElement> | string;
  isActive?: boolean;
  onClick?: (event?: React.SyntheticEvent<HTMLElement>) => void;
  disabled?: boolean;
}

export const defaultSidebarItemHorizPaddingSize = "l";
export const defaultSidebarItemVertPaddingSize = "none";

class SidebarItemComponent extends React.PureComponent<SidebarItemProps, {}> {
  public render() {
    const { children, isActive, onClick, disabled } = this.props;
    const dataCy = [
      "sidebarItem",
      ...(isActive ? ["sidebarItem.active"] : [])
    ].join(" ");

    const Item = styled("li")`
      ${props => {
        return css`
          ${sidebarNavItem(Boolean(isActive), Boolean(disabled), props.theme)};
          padding: ${spaceSizes[props.theme.sidebarItemPaddingVert]}
            ${spaceSizes[props.theme.sidebarItemPaddingHor]};
        `;
      }};
    `;

    const adjustedTheme = ancestorTheme => {
      return {
        sidebarItemPaddingHor: defaultSidebarItemHorizPaddingSize,
        sidebarItemPaddingVert: defaultSidebarItemVertPaddingSize,
        ...ancestorTheme
      };
    };

    return (
      <ThemeProvider theme={adjustedTheme}>
        <Clickable
          action={onClick}
          tabIndex={0}
          role="link"
          disableFocusOutline={true}
          dataCy={dataCy}
        >
          <Item>{children}</Item>
        </Clickable>
      </ThemeProvider>
    );
  }
}

export default SidebarItemComponent;
