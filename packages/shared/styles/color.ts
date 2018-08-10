// Include core colors, helpers and etc in this file

export interface IColors {
  [colorName: string]: string;
}

/**
 * Return shared colors
 *
 * @returns color mapping
 */
export const coreColors = (): IColors => {
  return {
    white: "#fff",
    black: "#000",

    // Purple
    purple: "#7D58FF",
    purpleLighten1: "#8360FF",
    purpleLighten2: "#8A69FF",
    purpleLighten3: "#9779FF",
    purpleLighten4: "#E5DDFF",
    purpleLighten5: "#F8F6FF",
    purpleDarken1: "#704FE5",
    purpleDarken2: "#6446CC",
    purpleDarken3: "#4B3499",
    purpleDarken4: "#322366",
    purpleDarken5: "#191133",

    // Grey Light
    greyLight: "#DADDE2",
    greyLightLighten1: "#DDE0E4",
    greyLightLighten2: "#E1E3E7",
    greyLightLighten3: "#E8EAED",
    greyLightLighten4: "#F0F1F3",
    greyLightLighten5: "#F7F8F9",
    greyLightDarken1: "#C3C6CA",
    greyLightDarken2: "#AEB0B4",
    greyLightDarken3: "#828487",
    greyLightDarken4: "#57585A",
    greyLightDarken5: "#2B2C2D",

    // Grey Dark
    greyDark: "#1B2029",
    greyDarkLighten1: "#262B33",
    greyDarkLighten2: "#32363E",
    greyDarkLighten3: "#484C53",
    greyDarkLighten4: "#76797E",
    greyDarkLighten5: "#A3A5A9",
    greyDarkDarken1: "#181C24",
    greyDarkDarken2: "#151920",
    greyDarkDarken3: "#101318",
    greyDarkDarken4: "#0A0C10",
    greyDarkDarken5: "#050608",

    // Red
    red: "#EB293A",
    redLighten1: "#ED3E4E",
    redLighten2: "#EF5361",
    redLighten3: "#F37E88",
    redLighten4: "#FBD4D7",
    redLighten5: "#FDF4F4",
    redDarken1: "#D32434",
    redDarken2: "#BC202E",
    redDarken3: "#8D1822",
    redDarken4: "#5E1017",
    redDarken5: "#2F080B",

    // Yellow
    yellow: "#F9A328",
    yellowLighten1: "#F9AC3D",
    yellowLighten2: "#FAB553",
    yellowLighten3: "#FBC77E",
    yellowLighten4: "#FDECD4",
    yellowLighten5: "#FEFAF4",
    yellowDarken1: "#DF9223",
    yellowDarken2: "#C78220",
    yellowDarken3: "#956118",
    yellowDarken4: "#634110",
    yellowDarken5: "#312008",

    // Green
    green: "#14C684",
    greenLighten1: "#2BCB90",
    greenLighten2: "#43D19C",
    greenLighten3: "#72DCB6",
    greenLighten4: "#D0F3E6",
    greenLighten5: "#F3FCF8",
    greenDarken1: "#11B176",
    greenDarken2: "#109E69",
    greenDarken3: "#0C764F",
    greenDarken4: "#084F34",
    greenDarken5: "#04271A",

    // Blue
    blue: "#157FF2",
    blueLighten1: "#2C8CF3",
    blueLighten2: "#4398F4",
    blueLighten3: "#72B2F7",
    blueLighten4: "#D0E5FC",
    blueLighten5: "#F3F8FE",
    blueDarken1: "#1272D9",
    blueDarken2: "#1065C1",
    blueDarken3: "#0C4C91",
    blueDarken4: "#083260",
    blueDarken5: "#041930",

    // Pink
    pink: "#FF007D",
    pinkLighten1: "#FF1A8A",
    pinkLighten2: "#FF3397",
    pinkLighten3: "#FF66B1",
    pinkLighten4: "#FF99CB",
    pinkLighten5: "#FFF2F8",
    pinkDarken1: "#E50070",
    pinkDarken2: "#CC0064",
    pinkDarken3: "#99004B",
    pinkDarken4: "#660032",
    pinkDarken5: "#330019"
  };
};

export const customColors = (): IColors => {
  return {};
};

export const hexToRgbA = (hex: string, alpha: string | number = 1): string => {
  let color;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    color = hex.substring(1).split("");
    if (color.length === 3) {
      color = [color[0], color[0], color[1], color[1], color[2], color[2]];
    }
    color = "0x" + color.join("");
    return (
      "rgba(" +
      // tslint:disable
      [(color >> 16) & 255, (color >> 8) & 255, color & 255].join(",") +
      // tslint:enable
      `,${alpha})`
    );
  }
  return "rgba(0,0,0,0)";
}
