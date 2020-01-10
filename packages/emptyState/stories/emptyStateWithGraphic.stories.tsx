import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import { EmptyStateWithGraphic, EmptyStateWrapper } from "..";
import { PrimaryButton, SecondaryButton } from "../../button";
import { PageHeader } from "../../pageheader";

const readme = require("../README.md");

storiesOf("EmptyState/EmptyStateWithGraphic", module)
  .addDecorator(withReadme([readme]))
  .addParameters({
    info: {
      propTablesExclude: [PageHeader, React.Fragment, EmptyStateWrapper]
    }
  })
  .add("default", () => (
    <EmptyStateWithGraphic
      graphicSrc="http://placehold.it/350x150"
      heading="No projects exist to view catalogs"
    >
      A catalog of services is available per project. A project must first be
      created before its catalog can be viewed. Projects empower teams to deploy
      their configurations and services to clusters.
    </EmptyStateWithGraphic>
  ))
  .add(
    "wrapped with EmptyStateWrapper",
    () => (
      <React.Fragment>
        <PageHeader breadcrumbElements={[<div key="catalog">Catalog</div>]} />
        <EmptyStateWrapper>
          <EmptyStateWithGraphic
            graphicSrc="http://placehold.it/350x150"
            heading="No projects exist to view catalogs"
          >
            A catalog of services is available per project. A project must first
            be created before its catalog can be viewed. Projects empower teams
            to deploy their configurations and services to clusters.
          </EmptyStateWithGraphic>
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
  .add(
    "w/ graphic dimensions",
    () => (
      <EmptyStateWithGraphic
        graphicSrc="http://placehold.it/600x350"
        heading="No projects exist to view catalogs"
        graphicDimensions={{ height: 200 }}
      >
        A catalog of services is available per project. A project must first be
        created before its catalog can be viewed. Projects empower teams to
        deploy their configurations and services to clusters.
      </EmptyStateWithGraphic>
    ),
    {
      info: {
        text:
          "When the provided image asset is too large, you can use the graphicDimensions prop to pass a width and/or height"
      }
    }
  )
  .add("w/ primary action", () => (
    <EmptyStateWithGraphic
      graphicSrc="http://placehold.it/350x150"
      heading="No projects exist to view catalogs"
      primaryAction={<PrimaryButton>Create Project</PrimaryButton>}
    >
      A catalog of services is available per project. A project must first be
      created before its catalog can be viewed. Projects empower teams to deploy
      their configurations and services to clusters.
    </EmptyStateWithGraphic>
  ))
  .add("w/ primary and secondary actions", () => (
    <EmptyStateWithGraphic
      graphicSrc="http://placehold.it/350x150"
      heading="No projects exist to view catalogs"
      primaryAction={<PrimaryButton>Create Project</PrimaryButton>}
      secondaryAction={<SecondaryButton>Go to Projects</SecondaryButton>}
    >
      A catalog of services is available per project. A project must first be
      created before its catalog can be viewed. Projects empower teams to deploy
      their configurations and services to clusters.
    </EmptyStateWithGraphic>
  ));
