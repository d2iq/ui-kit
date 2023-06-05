import * as React from "react";
import { StoryFn, Meta } from "@storybook/react";
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
      control: { type: "text" }
    }
  },
  args: {
    appearance: "default",
    message: "This message is an example of how we might inform the user."
  }
} as Meta;

export const Default = {};

export const WithActions = {
  args: {
    primaryAction: <PrimaryAction />,
    secondaryAction: <SecondaryAction />
  }
};
