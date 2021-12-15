import * as React from "react";
import { Story, Meta } from "@storybook/react";
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

const Template: Story = args => (
  <FieldGroup {...args}>
    <TextInput inputLabel="Name" id="name" key="name" />
    <TextInput inputLabel="Role" id="role" key="role" />
    <TextInput inputLabel="City" id="city" key="city" />
  </FieldGroup>
);

export const Default = Template.bind({});

export const ResponsiveLayout = Template.bind({});
ResponsiveLayout.args = {
  direction: {
    default: "column",
    small: "row"
  }
};
