import { css } from "emotion";
import { getColors, getFonts } from "../../shared/style";

const badgeAppearances = {
  "default": css`
    background-color: ${getColors().greyLight};
    border-color: ${getColors().greyLight};
    color: #1b2029;
  `,
  "success": css`
    background-color: #14c684;
    border-color: #14c684;
    color: #ffffff;
  `,
  "information": css`
    background-color: #157ff2;
    border-color: #157ff2;
    color: #ffffff;
  `,
  "warning": css`
    background-color: #f56753;
    border-color: #f56753;
    color: #ffffff;
  `,
  "danger": css`
    background-color: #eb293a;
    border-color: #eb293a;
    color: #ffffff;
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
