import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, select } from "@storybook/addon-knobs";
import { PageHeader, SpacingBox, PrimaryButton, SecondaryButton } from "../../";
import { PromoBanner } from "../";
import PromoContent from "../components/PromoContent";
import { gradientStyles } from "../style";
import { PromoBackgroundColor } from "../types";

const readme = require("../README.md");

storiesOf("Feedback|PromoBanner", module)
  .addDecorator(withKnobs)
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
      <PromoBanner
        headingText="Promo Banner"
        bodyContent="The PromoBanner component is used to bring the user's attention to informational content relevant to the page it's being displayed on. It typically appears below the PageHeader."
        dismissHandler={action("Hide the promo")}
        optOutHandler={action("Do not show this promo again")}
      />
      <SpacingBox spacingSize="l">Primary page content</SpacingBox>
    </>
  ))
  .add("user opted out of seeing banner", () => (
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
  ))
  .add("w/ custom background color", () => {
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
  })
  .add("w/ gradient background", () => {
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
  })
  .add("w/ a graphic", () => (
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
  ))
  .add("w/ primary and secondary actions", () => (
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
  ));
