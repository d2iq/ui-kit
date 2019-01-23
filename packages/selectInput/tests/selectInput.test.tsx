import React from "react";
import { mount } from "enzyme";
import * as emotion from "emotion";
import { createSerializer } from "jest-emotion";
import toJson from "enzyme-to-json";
import { SelectInput } from "../";
import { SelectInputAppearance } from "../components/SelectInput";

expect.addSnapshotSerializer(createSerializer(emotion));

const defaultOptions = [
  { value: "exosphere", label: "Exosphere" },
  { value: "thermosphere", label: "Thermosphere" },
  { value: "mesosphere", label: "Mesosphere" },
  { value: "stratosphere", label: "Stratosphere" },
  { value: "troposphere", label: "Troposphere" },
  { value: "disabled", label: "Can't touch this", disabled: true }
];

describe("SelectInput", () => {
  it("renders all appearances", () => {
    Object.keys(SelectInputAppearance).forEach(appearance => {
      const component = mount(
        <SelectInput
          appearance={SelectInputAppearance[appearance]}
          options={defaultOptions}
          id="layers"
          inputLabel="Atmosphere layer"
        />
      );
      expect(toJson(component)).toMatchSnapshot();
    });
  });

  it("should render all appearances focus", () => {
    Object.keys(SelectInput).forEach(appearance => {
      const component = mount(
        <SelectInput
          appearance={SelectInput[appearance]}
          options={defaultOptions}
          id="layers"
          inputLabel="Atmosphere layer"
        />
      );
      component.find("select").simulate("focus");
      expect(toJson(component)).toMatchSnapshot();
    });
  });

  it("renders with errors", () => {
    const component = mount(
      <SelectInput
        options={defaultOptions}
        id="layers"
        inputLabel="Atmosphere layer"
        appearance={SelectInputAppearance.Error}
        errors={["error1", "error2"]}
      />
    );
    expect(toJson(component)).toMatchSnapshot();
  });

  it("renders disabled", () => {
    const component = mount(
      <SelectInput
        options={defaultOptions}
        id="layers"
        inputLabel="Atmosphere layer"
        disabled={true}
      />
    );
    expect(toJson(component)).toMatchSnapshot();
  });

  it("renders with hidden label", () => {
    const component = mount(
      <SelectInput
        options={defaultOptions}
        id="layers"
        inputLabel="Atmosphere layer"
        showInputLabel={false}
      />
    );
    expect(toJson(component)).toMatchSnapshot();
  });

  it("calls onFocus if its passed in as a prop", () => {
    const focusFn = jest.fn();
    const component = mount(
      <SelectInput
        options={defaultOptions}
        id="layers"
        inputLabel="Atmosphere layer"
        onFocus={focusFn}
      />
    );
    expect(focusFn).not.toHaveBeenCalled();
    component.find("select").simulate("focus");
    expect(focusFn).toHaveBeenCalled();
  });

  it("calls onBlur if its passed in as a prop", () => {
    const blurFn = jest.fn();
    const component = mount(
      <SelectInput
        options={defaultOptions}
        id="layers"
        inputLabel="Atmosphere layer"
        onBlur={blurFn}
      />
    );
    expect(blurFn).not.toHaveBeenCalled();
    component.find("select").simulate("focus");
    expect(blurFn).not.toHaveBeenCalled();
    component.find("select").simulate("blur");
    expect(blurFn).toHaveBeenCalled();
  });

  it("renders errors passed in when appearance === Error", () => {
    const errorList = ["error1", "error2"];
    const component = mount(
      <SelectInput
        options={defaultOptions}
        id="layers"
        inputLabel="Atmosphere layer"
        appearance={SelectInputAppearance.Error}
        errors={errorList}
      />
    );
    expect(component.find("li").length).toBe(errorList.length);
  });

  it("does not render errors passed in when appearance !== Error", () => {
    const component = mount(
      <SelectInput
        options={defaultOptions}
        id="layers"
        inputLabel="Atmosphere layer"
        appearance={SelectInputAppearance.Success}
        errors={["error1", "error2"]}
      />
    );
    expect(component.find("li").length).toBe(0);
  });
});
