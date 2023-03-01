import { css } from "@emotion/css";
import {
  spaceL,
  spaceS,
  themeBorder,
  themeBgDisabled,
  themeBgPrimary,
  themeBrandPrimary,
  themeError,
  themeSuccess,
  themeTextColorDisabled,
  white,
  borderRadiusCircle
} from "../design-tokens/build/js/designTokens";

const toggleInputHeight = 14;
const toggleInputWidth = toggleInputHeight * 2;
const toggleRoundBorder = 1;
const toggleRoundSize = toggleInputHeight - toggleRoundBorder * 2;

export const toggleInputLabel = css`
  padding-left: ${spaceS};
`;

export const toggleInputFeedbackText = css`
  padding-left: ${toggleInputWidth + parseInt(spaceS, 10)}px;
`;

export const toggleInputAppearances = {
  disabled: css`
    border: solid;
    border-width: ${toggleRoundBorder}px;
    border-color: ${themeBgDisabled};
    background-color: ${themeBgDisabled};

    &:before {
      border: solid;
      border-color: ${themeBgDisabled};
      border-width: ${toggleRoundBorder}px;
    }
  `,
  "standard-focus": css`
    border: solid;
    border-width: ${toggleRoundBorder}px;
    border-color: ${themeBrandPrimary};

    &:before {
      border: solid;
      border-color: ${themeBrandPrimary};
      border-width: ${toggleRoundBorder}px;
    }
  `,
  "standard-active": css`
    border: solid;
    border-color: ${themeBrandPrimary};
    border-width: ${toggleRoundBorder}px;
    background-color: ${themeBrandPrimary};

    &:before {
      border: solid;
      border-color: ${themeBrandPrimary};
      border-width: ${toggleRoundBorder}px;
      transform: translateX(${toggleInputHeight + toggleRoundBorder}px);
    }
  `,
  "error-active": css`
    border: solid;
    border-color: ${themeBrandPrimary};
    border-width: ${toggleRoundBorder}px;
    background-color: ${themeBrandPrimary};

    &:before {
      border: solid;
      border-color: ${themeBrandPrimary};
      border-width: ${toggleRoundBorder}px;
      transform: translateX(${toggleInputHeight + toggleRoundBorder}px);
    }
  `,
  "success-active": css`
    border: solid;
    border-color: ${themeBrandPrimary};
    border-width: ${toggleRoundBorder}px;
    background-color: ${themeBrandPrimary};

    &:before {
      border: solid;
      border-color: ${themeBrandPrimary};
      border-width: ${toggleRoundBorder}px;
      transform: translateX(${toggleInputHeight + toggleRoundBorder}px);
    }
  `,
  "error-focus": css`
    border: solid;
    border-width: ${toggleRoundBorder}px;
    border-color: ${themeError};

    &:before {
      border: solid;
      border-width: ${toggleRoundBorder}px;
      border-color: ${themeError};
    }
  `,
  "success-focus": css`
    border: solid;
    border-width: ${toggleRoundBorder}px;
    border-color: ${themeSuccess};

    &:before {
      border: solid;
      border-width: ${toggleRoundBorder}px;
      border-color: ${themeSuccess};
    }
  `,
  "disabled-active": css`
    border: solid;
    border-width: ${toggleRoundBorder}px;
    border-color: ${themeTextColorDisabled};
    background-color: ${themeTextColorDisabled};

    &:before {
      border: solid;
      border-width: ${toggleRoundBorder}px;
      border-color: ${themeTextColorDisabled};
    }
  `,
  "focus-active": css``
};

export const toggleContainer = css`
  height: ${toggleInputHeight}px;
  position: relative;
  width: ${toggleInputWidth}px;
`;

export const toggle = css`
  background-color: ${themeBgPrimary};
  border: solid;
  border-width: ${toggleRoundBorder}px;
  border-color: ${themeBorder};
  bottom: 0;
  cursor: pointer;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: 250ms;

  &:before {
    background-color: ${white};
    border: solid;
    border-color: ${themeBorder};
    border-width: ${toggleRoundBorder}px;
    bottom: ${-toggleRoundBorder}px;
    content: "";
    height: ${toggleRoundSize}px;
    left: ${-toggleRoundBorder}px;
    position: absolute;
    transition: 250ms;
    width: ${toggleRoundSize}px;
  }
`;
export const toggleRound = css`
  border-radius: ${spaceL};
  &:before {
    border-radius: ${borderRadiusCircle};
  }
`;

export const checkContainer = css`
  position: absolute;
  left: ${toggleRoundBorder * 2}px;
  bottom: ${-toggleRoundBorder * 2}px;
`;
