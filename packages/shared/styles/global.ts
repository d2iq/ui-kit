import { injectGlobal } from "emotion";
import { textSize, tintContent, inverseColorMode } from "./styleUtils";
import {
  fontFamilySansSerif,
  themeTextColorPrimaryInverted,
  themeTextColorPrimary,
  themeBgPrimary
} from "../../design-tokens/build/js/designTokens";
import { normalize } from "./normalize";

export const injectGlobalCss = () => {
  return injectGlobal`
    ${normalize};

    .ReactVirtualized__Grid {
      outline: none;
    }

    :root {
      ${tintContent(themeTextColorPrimary)};
      background-color: ${themeBgPrimary};
    }

    .${inverseColorMode} {
      ${tintContent(themeTextColorPrimaryInverted)};
    }
  `;
};

const flattenObject = obj =>
  Object.keys(obj).reduce((acc, k) => {
    if (typeof obj[k] === "object") {
      Object.assign(acc, flattenObject(obj[k]));
    } else {
      acc[k] = obj[k];
    }
    return acc;
  }, {});

export const injectCustomProperties = appTheme => {
  const themeProperties = flattenObject(appTheme);
  const customProperties = Object.keys(themeProperties).reduce((acc, curr) => {
    acc += `--theme${curr.charAt(0).toUpperCase() + curr.slice(1)}: ${
      themeProperties[curr]
    };`;
    return acc;
  }, "");

  return injectGlobal`
    :root {
      ${customProperties}
    }
  `;
};

export const injectStorybookResetCss = () => {
  return injectGlobal`
    body {
        font-family: ${fontFamilySansSerif};
        ${textSize("m")};
    }
  `;
};
