import React from "react";
import { mount } from "enzyme";
import * as emotion from "emotion";
import { createSerializer } from "jest-emotion";
import toJson from "enzyme-to-json";
import { RadioInput } from "./";
import { InputAppearance } from "../shared/types/inputAppearance";

expect.addSnapshotSerializer(createSerializer(emotion));

describe("RadioInput", () => {
  it("renders all appearances", () => {
    Object.keys(InputAppearance).forEach(appearance => {
      const component = mount(
        <RadioInput
          id="defaultId"
          inputLabel="Sample label"
          value="default"
          appearance={InputAppearance[appearance]}
          name="appearanceTest"
        />
      );
      expect(toJson(component)).toMatchSnapshot();
    });
  });
});
