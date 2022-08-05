import * as React from "react";
import { css } from "@emotion/css";
import { themeBgSecondary } from "../design-tokens/build/js/designTokens";

export const avatarContainer = css`
  background-color: ${themeBgSecondary};
  border-radius: 25%;
  overflow: hidden;
  position: relative;

  &:after {
    content: "";
    border-radius: inherit;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
    display: block;
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }
`;

export const avatarSize = (
  size: React.CSSProperties["width"] | React.CSSProperties["height"]
) => css`
  height: ${size};
  width: ${size};
`;

export const avatarImg = css`
  border: 0;
  display: block;
  object-fit: cover;
  height: 100%;
  width: 100%;
`;
