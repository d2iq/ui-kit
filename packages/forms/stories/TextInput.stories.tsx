import { css, cx } from "emotion";
import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import { TextInput, TextInputAppearance } from "../index";
const readme = require("../README.md");

const defaultDisplayItem = css`
  width: 160px;
`;

storiesOf("Forms/TextInput", module)
  .addDecorator(withReadme([readme]))
  .addWithInfo("default", () => (
    <div>
      <TextInput
        className={cx(defaultDisplayItem)}
        inputLabel="Standard"
        placeholder="Placeholder"
      />
      <br />
      <TextInput
        className={cx(defaultDisplayItem)}
        inputLabel="Error"
        appearance={TextInputAppearance.Error}
        placeholder="Placeholder"
      />
      <br />
      <TextInput
        className={cx(defaultDisplayItem)}
        inputLabel="Success"
        appearance={TextInputAppearance.Success}
        placeholder="Placeholder"
      />
      <br />
      <TextInput
        className={cx(defaultDisplayItem)}
        inputLabel="Disabled"
        disabled={true}
        value="This is Disabled"
        placeholder="Placeholder"
      />
    </div>
  ))
  .addWithInfo("Error with Message", () => (
    <TextInput
      className={cx(defaultDisplayItem)}
      inputLabel="Require Field"
      appearance={TextInputAppearance.Error}
      placeholder="Placeholder"
      validationContent="Please enter a value."
      required={true}
    />
  ))
  .addWithInfo("Hidden Label", () => (
    <TextInput
      className={cx(defaultDisplayItem)}
      inputLabel="Hidden"
      placeholder="hidden label"
      showInputLabel={false}
    />
  ))
  .addWithInfo("Number", () => <TextInput type="number" inputLabel="Number" />)
  .addWithInfo("Search", () => <TextInput type="search" inputLabel="Search" />)
  .addWithInfo("Email", () => <TextInput type="email" inputLabel="Email" />)
  .addWithInfo("Password", () => (
    <TextInput type="password" inputLabel="Password" />
  ))
  .addWithInfo("Telephone", () => (
    <TextInput type="tel" inputLabel="Telephone" />
  ))
  .addWithInfo("URL", () => <TextInput type="url" inputLabel="URL" />);
