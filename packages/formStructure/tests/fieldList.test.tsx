import React from "react";

import { mount, render } from "enzyme";
import toJSON from "enzyme-to-json";
import {
  FieldList,
  FieldListColumn,
  FieldListColumnSeparator,
  FieldListAddButton
} from "..";
import { TextInput } from "../../textInput";

const mockItems = [
  {
    name: "Brian Vaughn",
    role: "Software Engineer",
    city: "San Jose"
  },
  {
    name: "Jon Doe",
    role: "Product engineer",
    city: "Mountain View"
  },
  {
    name: "Jane Doe",
    role: "UX Designer",
    city: "San Francisco"
  }
];

describe("FieldList", () => {
  it("renders", () => {
    const testRemoveHandler = jest.fn(_rowIndex => () => {
      jest.fn();
    });
    const testFieldUpdateHandler = jest.fn((_rowIndex, _pathToValue) => _e => {
      jest.fn();
    });
    expect(
      toJSON(
        render(
          <FieldList
            data={mockItems}
            onRemoveItem={testRemoveHandler}
            disabledRows={[0]}
          >
            <FieldListColumn
              header="Name"
              pathToValue="name"
              onChange={testFieldUpdateHandler}
            >
              {({ defaultProps, onChange, value }) => (
                <TextInput
                  value={value}
                  onChange={onChange}
                  {...defaultProps}
                />
              )}
            </FieldListColumn>
            <FieldListColumnSeparator>:</FieldListColumnSeparator>
            <FieldListColumn
              header="Role"
              pathToValue="role"
              onChange={testFieldUpdateHandler}
            >
              {({ defaultProps, onChange, value }) => (
                <TextInput
                  value={value}
                  onChange={onChange}
                  {...defaultProps}
                />
              )}
            </FieldListColumn>
            <FieldListAddButton>Add row</FieldListAddButton>
          </FieldList>
        )
      )
    ).toMatchSnapshot();
  });

  it("calls onRemoveItem when clicking the remove button", () => {
    const testRemoveHandlerInner = jest.fn();
    const testRemoveHandler = jest.fn(rowIndex => () => {
      testRemoveHandlerInner(rowIndex);
    });
    const testFieldUpdateHandler = jest.fn((_rowIndex, _pathToValue) => _e => {
      jest.fn();
    });
    const fieldListComponent = mount(
      <FieldList data={mockItems} onRemoveItem={testRemoveHandler}>
        <FieldListColumn
          header="Name"
          pathToValue="name"
          onChange={testFieldUpdateHandler}
        >
          {({ defaultProps, onChange, value }) => (
            <TextInput value={value} onChange={onChange} {...defaultProps} />
          )}
        </FieldListColumn>
        <FieldListColumnSeparator>:</FieldListColumnSeparator>
        <FieldListColumn
          header="Role"
          pathToValue="role"
          onChange={testFieldUpdateHandler}
        >
          {({ defaultProps, onChange, value }) => (
            <TextInput value={value} onChange={onChange} {...defaultProps} />
          )}
        </FieldListColumn>
      </FieldList>
    );
    const removeButton = fieldListComponent
      .find('button[data-cy="fieldList-removeButton"]')
      .first();

    expect(testRemoveHandlerInner).not.toHaveBeenCalled();
    removeButton.simulate("click");
    expect(testRemoveHandlerInner).toHaveBeenCalledWith(0);
  });

  it("disables the inputs and buttons in the rows specified by the disabledRows prop", () => {
    const testRemoveHandlerInner = jest.fn();
    const testRemoveHandler = jest.fn(rowIndex => () => {
      testRemoveHandlerInner(rowIndex);
    });
    const testFieldUpdateHandler = jest.fn((_rowIndex, _pathToValue) => _e => {
      jest.fn();
    });
    const fieldListComponent = mount(
      <FieldList
        data={mockItems}
        onRemoveItem={testRemoveHandler}
        disabledRows={[0]}
      >
        <FieldListColumn
          header="Name"
          pathToValue="name"
          onChange={testFieldUpdateHandler}
        >
          {({ disabled, defaultProps, onChange, value }) => (
            <TextInput
              disabled={disabled}
              value={value}
              onChange={onChange}
              {...defaultProps}
            />
          )}
        </FieldListColumn>
        <FieldListColumn
          header="Role"
          pathToValue="role"
          onChange={testFieldUpdateHandler}
        >
          {({ disabled, defaultProps, onChange, value }) => (
            <TextInput
              disabled={disabled}
              value={value}
              onChange={onChange}
              {...defaultProps}
            />
          )}
        </FieldListColumn>
      </FieldList>
    );
    const textInputs = fieldListComponent.find(
      'input[data-cy*="textInput-input"]'
    );
    const removeButton = fieldListComponent
      .find('button[data-cy="fieldList-removeButton"]')
      .first();

    textInputs.forEach((input, i) => {
      if (i < 2) {
        expect(input.prop("disabled")).toBe(true);
      }
      if (i > 1) {
        expect(input.prop("disabled")).toBe(false);
      }
    });
    expect(removeButton.prop("disabled")).toBe(true);
  });

  it("calls FieldListColumn's `onChange` render prop", () => {
    const pathToValue = "name";
    const testFieldUpdateHandlerInner = jest.fn();
    const testRemoveHandler = jest.fn(_rowIndex => () => {
      jest.fn();
    });
    const testFieldUpdateHandler = jest.fn((rowIndex, pathToValue) => _e => {
      testFieldUpdateHandlerInner(rowIndex, pathToValue);
    });
    const fieldListComponent = mount(
      <FieldList data={mockItems} onRemoveItem={testRemoveHandler}>
        <FieldListColumn
          header="Name"
          pathToValue={pathToValue}
          onChange={testFieldUpdateHandler}
        >
          {({ defaultProps, onChange, value }) => (
            <TextInput value={value} onChange={onChange} {...defaultProps} />
          )}
        </FieldListColumn>
      </FieldList>
    );

    const textInput = fieldListComponent
      .find('input[data-cy*="textInput-input"]')
      .first();

    expect(testFieldUpdateHandlerInner).not.toHaveBeenCalled();
    textInput.simulate("change", { value: "D2iQ" });
    expect(testFieldUpdateHandlerInner).toHaveBeenCalledWith(0, pathToValue);
  });
});
