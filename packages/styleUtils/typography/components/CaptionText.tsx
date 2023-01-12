import * as React from "react";
import SmallText from "./SmallText";
import { SharedTextProps } from "../textTypes";
import { themeTextColorSecondary } from "../../../design-tokens/build/js/designTokens";

const CaptionText = (props: SharedTextProps) => (
  <SmallText
    weight="normal"
    color={themeTextColorSecondary}
    data-cy="captionText"
    {...props}
  />
);

export default CaptionText;
