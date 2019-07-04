import * as React from "react";
import SmallText from "./SmallText";
import { SharedTextProps } from "../textTypes";
import { themeTextColorSecondary } from "../../../design-tokens/build/js/designTokens";

const CaptionText = (props: SharedTextProps) => (
  <SmallText weight="normal" color={themeTextColorSecondary} {...props} />
);

CaptionText.defaultProps = {
  align: "left",
  tag: "p"
};

export default CaptionText;
