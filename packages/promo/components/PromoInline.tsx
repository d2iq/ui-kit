import * as React from "react";
import { Card, SpacingBox } from "../../";
import { PromoProps } from "../types";
import PromoContent from "./PromoContent";

const PromoInline = (props: PromoProps) => (
  <Card paddingSize="none">
    <SpacingBox side="horiz" spacingSize="m">
      <PromoContent {...props} />
    </SpacingBox>
  </Card>
);

export default PromoInline;
