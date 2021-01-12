import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import Expandable from "../components/Expandable";
import { tintText } from "../../shared/styles/styleUtils";

import readme from "../README.md";

storiesOf("Actions|Expandable", module)
  .addParameters({
    readme: {
      sidebar: readme
    }
  })
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
  .add("opened w/ control prop", () => (
    <Expandable
      label="Expand for content"
      isOpen={true}
      controlledIsOpen={true}
    >
      <div>You have to pass a boolean to `controlledIsOpen` to toggle this</div>
    </Expandable>
  ))
  .add("with custom label classname", () => (
    <Expandable
      label="Expand for blue content"
      labelClassName={tintText("blue")}
    >
      <div>Check out this exciting blue content</div>
    </Expandable>
  ))
  .add("indicator icon on theright", () => (
    <Expandable label="Expand for content" indicatorPosition="right">
      <div>Check out this exciting content</div>
    </Expandable>
  ));
