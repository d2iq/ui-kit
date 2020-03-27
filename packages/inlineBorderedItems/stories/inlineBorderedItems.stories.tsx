import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import { withKnobs, select } from "@storybook/addon-knobs";
import InlineBorderedItems from "../components/InlineBorderedItems";
import { SpaceSize } from "../../shared/styles/styleUtils/modifiers/modifierUtils";

const readme = require("../README.md");

storiesOf("Layout|InlineBorderedItems", module)
  .addDecorator(withReadme([readme]))
  .addDecorator(withKnobs)
  .add("default", () => (
    <InlineBorderedItems>
      <span>3 Clusters</span>
      <span>+2 Added</span>
      <span>-1 Removed</span>
    </InlineBorderedItems>
  ))
  .add(
    "with custom gutterSize",
    () => {
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
    },
    {
      info: {
        text: "Use the knobs panel to customize the spacing between the items"
      }
    }
  );
