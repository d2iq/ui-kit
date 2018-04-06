// Include core colors, helpers and etc in this file

export interface IColors {
  white: string;
  black: string;
  greyDark: string;
  greyLight: string;
  purple: string;
  red: string;
  yellow: string;
  green: string;
}

/**
 * Return shared colors
 *
 * @returns color mapping
 */
export const coreColors = () : IColors => {
  return {
    "white": "#fff",
    "black": "#000",
    "greyDark": "#1c212a",
    "greyLight": "#dadde2",
    "purple": "#7d57ff",
    "red": "#ec2a3b",
    "yellow": "#f9a328",
    "green": "#14c683",
  }
}

export interface ICustomColors {
  ebonyClay: string
}

export const customColors = () : ICustomColors => {
  return {
    "ebonyClay": "#1b2029"
  }
}
