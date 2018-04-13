import { css } from "emotion";
import { coreColors, customColors } from "../../shared/styles/color";
import { coreFonts } from "../../shared/styles/typography";

const { greyDark, greyLight, green, purple, red, white, yellow } = coreColors();
const { ebonyClay } = customColors();
const { fontFamilySansSerif } = coreFonts();

const badgeButtonAppearance = {
  default: css`
    background-color: ${greyLight};
    border-color: ${greyLight};
    color: ${ebonyClay};
  `,
  success: css`
    background-color: ${green};
    border-color: ${green};
    color: ${white};
  `,
  primary: css`
    background-color: ${purple};
    border-color: ${purple};
    color: ${white};
  `,
  warning: css`
    background-color: ${yellow};
    border-color: ${yellow};
    color: ${white};
  `,
  danger: css`
    background-color: ${red};
    border-color: ${red};
    color: ${white};
  `,
  outline: css`
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

export const badgeButton = (appearance: string = "default") => {
  return css`
    ${badgeButtonAppearance[appearance]};
    box-sizing: border-box;
    border-width: 1px;
    border-style: solid;
    padding: 0 8px;
    font-size: 80%;
    line-height: inherit;
    font-family: ${fontFamilySansSerif};
    text-decoration: none;
    text-rendering: optimizeLegibility;
    border-radius: 4px;
    align-items: center;
    display: inline-flex;
    justify-content: center;
  `;
};
