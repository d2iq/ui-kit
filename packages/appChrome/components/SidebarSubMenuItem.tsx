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
import { withTheme } from "emotion-theming";
import getCSSVarValue from "../../utilities/components/getCSSVarValue";
import {
  themeTextColorSecondary,
  themeTextColorPrimary,
  themeTextColorPrimaryInverted,
  themeTextColorSecondaryInverted,
  themeBgPrimaryInverted,
  themeBgSelected
} from "../../design-tokens/build/js/designTokens";
import { pickReadableTextColor } from "../../shared/styles/color";
import { AppChromeTheme } from "../types/appChromeTheme";

export interface SidebarSubMenuItemProps {
  children?: React.ReactElement<HTMLElement> | string;
  isActive?: boolean;
  onClick?: (event?: React.SyntheticEvent<HTMLElement>) => void;
  theme?: AppChromeTheme;
  disabled?: boolean;
}

class SidebarSubMenuItem extends React.PureComponent<
  SidebarSubMenuItemProps,
  {}
> {
  public render() {
    const { children, isActive, onClick, disabled, theme } = this.props;
    const sidebarBgColor =
      theme && theme.sidebarBackgroundColor
        ? theme.sidebarBackgroundColor
        : getCSSVarValue(themeBgPrimaryInverted);
    const activeBgColor = theme && theme.itemActiveBackgroundColor;
    const subMenuItemBgColor = isActive
      ? activeBgColor || themeBgSelected
      : sidebarBgColor;
    const classNames = cx(
      subMenuItem,
      appChromeInsetContent(theme && theme.sidebarItemPaddingHor),
      sidebarNavItem(Boolean(isActive), Boolean(disabled), theme),
      tintContent(
        pickReadableTextColor(
          sidebarBgColor,
          getCSSVarValue(themeTextColorSecondary),
          getCSSVarValue(themeTextColorSecondaryInverted)
        )
      ),
      textSize("s"),
      flex({ align: "center" }),
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

    return (
      <Clickable
        action={onClick}
        tabIndex={0}
        role="link"
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
