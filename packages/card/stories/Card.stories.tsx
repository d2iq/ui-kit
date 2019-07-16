import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import { withKnobs, select } from "@storybook/addon-knobs";
import { Card } from "../index";
import { SpaceSize } from "../../shared/styles/styleUtils/modifiers/modifierUtils";

const readme = require("../README.md");

storiesOf("Card", module)
  .addDecorator(withReadme([readme]))
  .addDecorator(withKnobs)
  .add("default", () => <Card>default</Card>)
  .add("paddingSize", () => {
    const sizes = {
      s: "s",
      m: "m",
      l: "l",
      xl: "xl"
    };
    const size = select("paddingSize", sizes, "m");

    return (
      <Card paddingSize={size as SpaceSize}>
        Use the Knobs panel to change the padding
      </Card>
    );
  })
  .add("responsive paddingSize", () => (
    <Card
      paddingSize={{
        default: "s",
        small: "m",
        medium: "l",
        large: "xl",
        jumbo: "xxl"
      }}
    >
      Resize the viewport to see the padding change
    </Card>
  ))
  .add("2:1 aspect ratio", () => (
    <div style={{ maxWidth: "400px" }}>
      <Card aspectRatio={[2, 1]}>I stay at a 2:1 aspect ratio</Card>
    </div>
  ));
