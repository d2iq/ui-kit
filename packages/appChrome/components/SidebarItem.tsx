import * as React from "react";
import { withTheme } from "emotion-theming";
import { sidebarNavItem } from "../style";
import Clickable from "../../clickable/components/clickable";
import ResetLink from "../../link/components/ResetLink";
import { AppChromeTheme, SidebarNavItemProps } from "../types";
import { display } from "../../shared/styles/styleUtils";

export interface SidebarItemProps extends SidebarNavItemProps {
  icon?: React.ReactElement<HTMLElement> | string;
  theme?: AppChromeTheme;
}

export const defaultSidebarItemHorizPaddingSize = "l";
export const defaultSidebarItemVertPaddingSize = "none";

class SidebarItemComponent extends React.PureComponent<SidebarItemProps, {}> {
  public render() {
    const {
      children,
      disabled,
      isActive,
      onClick,
      openInNewTab,
      theme,
      url
    } = this.props;
    const dataCy = [
      "sidebarItem",
      ...(isActive ? ["sidebarItem.active"] : [])
    ].join(" ");

    return (
      <>
        {url ? (
          <li
            className={sidebarNavItem(
              Boolean(isActive),
              Boolean(disabled),
              theme
            )}
          >
            <ResetLink
              url={!disabled ? url : undefined}
              openInNewTab={openInNewTab}
              onClick={onClick}
              className={display("block")}
              aria-disabled={disabled}
              tabIndex={disabled ? -1 : undefined}
            >
              {children}
            </ResetLink>
          </li>
        ) : (
          <Clickable
            action={onClick}
            tabIndex={0}
            disableFocusOutline={true}
            dataCy={dataCy}
          >
            <li
              className={sidebarNavItem(
                Boolean(isActive),
                Boolean(disabled),
                theme
              )}
            >
              {children}
            </li>
          </Clickable>
        )}
      </>
    );
  }
}

export default withTheme(SidebarItemComponent);
