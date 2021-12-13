import * as React from "react";
import { Story, Meta } from "@storybook/react";
import { MessagePanel, MessagePanelWrapper } from "..";
import { PrimaryButton, SecondaryButton } from "../../button";
import { PageHeader } from "../../pageheader";

export default {
  title: "Feedback/MessagePanel",
  component: MessagePanel,
  argTypes: {
    appearance: {
      defaultValue: "standard"
    },
    heading: {
      defaultValue: "No Policy Set"
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
  <MessagePanel heading="No Policy Set" {...args}>
    Define policy to start allowing groups and roles access to your clusters.
  </MessagePanel>
);

export const Default = Template.bind({});

export const WithMessagePanelWrapper = args => (
  <>
    <PageHeader breadcrumbElements={[<div key="roles">Roles</div>]} />
    <MessagePanelWrapper>
      <MessagePanel heading="No policy set" {...args}>
        Define policy to start allowing groups and roles access to your
        clusters.
      </MessagePanel>
    </MessagePanelWrapper>
  </>
);

export const WithActions = Template.bind({});
WithActions.args = {
  primaryAction: <PrimaryButton>Create Role</PrimaryButton>,
  secondaryAction: <SecondaryButton>Learn More</SecondaryButton>
};
