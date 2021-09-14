import * as React from "react";
import {
  ConfigurationMap,
  ConfigurationMapSection,
  ConfigurationMapLabel,
  ConfigurationMapRow,
  ConfigurationMapValue
} from "../../configurationmap";
import { PageHeader } from "../../pageheader";
import { InlineLoadingIndicator, SectionLoadingIndicator } from "../";

export default {
  title: "Feedback/Loading Indicators",
  component: SectionLoadingIndicator,
  subcomponents: { InlineLoadingIndicator }
};

export const SectionLoadingIndicatorInPlaceOfPageContent = () => (
  <>
    <PageHeader breadcrumbElements={[<div key="pageTitle">Page Title</div>]} />
    <SectionLoadingIndicator />
  </>
);

export const InlineLoadingIndicatorInPlaceOfTextContent = () => (
  <ConfigurationMap>
    <ConfigurationMapSection>
      <ConfigurationMapRow>
        <ConfigurationMapLabel>Name</ConfigurationMapLabel>
        <ConfigurationMapValue>
          <InlineLoadingIndicator />
        </ConfigurationMapValue>
      </ConfigurationMapRow>
      <ConfigurationMapRow>
        <ConfigurationMapLabel>Role</ConfigurationMapLabel>
        <ConfigurationMapValue>UX Designer</ConfigurationMapValue>
      </ConfigurationMapRow>
      <ConfigurationMapRow>
        <ConfigurationMapLabel>City</ConfigurationMapLabel>
        <ConfigurationMapValue>San Francisco</ConfigurationMapValue>
      </ConfigurationMapRow>
    </ConfigurationMapSection>
  </ConfigurationMap>
);
