import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import { ConfigurationMap } from "../index";

const readme = require("../README.md");

storiesOf("ConfigurationMap", module)
  .addDecorator(withReadme([readme]))
  .add("default", () => (
    <div style={{ height: "200px" }}>
      <ConfigurationMap data={{ id: "foobar", cmd: "sleep 100;", cpu: 1 }} />
    </div>
  ));
