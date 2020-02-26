import * as React from "react";

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
            <TextInput id="1" />
            <TextInput id="2" />
            <TextInput id="3" />
          </FieldGroup>
        )
      )
    );
  });
});
