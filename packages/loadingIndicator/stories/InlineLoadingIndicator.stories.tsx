import * as React from "react";
import { Story, Meta } from "@storybook/react";
import {
  ConfigurationMap,
  ConfigurationMapSection,
  ConfigurationMapLabel,
  ConfigurationMapRow,
  ConfigurationMapValue
} from "../../configurationmap";

import { InlineLoadingIndicator } from "..";

export default {
  title: "Feedback/Loading Indicators/Inline Loading Indicator",
  component: InlineLoadingIndicator
} as Meta;

const Template: Story = args => (
  <>
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
  </>
);

export const Default = Template.bind({});
