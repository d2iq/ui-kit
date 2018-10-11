import * as React from "react";
import { default as InfoBox, InfoBoxProps } from "./InfoBox";
import { infoBoxInline } from "../style";

const InfoBoxInline = (props: InfoBoxProps) => (
  <InfoBox className={infoBoxInline} {...props} />
);

export default InfoBoxInline;
