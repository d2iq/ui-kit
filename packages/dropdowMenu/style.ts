import { css } from "emotion";
import {
  borderRadiusDefault,
  themeBgPrimary,
  themeBgHover
} from "../design-tokens/build/js/designTokens";

export const menuList = css`
  background-color: ${themeBgPrimary};
  border-radius: ${borderRadiusDefault};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow-y: scroll;
`;

export const menuListItem = css`
  min-width: 100%;
`;

export const menuListItemActive = css`
  background-color: ${themeBgHover};
`;
