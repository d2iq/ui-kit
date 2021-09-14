import * as React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, select } from "@storybook/addon-knobs";
import { PageHeader, SpacingBox, PrimaryButton, SecondaryButton } from "../../";
import { PromoBanner } from "../";
import PromoContent from "../components/PromoContent";
import { gradientStyles } from "../style";
import { PromoBackgroundColor } from "../types";

export default {
  title: "Feedback/PromoBanner",
  decorators: [withKnobs],
  component: PromoBanner,
  subcomponents: { PromoContent }
};

export const HeadlineAndBody = () => (
  <>
    <PageHeader breadcrumbElements={["Page Header"]} />
    <PromoBanner
      headingText="Promo Banner"
      bodyContent="The PromoBanner component is used to bring the user's attention to informational content relevant to the page it's being displayed on. It typically appears below the PageHeader."
      dismissHandler={action("Hide the promo")}
      optOutHandler={action("Do not show this promo again")}
    />
    <SpacingBox spacingSize="l">Primary page content</SpacingBox>
  </>
);

export const UserOptedOutOfBanner = () => (
  <>
    <PageHeader breadcrumbElements={["Page Header"]} />
    <PromoBanner
      headingText="Promo Banner"
      bodyContent="The PromoBanner component is used to bring the user's attention to informational content relevant to the page it's being displayed on. It typically appears below the PageHeader."
      dismissHandler={action("Hide the promo")}
      optOutHandler={action("Show this promo again")}
      optOutBanner={true}
    />
    <SpacingBox spacingSize="l">Primary page content</SpacingBox>
  </>
);

export const WithCustomBackgroundColor = () => {
  const bgColors: { [key: string]: PromoBackgroundColor } = {
    purpleLighten5: "purpleLighten5",
    themeBgSecondary: "themeBgSecondary"
  };
  const bgColor = select("bgColor", bgColors, "purpleLighten5");

  return (
    <>
      <PageHeader breadcrumbElements={["Page Header"]} />
      <PromoBanner
        bgColor={bgColor}
        headingText="Use knobs panel to change background color"
        bodyContent="The PromoBanner component is used to bring the user's attention to informational content relevant to the page it's being displayed on. It typically appears below the PageHeader."
        dismissHandler={action("Hide the promo")}
        optOutHandler={action("Do not show this promo again")}
      />
      <SpacingBox spacingSize="l">Primary page content</SpacingBox>
    </>
  );
};

export const WithGradientBackground = () => {
  const gradients = Object.keys(gradientStyles).reduce((acc, curr) => {
    acc[curr] = curr;
    return acc;
  }, {});
  const gradient = select("gradientStyle", gradients, "lightBlue");

  return (
    <>
      <PageHeader breadcrumbElements={["Page Header"]} />
      <PromoBanner
        gradientStyle={gradient}
        headingText="Use knobs panel to change gradient"
        bodyContent="The PromoBanner component is used to bring the user's attention to informational content relevant to the page it's being displayed on. It typically appears below the PageHeader."
        dismissHandler={action("Hide the promo")}
        optOutHandler={action("Do not show this promo again")}
      />
      <SpacingBox spacingSize="l">Primary page content</SpacingBox>
    </>
  );
};

export const WithGraphic = () => (
  <>
    <PageHeader breadcrumbElements={["Page Header"]} />
    <PromoBanner
      graphicSrc="http://placehold.it/350x150"
      headingText="Promo Banner"
      bodyContent="The PromoBanner component is used to bring the user's attention to informational content relevant to the page it's being displayed on. It typically appears below the PageHeader."
      dismissHandler={action("Hide the promo")}
      optOutHandler={action("Do not show this promo again")}
    />
    <SpacingBox spacingSize="l">Primary page content</SpacingBox>
  </>
);

export const WithPrimaryAndSecondaryActions = () => (
  <>
    <PageHeader breadcrumbElements={["Page Header"]} />
    <PromoBanner
      primaryAction={<PrimaryButton>Primary Action</PrimaryButton>}
      secondaryAction={<SecondaryButton>Secondary Action</SecondaryButton>}
      headingText="Promo Banner"
      bodyContent="The PromoBanner component is used to bring the user's attention to informational content relevant to the page it's being displayed on. It typically appears below the PageHeader."
      dismissHandler={action("Hide the promo")}
      optOutHandler={action("Do not show this promo again")}
    />
    <SpacingBox spacingSize="l">Primary page content</SpacingBox>
  </>
);
