import * as React from "react";
import { cx } from "@emotion/css";
import { flex } from "../../shared/styles/styleUtils";
import { ThemeProvider, useTheme } from "@emotion/react";
import { headerBar } from "../style";
import { AppChromeTheme } from "../types";
import { getCSSVarValue } from "../../utilities";
import { themeBgPrimary } from "../../design-tokens/build/js/designTokens";

export const defaultBgColor = getCSSVarValue(themeBgPrimary);
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
      headerBackgroundColor: bgColor || getCSSVarValue(themeBgPrimary),
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
