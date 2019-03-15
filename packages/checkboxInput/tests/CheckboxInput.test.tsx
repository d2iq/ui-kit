import React from "react";
import { mount } from "enzyme";
import serializer from "jest-emotion";
import toJson from "enzyme-to-json";
import { CheckboxInput } from "../";
import { InputAppearance } from "../../shared/types/inputAppearance";

expect.addSnapshotSerializer(serializer);

describe("CheckboxInput", () => {
  it("renders all appearances", () => {
    Object.keys(InputAppearance).forEach(appearance => {
      const component = mount(
        <CheckboxInput
          id="defaultId"
          inputLabel="Sample label"
          value="default"
          appearance={InputAppearance[appearance]}
        />
      );
      expect(toJson(component)).toMatchSnapshot();
    });
  });

  it("renders with a hidden label", () => {
    const component = mount(
      <CheckboxInput
        id="hiddenLabel"
        inputLabel="Sample Label"
        value="default"
        showInputLabel={false}
      />
    );
    expect(toJson(component)).toMatchSnapshot();
  });

  it("renders indeterminate", () => {
    const component = mount(
      <CheckboxInput
        id="indeterminateId"
        inputLabel="Sample Label"
        value="indeterminate"
        indeterminate={true}
      />
    );
    expect(toJson(component)).toMatchSnapshot();
  });

  it("calls onFocus if its passed in as a prop", () => {
    const focusFn = jest.fn();
    const component = mount(
      <CheckboxInput
        id="defaultId"
        inputLabel="Sample label"
        value="default"
        onFocus={focusFn}
      />
    );
    expect(focusFn).not.toHaveBeenCalled();
    component.find("input").simulate("focus");
    expect(focusFn).toHaveBeenCalled();
  });

  it("calls onBlur if its passed in as a prop", () => {
    const blurFn = jest.fn();
    const component = mount(
      <CheckboxInput
        id="defaultId"
        inputLabel="Sample label"
        value="default"
        onBlur={blurFn}
      />
    );
    expect(blurFn).not.toHaveBeenCalled();
    component.find("input").simulate("focus");
    expect(blurFn).not.toHaveBeenCalled();
    component.find("input").simulate("blur");
    expect(blurFn).toHaveBeenCalled();
  });
});
