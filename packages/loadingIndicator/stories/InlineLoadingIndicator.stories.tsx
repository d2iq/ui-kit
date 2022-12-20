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
import { spacingSizeValues } from "../../storybookHelpers/controlConstants";

export default {
  title: "Feedback/Loading Indicators/Inline Loading Indicator",
  component: InlineLoadingIndicator,
  argTypes: {
    color: {
      control: { type: "color" }
    },
    size: {
      options: spacingSizeValues,
      control: {
        type: "select"
      }
    },
    "data-cy": {
      control: { disable: true }
    }
  }
} as Meta;

const Template: Story = args => <InlineLoadingIndicator {...args} />;

export const Default = Template.bind({});

export const InlineWithinComponent = args => (
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
