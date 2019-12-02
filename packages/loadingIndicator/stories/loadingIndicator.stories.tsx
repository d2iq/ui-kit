import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import {
  ConfigurationMap,
  ConfigurationMapSection,
  ConfigurationMapLabel,
  ConfigurationMapRow,
  ConfigurationMapValue
} from "../../configurationmap";
import { PageHeader } from "../../pageheader";
import { InlineLoadingIndicator, SectionLoadingIndicator } from "../";

const readme = require("../README.md");

storiesOf("Loading indicators", module)
  .addDecorator(withReadme([readme]))
  .add(
    "SectionLoadingIndicator in place of page content",
    () => (
      <>
        <PageHeader
          breadcrumbElements={[<div key="pageTitle">Page Title</div>]}
        />
        <SectionLoadingIndicator />
      </>
    ),
    {
      info: {
        propTables: [SectionLoadingIndicator],
        propTablesExclude: [PageHeader, React.Fragment]
      }
    }
  )
  .add(
    "InlineLoadingIndicator in place of text content",
    () => (
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
    ),
    {
      info: {
        propTables: [InlineLoadingIndicator],
        propTablesExclude: [
          ConfigurationMap,
          ConfigurationMapSection,
          ConfigurationMapRow,
          ConfigurationMapLabel,
          ConfigurationMapValue
        ]
      }
    }
  );
