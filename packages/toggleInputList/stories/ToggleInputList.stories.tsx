import * as React from "react";
import { select, withKnobs } from "@storybook/addon-knobs";
import ToggleInputListStoryHelper from "./helpers/ToggleInputListStoryHelper";
import ToggleInputList from "../components/ToggleInputList";
import { InputAppearance } from "../../shared/types/inputAppearance";
import { toggleInputDecorator } from "./helpers/toggleInputDecorator";

const options = [
  { inputLabel: "Exosphere", id: "id.1", value: "exosphere" },
  { inputLabel: "Thermosphere", id: "id.2", value: "thermosphere" },
  { inputLabel: "Stratosphere", id: "id.3", value: "stratosphere" }
];

const inputTypes = {
  checkbox: "checkbox",
  radio: "radio"
};

export default {
  title: "Forms/ToggleInputList",
  decorators: [withKnobs, toggleInputDecorator],
  component: ToggleInputList
};

export const Default = () => {
  const inputType = select("Input type", inputTypes, "checkbox");
  return (
    <ToggleInputListStoryHelper>
      {({ changeHandler, selectedItems }) => (
        <ToggleInputList
          id="checkbox"
          items={options}
          listLabel="Atmosphere layers"
          onChange={changeHandler}
          selectedItems={selectedItems}
          isRadioGroup={inputType === "radio"}
        />
      )}
    </ToggleInputListStoryHelper>
  );
};

export const Selected = () => {
  const inputType = select("Input type", inputTypes, "checkbox");
  return (
    <ToggleInputListStoryHelper selectedItems={["stratosphere"]}>
      {({ changeHandler, selectedItems }) => (
        <ToggleInputList
          id="checkboxSelected"
          items={options}
          listLabel="Atmosphere layers"
          onChange={changeHandler}
          selectedItems={selectedItems}
          isRadioGroup={inputType === "radio"}
        />
      )}
    </ToggleInputListStoryHelper>
  );
};

export const Errors = () => {
  const inputType = select("Input type", inputTypes, "checkbox");
  return (
    <ToggleInputListStoryHelper>
      {({ changeHandler, selectedItems }) => (
        <ToggleInputList
          id="withErrors"
          items={[
            { inputLabel: "Exosphere", id: "id.1", value: "exosphere" },
            {
              inputLabel: "Thermosphere",
              id: "id.2",
              value: "thermosphere",
              appearance: InputAppearance.Error
            },
            {
              inputLabel: "Stratosphere",
              id: "id.3",
              value: "stratosphere"
            }
          ]}
          listLabel="Atmosphere layers"
          errors={["Something is wrong here"]}
          onChange={changeHandler}
          selectedItems={selectedItems}
          isRadioGroup={inputType === "radio"}
        />
      )}
    </ToggleInputListStoryHelper>
  );
};

export const HintContent = () => {
  const inputType = select("Input type", inputTypes, "checkbox");
  return (
    <ToggleInputListStoryHelper>
      {({ changeHandler, selectedItems }) => (
        <ToggleInputList
          id="withHint"
          items={options}
          listLabel="Atmosphere layers"
          hintContent="I'm a helpful hint"
          onChange={changeHandler}
          selectedItems={selectedItems}
          isRadioGroup={inputType === "radio"}
        />
      )}
    </ToggleInputListStoryHelper>
  );
};

export const HiddenLabel = () => {
  const inputType = select("Input type", inputTypes, "checkbox");
  return (
    <ToggleInputListStoryHelper>
      {({ changeHandler, selectedItems }) => (
        <ToggleInputList
          id="hiddenLabel"
          items={options}
          listLabel="You can't see me"
          showListLabel={false}
          onChange={changeHandler}
          selectedItems={selectedItems}
          isRadioGroup={inputType === "radio"}
        />
      )}
    </ToggleInputListStoryHelper>
  );
};

export const Required = () => {
  const inputType = select("Input type", inputTypes, "checkbox");
  return (
    <ToggleInputListStoryHelper>
      {({ changeHandler, selectedItems }) => (
        <ToggleInputList
          id="checkbox"
          items={options}
          listLabel="Atmosphere layers"
          onChange={changeHandler}
          selectedItems={selectedItems}
          required={true}
          isRadioGroup={inputType === "radio"}
        />
      )}
    </ToggleInputListStoryHelper>
  );
};

export const ErrorWithMessage = () => {
  const inputType = select("Input type", inputTypes, "checkbox");
  return (
    <ToggleInputListStoryHelper>
      {({ changeHandler, selectedItems }) => (
        <ToggleInputList
          id="checkbox"
          items={options}
          listLabel="Atmosphere layers"
          labelAppearance={InputAppearance.Error}
          onChange={changeHandler}
          selectedItems={[]}
          errors={["Please select an item."]}
          required={true}
          isRadioGroup={inputType === "radio"}
        />
      )}
    </ToggleInputListStoryHelper>
  );
};
