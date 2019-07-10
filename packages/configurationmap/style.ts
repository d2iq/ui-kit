import { css } from "emotion";

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
