import * as React from "react";
import { cx } from "emotion";
import { darkMode, flex, padding } from "../../shared/styles/styleUtils";
import { headerBar, appChromeInsetContent } from "../style";

export interface HeaderProps {
  children: React.ReactElement<HTMLElement> | string;
}

class Header extends React.PureComponent<HeaderProps, {}> {
  public render() {
    const { children } = this.props;

    return (
      <div
        className={cx(
          headerBar,
          darkMode,
          appChromeInsetContent,
          flex({ align: "center" }),
          padding("top", "xs"),
          padding("bottom", "xs")
        )}
      >
        {children}
      </div>
    );
  }
}

export default Header;
