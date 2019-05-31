import * as React from "react";
import { ThemeProvider } from "emotion-theming";
import { injectCustomProperties } from "../../shared/styles/global";

class UIKitThemeProvider extends React.PureComponent<any, {}> {
  public render() {
    const { children, appTheme } = this.props;
    injectCustomProperties(appTheme);

    return <ThemeProvider theme={{ appTheme }}>{children}</ThemeProvider>;
  }
}

export default UIKitThemeProvider;
