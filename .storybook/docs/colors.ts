import { text } from "stream/consumers";
import {
  purple,
  purpleLighten1,
  purpleLighten2,
  purpleLighten3,
  purpleLighten4,
  purpleLighten5,
  pink,
  pinkLighten1,
  pinkLighten2,
  pinkLighten3,
  pinkLighten4,
  pinkLighten5,
  blue,
  blueLighten1,
  blueLighten2,
  blueLighten3,
  blueLighten4,
  blueLighten5,
  green,
  greenLighten1,
  greenLighten2,
  greenLighten3,
  greenLighten4,
  greenLighten5,
  yellow,
  yellowLighten1,
  yellowLighten2,
  yellowLighten3,
  yellowLighten4,
  yellowLighten5,
  red,
  redLighten1,
  redLighten2,
  redLighten3,
  redLighten4,
  redLighten5,
  greyLight,
  greyLightLighten1,
  greyLightLighten2,
  greyLightLighten3,
  greyLightLighten4,
  greyLightLighten5,
  greyLightDarken1,
  greyLightDarken2,
  greyLightDarken3,
  greyLightDarken4,
  greyLightDarken5,
  greyDark,
  greyDarkLighten1,
  greyDarkLighten2,
  greyDarkLighten3,
  greyDarkLighten4,
  greyDarkLighten5,
  greyDarkDarken1,
  greyDarkDarken2,
  greyDarkDarken3,
  greyDarkDarken4,
  greyDarkDarken5,
  accent,
  success,
  error,
  white,
  black,
  cyan,
  textColorPrimary,
  textColorSecondary,
  borderColorDefault,
  themeBrandPrimary,
  themeBrandSecondary,
  themeSuccess,
  themeWarning,
  themeError,
  themeBgPrimary,
  themeBgSecondary,
  themeBgNeutral,
  themeBgDisabled,
  themeBgHover,
  themeBorder,
  themeShadow,
  themeTextColorPrimary,
  themeTextColorSecondary,
  themeTextColorDisabled,
  themeTextColorInteractive,
  themeBgAppHeader
} from "../../packages/design-tokens/build/js/designTokens";
import { getCSSVarValue } from "../../packages/shared/styles/styleUtils/typography/color";

export const designSystemColors = [
  { title: "accent", subtitle: "", colors: { accent: accent } },
  { title: "white", subtitle: "", colors: { white: white } },
  { title: "black", subtitle: "", colors: { black: black } },
  { title: "success", subtitle: "", colors: { success: success } },
  { title: "error", subtitle: "", colors: { error: error } },
  { title: "cyan", subtitle: "", colors: { cyan: cyan } },
  {
    title: "textColorPrimary",
    subtitle: "",
    colors: { textColorPrimary: textColorPrimary }
  },
  {
    title: "textColorSecondary",
    subtitle: "",
    colors: { textColorSecondary: textColorSecondary }
  },
  {
    title: "borderColorDefault",
    subtitle: "",
    colors: { borderColorDefault: borderColorDefault }
  },
  {
    title: "purple",
    subtitle: "purpleLighten1-5",
    colors: {
      purple,
      purpleLighten1,
      purpleLighten2,
      purpleLighten3,
      purpleLighten4,
      purpleLighten5
    }
  },
  {
    title: "pink",
    subtitle: "pinkLighten1-5",
    colors: {
      pink,
      pinkLighten1,
      pinkLighten2,
      pinkLighten3,
      pinkLighten4,
      pinkLighten5
    }
  },
  {
    title: "blue",
    subtitle: "blueLighten1-5",
    colors: {
      blue,
      blueLighten1,
      blueLighten2,
      blueLighten3,
      blueLighten4,
      blueLighten5
    }
  },
  {
    title: "green",
    subtitle: "greenLighten1-5",
    colors: {
      green,
      greenLighten1,
      greenLighten2,
      greenLighten3,
      greenLighten4,
      greenLighten5
    }
  },
  {
    title: "yellow",
    subtitle: "yellowLighten1-5",
    colors: {
      yellow,
      yellowLighten1,
      yellowLighten2,
      yellowLighten3,
      yellowLighten4,
      yellowLighten5
    }
  },
  {
    title: "red",
    subtitle: "redLighten1-5",
    colors: {
      red,
      redLighten1,
      redLighten2,
      redLighten3,
      redLighten4,
      redLighten5
    }
  },
  {
    title: "greyLight",
    subtitle: "greyLightLighten1-5",
    colors: {
      greyLight,
      greyLightLighten1,
      greyLightLighten2,
      greyLightLighten3,
      greyLightLighten4,
      greyLightLighten5
    }
  },
  {
    title: "greyLight",
    subtitle: "greyLightDarken1-5",
    colors: {
      greyLight,
      greyLightDarken1,
      greyLightDarken2,
      greyLightDarken3,
      greyLightDarken4,
      greyLightDarken5
    }
  },
  {
    title: "greyDark",
    subtitle: "greyDarkLighten1-5",
    colors: {
      greyDark,
      greyDarkLighten1,
      greyDarkLighten2,
      greyDarkLighten3,
      greyDarkLighten4,
      greyDarkLighten5
    }
  },
  {
    title: "greyDark",
    subtitle: "greyDarkDarken1-5",
    colors: {
      greyDark,
      greyDarkDarken1,
      greyDarkDarken2,
      greyDarkDarken3,
      greyDarkDarken4,
      greyDarkDarken5
    }
  }
];

