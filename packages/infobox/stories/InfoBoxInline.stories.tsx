import * as React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { InfoBoxInline } from "../index";
import { PrimaryAction, SecondaryAction } from "./helpers/actions";
import InfoBoxStoryContainer from "./helpers/InfoBoxStoryContainer";

export default {
  title: "Feedback/InfoBoxInline",
  component: InfoBoxInline,
  argTypes: {
    appearance: {
      options: ["default", "info", "success", "warning", "danger", "outline"],
      control: { type: "select" }
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
    message: "This message is an example of how we might inform the user.",
    appearance: "default"
  }
} as Meta;

const Template: StoryFn = args => (
  <InfoBoxStoryContainer>
    <div style={{ padding: "1rem 1rem 0 1rem" }}>
      <InfoBoxInline
        message="This is message is an example of how we might inform the user."
        {...args}
      />
    </div>
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
          <span style={{ fontWeight: 600 }}>There is something</span> that we
          need to tell you about
        </h3>
        <p style={{ fontSize: ".8rem", margin: 0 }}>
          And that something is detailed enough to require two lines and some
          custom formatting
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
