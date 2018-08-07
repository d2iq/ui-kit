import { injectGlobal } from "emotion";
import { coreColors } from "./color";

const { greyLight } = coreColors();

export const injectGlobalCss = () => {
  return injectGlobal`
    .ReactVirtualized__Grid {
      outline: none;
    }

    .ReactVirtualized__Grid:nth-child(1),
    .BottomLeftGrid_ScrollWrapper {
      box-shadow: 5px 0 5px -2px ${greyLight};
    }
  `;
};
