import * as React from "react";
import { action } from "@storybook/addon-actions";
import { Story, Meta } from "@storybook/react";
import { PageHeader, SpacingBox, PrimaryButton, SecondaryButton } from "../../";
import { PromoBanner } from "../";
import PromoContent from "../components/PromoContent";
import {
  purpleLighten5,
  themeBgSecondary
} from "../../design-tokens/build/js/designTokens";

export default {
  title: "Feedback/PromoBanner",
  component: PromoBanner,
  subcomponents: { PromoContent },
  argTypes: {
    bodyContent: {
      control: { type: "text" }
    },
    gradients: {
      options: [purpleLighten5, themeBgSecondary]
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

const Template: Story = args => (
  <>
    <PageHeader breadcrumbElements={["Page Header"]} />
    <PromoBanner
      headingText="Promo Banner"
      bodyContent="The PromoBanner component is used to bring the user's attention to informational content relevant to the page it's being displayed on. It typically appears below the PageHeader."
      dismissHandler={action("Hide the promo")}
      optOutHandler={action("Do not show this promo again")}
      {...args}
    />
    <SpacingBox spacingSize="l">Primary page content</SpacingBox>
  </>
);

export const Default = Template.bind({});

export const CustomBackgroundColor = Template.bind({});
CustomBackgroundColor.args = { bgColor: purpleLighten5 };

export const GradientBackground = Template.bind({});
GradientBackground.args = { gradients: "lightBlue" };

export const BannerGraphic = Template.bind({});
BannerGraphic.args = { graphicSrc: "http://placehold.it/350x150" };

export const WithPrimaryAndSecondaryActions = args => (
  <>
    <PageHeader breadcrumbElements={["Page Header"]} />
    <PromoBanner
      primaryAction={<PrimaryButton>Primary Action</PrimaryButton>}
      secondaryAction={<SecondaryButton>Secondary Action</SecondaryButton>}
      headingText="Promo Banner"
      bodyContent="The PromoBanner component is used to bring the user's attention to informational content relevant to the page it's being displayed on. It typically appears below the PageHeader."
      dismissHandler={action("Hide the promo")}
      optOutHandler={action("Do not show this promo again")}
      {...args}
    />
    <SpacingBox spacingSize="l">Primary page content</SpacingBox>
  </>
);
