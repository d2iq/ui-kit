import * as React from "react";
import { ThemeProvider } from "@emotion/react";
import { injectCustomProperties } from "../../shared/styles/global";
import { LocalTheme as Theme } from "../types/appTheme";

interface UIKitThemeProviderProps {
  appTheme: Theme;
  children: React.ReactNode;
}

const UIKitThemeProvider = ({
  children,
  appTheme
}: UIKitThemeProviderProps) => {
  injectCustomProperties(appTheme);
  return <ThemeProvider theme={appTheme}>{children}</ThemeProvider>;
};

export default React.memo(UIKitThemeProvider);
