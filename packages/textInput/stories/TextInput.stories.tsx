import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { withReadme } from "storybook-readme";
import { inputStoryWrapper } from "../../../decorators/inputStoryWrapper";

import { TextInput } from "..";
import { InputAppearance } from "../../shared/types/inputAppearance";

const readme = require("../README.md");

storiesOf("Forms|TextInput", module)
  .addDecorator(withReadme([readme]))
  .addDecorator(inputStoryWrapper)
  .add("default", () => (
    <React.Fragment>
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
    </React.Fragment>
  ))
  .add("hint text", () => (
    <React.Fragment>
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
    </React.Fragment>
  ))
  .add("hidden label", () => (
    <TextInput
      id="hidden.label.input"
      inputLabel="Hidden"
      placeholder="Placeholder"
      showInputLabel={false}
    />
  ))
  .add("required", () => (
    <React.Fragment>
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
    </React.Fragment>
  ))
  .add("error with message", () => (
    <TextInput
      id="error.input.with.message"
      inputLabel="Require Field"
      appearance={InputAppearance.Error}
      placeholder="Placeholder"
      errors={["Please enter a value."]}
      required={true}
    />
  ))
  .add("error with messages", () => (
    <TextInput
      id="error.input.with.message"
      inputLabel="Require Field"
      appearance={InputAppearance.Error}
      placeholder="Placeholder"
      errors={["Please enter a value.", "Value must not be empty."]}
      required={true}
    />
  ))
  .add("delegates onChange handler", () => (
    <form onChange={action("onChange")}>
      <TextInput id="text.id" inputLabel="Id" value="/" />
      <TextInput
        id="text.container"
        inputLabel="Container"
        placeholder="nginx, alpine, etc."
        value=""
      />
    </form>
  ))
  .add('[type="number"]', () => (
    <TextInput id="number.input" type="number" inputLabel="Number" />
  ))
  .add('[type="search"]', () => (
    <TextInput id="search.input" type="search" inputLabel="Search" />
  ))
  .add('[type="email"]', () => (
    <TextInput id="email.input" type="email" inputLabel="Email" />
  ))
  .add('[type="password"]', () => (
    <TextInput id="password.input" type="password" inputLabel="Password" />
  ))
  .add('[type="tel"]', () => (
    <TextInput id="telephone.input" type="tel" inputLabel="Telephone" />
  ))
  .add('[type="url"]', () => (
    <TextInput id="url.input" type="url" inputLabel="URL" />
  ))
  .add("with default icon string tooltip", () => (
    <TextInput
      id="string.tooltip.input"
      inputLabel="Require Field"
      placeholder="Placeholder"
      hintContent="Enter a correct value here. e.g. not empty"
      required={true}
      tooltipContent="This is a simple string tooltip"
    />
  ))
  .add("with default icon long string tooltip", () => (
    <TextInput
      id="long.string.tooltip.input"
      inputLabel="Require Field"
      placeholder="Placeholder"
      hintContent="Enter a correct value here. e.g. not empty"
      required={true}
      tooltipContent="This is a very long string tooltip, created in order to test the maximum width"
    />
  ))
  .add("with default icon html element tooltip", () => (
    <TextInput
      id="element.tooltip.input"
      inputLabel="Require Field"
      placeholder="Placeholder"
      hintContent="Enter a correct value here. e.g. not empty"
      required={true}
      tooltipContent={<div>Tooltip containing HTML element</div>}
    />
  ));
