import { css } from "emotion";

export const separator = css`
  > *:after {
    display: inline;
    content: " > ";
  }
  > *:last-child:after {
    content: "";
  }
`;
