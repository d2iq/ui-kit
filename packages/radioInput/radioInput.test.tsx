import React from "react";
import { createSerializer } from "@emotion/jest";
import { render } from "@testing-library/react";
import { RadioInput } from "./";
import { InputAppearance } from "../shared/types/inputAppearance";

expect.addSnapshotSerializer(createSerializer());

describe("RadioInput", () => {
  it("renders all appearances", () => {
    Object.keys(InputAppearance).forEach(appearance => {
      const { asFragment } = render(
        <RadioInput
          id="defaultId"
          inputLabel="Sample label"
          value="default"
          appearance={InputAppearance[appearance]}
          name="appearanceTest"
        />
      );
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
