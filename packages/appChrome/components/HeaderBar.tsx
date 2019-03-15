import * as React from "react";
import { cx } from "emotion";
import styled from "@emotion/styled";
import { darkMode, flex } from "../../shared/styles/styleUtils";
import { spaceSizes } from "../../../packages/shared/styles/styleUtils/modifiers/modifierUtils";
import { purpleDarken4 } from "../../design-tokens/build/js/designTokens";
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
`;
/* tslint:enable:no-string-literal */

class Header extends React.PureComponent<HeaderProps, {}> {
  public render() {
    const { children } = this.props;

    return (
      <HeaderBar
        className={cx(flex({ align: "center" }), {
          [darkMode]: Boolean(
            !(this.props.theme && this.props.theme.headerBackgroundColor) ||
              (this.props.theme.headerBackgroundColor &&
                isHexDark(this.props.theme.headerBackgroundColor))
          )
        })}
      >
        {children}
      </HeaderBar>
    );
  }
}

export default Header;
