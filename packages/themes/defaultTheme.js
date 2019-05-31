//
// TODO: consider pulling these colors from design tokens
// TODO: add inverted colors
//
const theme = {
  colors: {
    // brand
    brandPrimary: "#7D58FF",
    brandSecondary: "#FF00D7",

    // states
    success: "#14C684",
    warning: "#F9A328",
    error: "#EB293A",

    // backgrounds
    bgPrimary: "#FFFFFF",
    bgPrimaryInverted: "#1B2029",
    bgSecondary: "#F7F8F9", // only used for modal header
    bgHover: "#F7F8F9",
    bgHoverInverted: "#32363E",
    bgScrim: "rgba(0, 0, 0, 0.2)", // should be rgba for transparency
    bgSelected: "#7D58FF",
    bgAppHeader: "#322366",

    // text
    textColorPrimary: "#1B2029",
    textColorPrimaryInverted: "#FFFFFF",
    textColorSecondary: "#76797E",
    textColorSecondaryInverted: "#AEB0B4",
    textColorInteractive: "#7D58FF",
    textColorInteractiveInverted: "#9779FF",

    // decorators
    border: "#DADDE2",
    borderHeavy: "#1B2029",
    shadow: "#1B2029" // not used, and should probably be rgba for transparency
  }
};

export default theme;
