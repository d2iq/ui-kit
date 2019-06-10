import { css } from "emotion";
import {
  fontSizeS,
  spaceS,
  spaceXxs,
  themeBgPrimaryInverted
} from "../design-tokens/build/js/designTokens";
import { Direction } from "../dropdownable/components/Dropdownable";
import { pseudoElTriangle } from "../shared/styles/styleUtils";

const triangleSize = 5;
const tooltipBoundarySpacing = triangleSize + parseInt(spaceXxs, 10);

export const tooltip = css`
  background-color: ${themeBgPrimaryInverted};
  border-radius: 2px;
  box-sizing: border-box;
  font-size: ${fontSizeS};
  position: relative;
  &:after {
    position: absolute;
  }
`;

const getArrowAlignmentStyles = (
  vert: "top" | "bottom",
  horiz: "left" | "right" | "center"
) => {
  const vertStyles = css`
    transform: translateY(
      ${vert === "top" ? tooltipBoundarySpacing * -1 : tooltipBoundarySpacing}px
    );
    &:after {
      ${pseudoElTriangle(vert, triangleSize, themeBgPrimaryInverted)};
      ${vert === "top" ? "bottom" : "top"}: -${triangleSize}px;
    }
  `;

  const horizStyles =
    horiz !== "center"
      ? css`
          &:after {
            ${horiz}: ${spaceS};
          }
        `
      : css`
          &:after {
            left: 50%;
            transform: translateX(-50%);
          }
        `;

  return `
    ${vertStyles}
    ${horizStyles}
  `;
};

export const getTooltipArrow = (direction: Direction) => {
  switch (direction) {
    case Direction.BottomLeft:
      return getArrowAlignmentStyles("bottom", "left");
    case Direction.BottomRight:
      return getArrowAlignmentStyles("bottom", "right");
    case Direction.BottomCenter:
      return getArrowAlignmentStyles("bottom", "center");
    case Direction.TopLeft:
      return getArrowAlignmentStyles("top", "left");
    case Direction.TopRight:
      return getArrowAlignmentStyles("top", "right");
    case Direction.TopCenter:
      return getArrowAlignmentStyles("top", "center");
    default:
      return null;
  }
};
