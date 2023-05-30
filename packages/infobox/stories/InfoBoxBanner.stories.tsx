import * as React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { InfoBoxBanner } from "../index";
import { PrimaryAction, SecondaryAction } from "./helpers/actions";
import InfoBoxStoryContainer from "./helpers/InfoBoxStoryContainer";
import { InfoBoxProps } from "../components/InfoBox";

export default {
  title: "Feedback/InfoBoxBanner",
  component: InfoBoxBanner,
  argTypes: {
    appearance: {
      options: ["default", "info", "success", "warning", "danger", "outline"],
      control: { type: "select" }
    },
    message: {
      control: { type: "text" }
    },
    primaryAction: {
      control: { disable: true }
    },
    secondaryAction: {
      control: { disable: true }
    },
    className: {
      control: { disable: true }
    }
  },
  args: {
    appearance: "default",
    message: "This message is an example of how we might inform the user."
  }
} as Meta;

const Template: StoryFn<InfoBoxProps> = args => (
  <InfoBoxStoryContainer>
    <InfoBoxBanner onDismiss={action("dismissed")} {...args} />
  </InfoBoxStoryContainer>
);

export const Default = {
  render: Template
};

export const MessageAsCustomMarkup = {
  render: Template,

  args: {
    message: (
      <div>
        <h3
          style={{
            fontSize: "1rem",
            fontWeight: "normal",
            margin: 0,
            paddingBottom: ".5rem"
          }}
        >
          Custom Heading Level 3
        </h3>
        <p style={{ fontSize: ".8rem", margin: 0 }}>
          Detailed custom paragraph text.
        </p>
      </div>
    )
  }
};

export const WithActions = {
  render: Template,

  args: {
    primaryAction: <PrimaryAction />,
    secondaryAction: <SecondaryAction />
  }
};
