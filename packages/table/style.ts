import { css } from "emotion";
import { hexToRgbA } from "../shared/styles/color";

import {
  black,
  greyLight,
  greyLightLighten5
} from "../design-tokens/build/js/designTokens";

const pointerSize = 4;
const pointerSpace = 4;
const cellPadding = 7;

export const headerCss = css`
  box-sizing: border-box;
  border-top: 1px solid ${black};
  border-bottom: 1px solid ${black};
`;

export const headerCellCss = css`
  text-transform: capitalize;
  font-weight: bold;
`;

export const cellCss = css`
  box-sizing: border-box;
  border-bottom: 1px solid ${greyLight};
  white-space: nowrap;
`;

export const innerCellCss = css`
  display: inline-block;
  height: auto;
  box-sizing: border-box;
  padding: ${cellPadding}px;
`;

export const cellAlignmentCss = (textAlign: string) => css`
  text-align: ${textAlign};
  margin-right: ${textAlign === "right"
    ? `${pointerSize + pointerSpace + cellPadding}px`
    : null};
`;

export const tableCss = css`
  font-weight: normal;

  &::after {
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    pointer-events: none;
    top: 0;
    width: 100%;
  }
`;

export const rightGrid = css`
  background: linear-gradient(
    to right,
    ${hexToRgbA(black, 0.2)},
    ${hexToRgbA(black, 0)}
  );
  background-repeat: no-repeat;
  background-size: 8px 100%;
`;

export const hideScrollbarCss = css`
  -ms-overflow-style: -ms-autohiding-scrollbar;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const rowHoverCss = css`
  background-color: ${greyLightLighten5};
  mix-blend-mode: multiply;
  will-change: left;
`;

export const sortableHeaderIconBaseCSS = css`
  position: relative;
  &:after {
    border-style: solid;
    border-color: transparent;
    content: "";
    display: inline-block;
    height: 0;
    line-height: 0;
    margin-left: ${pointerSpace}px;
    margin-top: -${pointerSize / 2}px;
    vertical-align: middle;
    width: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const styleArrowDirection = displaySortDirection => {
  switch (displaySortDirection) {
    case "DESC":
      return css`
        &:after {
          border-color: currentColor transparent transparent transparent;
          border-bottom-width: 0;
          border-left-width: ${pointerSize}px;
          border-right-width: ${pointerSize}px;
          border-top-width: ${pointerSize + 1}px;
        }
      `;
    case "ASC":
      return css`
        &:after {
          border-color: transparent transparent currentColor transparent;
          border-bottom-width: ${pointerSize + 1}px;
          border-left-width: ${pointerSize}px;
          border-right-width: ${pointerSize}px;
          border-top-width: 0;
        }
      `;
    default:
      return css`
        &:after {
          visibility: hidden;
        }
      `;
  }
};
