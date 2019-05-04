import { css } from "react-emotion";
import { BoxSides } from "./modifierUtils";
import { borderColorDefault } from "../../../../design-tokens/build/js/designTokens";

export const border = (side: BoxSides) => {
  const borderBaseStyles = `
        border-width: 1px;
        border-color: ${borderColorDefault};
    `;

  const borderModifierStyles = () => {
    switch (side) {
      case "all":
        return `border-style: solid;`;
      case "horiz":
        return `
            border-left-style: solid;
            border-right-style: solid;
        `;
      case "vert":
        return `
            border-bottom-style: solid;
            border-top-style: solid;
        `;
      default:
        return `border-${side}-style: solid;`;
    }
  };

  return css`
    ${borderBaseStyles} ${borderModifierStyles()};
  `;
};
