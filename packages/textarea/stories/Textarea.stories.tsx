import * as React from "react";
import { action } from "@storybook/addon-actions";
import { Textarea } from "../index";
import { InputAppearance } from "../../shared/types/inputAppearance";
import { inputStoryWrapper } from "../../../decorators/inputStoryWrapper";

export default {
  title: "Forms/Textarea",
  decorators: [inputStoryWrapper],
  component: Textarea
};

export const Default = () => (
  <>
    <Textarea id="standard" inputLabel="Standard" placeholder="Placeholder" />
    <Textarea
      appearance={InputAppearance.Error}
      id="error"
      inputLabel="Error"
      placeholder="Placeholder"
      tooltipContent={<div>I'm a very informative tooltip!</div>}
    />
    <Textarea
      appearance={InputAppearance.Success}
      id="success"
      inputLabel="Success"
      placeholder="Placeholder"
      tooltipContent={<div>I'm also a tooltip!</div>}
    />
    <Textarea
      id="value"
      inputLabel="With Value"
      placeholder="Placeholder"
      value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    />
    <Textarea
      id="disabled"
      inputLabel="Disabled"
      placeholder="Placeholder"
      disabled={true}
    />
    <Textarea
      id="disabledValue"
      inputLabel="Disabled w/ Value"
      value="This is Disabled"
      disabled={true}
    />
  </>
);

export const HintText = () => (
  <Textarea
    id="hint"
    inputLabel="Standard"
    placeholder="Placeholder"
    hintContent="Enter a body of text here"
  />
);

export const HintTextAndError = () => (
  <Textarea
    id="hint"
    appearance={InputAppearance.Error}
    inputLabel="Standard"
    placeholder="Placeholder"
    hintContent="Enter a body of text here"
    errors={["Something is wrong here"]}
  />
);

export const Required = () => (
  <>
    <Textarea
      id="required"
      inputLabel="Required"
      placeholder="Placeholder"
      required={true}
    />
    <Textarea
      appearance={InputAppearance.Error}
      id="required"
      inputLabel="Required"
      placeholder="Placeholder"
      errors={["Please enter a value"]}
      required={true}
    />
  </>
);

export const HiddenLabel = () => (
  <Textarea
    id="hiddenlabel"
    inputLabel="Standard"
    placeholder="Placeholder"
    showInputLabel={false}
  />
);

export const ErrorWithMessage = () => (
  <Textarea
    appearance={InputAppearance.Error}
    id="error"
    inputLabel="Error"
    placeholder="Placeholder"
    errors={["Something is wrong here"]}
  />
);

export const ErrorWithMessages = () => (
  <Textarea
    appearance={InputAppearance.Error}
    id="error"
    inputLabel="Error"
    placeholder="Placeholder"
    errors={["Something is wrong here", "Another error message"]}
  />
);

export const WithOnChange = () => (
  <Textarea
    id="onChange"
    inputLabel="Standard"
    placeholder="Placeholder"
    onChange={action("onChange happened")}
  />
);

export const WithOnChangeDelegated = () => (
  <form onChange={action("onChange delegated")}>
    <Textarea
      id="onChangeDelegated"
      inputLabel="Standard"
      placeholder="Placeholder"
    />
  </form>
);

export const MoreRows = () => (
  <Textarea
    id="tenRows"
    inputLabel="Standard"
    placeholder="Placeholder"
    rows={10}
  />
);
