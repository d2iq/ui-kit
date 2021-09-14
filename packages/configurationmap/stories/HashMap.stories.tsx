import * as React from "react";
import { HashMap } from "../index";
import { configurationMapStoryWrapper } from "./helpers/ConfigurationMapStoryWrapper";

export default {
  title: "Data Listing/HashMap",
  decorators: [configurationMapStoryWrapper],
  component: HashMap
};

export const Default = () => (
  <HashMap
    hash={{
      name: "Jane Doe",
      role: "UX Designer",
      city: "San Francisco",
      state: "CA",
      zipcode: 95125
    }}
  />
);

export const WithHeadline = () => (
  <HashMap
    hash={{
      name: "Jane Doe",
      role: "UX Designer",
      city: "San Francisco",
      state: "CA",
      zipcode: 95125
    }}
    headline="Jane Doe Info"
  />
);

export const WithNestedObjects = () => (
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
  />
);

export const WithRenderKeys = () => (
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
  />
);

export const WithEmptyValue = () => (
  <HashMap
    hash={{
      name: "Jane Doe",
      role: "UX Designer",
      city: "San Francisco",
      state: "CA",
      zipcode: ""
    }}
    defaultValue="(empty)"
  />
);
