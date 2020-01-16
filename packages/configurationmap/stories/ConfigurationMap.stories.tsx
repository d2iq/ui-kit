import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import { action } from "@storybook/addon-actions";
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

const readme = require("../README.md");
const rowAction = action("row action");

storiesOf("ConfigurationMap/ConfigurationMap", module)
  .addDecorator(withReadme([readme]))
  .addDecorator(configurationMapStoryWrapper)
  .add("default", () => (
    <ConfigurationMap>
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
  ))
  .add("with default value", () => (
    <ConfigurationMap>
      <ConfigurationMapSection>
        <ConfigurationMapRow>
          <ConfigurationMapLabel>Name</ConfigurationMapLabel>
          <ConfigurationMapValueWithDefault value="Jane Doe" />
        </ConfigurationMapRow>
        <ConfigurationMapRow>
          <ConfigurationMapLabel>Role</ConfigurationMapLabel>
          <ConfigurationMapValueWithDefault />
        </ConfigurationMapRow>
        <ConfigurationMapRow>
          <ConfigurationMapLabel>City</ConfigurationMapLabel>
          <ConfigurationMapValueWithDefault />
        </ConfigurationMapRow>
      </ConfigurationMapSection>
    </ConfigurationMap>
  ))
  .add("with heading", () => (
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
    </ConfigurationMap>
  ))
  .add("multiple sections", () => (
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
  ))
  .add("with row action", () => (
    <ConfigurationMap>
      <ConfigurationMapSection>
        <ConfigurationMapRow>
          <ConfigurationMapLabel>Name</ConfigurationMapLabel>
          <ConfigurationMapValue>Jane Doe</ConfigurationMapValue>
          <ConfigurationMapRowAction onClick={rowAction}>
            Action
          </ConfigurationMapRowAction>
        </ConfigurationMapRow>
        <ConfigurationMapRow>
          <ConfigurationMapLabel>Role</ConfigurationMapLabel>
          <ConfigurationMapValue>UX Designer</ConfigurationMapValue>
          <ConfigurationMapRowAction onClick={rowAction}>
            Action
          </ConfigurationMapRowAction>
        </ConfigurationMapRow>
        <ConfigurationMapRow>
          <ConfigurationMapLabel>City</ConfigurationMapLabel>
          <ConfigurationMapValue>San Francisco</ConfigurationMapValue>
          <ConfigurationMapRowAction onClick={rowAction}>
            Action
          </ConfigurationMapRowAction>
        </ConfigurationMapRow>
      </ConfigurationMapSection>
    </ConfigurationMap>
  ))
  .add("with row action shown on hover", () => (
    <ConfigurationMap>
      <ConfigurationMapSection>
        <ConfigurationMapRow onlyShowActionOnHover={true}>
          <ConfigurationMapLabel>Name</ConfigurationMapLabel>
          <ConfigurationMapValue>Jane Doe</ConfigurationMapValue>
          <ConfigurationMapRowAction onClick={rowAction}>
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
  ))
  .add("with long value", () => (
    <ConfigurationMap>
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
            {Array(100)
              .fill("VeryLongWord")
              .join("")}
          </ConfigurationMapLabel>
          <ConfigurationMapValue>
            {Array(100)
              .fill("VeryLongWord")
              .join("")}
          </ConfigurationMapValue>
        </ConfigurationMapRow>
      </ConfigurationMapSection>
    </ConfigurationMap>
  ));
