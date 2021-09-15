import { action } from "@storybook/addon-actions";
import * as React from "react";
import { inputStoryWrapper } from "../../../decorators/inputStoryWrapper";

import { TextInput } from "..";
import { InputAppearance } from "../../shared/types/inputAppearance";

export default {
  title: "Forms/TextInput",
  decorators: [inputStoryWrapper],
  component: TextInput
};

export const Default = () => (
  <>
    <TextInput
      id="standard.input"
      inputLabel="Standard"
      placeholder="Placeholder"
    />
    <TextInput
      id="error.input"
      inputLabel="Error"
      appearance={InputAppearance.Error}
      placeholder="Placeholder"
    />
    <TextInput
      id="success.input"
      inputLabel="Success"
      appearance={InputAppearance.Success}
      placeholder="Placeholder"
    />
    <TextInput
      id="disabled.input"
      inputLabel="Disabled"
      disabled={true}
      placeholder="Placeholder"
    />
    <TextInput
      id="disabled.value.input"
      inputLabel="Disabled w/ Value"
      disabled={true}
      value="This is Disabled"
      placeholder="Placeholder"
    />
  </>
);

export const HintText = () => (
  <>
    <TextInput
      id="hint.input"
      inputLabel="Hint"
      placeholder="Placeholder"
      hintContent="Enter a body of text here"
    />
    <TextInput
      id="hint.input.with.errors"
      inputLabel="Hint and Error"
      appearance={InputAppearance.Error}
      placeholder="Placeholder"
      hintContent="Enter a body of text here"
      errors={["This is an error"]}
    />
  </>
);

export const HiddenLabel = () => (
  <TextInput
    id="hidden.label.input"
    inputLabel="Hidden"
    placeholder="Placeholder"
    showInputLabel={false}
  />
);

export const Required = () => (
  <>
    <TextInput
      id="required"
      inputLabel="Required Field"
      placeholder="Placeholder"
      required={true}
    />
    <TextInput
      id="required.input.with.errors"
      inputLabel="Required Field"
      appearance={InputAppearance.Error}
      placeholder="Placeholder"
      errors={["Please enter a value."]}
      required={true}
    />
  </>
);

export const ErrorWithMessage = () => (
  <TextInput
    id="error.input.with.message"
    inputLabel="Require Field"
    appearance={InputAppearance.Error}
    placeholder="Placeholder"
    errors={["Please enter a value."]}
    required={true}
  />
);

export const ErrorWithMessages = () => (
  <TextInput
    id="error.input.with.message"
    inputLabel="Require Field"
    appearance={InputAppearance.Error}
    placeholder="Placeholder"
    errors={["Please enter a value.", "Value must not be empty."]}
    required={true}
  />
);

export const DelegatesOnChangeHandler = () => (
  <form onChange={action("onChange")}>
    <TextInput id="text.id" inputLabel="Id" value="/" />
    <TextInput
      id="text.container"
      inputLabel="Container"
      placeholder="nginx, alpine, etc."
      value=""
    />
  </form>
);

export const TypeNumber = () => (
  <TextInput id="number.input" type="number" inputLabel="Number" />
);

export const TypeSearch = () => (
  <TextInput id="search.input" type="search" inputLabel="Search" />
);

export const TypeEmail = () => (
  <TextInput id="email.input" type="email" inputLabel="Email" />
);

export const TypePassword = () => (
  <TextInput id="password.input" type="password" inputLabel="Password" />
);

export const TypeTel = () => (
  <TextInput id="telephone.input" type="tel" inputLabel="Telephone" />
);

export const TypeUrl = () => (
  <TextInput id="url.input" type="url" inputLabel="URL" />
);

export const WithDefaultIconStringTooltip = () => (
  <TextInput
    id="string.tooltip.input"
    inputLabel="Require Field"
    placeholder="Placeholder"
    hintContent="Enter a correct value here. e.g. not empty"
    required={true}
    tooltipContent="This is a simple string tooltip"
  />
);

export const WithDefaultIconLongStringTooltip = () => (
  <TextInput
    id="long.string.tooltip.input"
    inputLabel="Require Field"
    placeholder="Placeholder"
    hintContent="Enter a correct value here. e.g. not empty"
    required={true}
    tooltipContent="This is a very long string tooltip, created in order to test the maximum width"
  />
);

export const WithDefaultIconHtmlElementTooltip = () => (
  <TextInput
    id="element.tooltip.input"
    inputLabel="Require Field"
    placeholder="Placeholder"
    hintContent="Enter a correct value here. e.g. not empty"
    required={true}
    tooltipContent={<div>Tooltip containing HTML element</div>}
  />
);
