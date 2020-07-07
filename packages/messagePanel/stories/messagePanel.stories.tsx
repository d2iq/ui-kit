import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import { MessagePanel, MessagePanelWrapper } from "..";
import { PrimaryButton, SecondaryButton } from "../../button";
import { PageHeader } from "../../pageheader";

const readme = require("../README.md");

storiesOf("Feedback|MessagePanel", module)
  .addDecorator(withReadme([readme]))
  .addParameters({
    info: {
      propTablesExclude: [PageHeader, React.Fragment, MessagePanelWrapper]
    }
  })
  .add("default", () => (
    <MessagePanel heading="No policy set">
      Define policy to start allowing groups and roles access to your clusters.
    </MessagePanel>
  ))
  .add(
    "wrapped with MessagePanelWrapper",
    () => (
      <React.Fragment>
        <PageHeader breadcrumbElements={[<div key="roles">Roles</div>]} />
        <MessagePanelWrapper>
          <MessagePanel heading="No policy set">
            Define policy to start allowing groups and roles access to your
            clusters.
          </MessagePanel>
        </MessagePanelWrapper>
      </React.Fragment>
    ),
    {
      info: {
        text:
          "When an empty state is being rendered in parent element that does not have it's own spacing, the MessagePanelWrapper component provides standard spacing around the empty state component."
      }
    }
  )
  .add("w/ primary action", () => (
    <MessagePanel
      heading="No policy set"
      primaryAction={<PrimaryButton>Create Role</PrimaryButton>}
    >
      Define policy to start allowing groups and roles access to your clusters.
    </MessagePanel>
  ))
  .add("w/ primary and secondary actions", () => (
    <MessagePanel
      heading="No policy set"
      primaryAction={<PrimaryButton>Create Role</PrimaryButton>}
      secondaryAction={<SecondaryButton>Learn More</SecondaryButton>}
    >
      Define policy to start allowing groups and roles access to your clusters.
    </MessagePanel>
  ));
