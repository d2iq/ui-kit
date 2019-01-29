import React from "react";
import { mount } from "enzyme";
import * as emotion from "emotion";
import { createSerializer } from "jest-emotion";
import toJson from "enzyme-to-json";
import { ToggleInput } from "../";
import { ToggleInputAppearance } from "../../toggleInput/components/ToggleInput";

expect.addSnapshotSerializer(createSerializer(emotion));

describe("ToggleInput", () => {
  it("renders all appearances", () => {
    Object.keys(ToggleInputAppearance).forEach(appearance => {
      const component = mount(
        <ToggleInput
          id="defaultId"
          inputLabel="Sample label"
          value="default"
          appearance={ToggleInputAppearance[appearance]}
        />
      );
      expect(toJson(component)).toMatchSnapshot();
    });
  });
});