export const myColors = [
  {
    title: "purple",
    subtitle: "purpleLighten1-5",
    colors: {
      purple: purple,
      purpleLighten1: purpleLighten1,
      purpleLighten2: purpleLighten2,
      purpleLighten3: purpleLighten3,
      purpleLighten4: purpleLighten4,
      purpleLighten5: purpleLighten5
    }
  },
  {
    title: "pink",
    subtitle: "pinkLighten1-5",
    colors: {
      pink: pink,
      pinkLighten1: pinkLighten1,
      pinkLighten2: pinkLighten2,
      pinkLighten3: pinkLighten3,
      pinkLighten4: pinkLighten4,
      pinkLighten5: pinkLighten5
    }
  },
  {
    title: "blue",
    subtitle: "blueLighten1-5",
    colors: {
      blue: blue,
      blueLighten1: blueLighten1,
      blueLighten2: blueLighten2,
      blueLighten3: blueLighten3,
      blueLighten4: blueLighten4,
      blueLighten5: blueLighten5
    }
  },
  {
    title: "green",
    subtitle: "greenLighten1-5",
    colors: {
      green: green,
      greenLighten1: greenLighten1,
      greenLighten2: greenLighten2,
      greenLighten3: greenLighten3,
      greenLighten4: greenLighten4,
      greenLighten5: greenLighten5
    }
  },
  {
    title: "yellow",
    subtitle: "yellowLighten1-5",
    colors: {
      yellow: yellow,
      yellowLighten1: yellowLighten1,
      yellowLighten2: yellowLighten2,
      yellowLighten3: yellowLighten3,
      yellowLighten4: yellowLighten4,
      yellowLighten5: yellowLighten5
    }
  },
  {
    title: "red",
    subtitle: "redLighten1-5",
    colors: {
      red: red,
      redLighten1: redLighten1,
      redLighten2: redLighten2,
      redLighten3: redLighten3,
      redLighten4: redLighten4,
      redLighten5: redLighten5
    }
  },
  {
    title: "greyLight",
    subtitle: "greyLightLighten1-5",
    colors: {
      greyLight: greyLight,
      greyLightLighten1: greyLightLighten1,
      greyLightLighten2: greyLightLighten2,
      greyLightLighten3: greyLightLighten3,
      greyLightLighten4: greyLightLighten4,
      greyLightLighten5: greyLightLighten5
    }
  },
  {
    title: "greyLight",
    subtitle: "greyLightDarken1-5",
    colors: {
      greyLight: greyLight,
      greyLightDarken1: greyLightDarken1,
      greyLightDarken2: greyLightDarken2,
      greyLightDarken3: greyLightDarken3,
      greyLightDarken4: greyLightDarken4,
      greyLightDarken5: greyLightDarken5
    }
  },
  {
    title: "greyDark",
    subtitle: "greyDarkLighten1-5",
    colors: {
      greyDark: greyDark,
      greyDarkLighten1: greyDarkLighten1,
      greyDarkLighten2: greyDarkLighten2,
      greyDarkLighten3: greyDarkLighten3,
      greyDarkLighten4: greyDarkLighten4,
      greyDarkLighten5: greyDarkLighten5
    }
  },
  {
    title: "greyDark",
    subtitle: "greyDarkDarken1-5",
    colors: {
      greyDark: greyDark,
      greyDarkDarken1: greyDarkDarken1,
      greyDarkDarken2: greyDarkDarken2,
      greyDarkDarken3: greyDarkDarken3,
      greyDarkDarken4: greyDarkDarken4,
      greyDarkDarken5: greyDarkDarken5
    }
  }
];

