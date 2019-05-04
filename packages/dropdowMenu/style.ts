import { css } from "emotion";
import {
  borderRadiusDefault,
  white,
  greyLightLighten5,
  purple,
  purpleDarken1
} from "../design-tokens/build/js/designTokens";

export const menuList = css`
  background-color: ${white};
  border-radius: ${borderRadiusDefault};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow-y: scroll;
`;

export const menuListItemActive = css`
  background-color: ${greyLightLighten5};
`;

export const menuListItemSelected = css`
  background-color: ${purple};
  color: ${white};
`;

export const menuListItemSelectedActive = css`
  background-color: ${purpleDarken1};
`;
