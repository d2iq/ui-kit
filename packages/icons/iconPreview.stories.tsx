import * as React from "react";
import { storiesOf } from "@storybook/react";
import { SystemIcons } from "./dist/system-icons-enum";
import { ProductIcons } from "./dist/product-icons-enum";
import IconGrid from "../icon/stories/helpers/IconPreviewGrid";

storiesOf("Visual Design Core|Icons", module)
  .add("system icons", () => (
    <IconGrid iconEnum={SystemIcons} iconEnumTitle="SystemIcons" />
  ))
  .add("product icons", () => (
    <IconGrid
      iconEnum={ProductIcons}
      iconEnumTitle="ProductIcons"
      darkMode={true}
    />
  ));
