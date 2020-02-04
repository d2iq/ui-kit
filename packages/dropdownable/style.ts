import { css } from "emotion";
import { zIndexDropdownable } from "../design-tokens/build/js/designTokens";
import { PositionCoord, Direction } from "./components/Dropdownable";

const getDropdownBaseStyles = (open: boolean) => `
  opacity: ${open ? 1 : 0};
  position: absolute;
  transform: scale(${open ? 1 : 0});
  z-index: ${zIndexDropdownable};
`;

export const dropdownableContainer = css`
  position: relative;
`;

export const getPortalledDropdownStyle = (
  position: PositionCoord,
  open: boolean
) => css`
  ${getDropdownBaseStyles(open)};
  top: ${position.top}px;
  left: ${position.left}px;
`;

export const getNonPortalledDropdownStyle = (
  direction: Direction,
  open: boolean
) => {
  const baseStyles = `
    ${getDropdownBaseStyles(open)};
    width: max-content;
  `;

  switch (direction) {
    case Direction.BottomLeft:
      return css`
        ${baseStyles};
        top: 100%;
        left: 0;
      `;
    case Direction.BottomRight:
      return css`
        ${baseStyles};
        top: 100%;
        right: 0;
      `;
    case Direction.BottomCenter:
      return css`
        ${baseStyles};
        left: 50%;
        transform: translatex(-50%);
      `;
    case Direction.TopLeft:
      return css`
        ${baseStyles};
        bottom: 100%;
        left: 0;
      `;
    case Direction.TopRight:
      return css`
        ${baseStyles};
        bottom: 100%;
        right: 0;
      `;
    case Direction.TopCenter:
      return css`
        ${baseStyles};
        bottom: 100%;
        left: 50%;
        transform: translatex(-50%);
      `;
  }
};
