import * as React from "react";
import { MessagePanelWithGraphic, MessagePanelWrapper } from "..";
import { PrimaryButton, SecondaryButton } from "../../button";
import { PageHeader } from "../../pageheader";

export default {
  title: "Feedback/MessagePanelWithGraphic",
  component: MessagePanelWithGraphic
};

export const Default = () => (
  <MessagePanelWithGraphic
    graphicSrc="http://placehold.it/350x150"
    heading="No projects exist to view catalogs"
  >
    A catalog of services is available per project. A project must first be
    created before its catalog can be viewed. Projects empower teams to deploy
    their configurations and services to clusters.
  </MessagePanelWithGraphic>
);

export const WrappedWithMessagePanelWrapper = () => (
  <>
    <PageHeader breadcrumbElements={[<div key="catalog">Catalog</div>]} />
    <MessagePanelWrapper>
      <MessagePanelWithGraphic
        graphicSrc="http://placehold.it/350x150"
        heading="No projects exist to view catalogs"
      >
        A catalog of services is available per project. A project must first be
        created before its catalog can be viewed. Projects empower teams to
        deploy their configurations and services to clusters.
      </MessagePanelWithGraphic>
    </MessagePanelWrapper>
  </>
);

export const GraphicDimensions = () => (
  <MessagePanelWithGraphic
    graphicSrc="http://placehold.it/600x350"
    heading="No projects exist to view catalogs"
    graphicDimensions={{ height: 200 }}
  >
    A catalog of services is available per project. A project must first be
    created before its catalog can be viewed. Projects empower teams to deploy
    their configurations and services to clusters.
  </MessagePanelWithGraphic>
);

export const PrimaryAction = () => (
  <MessagePanelWithGraphic
    graphicSrc="http://placehold.it/350x150"
    heading="No projects exist to view catalogs"
    primaryAction={<PrimaryButton>Create Project</PrimaryButton>}
  >
    A catalog of services is available per project. A project must first be
    created before its catalog can be viewed. Projects empower teams to deploy
    their configurations and services to clusters.
  </MessagePanelWithGraphic>
);

export const PrimaryAndSecondaryActions = () => (
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
);
