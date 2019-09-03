import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import { ToggleBox } from "../index";
import ToggleBoxStoryHelper from "./helpers/ToggleBoxStoryHelper";

const readme = require("../README.md");

storiesOf("Forms/ToggleBox", module)
  .addDecorator(withReadme([readme]))
  .add("default", () => (
    <ToggleBoxStoryHelper>
      {({ isActive, changeHandler }) => (
        <ToggleBox
          value="default"
          id="default"
          isActive={isActive}
          onChange={changeHandler}
        >
          default
        </ToggleBox>
      )}
    </ToggleBoxStoryHelper>
  ))
  .add("isActive", () => (
    <ToggleBoxStoryHelper isActive={true}>
      {({ isActive, changeHandler }) => (
        <ToggleBox
          value="isActive"
          id="isActive"
          isActive={isActive}
          onChange={changeHandler}
        >
          isActive
        </ToggleBox>
      )}
    </ToggleBoxStoryHelper>
  ))
  .add("disabled", () => (
    <ToggleBoxStoryHelper>
      {({ isActive, changeHandler }) => (
        <ToggleBox
          value="disabled"
          id="disabled"
          isActive={isActive}
          onChange={changeHandler}
          disabled={true}
        >
          disabled
        </ToggleBox>
      )}
    </ToggleBoxStoryHelper>
  ));
