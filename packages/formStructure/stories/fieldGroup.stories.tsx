import * as React from "react";
import { storiesOf } from "@storybook/react";
import { FieldGroup } from "..";
import { TextInput } from "../../textInput";

storiesOf("Form structure/Grouped fields/FieldGroup", module)
  .addParameters({
    info: {
      propTablesExclude: [TextInput]
    }
  })
  .add("default", () => (
    <FieldGroup>
      <TextInput inputLabel="Name" id="name" />
      <TextInput inputLabel="Role" id="role" />
      <TextInput inputLabel="City" id="city" />
    </FieldGroup>
  ))
  .add("responsive - switch to vertical layout on small screens", () => (
    <FieldGroup
      direction={{
        default: "column",
        small: "row"
      }}
    >
      <TextInput inputLabel="Name" id="name" />
      <TextInput inputLabel="Role" id="role" />
      <TextInput inputLabel="City" id="city" />
    </FieldGroup>
  ));
