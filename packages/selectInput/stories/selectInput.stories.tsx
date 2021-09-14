import * as React from "react";
import { action } from "@storybook/addon-actions";
import { SelectInput } from "../../index";
import { InputAppearance } from "../../shared/types/inputAppearance";
import { inputStoryWrapper } from "../../../decorators/inputStoryWrapper";
import { SystemIcons } from "../../icons/dist/system-icons-enum";

const defaultOptions = [
  { value: "exosphere", label: "Exosphere" },
  { value: "thermosphere", label: "Thermosphere" },
  { value: "mesosphere", label: "Mesosphere" },
  { value: "stratosphere", label: "Stratosphere" },
  { value: "troposphere", label: "Troposphere" },
  {
    value: "really-long",
    label: "A really long label just to test icon overlapping text"
  },
  { value: "disabled", label: "Can't touch this", disabled: true }
];

export default {
  title: "Forms/SelectInput",
  decorators: [inputStoryWrapper],
  component: SelectInput
};

export const Default = () => (
  <>
    <SelectInput
      options={defaultOptions}
      id="default"
      inputLabel="Atmosphere Layer"
    />
    <SelectInput
      options={defaultOptions}
      appearance={InputAppearance.Error}
      id="error"
      inputLabel="Error"
      tooltipContent="I can have a tooltip!"
    />
    <SelectInput
      options={defaultOptions}
      appearance={InputAppearance.Success}
      id="success"
      inputLabel="Success"
    />
    <SelectInput
      options={defaultOptions}
      id="disabled"
      inputLabel="Disabled"
      disabled={true}
    />
  </>
);

export const WithPlaceholder = () => (
  <SelectInput
    options={[
      { value: "placeholder", label: "Pick a layer", disabled: true },
      ...defaultOptions
    ]}
    id="layers"
    inputLabel="Atmosphere Layer"
    value="placeholder"
  />
);

export const HintText = () => (
  <>
    <SelectInput
      options={defaultOptions}
      id="hintOnly"
      inputLabel="Atmosphere Layer"
      hintContent="We suggest the Mesosphere"
    />
    <SelectInput
      appearance={InputAppearance.Error}
      options={defaultOptions}
      id="hintAndError"
      inputLabel="Atmosphere Layer"
      hintContent="We suggest the Mesosphere"
      errors={["Something is wrong here"]}
    />
  </>
);

export const HiddenLabel = () => (
  <SelectInput
    options={defaultOptions}
    id="layers"
    inputLabel="Atmosphere Layer"
    showInputLabel={false}
  />
);

export const Required = () => (
  <>
    <SelectInput
      options={defaultOptions}
      id="required"
      inputLabel="Atmosphere Layer"
      required={true}
    />
    <SelectInput
      appearance={InputAppearance.Error}
      options={defaultOptions}
      id="required.input.with.errors"
      inputLabel="Atmosphere Layer"
      errors={["Please enter a value."]}
      required={true}
    />
  </>
);

export const ErrorWithMessage = () => (
  <SelectInput
    appearance={InputAppearance.Error}
    options={defaultOptions}
    id="layers"
    inputLabel="Atmosphere Layer"
    errors={["Something is wrong here"]}
  />
);

export const ErrorWithMessages = () => (
  <SelectInput
    appearance={InputAppearance.Error}
    options={defaultOptions}
    id="layers"
    inputLabel="Atmosphere Layer"
    errors={["Something is wrong here", "Another thing is wrong too"]}
  />
);

export const WithOnChange = () => (
  <SelectInput
    options={defaultOptions}
    id="layers"
    inputLabel="Atmosphere Layer"
    onChange={action("onChange happened")}
    hintContent="Check the Action Logger tab on the right"
  />
);

export const WithValue = () => (
  <SelectInput
    options={defaultOptions}
    id="layers"
    inputLabel="Atmosphere Layer"
    value="thermosphere"
  />
);

export const WithIcon = () => (
  <SelectInput
    options={defaultOptions}
    id="layers"
    inputLabel="Atmosphere Layer"
    value="thermosphere"
    iconStart={SystemIcons.Donut}
  />
);
