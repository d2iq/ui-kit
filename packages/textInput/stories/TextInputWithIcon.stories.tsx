import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import { TextInputWithIcon } from "../index";
import { CloseIcon, DownTriangle } from "../../shared/icons";
import { InputAppearance } from "../../shared/types/inputAppearance";
import { inputStoryWrapper } from "../../../decorators/inputStoryWrapper";

const readme = require("../README.md");

storiesOf("Forms/TextInputWithIcon", module)
  .addDecorator(withReadme([readme]))
  .addDecorator(inputStoryWrapper)
  .add("iconStart", () => (
    <React.Fragment>
      <TextInputWithIcon
        id="standard.input"
        iconStart={<DownTriangle />}
        inputLabel="Single icon - Standard"
      />
      <TextInputWithIcon
        id="error.input"
        iconStart={<DownTriangle />}
        inputLabel="Single icon - Error"
        appearance={InputAppearance.Error}
      />
      <TextInputWithIcon
        id="success.input"
        iconStart={<DownTriangle />}
        inputLabel="Single icon - Success"
        appearance={InputAppearance.Success}
      />
      <TextInputWithIcon
        id="disabled.input"
        iconStart={<DownTriangle />}
        inputLabel="Single icon - Disabled"
        disabled={true}
        placeholder="Placeholder"
      />
      <TextInputWithIcon
        id="disabled.value.input"
        iconStart={<DownTriangle />}
        inputLabel="Single icon - Disabled w/ Value"
        disabled={true}
        value="Text Value"
      />
    </React.Fragment>
  ))
  .add("iconEnd", () => (
    <TextInputWithIcon
      id="story.input"
      iconEnd={<CloseIcon />}
      inputLabel={<span>Ending Icon</span>}
    />
  ))
  .add("iconStart & End", () => (
    <TextInputWithIcon
      id="story.input"
      iconStart={<DownTriangle />}
      iconEnd={<CloseIcon />}
      inputLabel="Two Icons"
    />
  ));
