import * as React from "react";
import { Story, Meta } from "@storybook/react";
import { MessagePanelWithGraphic, MessagePanelWrapper } from "..";
import { PrimaryButton, SecondaryButton } from "../../button";

export default {
  title: "Feedback/MessagePanelWithGraphic",
  component: MessagePanelWithGraphic,
  argTypes: {
    heading: {
      defaultValue: "No projects exist to view catalogs"
    },
    appearance: {
      control: { disable: true }
    },
    primaryAction: {
      control: { disable: true }
    },
    secondaryAction: {
      control: { disable: true }
    }
  }
} as Meta;

const Template: Story = args => (
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

export const Default = Template.bind({});

export const GraphicDimensions = Template.bind({});
GraphicDimensions.args = {
  graphicDimensions: { height: 200 }
};

export const WithActions = Template.bind({});
WithActions.args = {
  primaryAction: <PrimaryButton>Create Project</PrimaryButton>,
  secondaryAction: <SecondaryButton>Go to Projects</SecondaryButton>
};
