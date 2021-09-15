import * as React from "react";
import { FieldGroup } from "..";
import { TextInput } from "../../textInput";

export default {
  title: "Forms/Form structure/Grouped fields/FieldGroup",
  component: FieldGroup
};

export const Default = () => (
  <FieldGroup>
    <TextInput inputLabel="Name" id="name" key="name" />
    <TextInput inputLabel="Role" id="role" key="role" />
    <TextInput inputLabel="City" id="city" key="city" />
  </FieldGroup>
);

export const ResponsiveSwitchToVerticalLayoutOnSmallScreens = () => (
  <FieldGroup
    direction={{
      default: "column",
      small: "row"
    }}
  >
    <TextInput inputLabel="Name" id="name" key="name" />
    <TextInput inputLabel="Role" id="role" key="role" />
    <TextInput inputLabel="City" id="city" key="city" />
  </FieldGroup>
);
