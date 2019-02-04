import React from "react";

import { CheckboxTable, Column } from "../";
import * as emotion from "emotion";
import { createSerializer } from "jest-emotion";
import { shallow, render } from "enzyme";
import toJson from "enzyme-to-json";

expect.addSnapshotSerializer(createSerializer(emotion));

describe("CheckboxTable", () => {
  const items = [
    {
      name: "Brian Vaughn",
      role: "Software Engineer",
      city: "San Jose",
      state: "CA",
      zipcode: 95125
    },
    {
      name: "Jon Doe",
      role: "Product engineer",
      city: "Mountain View",
      state: "CA",
      zipcode: 95125
    }
  ];

  const nameCellRenderer = ({ name }: { name?: string }) => (
    <strong>{name}</strong>
  );
  const cityCellRenderer = ({ city }: { city?: string }) => (
    <strong>{city}</strong>
  );
  const roleCellRenderer = ({ role }: { role?: string }) => <em>{role}</em>;
  const stateCellRenderer = ({ state }: { state?: string }) => (
    <span>{state}</span>
  );
  const zipcodeCellRenderer = ({ zipcode }: { zipcode?: string }) => (
    <span>{zipcode}</span>
  );

  it("renders default", () => {
    const component = render(
      <CheckboxTable data={items}>
        <Column header="name" cellRenderer={nameCellRenderer} />
        <Column header="role" cellRenderer={roleCellRenderer} />
        <Column header="state" cellRenderer={stateCellRenderer} />
        <Column header="zipcode" cellRenderer={zipcodeCellRenderer} />
        <Column header="city" cellRenderer={cityCellRenderer} />
      </CheckboxTable>
    );
    expect(toJson(component)).toMatchSnapshot();
  });

  it("renders with checked row", () => {
    const component = render(
      <CheckboxTable data={items} selectedRows={[items[0]]}>
        <Column header="name" cellRenderer={nameCellRenderer} />
        <Column header="role" cellRenderer={roleCellRenderer} />
        <Column header="state" cellRenderer={stateCellRenderer} />
        <Column header="zipcode" cellRenderer={zipcodeCellRenderer} />
        <Column header="city" cellRenderer={cityCellRenderer} />
      </CheckboxTable>
    );
    expect(toJson(component)).toMatchSnapshot();
  });

  it("checks header checkbox when all rows are selected", () => {
    const component = render(
      <CheckboxTable data={items} selectedRows={items}>
        <Column header="name" cellRenderer={nameCellRenderer} />
        <Column header="role" cellRenderer={roleCellRenderer} />
        <Column header="state" cellRenderer={stateCellRenderer} />
        <Column header="zipcode" cellRenderer={zipcodeCellRenderer} />
        <Column header="city" cellRenderer={cityCellRenderer} />
      </CheckboxTable>
    );

    expect(component.find("#headerCheckbox").prop("checked")).toBe(true);
  });

  it("does not check header checkbox when all rows are not selected", () => {
    const component = render(
      <CheckboxTable data={items} selectedRows={[items[0]]}>
        <Column header="name" cellRenderer={nameCellRenderer} />
        <Column header="role" cellRenderer={roleCellRenderer} />
        <Column header="state" cellRenderer={stateCellRenderer} />
        <Column header="zipcode" cellRenderer={zipcodeCellRenderer} />
        <Column header="city" cellRenderer={cityCellRenderer} />
      </CheckboxTable>
    );
    expect(component.find("#headerCheckbox").prop("checked")).toBe(false);
  });

  it("calls onChange prop with the selected rows data", () => {
    const onChangeFn = jest.fn();
    const component = shallow(
      <CheckboxTable data={items} onChange={onChangeFn}>
        <Column header="name" cellRenderer={nameCellRenderer} />
        <Column header="role" cellRenderer={roleCellRenderer} />
        <Column header="state" cellRenderer={stateCellRenderer} />
        <Column header="zipcode" cellRenderer={zipcodeCellRenderer} />
        <Column header="city" cellRenderer={cityCellRenderer} />
      </CheckboxTable>
    );
    const cellRendererResult = component
      .find(Column)
      .first()
      .prop("cellRenderer")(items[0], 100) as React.ReactElement<{
      children: any;
    }>;
    const checkbox = shallow(cellRendererResult.props.children).find("input");

    expect(onChangeFn).not.toHaveBeenCalled();
    checkbox.simulate("change", { target: { checked: true } });
    expect(onChangeFn).toHaveBeenCalledWith([items[0]]);
    checkbox.simulate("change", { target: { checked: false } });
    expect(onChangeFn).toHaveBeenCalledWith([]);
  });

  it("toggles all rows with header checkbox", () => {
    const onChangeFn = jest.fn();
    const component = shallow(
      <CheckboxTable data={items} onChange={onChangeFn}>
        <Column header="name" cellRenderer={nameCellRenderer} />
        <Column header="role" cellRenderer={roleCellRenderer} />
        <Column header="state" cellRenderer={stateCellRenderer} />
        <Column header="zipcode" cellRenderer={zipcodeCellRenderer} />
        <Column header="city" cellRenderer={cityCellRenderer} />
      </CheckboxTable>
    );
    const headerContent = component
      .find(Column)
      .first()
      .prop("header") as React.ReactElement<{ children: any }>;
    const checkboxComponent = shallow(headerContent.props.children);

    expect(onChangeFn).not.toHaveBeenCalled();
    checkboxComponent
      .find("input")
      .simulate("change", { target: { checked: true } });

    expect(onChangeFn).toHaveBeenCalledWith(items);
    checkboxComponent
      .find("input")
      .simulate("change", { target: { checked: false } });
    expect(onChangeFn).toHaveBeenCalledWith([]);
  });
});
