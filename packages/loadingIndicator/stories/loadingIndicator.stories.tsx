import * as React from "react";
import { Story, Meta } from "@storybook/react";
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

export const Template: Story = args => (
  <>
    <PageHeader breadcrumbElements={[<div key="pageTitle">Page Title</div>]} />
    <SectionLoadingIndicator {...args} />
  </>
);

export const _SectionLoadingIndicator = Template.bind({});

export const _InlineLoadingIndicator = args => (
  <ConfigurationMap>
    <ConfigurationMapSection>
      <ConfigurationMapRow>
        <ConfigurationMapLabel>Name</ConfigurationMapLabel>
        <ConfigurationMapValue>
          <InlineLoadingIndicator {...args} />
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
