import * as React from "react";
import { MessagePanel, MessagePanelWrapper } from "..";
import { PrimaryButton, SecondaryButton } from "../../button";
import { PageHeader } from "../../pageheader";

export default {
  title: "Feedback/MessagePanel",
  component: MessagePanel
};

export const Default = () => (
  <MessagePanel heading="No policy set">
    Define policy to start allowing groups and roles access to your clusters.
  </MessagePanel>
);
export const AppearanceError = () => (
  <MessagePanel heading="No policy set" appearance="error">
    Define policy to start allowing groups and roles access to your clusters.
  </MessagePanel>
);

export const WrappedWithMessagePanelWrapper = () => (
  <>
    <PageHeader breadcrumbElements={[<div key="roles">Roles</div>]} />
    <MessagePanelWrapper>
      <MessagePanel heading="No policy set">
        Define policy to start allowing groups and roles access to your
        clusters.
      </MessagePanel>
    </MessagePanelWrapper>
  </>
);

export const PrimaryAction = () => (
  <MessagePanel
    heading="No policy set"
    primaryAction={<PrimaryButton>Create Role</PrimaryButton>}
  >
    Define policy to start allowing groups and roles access to your clusters.
  </MessagePanel>
);

export const PrimaryAndSecondaryActions = () => (
  <MessagePanel
    heading="No policy set"
    primaryAction={<PrimaryButton>Create Role</PrimaryButton>}
    secondaryAction={<SecondaryButton>Learn More</SecondaryButton>}
  >
    Define policy to start allowing groups and roles access to your clusters.
  </MessagePanel>
);
