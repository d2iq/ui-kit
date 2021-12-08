import * as React from "react";
import { Story, Meta } from "@storybook/react";
import { HashMap } from "../index";
import { configurationMapStoryWrapper } from "./helpers/ConfigurationMapStoryWrapper";

export default {
  title: "Data Listing/HashMap",
  decorators: [configurationMapStoryWrapper],
  component: HashMap,
  argTypes: {
    headline: {
      control: {
        type: "text"
      }
    },
    hash: {
      control: { disable: true }
    },
    renderKeys: {
      control: { disable: true }
    }
  }
} as Meta;

const Template: Story = args => (
  <HashMap
    hash={{
      name: "Jane Doe",
      role: "UX Designer",
      city: "San Francisco",
      state: "CA",
      zipcode: 95125
    }}
    {...args}
  />
);

export const Default = Template.bind({});

export const WithNestedObjects = args => (
  <HashMap
    hash={{
      name: "Jane Doe",
      role: "UX Designer",
      city: "San Francisco",
      state: "CA",
      zipcode: 95125,
      Favorites: {
        Cuisines: {
          Italian: {
            appetizer: "capponata",
            main: "spaghetti pomodoro",
            desert: "tiramisu",
            drink: "grappa"
          },
          Korean: {
            appetizer: "kimchi",
            main: "bibimbap",
            desert: "yaksik",
            drink: "soju"
          }
        }
      }
    }}
    headline="Jane Doe Info"
    {...args}
  />
);

export const WithRenderKeys = args => (
  <HashMap
    hash={{
      name: "Jane Doe",
      role: "UX Designer",
      city: "San Francisco",
      state: "CA",
      zipcode: 95125
    }}
    renderKeys={{
      name: "Real name",
      role: "Job",
      city: "Home city",
      state: "Home state",
      zipcode: "ZIP"
    }}
    {...args}
  />
);
