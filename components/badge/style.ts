import { css } from "emotion";
import { getColors, getFonts } from "../../shared/styles/core";

const {
  greyDark,
  greyLight,
  green,
  purple,
  red,
  white,
  yellow
} = getColors();

const badgeTheme = {
  "default": css`
    background-color: ${greyLight};
    border-color: ${greyLight};
    color: #1b2029;
  `,
  "success": css`
    background-color: ${green};
    border-color: ${green};
    color: ${white};
  `,
  "primary": css`
    background-color: ${purple};
    border-color: ${purple};
    color: ${white};
  `,
  "warning": css`
    background-color: ${yellow};
    border-color: ${yellow};
    color: ${white};
  `,
  "danger": css`
    background-color: ${red};
    border-color: ${red};
    color: ${white};
  `,
  "outline": css`
    background-color: ${white};
    border-color: ${greyLight};
    color: ${greyDark};
  `,
  "outline-primary": css`
    background-color: ${white};
    border-color: ${purple};
    color: ${greyDark};
  `
};

export const badge = (theme) => {
  return css`
    ${badgeTheme[theme]};
    box-sizing: border-box;
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
