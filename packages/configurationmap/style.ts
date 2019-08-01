import { css } from "emotion";
import { rowActionStaticClassname } from "./components/ConfigurationMapRowAction";
import {
  visuallyHidden,
  undoVisuallyHidden
} from "../shared/styles/styleUtils";

export const configurationMapRow = css`
  &:last-of-type {
    border-bottom-width: 0;
  }
`;

export const configurationMapHeadingStyle = css`
  margin-bottom: 1em;
`;

export const configurationMapLabel = css`
  flex-basis: 15em;

  &,
  & > * {
    overflow-wrap: break-word;
    word-wrap: break-word;
  }
`;

export const showActionOnHoverStyle = (onlyShowActionOnHover?: boolean) => {
  if (onlyShowActionOnHover) {
    return css`
      .${rowActionStaticClassname} {
        ${visuallyHidden};
      }

      &:hover .${rowActionStaticClassname} {
        ${undoVisuallyHidden};
      }
    `;
  }
};
