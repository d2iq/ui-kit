import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import { select, withKnobs } from "@storybook/addon-knobs";
import ToggleInputListStoryHelper from "./helpers/ToggleInputListStoryHelper";
import ToggleInputList from "../components/ToggleInputList";
import { InputAppearance } from "../../shared/types/inputAppearance";
import { toggleInputDecorator } from "./helpers/toggleInputDecorator";

import readme from "../README.md";
const options = [
  { inputLabel: "Exosphere", id: "id.1", value: "exosphere" },
  { inputLabel: "Thermosphere", id: "id.2", value: "thermosphere" },
  { inputLabel: "Stratosphere", id: "id.3", value: "stratosphere" }
];

const inputTypes = {
  checkbox: "checkbox",
  radio: "radio"
};

storiesOf("Forms|ToggleInputList", module)
  .addParameters({
    readme: {
      sidebar: readme,
    },
  })
  .addDecorator(withKnobs)
  .addDecorator(toggleInputDecorator)
  .add(
    "default",
    () => {
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
    },
    {
      info: {
        propTables: [ToggleInputList]
      }
    }
  )
  .add(
    "w/ selected",
    () => {
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
    },
    {
      info: {
        propTables: [ToggleInputList]
      }
    }
  )
  .add(
    "w/ errors",
    () => {
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
    },
    {
      info: {
        propTables: [ToggleInputList]
      }
    }
  )
  .add(
    "w/ hint content",
    () => {
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
    },
    {
      info: {
        propTables: [ToggleInputList]
      }
    }
  )
  .add("w/ hidden label", () => {
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
  })
  .add(
    "required",
    () => {
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
    },
    {
      info: {
        propTables: [ToggleInputList]
      }
    }
  )
  .add(
    "error with message",
    () => {
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
    },
    {
      info: {
        propTables: [ToggleInputList]
      }
    }
  );
