import * as React from "react";
import {
  subMenuItem,
  subMenuItemText,
  appChromeInsetContent,
  sidebarNavItem
} from "../style";
import { cx } from "emotion";
import { textSize, flex, tintContent } from "../../shared/styles/styleUtils";
import Clickable from "../../clickable/components/clickable";
import ResetLink from "../../link/components/ResetLink";
import { withTheme } from "emotion-theming";
import getCSSVarValue from "../../utilities/getCSSVarValue";
import {
  themeTextColorPrimary,
  themeTextColorPrimaryInverted,
  themeTextColorSecondaryInverted,
  themeBgPrimaryInverted,
  themeBgSelected
} from "../../design-tokens/build/js/designTokens";
import { pickReadableTextColor } from "../../shared/styles/color";
import { AppChromeTheme, SidebarNavItemProps } from "../types";

export interface SidebarSubMenuItemProps extends SidebarNavItemProps {
  theme?: AppChromeTheme;
}

class SidebarSubMenuItem extends React.PureComponent<
  SidebarSubMenuItemProps,
  {}
> {
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
    const sidebarBgColor = theme?.sidebarBackgroundColor
      ? theme.sidebarBackgroundColor
      : getCSSVarValue(themeBgPrimaryInverted);
    const activeBgColor = theme?.itemActiveBackgroundColor;
    const subMenuItemBgColor = isActive
      ? activeBgColor || themeBgSelected
      : sidebarBgColor;
    const classNames = cx(
      appChromeInsetContent(theme?.sidebarItemPaddingHor),
      sidebarNavItem(Boolean(isActive), Boolean(disabled), theme),
      tintContent(
        pickReadableTextColor(
          sidebarBgColor,
          getCSSVarValue(themeTextColorPrimary),
          getCSSVarValue(themeTextColorSecondaryInverted)
        )
      ),
      textSize("s"),
      flex({ align: "center" }),
      subMenuItem,
      {
        [tintContent(
          pickReadableTextColor(
            subMenuItemBgColor,
            getCSSVarValue(themeTextColorPrimary),
            getCSSVarValue(themeTextColorPrimaryInverted)
          )
        )]: isActive
      }
    );
    const dataCy = [
      "sidebarSubMenuItem",
      ...(isActive ? ["sidebarSubMenuItem.active"] : [])
    ].join(" ");

    return url ? (
      <ResetLink
        url={url}
        openInNewTab={openInNewTab}
        className={classNames}
        onClick={onClick}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : undefined}
      >
        <span className={subMenuItemText}>{children}</span>
      </ResetLink>
    ) : (
      <Clickable
        action={onClick}
        tabIndex={0}
        dataCy={dataCy}
        disableFocusOutline={true}
      >
        <div className={classNames}>
          <span className={subMenuItemText}>{children}</span>
        </div>
      </Clickable>
    );
  }
}

export default withTheme(SidebarSubMenuItem);
