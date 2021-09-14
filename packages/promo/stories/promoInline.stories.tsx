import * as React from "react";
import { action } from "@storybook/addon-actions";
import { PageHeader, SpacingBox, PrimaryButton, SecondaryButton } from "../../";
import { PromoInline } from "../";
import PromoContent from "../components/PromoContent";

export default {
  title: "Feedback/PromoInline",
  component: PromoInline,
  subcomponents: { PromoContent }
};

export const HeadlineAndBody = () => (
  <>
    <PageHeader breadcrumbElements={["Page Header"]} />
    <SpacingBox spacingSize="l">Some page content</SpacingBox>
    <PromoInline
      headingText="Promo Card"
      bodyContent="The PromoInline component is less attention-grabbing than the PromoBanner. It appears inline with the other content on the page."
      dismissHandler={action("Hide the promo")}
      optOutHandler={action("Do not show this promo again")}
    />
    <SpacingBox spacingSize="l">Some more page content</SpacingBox>
  </>
);

export const UserOptedOutOfPromo = () => (
  <>
    <PageHeader breadcrumbElements={["Page Header"]} />
    <SpacingBox spacingSize="l">Some page content</SpacingBox>
    <PromoInline
      headingText="Promo Card"
      bodyContent="The PromoInline component is less attention-grabbing than the PromoBanner. It appears inline with the other content on the page."
      dismissHandler={action("Hide the promo")}
      optOutHandler={action("Show this promo again")}
      optOutBanner={true}
    />
    <SpacingBox spacingSize="l">Some more page content</SpacingBox>
  </>
);

export const WithGraphic = () => (
  <>
    <PageHeader breadcrumbElements={["Page Header"]} />
    <SpacingBox spacingSize="l">Some page content</SpacingBox>
    <PromoInline
      graphicSrc="http://placehold.it/350x150"
      headingText="Promo Card"
      bodyContent="The PromoInline component is less attention-grabbing than the PromoBanner. It appears inline with the other content on the page."
      dismissHandler={action("Hide the promo")}
      optOutHandler={action("Do not show this promo again")}
    />
    <SpacingBox spacingSize="l">Some more page content</SpacingBox>
  </>
);

export const WithPrimaryAndSecondaryActions = () => (
  <>
    <PageHeader breadcrumbElements={["Page Header"]} />
    <SpacingBox spacingSize="l">Some page content</SpacingBox>
    <PromoInline
      primaryAction={<PrimaryButton>Primary Action</PrimaryButton>}
      secondaryAction={<SecondaryButton>Secondary Action</SecondaryButton>}
      headingText="Promo Card"
      bodyContent="The PromoInline component is less attention-grabbing than the PromoBanner. It appears inline with the other content on the page."
      dismissHandler={action("Hide the promo")}
      optOutHandler={action("Do not show this promo again")}
    />
    <SpacingBox spacingSize="l">Some more page content</SpacingBox>
  </>
);
