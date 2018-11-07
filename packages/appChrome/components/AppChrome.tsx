import * as React from "react";
import { cx } from "emotion";
import { appChrome } from "../style";
import { flex, flexItem, textSize } from "../../shared/styles/styleUtils";

export interface AppChromeProps {
  sidebar: React.ReactNode;
  headerBar: React.ReactNode;
  mainContent: React.ReactNode;
}

class AppChrome extends React.PureComponent<AppChromeProps, {}> {
  public render() {
    const { sidebar, headerBar, mainContent } = this.props;

    return (
      <div className={cx(appChrome, textSize("default"))}>
        <div className="headerBar">{headerBar}</div>
        <div className={flex()}>
          <div className={flexItem("shrink")}>{sidebar}</div>
          <main className={flexItem("grow")}>{mainContent}</main>
        </div>
      </div>
    );
  }
}

export default AppChrome;
