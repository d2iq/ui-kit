import * as React from "react";
import { cx } from "@emotion/css";
import { appChrome, appWrapper } from "../style";
import {
  flex,
  flexItem,
  textSize,
  flush
} from "../../shared/styles/styleUtils";
import { ThemeProvider } from "@emotion/react";
import {
  defaultSidebarItemHorizPaddingSize,
  defaultSidebarItemVertPaddingSize
} from "./SidebarItem";
import {
  defaultBgColor,
  defaultHeaderPaddingHor,
  defaultHeaderPaddingVert
} from "./HeaderBar";

export interface AppChromeProps {
  sidebar: React.ReactNode;
  headerBar: React.ReactNode;
  mainContent: React.ReactNode;
}

const AppChrome = ({ sidebar, headerBar, mainContent }: AppChromeProps) => {
  return (
    <ThemeProvider
      theme={{
        sidebarItemPaddingHor: defaultSidebarItemHorizPaddingSize,
        sidebarItemPaddingVert: defaultSidebarItemVertPaddingSize,
        headerPaddingHor: defaultHeaderPaddingHor,
        headerPaddingVert: defaultHeaderPaddingVert,
        headerBackgroundColor: defaultBgColor
      }}
    >
      <div
        className={cx(appChrome, textSize("m"), flex({ direction: "column" }))}
        data-cy="appChrome"
      >
        <div data-cy="headerBar">{headerBar}</div>
        <div className={cx(flex(), appWrapper)}>
          <div className={flexItem("shrink")} data-cy="sidebar">
            {sidebar}
          </div>
          <main
            className={cx(flexItem("grow"), flush("left"), appWrapper)}
            data-cy="main"
          >
            {mainContent}
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default AppChrome;
