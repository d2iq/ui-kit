import * as React from "react";
import { cx } from "emotion";
import { appChrome, appWrapper } from "../style";
import {
  flex,
  flexItem,
  textSize,
  flush
} from "../../shared/styles/styleUtils";

export interface AppChromeProps {
  sidebar: React.ReactNode;
  headerBar: React.ReactNode;
  mainContent: React.ReactNode;
}

class AppChrome extends React.PureComponent<AppChromeProps, {}> {
  public render() {
    const { sidebar, headerBar, mainContent } = this.props;

    return (
      <div className={cx(appChrome, textSize("m"))}>
        <div className="headerBar">{headerBar}</div>
        <div className={cx(flex(), appWrapper)}>
          <div className={flexItem("shrink")}>{sidebar}</div>
          <main className={cx(flexItem("grow"), flush("left"))}>
            {mainContent}
          </main>
        </div>
      </div>
    );
  }
}

export default AppChrome;
