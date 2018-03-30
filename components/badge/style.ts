import { css } from "emotion";
import { getColors, getFonts } from "../../shared/style";

const badgeAppearances = {
  "default": css`
    background-color: ${getColors().greyLight};
    border-color: ${getColors().greyLight};
    color: #1b2029;
  `,
  "success": css`
    background-color: ${getColors().green};
    border-color: ${getColors().green};
    color: ${getColors().white};
  `,
  "primary": css`
    background-color: ${getColors().purple};
    border-color: ${getColors().purple};
    color: ${getColors().white};
  `,
  "warning": css`
    background-color: ${getColors().yellow};
    border-color: ${getColors().yellow};
    color: ${getColors().white};
  `,
  "danger": css`
    background-color: ${getColors().red};
    border-color: ${getColors().red};
    color: ${getColors().white};
  `,
  "outline": css`
    background-color: ${getColors().white};
    border-color: ${getColors().greyLight};
    color: ${getColors().greyDark};
  `
};

export const badge = (appearance) => {
  return css`
    ${badgeAppearances[appearance]};
    border-width: 1px;
    border-style: solid;
    padding-left: 8px;
    padding-right: 8px;
    font-size: 80%;
    line-height: inherit;
    font-family: ${getFonts().fontFamilySansSerif};
    text-decoration: none;
    text-rendering: optimizeLegibility;
    border-radius: 4px;
    align-items: center;
    display: inline-flex;
    justify-content: center;
  `;
}
