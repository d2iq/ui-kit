import * as React from "react";
import { cx } from "@emotion/css";
import { flex } from "../../shared/styles/styleUtils";
import { ThemeProvider, useTheme } from "@emotion/react";
import { headerBar } from "../style";
import { AppChromeTheme } from "../types";
import { greyLightLighten4 } from "../../design-tokens/build/js/designTokens";

export const defaultBgColor = greyLightLighten4;
export const defaultHeaderPaddingHor = "none";
export const defaultHeaderPaddingVert = "none";

interface HeaderProps {
  children?: React.ReactNode;
  /**
   * Changes the background color for the entire sidebar
   */
  bgColor?: string;
}

const StyledHeader = ({ children }: HeaderProps) => {
  const theme: AppChromeTheme = useTheme();

  return (
    <div className={cx(headerBar(theme), flex({ align: "center" }))}>
      {children}
    </div>
  );
};

const Header = ({ bgColor, children }: HeaderProps) => {
  const adjustedTheme = ancestorTheme => {
    return {
      headerBackgroundColor: bgColor || greyLightLighten4,
      ...ancestorTheme
    };
  };

  return (
    <ThemeProvider theme={adjustedTheme}>
      <StyledHeader>{children}</StyledHeader>
    </ThemeProvider>
  );
};

export default Header;
