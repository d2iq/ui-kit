import * as React from "react";
import { action } from "@storybook/addon-actions";
import { Story, Meta } from "@storybook/react";
import {
  ConfigurationMap,
  ConfigurationMapSection,
  ConfigurationMapHeading,
  ConfigurationMapLabel,
  ConfigurationMapRow,
  ConfigurationMapValue,
  ConfigurationMapValueWithDefault,
  ConfigurationMapRowAction
} from "../index";
import { configurationMapStoryWrapper } from "./helpers/ConfigurationMapStoryWrapper";

const rowAction = action("row action");

export default {
  title: "Data Listing/ConfigurationMap",
  decorators: [configurationMapStoryWrapper],
  component: ConfigurationMap,
  subcomponents: {
    ConfigurationMapSection,
    ConfigurationMapHeading,
    ConfigurationMapLabel,
    ConfigurationMapRow,
    ConfigurationMapValue,
    ConfigurationMapValueWithDefault,
    ConfigurationMapRowAction
  }
} as Meta;

const Template: Story = args => (
  <ConfigurationMap {...args}>
    <ConfigurationMapSection>
      <ConfigurationMapRow>
        <ConfigurationMapLabel>Name</ConfigurationMapLabel>
        <ConfigurationMapValue>Jane Doe</ConfigurationMapValue>
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

export const Default = Template.bind({});

export const WithDefaultValue = args => (
  <ConfigurationMap {...args}>
    <ConfigurationMapSection>
      <ConfigurationMapHeading>Heading</ConfigurationMapHeading>
      <ConfigurationMapRow>
        <ConfigurationMapLabel>Name</ConfigurationMapLabel>
        <ConfigurationMapValue>Jane Doe</ConfigurationMapValue>
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
export const MultipleSections = () => (
  <ConfigurationMap>
    <ConfigurationMapSection>
      <ConfigurationMapHeading>Heading</ConfigurationMapHeading>
      <ConfigurationMapRow>
        <ConfigurationMapLabel>Name</ConfigurationMapLabel>
        <ConfigurationMapValue>Jane Doe</ConfigurationMapValue>
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

    <ConfigurationMapSection>
      <ConfigurationMapHeading>Heading</ConfigurationMapHeading>
      <ConfigurationMapRow>
        <ConfigurationMapLabel>Name</ConfigurationMapLabel>
        <ConfigurationMapValue>Jane Doe</ConfigurationMapValue>
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

    <ConfigurationMapSection>
      <ConfigurationMapHeading>Heading</ConfigurationMapHeading>
      <ConfigurationMapRow>
        <ConfigurationMapLabel>Name</ConfigurationMapLabel>
        <ConfigurationMapValue>Jane Doe</ConfigurationMapValue>
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

export const WithRowActionShownOnHover = args => (
  <ConfigurationMap>
    <ConfigurationMapSection>
      <ConfigurationMapRow onlyShowActionOnHover={true}>
        <ConfigurationMapLabel>Name</ConfigurationMapLabel>
        <ConfigurationMapValue>Jane Doe</ConfigurationMapValue>
        <ConfigurationMapRowAction onClick={rowAction} {...args}>
          Action
        </ConfigurationMapRowAction>
      </ConfigurationMapRow>
      <ConfigurationMapRow onlyShowActionOnHover={true}>
        <ConfigurationMapLabel>Role</ConfigurationMapLabel>
        <ConfigurationMapValue>UX Designer</ConfigurationMapValue>
        <ConfigurationMapRowAction onClick={rowAction}>
          Action
        </ConfigurationMapRowAction>
      </ConfigurationMapRow>
      <ConfigurationMapRow onlyShowActionOnHover={true}>
        <ConfigurationMapLabel>City</ConfigurationMapLabel>
        <ConfigurationMapValue>San Francisco</ConfigurationMapValue>
        <ConfigurationMapRowAction onClick={rowAction}>
          Action
        </ConfigurationMapRowAction>
      </ConfigurationMapRow>
    </ConfigurationMapSection>
  </ConfigurationMap>
);

export const WithLongValue = args => (
  <ConfigurationMap {...args}>
    <ConfigurationMapSection>
      <ConfigurationMapRow>
        <ConfigurationMapLabel>Name</ConfigurationMapLabel>
        <ConfigurationMapValue>Jane Doe</ConfigurationMapValue>
      </ConfigurationMapRow>
      <ConfigurationMapRow>
        <ConfigurationMapLabel>Role</ConfigurationMapLabel>
        <ConfigurationMapValue>UX Designer</ConfigurationMapValue>
      </ConfigurationMapRow>
      <ConfigurationMapRow>
        <ConfigurationMapLabel>
          {Array(100).fill("VeryLongWord").join("")}
        </ConfigurationMapLabel>
        <ConfigurationMapValue>
          {Array(100).fill("VeryLongWord").join("")}
        </ConfigurationMapValue>
      </ConfigurationMapRow>
    </ConfigurationMapSection>
  </ConfigurationMap>
);
