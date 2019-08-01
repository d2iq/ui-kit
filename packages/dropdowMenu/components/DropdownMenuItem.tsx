import * as React from "react";
import { cx, css } from "emotion";
import { menuListItem, menuListItemActive } from "../style";
import { padding, margin, display } from "../../shared/styles/styleUtils";
import {
  themeBgSelected,
  themeTextColorPrimary,
  themeTextColorPrimaryInverted
} from "../../design-tokens/build/js/designTokens";
import getCSSVarValue from "../../utilities/components/getCSSVarValue";
import { darken, pickReadableTextColor } from "../../shared/styles/color";

export interface DropdownMenuItemProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
  disabled?: boolean;
  index: number;
  listLength: number;
  isActive?: boolean;
  isSelected?: boolean;
}

const DropdownMenuItem = (props: DropdownMenuItemProps) => {
  const { isActive, isSelected, index, listLength, disabled, ...other } = props;
  // Importing these was causing issues with `getCSSVarValue` where it would
  // always return the fallback color, even though the CSS var had been set
  // on the :root
  const menuListItemSelected = css`
    background-color: ${themeBgSelected};
    color: ${pickReadableTextColor(
      getCSSVarValue(themeBgSelected),
      getCSSVarValue(themeTextColorPrimary),
      getCSSVarValue(themeTextColorPrimaryInverted)
    )};
  `;
  const menuListItemSelectedActive = css`
    background-color: ${darken(getCSSVarValue(themeBgSelected), 1)};
  `;

  return (
    <div
      className={cx(
        menuListItem,
        padding("horiz"),
        padding("vert", "xs"),
        display("inline-block"),
        {
          [menuListItemActive]: isActive,
          [menuListItemSelected]: isSelected,
          [menuListItemSelectedActive]: isActive && isSelected,
          [margin("top", "xs")]: index === 0,
          [margin("bottom", "xs")]: index === listLength - 1
        }
      )}
      data-cy="dropdownMenuItem"
      {...other}
    />
  );
};

export default DropdownMenuItem;