export const themeColors = [
  {
    title: "themeBrandPrimary",
    subtitle: "",
    colors: { themeBrandPrimary: getCSSVarValue(themeBrandPrimary) }
  },
  {
    title: "themeBrandSecondary",
    subtitle: "",
    colors: { themeBrandSecondary: getCSSVarValue(themeBrandSecondary) }
  },
  {
    title: "themeSuccess",
    subtitle: "",
    colors: { themeSuccess: getCSSVarValue(themeSuccess) }
  },
  {
    title: "themeWarning",
    subtitle: "",
    colors: { themeWarning: getCSSVarValue(themeWarning) }
  },
  {
    title: "themeError",
    subtitle: "",
    colors: { themeError: getCSSVarValue(themeError) }
  },
  {
    title: "themeBgAppHeader",
    subtitle: "",
    colors: { themeBgAppHeader: getCSSVarValue(themeBgAppHeader) }
  },
  {
    title: "themeBgPrimary",
    subtitle: "",
    colors: { themeBgPrimary: getCSSVarValue(themeBgPrimary) }
  },
  {
    title: "themeBgSecondary",
    subtitle: "",
    colors: { themeBgSecondary: getCSSVarValue(themeBgSecondary) }
  },
  {
    title: "themeBgNeutral",
    subtitle: "",
    colors: { themeBgNeutral: getCSSVarValue(themeBgNeutral) }
  },
  {
    title: "themeBgDisabled",
    subtitle: "",
    colors: { themeBgDisabled: getCSSVarValue(themeBgDisabled) }
  },
  {
    title: "themeBgHover",
    subtitle: "",
    colors: { themeBgHover: getCSSVarValue(themeBgHover) }
  },
  {
    title: "themeBorder",
    subtitle: "",
    colors: { themeBorder: getCSSVarValue(themeBorder) }
  },
  {
    title: "themeShadow",
    subtitle: "",
    colors: { themeShadow: "rgba(0, 0, 0, 0.1)" }
  },
  {
    title: "themeTextColorPrimary",
    subtitle: "",
    colors: { themeTextColorPrimary: getCSSVarValue(themeTextColorPrimary) }
  },
  {
    title: "themeTextColorSecondary",
    subtitle: "",
    colors: { themeTextColorSecondary: getCSSVarValue(themeTextColorSecondary) }
  },
  {
    title: "themeTextColorDisabled",
    subtitle: "",
    colors: { themeTextColorDisabled: getCSSVarValue(themeTextColorDisabled) }
  },
  {
    title: "themeTextColorInteractive",
    subtitle: "",
    colors: {
      themeTextColorInteractive: getCSSVarValue(themeTextColorInteractive)
    }
  }
];
