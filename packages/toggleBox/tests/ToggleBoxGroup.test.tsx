import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createSerializer } from "@emotion/jest";

import { ToggleBox, ToggleBoxGroup } from "..";

expect.addSnapshotSerializer(createSerializer());

const children = [
  <ToggleBox
    id="exosphere"
    value="exosphere"
    key="exosphere"
    data-cy="exosphere"
  >
    Exosphere
  </ToggleBox>,
  <ToggleBox
    id="thermosphere"
    value="thermosphere"
    data-cy="thermosphere"
    key="thermosphere"
  >
    Thermosphere
  </ToggleBox>,
  <ToggleBox
    id="mesosphere"
    value="mesosphere"
    data-cy="mesosphere"
    key="mesosphere"
  >
    Mesosphere
  </ToggleBox>
];

describe("ToggleBoxGroup", () => {
  it("renders default", () => {
    const { asFragment, getByText } = render(
      <ToggleBoxGroup id="default">{children}</ToggleBoxGroup>
    );
    getByText("Exosphere");
    getByText("Thermosphere");
    getByText("Mesosphere");

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders with a label", () => {
    const { getByText } = render(
      <ToggleBoxGroup id="default" label="Atmosphere layer">
        {children}
      </ToggleBoxGroup>
    );

    getByText("Atmosphere layer");
  });

  it("renders with a selected ToggleBox", () => {
    const { getByTestId } = render(
      <ToggleBoxGroup id="selectedItems" selectedItems={["mesosphere"]}>
        {children}
      </ToggleBoxGroup>
    );

    const radioOptionMesosphere = getByTestId("mesosphere") as HTMLInputElement;
    const radioOptionExosphere = getByTestId("exosphere") as HTMLInputElement;
    const radioOptionThermosphere = getByTestId(
      "thermosphere"
    ) as HTMLInputElement;

    expect(radioOptionMesosphere.checked).toBeTruthy();
    expect(radioOptionExosphere.checked).toBeFalsy();
    expect(radioOptionThermosphere.checked).toBeFalsy();
  });

  it("renders with custom direction and gutter size", () => {
    const { asFragment } = render(
      <ToggleBoxGroup
        id="customLayoutProps"
        direction="column"
        gutterSize="xxl"
      >
        {children}
      </ToggleBoxGroup>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("calls onChange prop with the selected values", async () => {
    const onChangeFn = jest.fn();

    const toggleBoxGroupBaseProps = {
      id: "onChange",
      onChange: onChangeFn
    };
    const { getByText, rerender } = render(
      <ToggleBoxGroup {...toggleBoxGroupBaseProps}>{children}</ToggleBoxGroup>
    );
    let exosphereOption = getByText("Exosphere");

    expect(onChangeFn).not.toHaveBeenCalled();
    await userEvent.click(exosphereOption);
    expect(onChangeFn).toHaveBeenCalledWith(["exosphere"]);

    onChangeFn.mockClear();
    rerender(
      <ToggleBoxGroup
        {...toggleBoxGroupBaseProps}
        selectedItems={["exosphere"]}
      >
        {children}
      </ToggleBoxGroup>
    );
    exosphereOption = getByText("Exosphere");
    const thermosphereOption = getByText("Thermosphere");
    //Since it is not multiselect, clicked option will get selected.
    await userEvent.click(exosphereOption);
    expect(onChangeFn).not.toHaveBeenCalled();

    await userEvent.click(thermosphereOption);
    expect(onChangeFn).toHaveBeenCalledWith(["thermosphere"]);
  });

  it("calls onChange prop with the selected values with multiselect", async () => {
    const onChangeFn = jest.fn();

    const toggleBoxGroupBaseProps = {
      id: "onChange",
      onChange: onChangeFn,
      multiSelect: true
    };
    const { getByText, rerender } = render(
      <ToggleBoxGroup {...toggleBoxGroupBaseProps}>{children}</ToggleBoxGroup>
    );
    let exosphereOption = getByText("Exosphere");

    expect(onChangeFn).not.toHaveBeenCalled();
    await userEvent.click(exosphereOption);
    expect(onChangeFn).toHaveBeenCalledWith(["exosphere"]);

    onChangeFn.mockClear();
    rerender(
      <ToggleBoxGroup
        {...toggleBoxGroupBaseProps}
        selectedItems={["exosphere"]}
      >
        {children}
      </ToggleBoxGroup>
    );
    exosphereOption = getByText("Exosphere");
    const thermosphereOption = getByText("Thermosphere");

    //clicking on selected exosphere option deselects it
    await userEvent.click(exosphereOption);
    expect(onChangeFn).toHaveBeenCalledWith([]);

    //clicking on thermosphere option when exospher option is selected
    await userEvent.click(thermosphereOption);
    expect(onChangeFn).toHaveBeenCalledWith(["exosphere", "thermosphere"]);
  });
});
