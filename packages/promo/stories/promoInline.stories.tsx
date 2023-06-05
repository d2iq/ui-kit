import * as React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { PageHeader, SpacingBox, PrimaryButton, SecondaryButton } from "../../";
import { PromoInline } from "../";
import PromoContent from "../components/PromoContent";
import { PromoProps } from "../types";

export default {
  title: "Feedback/PromoInline",
  component: PromoInline,
  subcomponents: { PromoContent },
  argTypes: {
    bodyContent: {
      control: { type: "text" }
    },
    primaryAction: {
      control: { disable: true }
    },
    secondaryAction: {
      control: { disable: true }
    },
    "data-cy": {
      control: { disable: true }
    }
  }
} as Meta;

const Template: StoryFn<PromoProps> = args => (
  <>
    <PageHeader breadcrumbElements={["Page Header"]} />
    <SpacingBox spacingSize="l">Some page content</SpacingBox>
    <PromoInline
      headingText="Promo Card"
      bodyContent="The PromoInline component is less attention-grabbing than the PromoBanner. It appears inline with the other content on the page."
      dismissHandler={action("Hide the promo")}
      optOutHandler={action("Do not show this promo again")}
      {...args}
    />
    <SpacingBox spacingSize="l">Some more page content</SpacingBox>
  </>
);

export const Default = {
  render: Template
};

export const WithGraphic = {
  render: Template,

  args: {
    primaryAction: <PrimaryButton>Primary Action</PrimaryButton>,
    secondaryAction: <SecondaryButton>Secondary Action</SecondaryButton>
  }
};

export const WithActions = {
  render: Template
};
