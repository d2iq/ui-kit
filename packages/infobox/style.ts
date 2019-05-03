import { css } from "emotion";
import { atMediaUp } from "../shared/styles/breakpoints";
import {
  blueDarken4,
  blueLighten3,
  blueLighten4,
  borderRadiusDefault,
  greenDarken4,
  greenLighten3,
  greenLighten4,
  greyDark,
  greyLightDarken3,
  greyLight,
  redDarken4,
  redLighten3,
  redLighten4,
  spaceM,
  yellowDarken4,
  yellowLighten3,
  yellowLighten4
} from "../design-tokens/build/js/designTokens";

const layoutBreakpoint = "small";

const infoBoxAppearances = {
  default: css`
    background-color: ${greyLight};
    border-bottom-color: ${greyLightDarken3};
    color: ${greyDark};
  `,
  danger: css`
    background-color: ${redLighten4};
    border-bottom-color: ${redLighten3};
    color: ${redDarken4};
  `,
  info: css`
    background-color: ${blueLighten4};
    border-bottom-color: ${blueLighten3};
    color: ${blueDarken4};
  `,
  success: css`
    background-color: ${greenLighten4};
    border-bottom-color: ${greenLighten3};
    color: ${greenDarken4};
  `,
  warning: css`
    background-color: ${yellowLighten4};
    border-bottom-color: ${yellowLighten3};
    color: ${yellowDarken4};
  `
};

export const infoBoxActions = css`
  grid-row-start: 2;
  grid-column: span 2;
  justify-content: flex-end;

  ${atMediaUp.small(css`
    grid-row-start: auto;
    grid-column: auto;
    justify-content: flex-start;
  `)};
`;

export const infoBox = (appearance, hasActions) =>
  css`
    ${infoBoxAppearances[appearance]};
    grid-gap: ${spaceM};
    grid-template-columns: 1fr auto;
    align-items: center;
    ${hasActions &&
      atMediaUp[layoutBreakpoint](css`
        grid-template-columns: auto 1fr auto;
      `)};
  `;

export const infoBoxInline = css`
  border-radius: ${borderRadiusDefault};
`;

export const infoBoxBanner = css`
  border-bottom-width: 1px;
  border-bottom-style: solid;
`;

export const primaryActionStyle = css`
  order: 1;
`;

export const dismissBtn = css`
  cursor: pointer;
  line-height: 0;
  opacity: 0.5;
`;
