import React from "react";

import { FieldGroup } from "..";
import { TextInput } from "../../textInput";
import { render } from "enzyme";
import toJSON from "enzyme-to-json";

describe("FieldGroup", () => {
  it("renders", () => {
    expect(
      toJSON(
        render(
          <FieldGroup
            direction={{
              default: "column",
              small: "row"
            }}
          >
            <TextInput />
            <TextInput />
            <TextInput />
          </FieldGroup>
        )
      )
    );
  });
});
