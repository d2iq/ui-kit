import * as React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { TextInputWithButtons } from "../index";
import { InputStoryWrapper } from "../../../decorators/inputStoryWrapper";
import { SystemIcons } from "../../icons/dist/system-icons-enum";
import { TextInputButton } from "../../textInputButton";
import { Icon } from "../../icon";
import { themeBrandPrimary } from "../../design-tokens/build/js/designTokens";

const btnClickFn = () => {
  alert("button one clicked");
};

export default {
  title: "Forms/TextInputWithButtons",
  decorators: [Story => <InputStoryWrapper>{Story()}</InputStoryWrapper>],
  component: TextInputWithButtons
} as Meta;

const Template: StoryFn = args => (
  <TextInputWithButtons
    id="oneBtn"
    inputLabel="Input Label"
    buttons={[
      <TextInputButton
        key={0}
        shape={SystemIcons.Close}
        onClick={btnClickFn}
        aria-label="Clear input"
      />
    ]}
    {...args}
  />
);

export const Default = {
  render: Template,
  args: {}
};

export const WithCustomIcons = {
  render: Template,

  args: {
    inputLabel: "With colored icon",
    iconStart: <Icon shape={SystemIcons.Search} color={themeBrandPrimary} />,
    buttons: [
      <TextInputButton
        key={0}
        color="red"
        shape={SystemIcons.Close}
        onClick={btnClickFn}
        aria-label="Clear input"
      />
    ]
  }
};
