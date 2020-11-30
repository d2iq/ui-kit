import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { PageHeader, SpacingBox, PrimaryButton, SecondaryButton } from "../../";
import { PromoInline } from "../";
import PromoContent from "../components/PromoContent";

import readme from "../README.md";

storiesOf("Feedback|PromoInline", module)
  .addParameters({
    info: {
      text: readme
    }
  })
  .addParameters({
    info: {
      propTablesExclude: [
        PageHeader,
        SpacingBox,
        PrimaryButton,
        SecondaryButton
      ],
      propTables: [PromoContent]
    }
  })
  .add("headline and body", () => (
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
  ))
  .add("user opted out of seeing promo", () => (
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
  ))
  .add("w/ a graphic", () => (
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
  ))
  .add("w/ primary and secondary actions", () => (
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
  ));
