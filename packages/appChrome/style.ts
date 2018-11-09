import { css } from "emotion";
import { atMediaUp } from "../shared/styles/breakpoints";
import {
  greyDark,
  greyDarkLighten2,
  purple,
  purpleDarken4,
  spaceM,
  spaceL,
  spaceXl
} from "../shared/styles/design-tokens-dist/js/designTokens";
import { padding } from "../shared/styles/styleUtils";

const iconSize = "24px";
const sidebarWidths = {
  default: "240px",
  large: "280px"
};
const layoutBreakpoint = "large";

export const appChrome = css`
  overflow: hidden;
`;

export const appChromeInsetContent = css`
  padding-left: ${spaceL};
  padding-right: ${spaceL};

  ${atMediaUp[layoutBreakpoint](css`
    padding-left: ${spaceXl};
    padding-right: ${spaceXl};
  `)};
`;

export const sidebar = css`
  background-color: ${greyDark};
  width: ${sidebarWidths.default};

  ${atMediaUp[layoutBreakpoint](css`
    width: ${sidebarWidths[layoutBreakpoint]};
  `)};
`;

// TODO: replace animation duration/easing with design tokens
// once design has agreed on animation
export const sidebarAnimator = (isOpen: boolean) => css`
  overflow: hidden;
  transition: width 150ms ease-in-out;
  width: ${isOpen ? sidebarWidths.default : 0};

  ${atMediaUp[layoutBreakpoint](css`
    width: ${isOpen ? sidebarWidths[layoutBreakpoint] : 0};
  `)};
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

export const sidebarNavItem = (isActive?: boolean) => css`
  background-color: ${isActive ? purple : "transparent"};
  cursor: pointer;
  text-transform: capitalize;

  &:hover,
  &:focus {
    background-color: ${isActive ? purple : greyDarkLighten2};
  }
`;

export const sidebarNavItemIconWrap = css`
  line-height: 0;
  width: ${iconSize};

  svg {
    width: 100%;
  }
`;

export const subMenuItem = css`
  ${padding("top", "xs")};
  ${padding("bottom", "xs")};
`;

// TODO: ask Lily if we always want sidebar labels to be capitalized
export const subMenuItemText = css`
  text-transform: capitalize;

  .menuHasIcon & {
    padding-left: ${parseInt(iconSize, 10) + parseInt(spaceM, 10)}px;
  }
`;

export const headerBar = css`
  background-color: ${purpleDarken4};
  height: 32px;
`;
