import * as React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { FieldGroup } from "..";
import { TextInput } from "../../textInput";

export default {
  title: "Forms/Form structure/FieldGroup",
  component: FieldGroup,
  argTypes: {
    direction: {
      options: ["row", "column"]
    }
  },
  args: {
    direction: "row"
  }
} as Meta;

const Template: StoryFn = args => (
  <FieldGroup {...args}>
    <TextInput inputLabel="Name" id="name" key="name" />
    <TextInput inputLabel="Role" id="role" key="role" />
    <TextInput inputLabel="City" id="city" key="city" />
  </FieldGroup>
);

export const Default = {
  render: Template
};

export const ResponsiveLayout = {
  render: Template,

  args: {
    direction: {
      default: "column",
      small: "row"
    }
  }
};
