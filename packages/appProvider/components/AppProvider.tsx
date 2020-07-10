import * as React from "react";
import { LinkComponent } from "../../link/types";
import { LinkContext } from "../link/context";
import { UIKitThemeProvider } from "../../themes";
import { Theme } from "../../themes/types/appTheme";

export interface AppProviderProps {
  children?: React.ReactNode;
  linkComponent?: LinkComponent;
  theme?: Theme;
}

class AppProvider extends React.Component<AppProviderProps, {}> {
  public render() {
    const { children, theme, linkComponent } = this.props;

    return (
      <UIKitThemeProvider appTheme={theme || ({} as Theme)}>
        <LinkContext.Provider value={linkComponent}>
          {children}
        </LinkContext.Provider>
      </UIKitThemeProvider>
    );
  }
}

export default AppProvider;
