import * as React from "react";
import { withKnobs, select } from "@storybook/addon-knobs";
import InlineBorderedItems from "../components/InlineBorderedItems";
import { SpaceSize } from "../../shared/styles/styleUtils/modifiers/modifierUtils";

export default {
  title: "Layout/InlineBorderedItems",
  decorators: [withKnobs],
  component: InlineBorderedItems
};

export const Default = () => (
  <InlineBorderedItems>
    <span>3 Clusters</span>
    <span>+2 Added</span>
    <span>-1 Removed</span>
  </InlineBorderedItems>
);

export const WithCustomGutterSize = () => {
  const gutterSizes: { [key: string]: SpaceSize } = {
    s: "s",
    m: "m",
    l: "l",
    xl: "xl"
  };
  const gutterSize = select("paddingSize", gutterSizes, "m");

  return (
    <InlineBorderedItems gutterSize={gutterSize}>
      <span>3 Clusters</span>
      <span>+2 Added</span>
      <span>-1 Removed</span>
    </InlineBorderedItems>
  );
};
