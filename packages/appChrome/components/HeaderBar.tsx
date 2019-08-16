import * as React from "react";
import { cx, css } from "emotion";
import styled from "react-emotion";
import { flex, tintContent } from "../../shared/styles/styleUtils";
import { spaceSizes } from "../../../packages/shared/styles/styleUtils/modifiers/modifierUtils";
import {
  themeBgAppHeader,
  themeTextColorPrimary,
  themeTextColorPrimaryInverted
} from "../../design-tokens/build/js/designTokens";
import { pickReadableTextColor } from "../../shared/styles/color";
import getCSSVarValue from "../../utilities/getCSSVarValue";

export interface HeaderProps {
  children: React.ReactElement<HTMLElement> | string;
}

class Header extends React.PureComponent<HeaderProps, {}> {
  public render() {
    const { children } = this.props;
    const HeaderBar = styled("div")`
      ${props => {
        const bgColor =
          props.theme.headerBackgroundColor || getCSSVarValue(themeBgAppHeader);
        const textColor = pickReadableTextColor(
          bgColor,
          getCSSVarValue(themeTextColorPrimary),
          getCSSVarValue(themeTextColorPrimaryInverted)
        );
        return css`
          background-color: ${bgColor};
          padding-left: ${props.theme.headerPaddingHor
            ? spaceSizes[props.theme.headerPaddingHor]
            : spaceSizes.l};
          padding-right: ${props.theme.headerPaddingHor
            ? spaceSizes[props.theme.headerPaddingHor]
            : spaceSizes.l};
          padding-bottom: ${props.theme.headerPaddingVert
            ? spaceSizes[props.theme.headerPaddingVert]
            : spaceSizes.xs};
          padding-top: ${props.theme.headerPaddingVert
            ? spaceSizes[props.theme.headerPaddingVert]
            : spaceSizes.xs};
          ${tintContent(textColor)};
        `;
      }};
    `;

    return (
      <HeaderBar className={cx(flex({ align: "center" }))}>
        {children}
      </HeaderBar>
    );
  }
}

export default Header;
