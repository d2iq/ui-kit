import { injectGlobal } from "emotion";
import { coreFonts } from "./typography";
const { fontFamilySansSerif } = coreFonts();

export const injectGlobalCss = () => {
  return injectGlobal`
    body {
      font-family: ${fontFamilySansSerif};
    }

    .ReactVirtualized__Grid {
      outline: none;
    }
  `;
};
