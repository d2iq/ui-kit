import { css } from "emotion";

export const fillHeight = css`
  height: 100%;
  display: flex;
  flex-direction: column;

  > * {
    flex-shrink: 0;
  }
`;
