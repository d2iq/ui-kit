import { css } from "@emotion/css";
import { borderRadius } from "../shared/styles/styleUtils/index";
import {
  themeBgPrimary,
  themeBorder,
  themeBrandPrimary,
  themeBgDisabled,
  themeTextColorDisabled,
  themeBgHover,
  borderRadiusDefault
} from "../design-tokens/build/js/designTokens";
import { atMediaUp } from "../shared/styles/breakpoints";

export const cardBase = css`
  background-color: ${themeBgPrimary};
  box-shadow: 0 0 0 1px ${themeBorder};
  ${borderRadius("default")};

  > div {
    height: 100%;
  }
`;

const headerSizes = {
  s: {
    default: "50px"
  },
  m: {
    default: "50px",
    atMedium: "100px",
    atLarge: "150px",
    atJumbo: "200px"
  },
  l: {
    default: "200px",
    atMedium: "250px",
    atLarge: "300px",
    atJumbo: "350px"
  }
};

export const headerHeight = {
  s: css`
    > img {
      max-height: ${headerSizes.s.default};
    }
  `,
  m: css`
    > img {
      max-height: ${headerSizes.m.default};

      ${atMediaUp.small(css`
        max-height: ${headerSizes.m.atMedium};
      `)};
      ${atMediaUp.medium(css`
        max-height: ${headerSizes.m.atLarge};
      `)};
      ${atMediaUp.large(css`
        max-height: ${headerSizes.m.atJumbo};
      `)};
    }
  `,
  l: css`
    > img {
      max-height: ${headerSizes.m.default};

      ${atMediaUp.small(css`
        max-height: ${headerSizes.l.atMedium};
      `)};
      ${atMediaUp.medium(css`
        max-height: ${headerSizes.l.atLarge};
      `)};
      ${atMediaUp.large(css`
        max-height: ${headerSizes.l.atJumbo};
      `)};
    }
  `
};

export const cardHeaderImage = css`
  > img {
    width: 100%;
    object-fit: cover;
    border-radius: ${borderRadiusDefault} ${borderRadiusDefault} 0 0;
  }
`;

const buttonCardFocusStyles = `
  box-shadow: 0 0 0 1px ${themeBrandPrimary};
  outline: 0;
`;

const buttonCardActiveStyles = `
  box-shadow: 0 0 0 2px ${themeBrandPrimary};
`;

const buttonCardFocusedActiveStyles = `background-color: ${themeBgHover};`;

export const buttonCard = css`
  cursor: pointer;

  &:hover,
  &:focus,
  &:focus-within {
    ${buttonCardFocusStyles};
  }

  &:active {
    ${buttonCardActiveStyles};
  }
`;

export const buttonCardActive = css`
  &,
  &:hover,
  &:focus {
    ${buttonCardActiveStyles};
  }

  &:focus {
    ${buttonCardFocusedActiveStyles};
  }
`;

export const buttonCardFocused = css`
  ${buttonCardFocusStyles};
`;

export const buttonCardDisabled = css`
  background-color: ${themeBgDisabled};
  color: ${themeTextColorDisabled};
  cursor: auto;

  &,
  &:hover,
  &:focus {
    box-shadow: 0 0 0 0 transparent;
  }
`;

export const buttonCardDisabledActive = css`
  &,
  &:hover,
  &:focus {
    box-shadow: 0 0 0 2px ${themeBorder};
  }
`;

export const buttonCardFocusedActive = css`
  ${buttonCardFocusedActiveStyles};
`;

export const cardWithLink = css`
  position: relative;
`;

export const cardLink = css`
  bottom: 0;
  left: 0;
  outline: none;
  position: absolute;
  right: 0;
  top: 0;
`;
