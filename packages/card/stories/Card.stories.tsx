import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import { Card } from "../index";

const readme = require("../README.md");

storiesOf("Card", module)
  .addDecorator(withReadme([readme]))
  .add("default", () => <Card>default</Card>)
  .add("2:1 aspect ratio", () => {
    return (
      <div style={{ maxWidth: "400px" }}>
        <Card aspectRatio={[2, 1]}>I stay at a 2:1 aspect ratio</Card>
      </div>
    );
  });
