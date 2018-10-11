import { css } from "emotion";
import { atMediaUp } from "../shared/styles/breakpoints";

import { coreColors } from "../shared/styles/color";
import { spacingM } from "../shared/styles/spacing";
const { greyDark, greyLight } = coreColors();

const layoutBreakpoint = "small";

const infoBoxAppearances = {
  default: css`
    background-color: ${greyLight};
    color: ${greyDark};
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
    grid-gap: ${spacingM};
    grid-template-columns: 1fr auto;
    ${hasActions &&
      atMediaUp[layoutBreakpoint](css`
        grid-template-columns: auto 1fr auto;
      `)};
  `;

// TODO: change border radius to a design token
export const infoBoxInline = css`
  border-radius: 6px;
`;

export const infoBoxBanner = css`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const primaryActionStyle = css`
  order: 1;
`;
