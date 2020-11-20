import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import { MessagePanelWithGraphic, MessagePanelWrapper } from "..";
import { PrimaryButton, SecondaryButton } from "../../button";
import { PageHeader } from "../../pageheader";

import readme from "../README.md";

storiesOf("Feedback|MessagePanelWithGraphic", module)
  .addParameters({
    readme: {
      sidebar: readme,
    },
  })
  .addParameters({
    info: {
      propTablesExclude: [PageHeader, React.Fragment, MessagePanelWrapper]
    }
  })
  .add("default", () => (
    <MessagePanelWithGraphic
      graphicSrc="http://placehold.it/350x150"
      heading="No projects exist to view catalogs"
    >
      A catalog of services is available per project. A project must first be
      created before its catalog can be viewed. Projects empower teams to deploy
      their configurations and services to clusters.
    </MessagePanelWithGraphic>
  ))
  .add(
    "wrapped with MessagePanelWrapper",
    () => (
      <React.Fragment>
        <PageHeader breadcrumbElements={[<div key="catalog">Catalog</div>]} />
        <MessagePanelWrapper>
          <MessagePanelWithGraphic
            graphicSrc="http://placehold.it/350x150"
            heading="No projects exist to view catalogs"
          >
            A catalog of services is available per project. A project must first
            be created before its catalog can be viewed. Projects empower teams
            to deploy their configurations and services to clusters.
          </MessagePanelWithGraphic>
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
  .add(
    "w/ graphic dimensions",
    () => (
      <MessagePanelWithGraphic
        graphicSrc="http://placehold.it/600x350"
        heading="No projects exist to view catalogs"
        graphicDimensions={{ height: 200 }}
      >
        A catalog of services is available per project. A project must first be
        created before its catalog can be viewed. Projects empower teams to
        deploy their configurations and services to clusters.
      </MessagePanelWithGraphic>
    ),
    {
      info: {
        text:
          "When the provided image asset is too large, you can use the graphicDimensions prop to pass a width and/or height"
      }
    }
  )
  .add("w/ primary action", () => (
    <MessagePanelWithGraphic
      graphicSrc="http://placehold.it/350x150"
      heading="No projects exist to view catalogs"
      primaryAction={<PrimaryButton>Create Project</PrimaryButton>}
    >
      A catalog of services is available per project. A project must first be
      created before its catalog can be viewed. Projects empower teams to deploy
      their configurations and services to clusters.
    </MessagePanelWithGraphic>
  ))
  .add("w/ primary and secondary actions", () => (
    <MessagePanelWithGraphic
      graphicSrc="http://placehold.it/350x150"
      heading="No projects exist to view catalogs"
      primaryAction={<PrimaryButton>Create Project</PrimaryButton>}
      secondaryAction={<SecondaryButton>Go to Projects</SecondaryButton>}
    >
      A catalog of services is available per project. A project must first be
      created before its catalog can be viewed. Projects empower teams to deploy
      their configurations and services to clusters.
    </MessagePanelWithGraphic>
  ));
