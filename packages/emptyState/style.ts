import { css } from "emotion";

export const emptyStateContainer = css`
  display: grid;
  grid-template-columns: minmax(min(450px, 100%), min-content);
  justify-content: center;
`;

export const vertAlignHeading = css`
  vertical-align: middle;
`;

export const emptyStateWithGraphicBody = css`
  margin: 0 auto;
  max-width: 42em;
`;

export const emptyStateGraphic = css`
  display: block;
  margin: 0 auto;
  max-width: 100%;
`;
