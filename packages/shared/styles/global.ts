import { injectGlobal } from "emotion";
import { textSize } from "./styleUtils";
import { fontFamilySansSerif } from "../styles/design-tokens-dist/js/designTokens";

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
        ${textSize("default")};
    }
  `;
};
