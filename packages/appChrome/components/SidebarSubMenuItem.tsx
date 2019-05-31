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
  themeBgPrimaryInverted
} from "../../design-tokens/build/js/designTokens";
import { pickReadableTextColor } from "../../shared/styles/color";

export interface SidebarSubMenuItemProps {
  children?: React.ReactElement<HTMLElement> | string;
  isActive?: boolean;
  onClick: (event?: React.SyntheticEvent<HTMLElement>) => void;
  theme?: any;
}

class SidebarSubMenuItem extends React.PureComponent<
  SidebarSubMenuItemProps,
  {}
> {
  public render() {
    const { children, isActive, onClick, theme } = this.props;
    const sidebarBgColor =
      theme && theme.sidebarBackgroundColor
        ? theme.sidebarBackgroundColor
        : getCSSVarValue(themeBgPrimaryInverted);
    const classNames = cx(
      subMenuItem,
      appChromeInsetContent,
      tintContent(
        pickReadableTextColor(
          sidebarBgColor,
          getCSSVarValue(themeTextColorSecondary),
          getCSSVarValue(themeTextColorSecondaryInverted)
        )
      ),
      sidebarNavItem(Boolean(isActive), sidebarBgColor),
      textSize("s"),
      flex({ align: "center" }),
      {
        [tintContent(
          pickReadableTextColor(
            sidebarBgColor,
            getCSSVarValue(themeTextColorPrimary),
            getCSSVarValue(themeTextColorPrimaryInverted)
          )
        )]: isActive
      }
    );

    return (
      <Clickable action={onClick} tabIndex={0} role="link">
        <div className={classNames}>
          <span className={subMenuItemText}>{children}</span>
        </div>
      </Clickable>
    );
  }
}

export default withTheme(SidebarSubMenuItem);
