import { injectGlobal } from "emotion";
import { coreFonts } from "./typography";
const { fontFamilySansSerif } = coreFonts();

export const injectGlobalCss = () => {
  return injectGlobal`
    .ReactVirtualized__Grid {
      outline: none;
    }
  `;
};

export const injectStorybookResetCss = () => {
  return injectGlobal`
    body {
        font-family: ${fontFamilySansSerif};
    }
  `;
};
