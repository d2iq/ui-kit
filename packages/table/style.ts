import { css } from "emotion";
import { coreColors } from "../shared/styles/color";
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
