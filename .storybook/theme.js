import { create } from "@storybook/theming";
import logo from "./static/logo.svg";

export default create({
  base: "light",

  colorPrimary: "#FF00D7",
  colorSecondary: "#7D58FF",

  // UI
  appBg: "#FFF",
  appContentBg: "#F7F8F9",
  appBorderColor: "#DADDE2",
  appBorderRadius: 6,

  // Typography
  fontBase:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica', 'Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
  fontCode:
    "'Menlo', 'Bitstream Vera Sans Mono', 'DejaVu Sans Mono', 'Monaco', 'Consolas', monospace",

  // Text colors
  textColor: "#1B2029",
  textInverseColor: "#FFF",

  // Toolbar default and active colors
  barTextColor: "#1B2029",
  barSelectedColor: "#7D58FF",
  barBg: "#FFF",

  // Form colors
  inputBg: "#FFF",
  inputBorder: "#DADDE2",
  inputTextColor: "#1B2029",
  inputBorderRadius: 6,

  brandTitle: "D2iQ UI Kit",
  brandUrl: "https://github.com/dcos-labs/ui-kit",
  brandImage: logo
});
