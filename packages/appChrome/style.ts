import { css } from "emotion";
import {
  spaceM,
  themeBgSelected,
  themeBgHover,
  themeBgHoverInverted,
  themeTextColorPrimary,
  themeTextColorPrimaryInverted
} from "../design-tokens/build/js/designTokens";
import { padding } from "../shared/styles/styleUtils";
import { pickHoverBg, pickReadableTextColor } from "../shared/styles/color";
import getCSSVarValue from "../utilities/getCSSVarValue";
import { AppChromeTheme } from "./types";
import {
  spaceSizes,
  SpaceSizes
} from "../shared/styles/styleUtils/modifiers/modifierUtils";
import {
  defaultSidebarItemHorizPaddingSize,
  defaultSidebarItemVertPaddingSize
} from "./components/SidebarItem";

const iconSize = "24px";

export const appChrome = css`
  height: 100%;
  overflow: hidden;
`;

export const appChromeInsetContent = (horizPadding?: SpaceSizes) => css`
  padding-left: ${horizPadding
    ? spaceSizes[horizPadding]
    : spaceSizes[defaultSidebarItemHorizPaddingSize]};
  padding-right: ${horizPadding
    ? spaceSizes[horizPadding]
    : spaceSizes[defaultSidebarItemHorizPaddingSize]};
`;

export const appWrapper = css`
  height: 100%;
  overflow: auto;
`;

export const sidebar = css`
  height: 100%;
`;

// TODO: replace animation duration/easing with design tokens
// once design has agreed on animation
export const sidebarAnimator = css`
  height: 100%;
  overflow-x: hidden;
  transition: width 150ms ease-in-out, transform 150ms ease-in-out;
`;

export const sidebarItemHeight = css`
  ${padding("top", "s")};
  ${padding("bottom", "s")};
`;

export const sidebarSectionHeader = css`
  text-transform: capitalize;
`;

export const sidebarSectionList = css`
  margin: 0;
`;

export const sidebarNavItem = (
  isActive: boolean,
  isDisabled?: boolean,
  theme?: AppChromeTheme
) => {
  const activeBgColor = theme && theme.itemActiveBackgroundColor;
  const hoverBgColor = theme && theme.itemHoverBackgroundColor;
  const sidebarBgColor = theme && theme.sidebarBackgroundColor;
  const itemBgColor =
    isActive && !isDisabled ? activeBgColor || themeBgSelected : sidebarBgColor;

  return css`
    background-color: ${itemBgColor};
    color: ${isActive
      ? pickReadableTextColor(
          itemBgColor,
          getCSSVarValue(themeTextColorPrimary),
          getCSSVarValue(themeTextColorPrimaryInverted)
        )
      : null};
    cursor: ${isDisabled ? "default !important" : "pointer"};
    opacity: ${isDisabled ? "0.6" : "1"};
    text-transform: capitalize;
    padding: ${spaceSizes[
        theme?.sidebarItemPaddingVert || defaultSidebarItemVertPaddingSize
      ]}
      ${spaceSizes[
        theme?.sidebarItemPaddingHor || defaultSidebarItemHorizPaddingSize
      ]};

    * {
      cursor: ${isDisabled ? "default !important" : "unset"};
    }

    &:hover,
    &:focus,
    &:focus-within {
      background-color: ${isActive || isDisabled
        ? itemBgColor
        : pickHoverBg(
            sidebarBgColor,
            hoverBgColor || getCSSVarValue(themeBgHover),
            hoverBgColor || getCSSVarValue(themeBgHoverInverted)
          )};

      a {
        outline: none;
      }
    }
  `;
};

export const sidebarNavItemIconWrap = css`
  line-height: 0;
`;

export const subMenuItem = css`
  ${padding("top", "xs")};
  ${padding("bottom", "xs")};
`;

export const subMenuItemText = css`
  text-transform: capitalize;

  .menuHasIcon & {
    padding-left: ${parseInt(iconSize, 10) + parseInt(spaceM, 10)}px;
  }
`;

export const spaceMenuIcon = (iconWidth: string) => css`
  .${subMenuItemText} {
    padding-left: ${parseInt(iconWidth, 10) + parseInt(spaceM, 10)}px;
  }
`;
