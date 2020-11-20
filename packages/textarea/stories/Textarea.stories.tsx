import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withReadme } from "storybook-readme";
import { Textarea } from "../index";
import { InputAppearance } from "../../shared/types/inputAppearance";
import { inputStoryWrapper } from "../../../decorators/inputStoryWrapper";

import readme from "../README.md";

storiesOf("Forms|Textarea", module)
  .addParameters({
    readme: {
      sidebar: readme
    }
  })
  .addDecorator(inputStoryWrapper)
  .add("default", () => (
    <React.Fragment>
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
    </React.Fragment>
  ))
  .add("hint text", () => (
    <Textarea
      id="hint"
      inputLabel="Standard"
      placeholder="Placeholder"
      hintContent="Enter a body of text here"
    />
  ))
  .add("hint text and error", () => (
    <Textarea
      id="hint"
      appearance={InputAppearance.Error}
      inputLabel="Standard"
      placeholder="Placeholder"
      hintContent="Enter a body of text here"
      errors={["Something is wrong here"]}
    />
  ))
  .add("required", () => (
    <React.Fragment>
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
    </React.Fragment>
  ))
  .add("hidden label", () => (
    <Textarea
      id="hiddenlabel"
      inputLabel="Standard"
      placeholder="Placeholder"
      showInputLabel={false}
    />
  ))
  .add("error with message", () => (
    <Textarea
      appearance={InputAppearance.Error}
      id="error"
      inputLabel="Error"
      placeholder="Placeholder"
      errors={["Something is wrong here"]}
    />
  ))
  .add("error with messages", () => (
    <Textarea
      appearance={InputAppearance.Error}
      id="error"
      inputLabel="Error"
      placeholder="Placeholder"
      errors={["Something is wrong here", "Another error message"]}
    />
  ))
  .add("with onChange", () => (
    <Textarea
      id="onChange"
      inputLabel="Standard"
      placeholder="Placeholder"
      onChange={action("onChange happened")}
    />
  ))
  .add("with onChange delegated", () => (
    <form onChange={action("onChange delegated")}>
      <Textarea
        id="onChangeDelegated"
        inputLabel="Standard"
        placeholder="Placeholder"
      />
    </form>
  ))
  .add("more rows", () => (
    <Textarea
      id="tenRows"
      inputLabel="Standard"
      placeholder="Placeholder"
      rows={10}
    />
  ));
