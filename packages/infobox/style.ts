import { css } from "emotion";
import { atMediaUp } from "@dcos/ui-kit-shared/dist/styles/breakpoints";
import { tintSVG } from "@dcos/ui-kit-shared/dist/styles/styleUtils";

import { coreColors } from "@dcos/ui-kit-shared/dist/styles/color";
import { spacingM } from "@dcos/ui-kit-shared/dist/styles/spacing";
import { borderRadiusDefault } from "@dcos/ui-kit-design-tokens/dist/build/js/designTokens";
const {
  blueDarken4,
  blueLighten3,
  blueLighten4,
  greenDarken4,
  greenLighten3,
  greenLighten4,
  greyDark,
  greyLightDarken3,
  greyLight,
  redDarken4,
  redLighten3,
  redLighten4,
  yellowDarken4,
  yellowLighten3,
  yellowLighten4
} = coreColors();

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

// TODO: change font weight to a design token
export const infoBoxActions = css`
  font-weight: 500;
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
    grid-gap: ${spacingM};
    grid-template-columns: 1fr auto;
    align-items: center;
    ${hasActions &&
      atMediaUp[layoutBreakpoint](css`
        grid-template-columns: auto 1fr auto;
      `)};
  `;

// TODO: change border radius to a design token
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
  ${tintSVG(greyDark)};
  cursor: pointer;
  line-height: 0;
  opacity: 0.5;
`;
