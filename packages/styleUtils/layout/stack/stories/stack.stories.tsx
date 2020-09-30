import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, select } from "@storybook/addon-knobs";
import { withReadme } from "storybook-readme";
import Stack from "../components/Stack";
import { SpaceSize } from "../../../../shared/styles/styleUtils/modifiers/modifierUtils";

const readme = require("../README.md");

storiesOf("Layout|Stack", module)
  .addDecorator(withReadme([readme]))
  .addDecorator(withKnobs)
  .add("default", () => (
    <Stack>
      <div>Lorem Ipsum is simply dummy text</div>
      <div>of the printing and typesetting industry.</div>
      <div>Lorem Ipsum has been the industry's</div>
      <div>standard dummy text ever since the 1500s,</div>
      <div>when an unknown printer took a galley of</div>
      <div>type and scrambled it to make a type </div>
      <div>specimen book. It has survived not only</div>
      <div>five centuries, but also the leap into</div>
      <div>electronic typesetting, remaining essentially</div>
      <div>unchanged. It was popularised in the 1960s.</div>
    </Stack>
  ))
  .add("spacingSize", () => {
    const sizes = {
      xxs: "xxs",
      xs: "xs",
      s: "s",
      m: "m",
      l: "l",
      xl: "xl",
      xxl: "xxl",
      none: "none"
    };
    const size = select("side", sizes, "m");

    return (
      <Stack spacingSize={size as SpaceSize}>
        <div>Use the Knobs panel to change the size of the spacing</div>
        <div>Lorem Ipsum is simply dummy text</div>
        <div>of the printing and typesetting industry.</div>
        <div>Lorem Ipsum has been the industry's</div>
        <div>standard dummy text ever since the 1500s,</div>
        <div>when an unknown printer took a galley of</div>
        <div>type and scrambled it to make a type </div>
        <div>specimen book. It has survived not only</div>
        <div>five centuries, but also the leap into</div>
        <div>electronic typesetting, remaining essentially</div>
        <div>unchanged. It was popularised in the 1960s.</div>
      </Stack>
    );
  })
  .add("responsive spacingSize", () => {
    return (
      <Stack
        spacingSize={{
          default: "none",
          small: "m",
          medium: "l",
          jumbo: "xl"
        }}
      >
        <div>Resize your viewport width to see the spacing change</div>
        <div>Use the Knobs panel to change the size of the spacing</div>
        <div>Lorem Ipsum is simply dummy text</div>
        <div>of the printing and typesetting industry.</div>
        <div>Lorem Ipsum has been the industry's</div>
        <div>standard dummy text ever since the 1500s,</div>
        <div>when an unknown printer took a galley of</div>
        <div>type and scrambled it to make a type </div>
        <div>specimen book. It has survived not only</div>
        <div>five centuries, but also the leap into</div>
        <div>electronic typesetting, remaining essentially</div>
        <div>unchanged. It was popularised in the 1960s.</div>
      </Stack>
    );
  })
  .add("custom HTML tag", () => {
    return (
      <Stack tag="ul">
        <li>{`This stack is rendered with a <ul> tag`}</li>
        <li>Use the Knobs panel to change the size of the spacing</li>
        <li>Lorem Ipsum is simply dummy text</li>
        <li>of the printing and typesetting industry.</li>
        <li>Lorem Ipsum has been the industry's</li>
        <li>standard dummy text ever since the 1500s,</li>
        <li>when an unknown printer took a galley of</li>
        <li>type and scrambled it to make a type </li>
        <li>specimen book. It has survived not only</li>
        <li>five centuries, but also the leap into</li>
        <li>electronic typesetting, remaining essentially</li>
        <li>unchanged. It was popularised in the 1960s.</li>
      </Stack>
    );
  });
