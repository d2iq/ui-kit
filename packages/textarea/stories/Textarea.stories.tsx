import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withReadme } from "storybook-readme";
import { Textarea } from "../index";
import styled from "react-emotion";
import { InputAppearance } from "../../shared/types/inputAppearance";

const readme = require("../README.md");

const InputStoryWrapper = styled("div")`
  max-width: 300px;

  & > div {
    margin-bottom: 1.5em;
  }
`;

storiesOf("Forms/Textarea", module)
  .addDecorator(withReadme([readme]))
  .add("default", () => (
    <InputStoryWrapper>
      <div>
        <Textarea
          id="standard"
          inputLabel="Standard"
          placeholder="Placeholder"
        />
      </div>
      <div>
        <Textarea
          appearance={InputAppearance.Error}
          id="error"
          inputLabel="Error"
          placeholder="Placeholder"
        />
      </div>
      <div>
        <Textarea
          appearance={InputAppearance.Success}
          id="success"
          inputLabel="Success"
          placeholder="Placeholder"
        />
      </div>
      <div>
        <Textarea
          id="value"
          inputLabel="With Value"
          placeholder="Placeholder"
          value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
      </div>
      <div>
        <Textarea
          id="disabled"
          inputLabel="Disabled"
          placeholder="Placeholder"
          disabled={true}
        />
      </div>
      <div>
        <Textarea
          id="disabledValue"
          inputLabel="Disabled w/ Value"
          value="This is Disabled"
          disabled={true}
        />
      </div>
    </InputStoryWrapper>
  ))
  .add("more rows", () => (
    <InputStoryWrapper>
      <Textarea
        id="tenRows"
        inputLabel="Standard"
        placeholder="Placeholder"
        rows={10}
      />
    </InputStoryWrapper>
  ))
  .add("required", () => (
    <InputStoryWrapper>
      <div>
        <Textarea
          id="required"
          inputLabel="Required"
          placeholder="Placeholder"
          required={true}
        />
      </div>
      <div>
        <Textarea
          appearance={InputAppearance.Error}
          id="required"
          inputLabel="Required"
          placeholder="Placeholder"
          errors={["Please enter a value"]}
          required={true}
        />
      </div>
    </InputStoryWrapper>
  ))
  .add("with hint", () => (
    <InputStoryWrapper>
      <Textarea
        id="hint"
        inputLabel="Standard"
        placeholder="Placeholder"
        hintContent="Enter a body of text here"
      />
    </InputStoryWrapper>
  ))
  .add("error with message", () => (
    <InputStoryWrapper>
      <Textarea
        appearance={InputAppearance.Error}
        id="error"
        inputLabel="Error"
        placeholder="Placeholder"
        errors={["Something is wrong here"]}
      />
    </InputStoryWrapper>
  ))
  .add("error with messages", () => (
    <InputStoryWrapper>
      <Textarea
        appearance={InputAppearance.Error}
        id="error"
        inputLabel="Error"
        placeholder="Placeholder"
        errors={["Something is wrong here", "Another error message"]}
      />
    </InputStoryWrapper>
  ))
  .add("hidden label", () => (
    <InputStoryWrapper>
      <Textarea
        id="hiddenlabel"
        inputLabel="Standard"
        placeholder="Placeholder"
        showInputLabel={false}
      />
    </InputStoryWrapper>
  ))
  .add("with onChange", () => (
    <InputStoryWrapper>
      <Textarea
        id="onChange"
        inputLabel="Standard"
        placeholder="Placeholder"
        onChange={action("onChange happened")}
      />
    </InputStoryWrapper>
  ))
  .add("with onChange delegated", () => (
    <InputStoryWrapper>
      <form onChange={action("onChange delegated")}>
        <Textarea
          id="onChangeDelegated"
          inputLabel="Standard"
          placeholder="Placeholder"
        />
      </form>
    </InputStoryWrapper>
  ));
