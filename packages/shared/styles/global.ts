import { injectGlobal } from "emotion";
import { coreFonts } from "./typography";
const { fontFamilySansSerif } = coreFonts();

export const injectGlobalCss = () => {
  return injectGlobal`
    body {
      font-family: ${fontFamilySansSerif};
    }

    h1, h2, h3, h4, h5, h6 {
      font-weight: normal;
      margin: 0;
    }

    p {
      margin: 0;
    }

    ul, ol {
      list-style: none;
      margin-left: 0;
      padding-left: 0;
    }

    .ReactVirtualized__Grid {
      outline: none;
    }
  `;
};
