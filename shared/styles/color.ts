// Include core colors, helpers and etc in this file

interface IColors {
  [colorName: string]: string;
}

/**
 * Return shared colors
 *
 * @returns color mapping
 */
export const coreColors = () : IColors => {
  return {
    white: "#fff",
    black: "#000",
    greyDark: "#1c212a",
    greyLight: "#dadde2",
    purple: "#7d57ff",
    red: "#ec2a3b",
    yellow: "#f9a328",
    green: "#14c683",
  }
}

export const customColors = () : IColors => {
  return {
    ebonyClay: "#1b2029"
  }
}
