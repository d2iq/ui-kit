import { css } from "emotion";
import { AvatarSizes } from "./components/Avatar";
import { themeBgSecondary } from "../design-tokens/build/js/designTokens";

export const avatarContainer = css`
  background-color: ${themeBgSecondary};
  border-radius: 25%;
  overflow: hidden;
  vertical-align: middle;
`;

export const avatarSize = (size: AvatarSizes) => css`
  height: ${size};
  width: ${size};
`;

export const avatarImg = css`
  border: 0;
  height: 100%;
  object-fit: cover;
  width: 100%;
`;
