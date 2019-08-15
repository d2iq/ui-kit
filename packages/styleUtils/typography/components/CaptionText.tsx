import * as React from "react";
import SmallText from "./SmallText";
import { SharedTextProps } from "../textTypes";
import { themeTextColorSecondary } from "../../../design-tokens/build/js/designTokens";

const CaptionText = (props: SharedTextProps) => (
  <SmallText
    weight="normal"
    color={themeTextColorSecondary}
    dataCy="captionText"
    {...props}
  />
);

CaptionText.defaultProps = {
  align: "inherit",
  tag: "p"
};

export default CaptionText;
