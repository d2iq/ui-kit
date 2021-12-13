import * as React from "react";
import { Story, Meta } from "@storybook/react";
import { TextInputWithButtons } from "../index";
import { InputStoryWrapper } from "../../../decorators/inputStoryWrapper";
import { SystemIcons } from "../../icons/dist/system-icons-enum";
import { TextInputButton } from "../../textInputButton";
import { Icon } from "../../icon";

const btnClickFn = () => {
  alert("button one clicked");
};

export default {
  title: "Forms/TextInputWithButtons",
  decorators: [Story => <InputStoryWrapper>{Story()}</InputStoryWrapper>],
  component: TextInputWithButtons,
  argTypes: {
    appearance: {
      defaultValue: "standard"
    }
  }
};

const Template: Story = args => (
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

export const Default = Template.bind({});

export const WithCustomIcons = args => (
  <TextInputWithButtons
    id="withIcon.colored"
    inputLabel="With colored icon"
    iconStart={<Icon shape={SystemIcons.Search} />}
    buttons={[
      <TextInputButton
        key={0}
        color="red"
        shape={SystemIcons.Close}
        onClick={btnClickFn}
        aria-label="Clear input"
      />
    ]}
    {...args}
  />
);
