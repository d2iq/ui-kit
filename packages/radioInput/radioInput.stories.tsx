import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import { RadioInput } from "./";
import { InputAppearance } from "../shared/types/inputAppearance";
import { inputStoryWrapper } from "../../decorators/inputStoryWrapper";
import RadioInputStoryHelper from "./RadioInputStoryHelper";

import readme from "./README.md";

storiesOf("Forms|RadioInput", module)
  .addParameters({
    readme: {
      sidebar: readme,
    },
  })
  .addDecorator(inputStoryWrapper)
  .add("default", () => (
    <RadioInputStoryHelper>
      {({ changeHandler, checkedValue }) => (
        <>
          <RadioInput
            id="default"
            inputLabel="Default"
            value="default"
            name="defaultRadioGroup"
            onChange={changeHandler}
            checked={checkedValue === "default"}
          />

          <RadioInput
            id="error"
            inputLabel="Error"
            appearance={InputAppearance.Error}
            value="error"
            name="defaultRadioGroup"
            onChange={changeHandler}
            checked={checkedValue === "error"}
          />

          <RadioInput
            id="success"
            inputLabel="Success"
            appearance={InputAppearance.Success}
            value="success"
            name="defaultRadioGroup"
            onChange={changeHandler}
            checked={checkedValue === "success"}
          />

          <RadioInput
            id="disabled"
            inputLabel="Disabled"
            disabled={true}
            value="disabled"
            name="defaultRadioGroup"
            onChange={changeHandler}
            checked={checkedValue === "disabled"}
          />
        </>
      )}
    </RadioInputStoryHelper>
  ))
  .add("checked", () => (
    <>
      <RadioInput
        id="default"
        inputLabel="Default"
        value="default"
        name="checkedRadioGroup"
        checked={true}
      />

      <RadioInput
        id="error"
        inputLabel="Error"
        appearance={InputAppearance.Error}
        value="error"
        name="checkedRadioGroup"
        checked={true}
      />

      <RadioInput
        id="success"
        inputLabel="Success"
        appearance={InputAppearance.Success}
        value="success"
        name="checkedRadioGroup"
        checked={true}
      />

      <RadioInput
        id="disabled"
        inputLabel="Disabled"
        disabled={true}
        value="disabled"
        name="checkedRadioGroup"
        checked={true}
      />
    </>
  ))
  .add("top-aligned text", () => (
    <RadioInput
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
      name="bigLabelName"
    />
  ))
  .add("hint text", () => (
    <RadioInput
      id="hintText"
      inputLabel="Some label"
      hintContent="Here's a hint"
      value="hintTextValue"
      name="hintTextName"
    />
  ));
