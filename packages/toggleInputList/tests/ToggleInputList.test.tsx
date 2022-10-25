import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createSerializer } from "@emotion/jest";

import { ToggleInputList } from "../";
import { InputAppearance } from "../../shared/types/inputAppearance";

const options = [
  { inputLabel: "Sample label", id: "id.1", value: "value.1" },
  { inputLabel: "Sample label", id: "id.2", value: "value.2" },
  { inputLabel: "Sample label", id: "id.3", value: "value.3" }
];

expect.addSnapshotSerializer(createSerializer());

describe("ToggleInputList", () => {
  it("renders default", () => {
    const { getByText, getAllByRole, asFragment } = render(
      <ToggleInputList
        id="checkbox"
        items={options}
        listLabel="Sample legend"
      />
    );
    getByText("Sample legend");
    expect(getAllByRole("checkbox").length).toBe(3);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders as a radio group", () => {
    const { asFragment } = render(
      <ToggleInputList
        id="radio"
        items={options}
        listLabel="Sample legend"
        isRadioGroup={true}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders with selected items", () => {
    const { getAllByRole } = render(
      <ToggleInputList
        id="checkbox"
        items={options}
        listLabel="Sample legend"
        selectedItems={["value.1", "value.2"]}
      />
    );
    const checkboxes = getAllByRole("checkbox") as HTMLInputElement[];
    const option1 = checkboxes[0];
    const option2 = checkboxes[1];
    const option3 = checkboxes[2];
    expect(option1.checked).toBeTruthy();
    expect(option2.checked).toBeTruthy();
    expect(option3.checked).toBeFalsy();
  });

  it("renders with errors", () => {
    const { getByText } = render(
      <ToggleInputList
        id="checkbox"
        items={options}
        listLabel="Sample legend"
        errors={["error.1", "error.2"]}
      />
    );
    getByText("error.1");
    getByText("error.2");
  });

  it("renders with hidden label", () => {
    const { queryByText } = render(
      <ToggleInputList
        id="checkbox"
        items={options}
        listLabel="Sample legend"
        showListLabel={false}
      />
    );
    expect(queryByText("Sample legend")).not.toBeVisible();
  });

  it("renders with required", () => {
    const { getByTestId } = render(
      <ToggleInputList
        id="checkbox"
        items={options}
        listLabel="Sample legend"
        required={true}
      />
    );
    getByTestId("dangerText");
  });

  it("renders with error label appearance", () => {
    const { getByText } = render(
      <ToggleInputList
        id="checkbox"
        items={options}
        listLabel="Sample legend"
        labelAppearance={InputAppearance.Error}
        errors={["error.1", "error.2"]}
      />
    );
    const legentLabel = getByText("Sample legend");
    getByText("error.1");
    getByText("error.2");

    expect(legentLabel).toHaveStyle("fill: var(--themeError, #EB293A)");
    expect(legentLabel).toHaveStyle("color: var(--themeError, #EB293A)");
  });

  it("calls onChange prop with all selected values and the last selected value", async () => {
    const onChangeFn = jest.fn();
    const toggleInputListBaseProps = {
      id: "checkbox",
      items: options,
      listLabel: "Sample legend",
      onChange: onChangeFn
    };
    const { rerender, getAllByRole } = render(
      <ToggleInputList {...toggleInputListBaseProps} />
    );
    const allCheckboxes = getAllByRole("checkbox") as HTMLInputElement[];
    const firstCheckboxEl = allCheckboxes[0];

    expect(onChangeFn).not.toHaveBeenCalled();
    await userEvent.click(firstCheckboxEl);
    expect(onChangeFn).toHaveBeenCalledWith(["value.1"], "value.1");

    rerender(
      <ToggleInputList
        {...toggleInputListBaseProps}
        selectedItems={["value.1"]}
      />
    );
    await userEvent.click(firstCheckboxEl);
    expect(onChangeFn).toHaveBeenLastCalledWith([], "value.1");
  });
});
