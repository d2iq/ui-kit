import * as React from "react";
import { Story, Meta } from "@storybook/react";
import { InfoBox } from "../index";
import { PrimaryAction, SecondaryAction } from "./helpers/actions";
import { InfoBoxProps } from "../components/InfoBox";

export default {
  title: "Feedback/InfoBox",
  component: InfoBox,
  argTypes: {
    primaryAction: {
      control: { disable: true }
    },
    secondaryAction: {
      control: { disable: true }
    },
    className: {
      control: { disable: true }
    },
    message: {
      control: { type: "text" },
      defaultValue:
        "This is message is an example of how we might inform the user."
    }
  },
  args: {
    appearance: "default"
  }
} as Meta;

const Template: Story<InfoBoxProps> = args => <InfoBox {...args} />;

export const Default = Template.bind({});

export const WithActions = Template.bind({});
WithActions.args = {
  primaryAction: <PrimaryAction />,
  secondaryAction: <SecondaryAction />
};
