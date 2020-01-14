import { css } from "emotion";

// This awful style is necessary to beat the
// specificity of the 4px bottom margin on
// <label> from CNVS.
//
// Remove once we've stopped using CNVS
export const bruteForceKillLabelMargin = css`
  margin-bottom: 0 !important;
`;
