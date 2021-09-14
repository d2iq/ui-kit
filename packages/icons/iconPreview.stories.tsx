import * as React from "react";
import { SystemIcons } from "./dist/system-icons-enum";
import { ProductIcons } from "./dist/product-icons-enum";
import IconGrid from "../icon/stories/helpers/IconPreviewGrid";

export default {
  title: "Visual Design Core/Icons"
};

export const _SystemIcons = () => (
  <IconGrid iconEnum={SystemIcons} iconEnumTitle="SystemIcons" />
);

export const _ProductIcons = () => (
  <IconGrid
    iconEnum={ProductIcons}
    iconEnumTitle="ProductIcons"
    darkMode={true}
  />
);
