import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import Expandable from "../components/Expandable";
import { tintText } from "../../shared/styles/styleUtils";

const readme = require("../README.md");

storiesOf("Expandable", module)
  .addDecorator(withReadme([readme]))
  .add("default", () => (
    <Expandable label="Expand for content">
      <div>Check out this exciting content</div>
    </Expandable>
  ))
  .add("opened", () => (
    <Expandable label="Expand for content" isOpen={true}>
      <div>Check out this exciting content</div>
    </Expandable>
  ))
  .add("with custom label classname", () => (
    <Expandable
      label="Expand for blue content"
      labelClassName={tintText("blue")}
    >
      <div>Check out this exciting blue content</div>
    </Expandable>
  ));
