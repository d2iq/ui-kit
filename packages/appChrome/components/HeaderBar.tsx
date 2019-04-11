import * as React from "react";
import { cx } from "emotion";
import styled from "@emotion/styled";
import {
  flex,
  tintContentPrimary,
  tintContentSecondary
} from "../../shared/styles/styleUtils";
import { spaceSizes } from "../../../packages/shared/styles/styleUtils/modifiers/modifierUtils";
import {
  purpleDarken4,
  textColorPrimaryInverted
} from "../../design-tokens/build/js/designTokens";
import { isHexDark } from "../../shared/styles/color";

export interface HeaderProps {
  children: React.ReactElement<HTMLElement> | string;
  theme?: {
    headerBackgroundColor?: string | null;
  };
}

/* tslint:disable:no-string-literal */
const HeaderBar = styled("div")`
  background-color: ${props =>
    props.theme.headerBackgroundColor || purpleDarken4};
  padding-left: ${props =>
    spaceSizes[props.theme.headerPaddingHor] || spaceSizes["l"]};
  padding-right: ${props =>
    spaceSizes[props.theme.headerPaddingHor] || spaceSizes["l"]};
  padding-bottom: ${props =>
    spaceSizes[props.theme.headerPaddingVert] || spaceSizes["xs"]};
  padding-top: ${props =>
    spaceSizes[props.theme.headerPaddingVert] || spaceSizes["xs"]};
  ${props =>
    props.theme.sidebarBackgroundColor &&
    isHexDark(props.theme.sidebarBackgroundColor)
      ? `
        &,
        .${tintContentPrimary} {
          color: ${textColorPrimaryInverted};
          fill: ${textColorPrimaryInverted};
        }

        .${tintContentSecondary} {
          color: ${textColorPrimaryInverted};
          fill: ${textColorPrimaryInverted};
        }
      `
      : null};
`;
/* tslint:enable:no-string-literal */

class Header extends React.PureComponent<HeaderProps, {}> {
  public render() {
    const { children } = this.props;

    return (
      <HeaderBar className={cx("darkMode", flex({ align: "center" }))}>
        {children}
      </HeaderBar>
    );
  }
}

export default Header;
