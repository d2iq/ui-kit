import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import { TextInputWithIcon } from "../index";
import { InputAppearance } from "../../shared/types/inputAppearance";
import { inputStoryWrapper } from "../../../decorators/inputStoryWrapper";
import { SystemIcons } from "../../icons/dist/system-icons-enum";

import readme from "../README.md";

storiesOf("Forms|TextInputWithIcon", module)
  .addParameters({
    readme: {
      sidebar: readme,
    },
  })
  .addDecorator(inputStoryWrapper)
  .add("iconStart", () => (
    <React.Fragment>
      <TextInputWithIcon
        id="standard.input"
        iconStart={SystemIcons.TriangleDown}
        inputLabel="Single icon - Standard"
      />
      <TextInputWithIcon
        id="error.input"
        iconStart={SystemIcons.TriangleDown}
        inputLabel="Single icon - Error"
        appearance={InputAppearance.Error}
      />
      <TextInputWithIcon
        id="success.input"
        iconStart={SystemIcons.TriangleDown}
        inputLabel="Single icon - Success"
        appearance={InputAppearance.Success}
      />
      <TextInputWithIcon
        id="disabled.input"
        iconStart={SystemIcons.TriangleDown}
        inputLabel="Single icon - Disabled"
        disabled={true}
        placeholder="Placeholder"
      />
      <TextInputWithIcon
        id="disabled.value.input"
        iconStart={SystemIcons.TriangleDown}
        inputLabel="Single icon - Disabled w/ Value"
        disabled={true}
        value="Text Value"
      />
    </React.Fragment>
  ))
  .add("iconEnd", () => (
    <TextInputWithIcon
      id="story.input"
      iconEnd={SystemIcons.Close}
      inputLabel={<span>Ending Icon</span>}
    />
  ))
  .add("iconStart & End", () => (
    <TextInputWithIcon
      id="story.input"
      iconStart={SystemIcons.TriangleDown}
      iconEnd={SystemIcons.Close}
      inputLabel="Two Icons"
    />
  ));
