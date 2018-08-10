import { css } from "emotion";
import { coreColors, hexToRgbA } from "../shared/styles/color";
import { coreFonts } from "../shared/styles/typography";

const { black, greyLight } = coreColors();
const { fontFamilySansSerif } = coreFonts();

export const headerCss = css`
  box-sizing: border-box;
  font-family: ${fontFamilySansSerif};
  border-top: 1px solid ${black};
  border-bottom: 1px solid ${black};
`;

export const cellCss = css`
  box-sizing: border-box;
  font-family: ${fontFamilySansSerif};
  border-bottom: 1px solid ${greyLight};
`;

export const tableCss = css`
  font-family: ${fontFamilySansSerif};
  font-weight: normal;
`;

export const rightGrid = css`
  background: linear-gradient(
    to right,
    ${hexToRgbA(black, 0.2)},
    ${hexToRgbA(black, 0)}
  );
  background-repeat: no-repeat;
  background-size: 8px 100%;
`;
