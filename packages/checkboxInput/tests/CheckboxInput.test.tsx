import React from "react";
import { render } from "@testing-library/react";
import { createSerializer } from "@emotion/jest";
import { CheckboxInput } from "../";
import { InputAppearance } from "../../shared/types/inputAppearance";

expect.addSnapshotSerializer(createSerializer());

describe("CheckboxInput", () => {
  it("renders all appearances", () => {
    Object.keys(InputAppearance).forEach(appearance => {
      const { asFragment } = render(
        <CheckboxInput
          id="defaultId"
          inputLabel="Sample label"
          value="default"
          appearance={InputAppearance[appearance]}
        />
      );
      expect(asFragment()).toMatchSnapshot();
    });
  });

  it("renders with a hidden label", () => {
    const { asFragment } = render(
      <CheckboxInput
        id="hiddenLabel"
        inputLabel="Sample Label"
        value="default"
        showInputLabel={false}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders indeterminate", () => {
    const { asFragment } = render(
      <CheckboxInput
        id="indeterminateId"
        inputLabel="Sample Label"
        value="indeterminate"
        indeterminate={true}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
