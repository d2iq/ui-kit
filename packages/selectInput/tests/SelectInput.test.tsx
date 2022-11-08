import React from "react";
import { render, fireEvent, within } from "@testing-library/react";
import { createSerializer } from "@emotion/jest";

import { SelectInput } from "../";
import { InputAppearance } from "../../shared/types/inputAppearance";

expect.addSnapshotSerializer(createSerializer());

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
    Object.keys(InputAppearance).forEach(appearance => {
      const { asFragment, unmount } = render(
        <SelectInput
          appearance={InputAppearance[appearance]}
          options={defaultOptions}
          id="layers"
          inputLabel="Atmosphere layer"
        />
      );
      expect(asFragment()).toMatchSnapshot();
      unmount();
    });
  });

  it("should render all appearances focus", () => {
    Object.keys(InputAppearance).forEach(appearance => {
      const { asFragment, getByRole, unmount } = render(
        <SelectInput
          appearance={InputAppearance[appearance]}
          options={defaultOptions}
          id="layers"
          inputLabel="Atmosphere layer"
        />
      );
      fireEvent.focus(getByRole("combobox"));

      expect(asFragment()).toMatchSnapshot();
      unmount();
    });
  });

  it("renders with errors", () => {
    const { asFragment } = render(
      <SelectInput
        options={defaultOptions}
        id="layers"
        inputLabel="Atmosphere layer"
        appearance={InputAppearance.Error}
        errors={["error1", "error2"]}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders disabled", () => {
    const { asFragment } = render(
      <SelectInput
        options={defaultOptions}
        id="layers"
        inputLabel="Atmosphere layer"
        disabled={true}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders with hidden label", () => {
    const { asFragment } = render(
      <SelectInput
        options={defaultOptions}
        id="layers"
        inputLabel="Atmosphere layer"
        showInputLabel={false}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("calls onFocus if its passed in as a prop", () => {
    const focusFn = jest.fn();
    const { getByRole } = render(
      <SelectInput
        options={defaultOptions}
        id="layers"
        inputLabel="Atmosphere layer"
        onFocus={focusFn}
      />
    );
    expect(focusFn).not.toHaveBeenCalled();
    fireEvent.focus(getByRole("combobox"));
    expect(focusFn).toHaveBeenCalled();
  });

  it("calls onBlur if its passed in as a prop", () => {
    const blurFn = jest.fn();
    const { getByRole } = render(
      <SelectInput
        options={defaultOptions}
        id="layers"
        inputLabel="Atmosphere layer"
        onBlur={blurFn}
      />
    );
    const selectElement = getByRole("combobox") as HTMLSelectElement;

    expect(blurFn).not.toHaveBeenCalled();
    fireEvent.focus(selectElement);
    expect(blurFn).not.toHaveBeenCalled();
    fireEvent.blur(selectElement);
    expect(blurFn).toHaveBeenCalled();
  });

  it("renders errors passed in when appearance === Error", () => {
    const errorList = ["error1", "error2"];
    const { getByTestId } = render(
      <SelectInput
        options={defaultOptions}
        id="layers"
        inputLabel="Atmosphere layer"
        appearance={InputAppearance.Error}
        errors={errorList}
      />
    );
    expect(
      within(getByTestId("selectInput-hintContent")).getAllByRole("listitem")
        .length
    ).toBe(errorList.length);
  });

  it("does not render errors passed in when appearance !== Error", () => {
    const { queryByTestId } = render(
      <SelectInput
        options={defaultOptions}
        id="layers"
        inputLabel="Atmosphere layer"
        appearance={InputAppearance.Success}
        errors={["error1", "error2"]}
      />
    );
    expect(queryByTestId("selectInput-hintContent")).not.toBeInTheDocument();
  });
});
