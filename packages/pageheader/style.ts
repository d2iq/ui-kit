import { css } from "emotion";

export const fillHeight = css`
  display: flex;
  flex-direction: column;

  > * {
    flex-shrink: 0;
  }
`;
