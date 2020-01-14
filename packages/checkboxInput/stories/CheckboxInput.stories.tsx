import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import CheckboxInput from "../components/CheckboxInput";
import CheckboxStoryHelper from "../stories/helpers/CheckboxStoryHelper";
import { InputAppearance } from "../../shared/types/inputAppearance";
import { inputStoryWrapper } from "../../../decorators/inputStoryWrapper";

const readme = require("../README.md");

storiesOf("Forms/CheckboxInput", module)
  .addDecorator(withReadme([readme]))
  .addDecorator(inputStoryWrapper)
  .add("default", () => (
    <React.Fragment>
      <CheckboxStoryHelper>
        {({ changeHandler, isChecked }) => (
          <CheckboxInput
            id="default"
            inputLabel="Default"
            value="default"
            checked={isChecked}
            onChange={changeHandler}
          />
        )}
      </CheckboxStoryHelper>

      <CheckboxStoryHelper>
        {({ changeHandler, isChecked }) => (
          <CheckboxInput
            id="error"
            inputLabel="Error"
            appearance={InputAppearance.Error}
            value="error"
            checked={isChecked}
            onChange={changeHandler}
          />
        )}
      </CheckboxStoryHelper>

      <CheckboxStoryHelper>
        {({ changeHandler, isChecked }) => (
          <CheckboxInput
            id="success"
            inputLabel="Success"
            appearance={InputAppearance.Success}
            value="success"
            checked={isChecked}
            onChange={changeHandler}
          />
        )}
      </CheckboxStoryHelper>

      <CheckboxStoryHelper>
        {({ changeHandler, isChecked }) => (
          <CheckboxInput
            id="disabled"
            inputLabel="Disabled"
            disabled={true}
            value="disabled"
            checked={isChecked}
            onChange={changeHandler}
          />
        )}
      </CheckboxStoryHelper>
    </React.Fragment>
  ))
  .add("checked", () => (
    <React.Fragment>
      <CheckboxStoryHelper isChecked={true}>
        {({ changeHandler, isChecked }) => (
          <CheckboxInput
            id="default.checked"
            inputLabel="Checked"
            value="checked.default"
            checked={isChecked}
            onChange={changeHandler}
          />
        )}
      </CheckboxStoryHelper>

      <CheckboxStoryHelper isChecked={true}>
        {({ changeHandler, isChecked }) => (
          <CheckboxInput
            id="error.checked"
            inputLabel="Error checked"
            appearance={InputAppearance.Error}
            value="checked.error"
            checked={isChecked}
            onChange={changeHandler}
          />
        )}
      </CheckboxStoryHelper>

      <CheckboxStoryHelper isChecked={true}>
        {({ changeHandler, isChecked }) => (
          <CheckboxInput
            id="success.checked"
            inputLabel="Success checked"
            appearance={InputAppearance.Success}
            value="checked.success"
            checked={isChecked}
            onChange={changeHandler}
          />
        )}
      </CheckboxStoryHelper>

      <CheckboxStoryHelper isChecked={true}>
        {({ changeHandler, isChecked }) => (
          <CheckboxInput
            id="disabled.checked"
            inputLabel="Disabled checked"
            disabled={true}
            value="checked.disabled"
            checked={isChecked}
            onChange={changeHandler}
          />
        )}
      </CheckboxStoryHelper>
    </React.Fragment>
  ))
  .add(
    "top-aligned text",
    () => (
      <CheckboxStoryHelper>
        {({ changeHandler, isChecked }) => (
          <CheckboxInput
            id="bigLabel"
            inputLabel={
              <div>
                <span style={{ display: "block", marginBottom: "0.5em" }}>
                  Sometimes we have a really long block of text next to an input
                </span>
                <span style={{ display: "block", fontSize: ".9em" }}>
                  Here's an example of what that would look like
                </span>
              </div>
            }
            vertAlign="top"
            value="bigLabel"
            checked={isChecked}
            onChange={changeHandler}
          />
        )}
      </CheckboxStoryHelper>
    ),
    {
      info: {
        propTables: [CheckboxInput]
      }
    }
  )
  .add(
    "indeterminate",
    () => (
      <CheckboxStoryHelper>
        {({ changeHandler, isChecked }) => (
          <CheckboxInput
            id="hiddenLabel"
            inputLabel="I'm neither true or false"
            value="indeterminate"
            indeterminate={isChecked === undefined}
            checked={isChecked}
            onChange={changeHandler}
          />
        )}
      </CheckboxStoryHelper>
    ),
    {
      info: {
        propTables: [CheckboxInput]
      }
    }
  )
  .add(
    "hint text",
    () => (
      <CheckboxStoryHelper isChecked={true}>
        {({ changeHandler, isChecked }) => (
          <CheckboxInput
            id="hiddenLabel"
            inputLabel="You can't see me"
            hintContent="Here's a hint"
            value="hiddenLabelValue"
            checked={isChecked}
            onChange={changeHandler}
          />
        )}
      </CheckboxStoryHelper>
    ),
    {
      info: {
        propTables: [CheckboxInput]
      }
    }
  )
  .add(
    "hidden label",
    () => (
      <CheckboxStoryHelper isChecked={true}>
        {({ changeHandler, isChecked }) => (
          <CheckboxInput
            id="hiddenLabel"
            inputLabel="You can't see me"
            showInputLabel={false}
            value="hiddenLabelValue"
            checked={isChecked}
            onChange={changeHandler}
          />
        )}
      </CheckboxStoryHelper>
    ),
    {
      info: {
        propTables: [CheckboxInput]
      }
    }
  );
