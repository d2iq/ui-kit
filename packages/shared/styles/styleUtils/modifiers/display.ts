import { css } from "emotion";

export const display = (displayType: React.CSSProperties["display"]) => {
  return css`
    display: ${displayType};
  `;
};
