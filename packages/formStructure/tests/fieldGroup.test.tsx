import * as React from "react";

import { FieldGroup } from "..";
import { TextInput } from "../../textInput";
import { render } from "@testing-library/react";

describe("FieldGroup", () => {
  it("renders", () => {
    const { asFragment } = render(
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
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
