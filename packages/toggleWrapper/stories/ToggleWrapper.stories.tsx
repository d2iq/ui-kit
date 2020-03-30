import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import { ToggleWrapper } from "../index";

const readme = require("../README.md");

storiesOf("Utils|ToggleWrapper", module)
  .addDecorator(withReadme([readme]))
  .add("default", () => (
    <ToggleWrapper>
      {({ isActive }) => (
        <div>
          the isActive render prop returns:
          <pre>{`${isActive}`}</pre>
        </div>
      )}
    </ToggleWrapper>
  ))
  .add("isActive", () => (
    <ToggleWrapper isActive={true}>
      {({ isActive }) => (
        <div>
          the isActive render prop returns:
          <pre>{`${isActive}`}</pre>
        </div>
      )}
    </ToggleWrapper>
  ));
