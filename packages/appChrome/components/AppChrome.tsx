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
  /**
   * Allows custom styling
   */
  className?: string;
  /**
   * JSX to render along the left side
   */
  sidebar?: React.ReactNode;
  /**
   * JSX to render as the navigation bar at the top
   */
  headerBar?: React.ReactNode;
  /**
   * @deprecated This prop should not be used, use children instead
   */
  mainContent?: React.ReactNode;
  /**
   * JSX for the main html element
   */
  children?: React.ReactNode;
  /**
   * Human-readable selector used for writing tests
   */
  "data-cy"?: string;
}

const AppChrome = ({
  className,
  sidebar,
  headerBar,
  mainContent,
  children,
  "data-cy": dataCy = "appChrome"
}: AppChromeProps) => {
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
        className={cx(
          appChrome,
          textSize("m"),
          flex({ direction: "column" }),
          className
        )}
        data-cy={dataCy}
      >
        {headerBar && <div data-cy="headerBar">{headerBar}</div>}
        <div className={cx(flex(), appWrapper)}>
          {sidebar && (
            <div className={flexItem("shrink")} data-cy="sidebar">
              {sidebar}
            </div>
          )}
          <main
            className={cx(flexItem("grow"), flush("left"), appWrapper)}
            data-cy="main"
          >
            {mainContent}
            {children}
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default AppChrome;
