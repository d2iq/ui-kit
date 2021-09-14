import * as React from "react";
import { RadioInput } from "./";
import { InputAppearance } from "../shared/types/inputAppearance";
import { inputStoryWrapper } from "../../decorators/inputStoryWrapper";
import RadioInputStoryHelper from "./RadioInputStoryHelper";

export default {
  title: "Forms/RadioInput",
  decorators: [inputStoryWrapper],
  component: RadioInput
};

export const Default = () => (
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
);
export const Checked = () => (
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
);

export const TopAlignedText = () => (
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
);

export const HintText = () => (
  <RadioInput
    id="hintText"
    inputLabel="Some label"
    hintContent="Here's a hint"
    value="hintTextValue"
    name="hintTextName"
  />
);
