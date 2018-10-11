import { css } from "react-emotion";
import { spacingM } from "../../spacing";

interface FlexboxProperties {
  align?: "flex" | "center" | "flex-start" | "flex-end";
  justify?: "flex" | "center" | "flex-start" | "flex-end";
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  wrap?: "wrap" | "nowrap";
}

const flexStrategies = {
  grow: css`
    flex-basis: 0;
    flex-grow: 1;
    min-width: 0;
    width: auto;
  `,
  shrink: css`
    flex-basis: auto;
    flex-grow: 0;
    flex-shrink: 0;
    width: initial;
  `
};

export const flex = (
  flexProps: FlexboxProperties = {
    align: "flex",
    direction: "row",
    wrap: "nowrap",
    justify: "flex-start"
  }
) => {
  return css`
    align-items: ${flexProps.align};
    box-sizing: border-box;
    display: flex;
    justify-content: ${flexProps.justify};
    flex-direction: ${flexProps.direction};
    flex-wrap: ${flexProps.wrap};
  `;
};

export const flexItem = (flexStrategy: "grow" | "shrink") =>
  css`
    ${flexStrategies[flexStrategy]};
    box-sizing: border-box;
    padding-left: ${spacingM};

    &:first-child {
      padding-left: 0;
    }
  `;
