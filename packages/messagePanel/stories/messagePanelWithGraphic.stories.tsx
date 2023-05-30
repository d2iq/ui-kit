import * as React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { MessagePanelWithGraphic, MessagePanelWrapper } from "..";
import { PrimaryButton, SecondaryButton } from "../../button";

export default {
  title: "Feedback/MessagePanelWithGraphic",
  component: MessagePanelWithGraphic,
  argTypes: {
    appearance: {
      control: { disable: true }
    },
    primaryAction: {
      control: { disable: true }
    },
    secondaryAction: {
      control: { disable: true }
    }
  },
  args: {
    heading: "No projects exist to view catalogs"
  }
} as Meta;

const Template: StoryFn = args => (
  <MessagePanelWithGraphic
    graphicSrc="http://placehold.it/350x150"
    heading="No projects exist to view catalogs"
    {...args}
  >
    A catalog of services is available per project. A project must first be
    created before its catalog can be viewed. Projects empower teams to deploy
    their configurations and services to clusters.
  </MessagePanelWithGraphic>
);

export const Default = {
  render: Template
};

export const GraphicDimensions = {
  render: Template,

  args: {
    graphicDimensions: { height: 200 }
  }
};

export const WithActions = {
  render: Template,

  args: {
    primaryAction: <PrimaryButton>Create Project</PrimaryButton>,
    secondaryAction: <SecondaryButton>Go to Projects</SecondaryButton>
  }
};
