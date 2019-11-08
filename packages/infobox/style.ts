import { css } from "emotion";
import { atMediaUp } from "../shared/styles/breakpoints";
import {
  blueDarken4,
  blueLighten3,
  blueLighten4,
  borderRadiusDefault,
  greyDark,
  greyLightDarken3,
  greyLight,
  spaceM,
  themeError,
  themeSuccess,
  themeWarning
} from "../design-tokens/build/js/designTokens";
import { lighten, darken } from "../shared/styles/color";
import getCSSVarValue from "../utilities/components/getCSSVarValue";

const layoutBreakpoint = "small";

const infoBoxAppearances = appearance => {
  switch (appearance) {
    case "default":
      return css`
        background-color: ${greyLight};
        border-bottom-color: ${greyLightDarken3};
        color: ${greyDark};
      `;
    case "danger":
      return css`
        background-color: ${lighten(getCSSVarValue(themeError), 4)};
        border-bottom-color: ${lighten(getCSSVarValue(themeError), 3)};
        color: ${darken(getCSSVarValue(themeError), 4)};
      `;
    case "info":
      return css`
        background-color: ${blueLighten4};
        border-bottom-color: ${blueLighten3};
        color: ${blueDarken4};
      `;
    case "success":
      return css`
        background-color: ${lighten(getCSSVarValue(themeSuccess), 4)};
        border-bottom-color: ${lighten(getCSSVarValue(themeSuccess), 3)};
        color: ${darken(getCSSVarValue(themeSuccess), 4)};
      `;
    case "warning":
      return css`
        background-color: ${lighten(getCSSVarValue(themeWarning), 4)};
        border-bottom-color: ${lighten(getCSSVarValue(themeWarning), 3)};
        color: ${darken(getCSSVarValue(themeWarning), 4)};
      `;
    default:
      return "";
  }
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
    ${infoBoxAppearances(appearance)};
    grid-gap: ${spaceM};
    grid-template-columns: 1fr auto;
    align-items: center;
    overflow: auto;
    word-break: break-word;
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
