import { css } from "emotion";
import {
  white,
  borderColorDefault,
  greyLightLighten5
} from "../design-tokens/build/js/designTokens";
import { atMediaUp } from "../shared/styles/breakpoints";

const modalInset = 24;

const modalSizes = {
  s: {
    default: "350px"
  },
  m: {
    default: "350px",
    atMedium: "450px",
    atLarge: "500px",
    atJumbo: "550px"
  },
  l: {
    default: "400px",
    atMedium: "600px",
    atLarge: "700px",
    atJumbo: "800px"
  }
};

export const scrim = css`
  background-color: rgba(0, 0, 0, 0.2);
  bottom: 0;
  left: 0;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 0;
`;

// TODO: use border-radius design token when it's available
export const modal = css`
  border-radius: 6px;
  background-color: ${white};
  left: 50%;
  max-height: calc(100vh - ${modalInset * 2}px);
  outline: none;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

export const modalWidth = {
  s: css`
    width: ${modalSizes.s.default};
  `,
  m: css`
    width: ${modalSizes.m.default};

    ${atMediaUp.small(css`
      width: ${modalSizes.m.atMedium};
    `)};
    ${atMediaUp.medium(css`
      width: ${modalSizes.m.atLarge};
    `)};
    ${atMediaUp.large(css`
      width: ${modalSizes.m.atJumbo};
    `)};
  `,
  l: css`
    width: ${modalSizes.m.default};

    ${atMediaUp.small(css`
      width: ${modalSizes.l.atMedium};
    `)};
    ${atMediaUp.medium(css`
      width: ${modalSizes.l.atLarge};
    `)};
    ${atMediaUp.large(css`
      width: ${modalSizes.l.atJumbo};
    `)};
  `,
  fullscreen: css`
    border-radius: 0;
    height: 100vh;
    max-height: 100vh;
    width: 100vw;
  `
};

export const modalContent = css`
  overflow: auto;
`;

export const modalWrapper = css`
  height: 100%;
`;

export const modalHeader = css`
  border-bottom: 1px solid ${borderColorDefault};
`;

export const fullscreenModalHeader = css`
  background-color: ${greyLightLighten5};
`;

export const modalCloseWrapper = css`
  cursor: pointer;
`;

export const fullscreenModalTitle = css`
  text-align: center;
`;

export const fullscreenModalAction = {
  dismiss: css`
    text-align: left;
  `,
  cta: css`
    text-align: right;
  `
};

export const modalPreTransitionStyle = duration => css`
  transition: opacity ${duration}ms ease-in-out,
    transform ${duration}ms ease-in-out;
  opacity: 0;
  transform: translate(-50%, calc(-50% - 50px));
`;

export const modalTransitionStyles = {
  entered: css`
    opacity: 1;
    transform: translate(-50%, -50%);
  `,
  exiting: css`
    opacity: 0;
    transform: translate(-50%, calc(-50% - 50px));
  `
};

export const scrimPreTransitionStyle = duration => css`
  transition: opacity ${duration}ms ease-in-out;
  opacity: 0;
`;

export const scrimTransitionStyles = {
  entered: css`
    opacity: 1;
  `,
  exiting: css`
    opacity: 0;
  `
};
