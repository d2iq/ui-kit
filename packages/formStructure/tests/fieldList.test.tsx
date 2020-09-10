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
    city: "San Jose",
    id: 0
  },
  {
    name: "Jon Doe",
    role: "Product engineer",
    city: "Mountain View",
    id: 1
  },
  {
    name: "Jane Doe",
    role: "UX Designer",
    city: "San Francisco",
    id: 2
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
            pathToUniqueKey="id"
          >
            <FieldListColumn
              header="Name"
              pathToValue="name"
              onChange={testFieldUpdateHandler}
              key="name"
            >
              {({ defaultProps, onChange, value }) => (
                <TextInput
                  value={value}
                  onChange={onChange}
                  {...defaultProps}
                />
              )}
            </FieldListColumn>
            <FieldListColumnSeparator key="separator">
              :
            </FieldListColumnSeparator>
            <FieldListColumn
              header="Role"
              pathToValue="role"
              onChange={testFieldUpdateHandler}
              key="role"
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

  it("calls onAddItem when clicking the add button", () => {
    const newItem = { id: 42 };
    const testAddHandlerInner = jest.fn();
    const testAddHandler = jest.fn(itemToAdd => () => {
      testAddHandlerInner(itemToAdd);
    });
    const testFieldUpdateHandler = jest.fn((_rowIndex, _pathToValue) => _e => {
      jest.fn();
    });
    const fieldListComponent = mount(
      <FieldList
        data={mockItems}
        onAddItem={testAddHandler(newItem)}
        pathToUniqueKey="id"
      >
        <FieldListColumn
          key="name"
          header="Name"
          pathToValue="name"
          onChange={testFieldUpdateHandler}
        >
          {({ defaultProps, onChange, value }) => (
            <TextInput value={value} onChange={onChange} {...defaultProps} />
          )}
        </FieldListColumn>
        <FieldListColumn
          key="role"
          header="Role"
          pathToValue="role"
          onChange={testFieldUpdateHandler}
        >
          {({ defaultProps, onChange, value }) => (
            <TextInput value={value} onChange={onChange} {...defaultProps} />
          )}
        </FieldListColumn>
        <FieldListAddButton>Add Item</FieldListAddButton>
      </FieldList>
    );
    const addButton = fieldListComponent
      .find('button[data-cy="secondaryButton"]')
      .first();

    expect(testAddHandlerInner).not.toHaveBeenCalled();
    addButton.simulate("click");
    expect(testAddHandlerInner).toHaveBeenCalledWith(newItem);
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
      <FieldList
        data={mockItems}
        onRemoveItem={testRemoveHandler}
        pathToUniqueKey="id"
      >
        <FieldListColumn
          key="name"
          header="Name"
          pathToValue="name"
          onChange={testFieldUpdateHandler}
        >
          {({ defaultProps, onChange, value }) => (
            <TextInput value={value} onChange={onChange} {...defaultProps} />
          )}
        </FieldListColumn>
        <FieldListColumn
          key="role"
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
        pathToUniqueKey="id"
      >
        <FieldListColumn
          key="name"
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
          key="role"
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
      <FieldList
        data={mockItems}
        onRemoveItem={testRemoveHandler}
        pathToUniqueKey="id"
      >
        <FieldListColumn
          key={pathToValue}
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
