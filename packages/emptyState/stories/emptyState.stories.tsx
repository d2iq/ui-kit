import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import { EmptyState, EmptyStateWrapper } from "..";
import { PrimaryButton, SecondaryButton } from "../../button";
import { PageHeader } from "../../pageheader";

const readme = require("../README.md");

storiesOf("Feedback|EmptyState", module)
  .addDecorator(withReadme([readme]))
  .addParameters({
    info: {
      propTablesExclude: [PageHeader, React.Fragment, EmptyStateWrapper]
    }
  })
  .add("default", () => (
    <EmptyState heading="No policy set">
      Define policy to start allowing groups and roles access to your clusters.
    </EmptyState>
  ))
  .add(
    "wrapped with EmptyStateWrapper",
    () => (
      <React.Fragment>
        <PageHeader breadcrumbElements={[<div key="roles">Roles</div>]} />
        <EmptyStateWrapper>
          <EmptyState heading="No policy set">
            Define policy to start allowing groups and roles access to your
            clusters.
          </EmptyState>
        </EmptyStateWrapper>
      </React.Fragment>
    ),
    {
      info: {
        text:
          "When an empty state is being rendered in parent element that does not have it's own spacing, the EmptyStateWrapper component provides standard spacing around the empty state component."
      }
    }
  )
  .add("w/ primary action", () => (
    <EmptyState
      heading="No policy set"
      primaryAction={<PrimaryButton>Create Role</PrimaryButton>}
    >
      Define policy to start allowing groups and roles access to your clusters.
    </EmptyState>
  ))
  .add("w/ primary and secondary actions", () => (
    <EmptyState
      heading="No policy set"
      primaryAction={<PrimaryButton>Create Role</PrimaryButton>}
      secondaryAction={<SecondaryButton>Learn More</SecondaryButton>}
    >
      Define policy to start allowing groups and roles access to your clusters.
    </EmptyState>
  ));
