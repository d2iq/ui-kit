import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import { HashMap } from "../index";
import { configurationMapStoryWrapper } from "./helpers/ConfigurationMapStoryWrapper";

const readme = require("../README.md");

storiesOf("Data listing|HashMap", module)
  .addDecorator(withReadme([readme]))
  .addDecorator(configurationMapStoryWrapper)
  .add("default", () => (
    <HashMap
      hash={{
        name: "Jane Doe",
        role: "UX Designer",
        city: "San Francisco",
        state: "CA",
        zipcode: 95125
      }}
    />
  ))
  .add("with headline", () => (
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
  ))
  .add("with nested objects", () => (
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
  ))
  .add("with renderKeys", () => (
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
  ))
  .add("with emptyValue", () => (
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
  ));
