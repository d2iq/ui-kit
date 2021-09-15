import * as React from "react";
import { TextInputWithIcon } from "../index";
import { InputAppearance } from "../../shared/types/inputAppearance";
import { inputStoryWrapper } from "../../../decorators/inputStoryWrapper";
import { SystemIcons } from "../../icons/dist/system-icons-enum";

export default {
  title: "Forms/TextInputWithIcon",
  decorators: [inputStoryWrapper],
  component: TextInputWithIcon
};

export const IconStart = () => (
  <>
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
  </>
);

export const IconEnd = () => (
  <TextInputWithIcon
    id="story.input"
    iconEnd={SystemIcons.Close}
    inputLabel={<span>Ending Icon</span>}
  />
);

export const IconStartEnd = () => (
  <TextInputWithIcon
    id="story.input"
    iconStart={SystemIcons.TriangleDown}
    iconEnd={SystemIcons.Close}
    inputLabel="Two Icons"
  />
);
