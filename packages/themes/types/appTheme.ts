type Color = React.CSSProperties["color"];

export interface Theme {
  colors: {
    // Branding
    brandPrimary?: Color;
    brandPrimaryInverted?: Color;
    brandSecondary?: Color;
    brandSecondaryInverted?: Color;

    // States
    success?: Color;
    successInverted?: Color;
    warning?: Color;
    warningInverted?: Color;
    error?: Color;
    errorInverted?: Color;

    // Backgrounds
    bgPrimary?: Color;
    bgPrimaryInverted?: Color;
    bgSecondary?: Color;
    bgSecondaryInverted?: Color;
    bgHover?: Color;
    bgHoverInverted?: Color;
    bgScrim?: Color;
    bgScrimInverted?: Color;
    bgSelected?: Color;
    bgSelectedInverted?: Color;
    bgAppHeader?: Color;

    // Text
    textColorPrimary?: Color;
    textColorPrimaryInverted?: Color;
    textColorSecondary?: Color;
    textColorSecondaryInverted?: Color;
    textColorInteractive?: Color;
    textColorInteractiveInverted?: Color;

    // Decorators
    border?: Color;
    borderInverted?: Color;
    borderHeavy?: Color;
    borderHeavyInverted?: Color;
    shadow?: Color;
  };
}
