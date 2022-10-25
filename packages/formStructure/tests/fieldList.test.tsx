import React from "react";
import { render, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

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
    const { asFragment } = render(
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
            <TextInput value={value} onChange={onChange} {...defaultProps} />
          )}
        </FieldListColumn>
        <FieldListColumnSeparator key="separator">:</FieldListColumnSeparator>
        <FieldListColumn
          header="Role"
          pathToValue="role"
          onChange={testFieldUpdateHandler}
          key="role"
        >
          {({ defaultProps, onChange, value }) => (
            <TextInput value={value} onChange={onChange} {...defaultProps} />
          )}
        </FieldListColumn>
        <FieldListAddButton>Add row</FieldListAddButton>
      </FieldList>
    );

    expect(asFragment()).toMatchSnapshot();
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
    const { getByText } = render(
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
    const addButton = getByText("Add Item");

    expect(testAddHandlerInner).not.toHaveBeenCalled();
    addButton.click();
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
    const { getAllByTestId } = render(
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
    const firstRow = getAllByTestId("fieldList-row")[0] as HTMLDivElement;
    const firsRowRemoveButton = within(firstRow).getByTestId(
      "fieldList-removeButton"
    );

    expect(testRemoveHandlerInner).not.toHaveBeenCalled();
    firsRowRemoveButton.click();
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
    const { getAllByTestId } = render(
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

    const testDisabledRow = (disabledRow: HTMLDivElement) => {
      const textInputsWithinDisabledRow = within(disabledRow).getAllByRole(
        "textbox"
      ) as HTMLInputElement[];
      const removeButtons = within(disabledRow).getAllByTestId(
        "fieldList-removeButton"
      ) as HTMLButtonElement[];

      textInputsWithinDisabledRow.forEach(textInputEl => {
        expect(textInputEl.disabled).toBeTruthy();
      });
      removeButtons.forEach(buttonEl => {
        expect(buttonEl.disabled).toBeTruthy();
      });
    };

    const testEnabledRow = (row: HTMLDivElement) => {
      const textInputsWithinDisabledRow = within(row).getAllByRole(
        "textbox"
      ) as HTMLInputElement[];
      const removeButtons = within(row).getAllByTestId(
        "fieldList-removeButton"
      ) as HTMLButtonElement[];

      textInputsWithinDisabledRow.forEach(textInputEl => {
        expect(textInputEl.disabled).toBeFalsy();
      });
      removeButtons.forEach(buttonEl => {
        expect(buttonEl.disabled).toBeFalsy();
      });
    };

    const rows = getAllByTestId("fieldList-row") as HTMLDivElement[];

    rows.forEach((row, index) => {
      if (index === 0) {
        testDisabledRow(row);
      } else {
        testEnabledRow(row);
      }
    });
  });

  it("calls FieldListColumn's `onChange` render prop", async () => {
    const pathToValue = "name";
    const testFieldUpdateHandlerInner = jest.fn();
    const testRemoveHandler = jest.fn(_rowIndex => () => {
      jest.fn();
    });
    const testFieldUpdateHandler = jest.fn((rowIndex, pathToValue) => _e => {
      testFieldUpdateHandlerInner(rowIndex, pathToValue);
    });
    const { getAllByTestId } = render(
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

    const firstRow = getAllByTestId("fieldList-row")[0] as HTMLDivElement;
    const firstRowFirstColumnTextInput = within(firstRow).getAllByTestId(
      "textInput-input"
    )[0] as HTMLInputElement;

    expect(testFieldUpdateHandlerInner).not.toHaveBeenCalled();
    await userEvent.type(firstRowFirstColumnTextInput, "D2iQ");
    expect(testFieldUpdateHandlerInner).toHaveBeenCalledWith(0, pathToValue);
  });
});
