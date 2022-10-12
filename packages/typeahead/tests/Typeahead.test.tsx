import React from "react";
import { createSerializer } from "@emotion/jest";
import { create } from "react-test-renderer";
import { Typeahead, TextInput } from "../../index";
import { render, fireEvent } from "@testing-library/react";

expect.addSnapshotSerializer(createSerializer());

const items = [
  { label: "Exosphere", value: "Exosphere" },
  { label: "Thermosphere", value: "Thermosphere" },
  { label: "Stratosphere", value: "Stratosphere" }
];

describe("Typeahead", () => {
  it("renders", () => {
    const component = create(
      <Typeahead
        items={items}
        textField={
          <TextInput
            id="standard.input"
            inputLabel="Standard"
            placeholder="Placeholder"
          />
        }
      />
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders a menu with a max height", () => {
    const component = create(
      <Typeahead
        items={items}
        menuMaxHeight={100}
        textField={
          <TextInput
            id="standard.input"
            inputLabel="Standard"
            placeholder="Placeholder"
          />
        }
      />
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it("opens the menu on focus", () => {
    const { getByTestId } = render(
      <Typeahead
        items={[]}
        textField={
          <TextInput
            id="standard.input"
            inputLabel="Standard"
            placeholder="Placeholder"
          />
        }
      />
    );

    const textInputElement = getByTestId("textInput-input");

    textInputElement.focus();

    expect(textInputElement.children.length).toBe(0);
    expect(textInputElement).toBeTruthy();
  });

  it("opens the menu on click even if it's focused", () => {
    const { getByTestId, queryByTestId } = render(
      <Typeahead
        items={items}
        textField={
          <TextInput
            id="standard.input"
            inputLabel="Standard"
            placeholder="Placeholder"
          />
        }
      />
    );

    const textInputElement = getByTestId("textInput-input");

    expect(queryByTestId("typeahead-dropdown")).toBeNull();

    textInputElement.focus();

    fireEvent.keyDown(textInputElement, {
      key: "ArrowDown"
    });

    fireEvent.keyDown(textInputElement, {
      key: "Enter"
    });

    expect(queryByTestId("typeahead-dropdown")).toBeNull();

    textInputElement.click();

    expect(queryByTestId("typeahead-dropdown")).toBeTruthy();
  });

  it("renders an empty state if no items are passed", () => {
    const { getByTestId } = render(
      <Typeahead
        items={[]}
        menuEmptyState={<div data-cy="emptyState">Empty</div>}
        textField={
          <TextInput
            id="standard.input"
            inputLabel="Standard"
            placeholder="Placeholder"
          />
        }
      />
    );

    getByTestId("textInput-input").click();

    expect(getByTestId("emptyState")).toBeTruthy();
  });

  it("does not render an empty state if items are passed", () => {
    const { getByTestId, queryByTestId } = render(
      <Typeahead
        items={items}
        menuEmptyState={<div data-cy="emptyState">Empty</div>}
        textField={
          <TextInput
            id="standard.input"
            inputLabel="Standard"
            placeholder="Placeholder"
          />
        }
      />
    );

    getByTestId("textInput-input").click();

    expect(queryByTestId("emptyState")).toBeFalsy();
  });

  it("renders whatever text input field that is passed", () => {
    const { getByTestId } = render(
      <Typeahead items={items} textField={<input data-cy="randomInput" />} />
    );

    expect(getByTestId("randomInput")).toBeTruthy();
  });

  it("calls onSelect prop with the selected values", () => {
    const onSelectFn = jest.fn();
    const { getByTestId } = render(
      <Typeahead
        items={items}
        onSelect={onSelectFn}
        textField={
          <TextInput
            id="standard.input"
            inputLabel="Standard"
            placeholder="Placeholder"
          />
        }
      />
    );

    const textInputElement = getByTestId("textInput-input");

    textInputElement.focus();

    expect(onSelectFn).not.toHaveBeenCalled();

    fireEvent.keyDown(textInputElement, {
      key: "ArrowDown"
    });

    fireEvent.keyDown(textInputElement, {
      key: "Enter"
    });

    expect(onSelectFn).toHaveBeenCalledWith([items[0].value], items[0].value);
  });

  it("sets the input value to the selected item's value on select", () => {
    const onSelectFn = jest.fn();
    const { getByTestId } = render(
      <Typeahead
        items={items}
        onSelect={onSelectFn}
        textField={
          <TextInput
            id="standard.input"
            inputLabel="Standard"
            placeholder="Placeholder"
          />
        }
      />
    );

    const textInputElement = getByTestId("textInput-input");

    expect(textInputElement).toHaveValue("");

    textInputElement.focus();

    expect(onSelectFn).not.toHaveBeenCalled();

    fireEvent.keyDown(textInputElement, {
      key: "ArrowDown"
    });

    fireEvent.keyDown(textInputElement, {
      key: "Enter"
    });

    expect(textInputElement).toHaveValue(items[0].value);
  });

  it("skips disabled option on arrow down and select", () => {
    const onSelectFn = jest.fn();
    const itemsWithDisabledOption = [
      { label: "K8sphere", value: "K8sphere", disabled: true },
      ...items
    ];
    const { getByTestId } = render(
      <Typeahead
        items={itemsWithDisabledOption}
        onSelect={onSelectFn}
        textField={
          <TextInput
            id="standard.input"
            inputLabel="Standard"
            placeholder="Placeholder"
          />
        }
      />
    );

    const textInputElement = getByTestId("textInput-input");

    expect(textInputElement).toHaveValue("");

    textInputElement.focus();

    expect(onSelectFn).not.toHaveBeenCalled();

    fireEvent.keyDown(textInputElement, {
      key: "ArrowDown"
    });

    fireEvent.keyDown(textInputElement, {
      key: "Enter"
    });

    // skips over index 0 because it's disabled
    expect(textInputElement).toHaveValue(itemsWithDisabledOption[1].value);
  });

  it("does not hide the dropdown when selecting an item if multiSelect is true", () => {
    const onSelectFn = jest.fn();
    const { getByTestId, queryByTestId } = render(
      <Typeahead
        multiSelect={true}
        items={items}
        onSelect={onSelectFn}
        textField={
          <TextInput
            id="standard.input"
            inputLabel="Standard"
            placeholder="Placeholder"
          />
        }
      />
    );

    const textInputElement = getByTestId("textInput-input");

    expect(queryByTestId("typeahead-dropdown")).toBeNull();

    textInputElement.focus();

    expect(onSelectFn).not.toHaveBeenCalled();

    fireEvent.keyDown(textInputElement, {
      key: "ArrowDown"
    });

    fireEvent.keyDown(textInputElement, {
      key: "Enter"
    });

    expect(queryByTestId("typeahead-dropdown")).toBeTruthy();
  });

  it("hides the dropdown when selecting an item if keepOpenOnSelect is false", () => {
    const onSelectFn = jest.fn();
    const { getByTestId, queryByTestId } = render(
      <Typeahead
        multiSelect={true}
        keepOpenOnSelect={false}
        items={items}
        onSelect={onSelectFn}
        textField={
          <TextInput
            id="standard.input"
            inputLabel="Standard"
            placeholder="Placeholder"
          />
        }
      />
    );

    const textInputElement = getByTestId("textInput-input");

    expect(queryByTestId("typeahead-dropdown")).toBeNull();

    textInputElement.focus();

    expect(onSelectFn).not.toHaveBeenCalled();

    fireEvent.keyDown(textInputElement, {
      key: "ArrowDown"
    });

    fireEvent.keyDown(textInputElement, {
      key: "Enter"
    });

    expect(queryByTestId("typeahead-dropdown")).toBeNull();
  });

  it("does not set the input value if multiSelect is true", () => {
    const onSelectFn = jest.fn();
    const { getByTestId } = render(
      <Typeahead
        multiSelect={true}
        items={items}
        onSelect={onSelectFn}
        textField={
          <TextInput
            id="standard.input"
            inputLabel="Standard"
            placeholder="Placeholder"
          />
        }
      />
    );

    const textInputElement = getByTestId("textInput-input");

    expect(textInputElement).toHaveValue("");

    textInputElement.focus();

    expect(onSelectFn).not.toHaveBeenCalled();

    fireEvent.keyDown(textInputElement, {
      key: "ArrowDown"
    });

    fireEvent.keyDown(textInputElement, {
      key: "Enter"
    });

    expect(textInputElement).toHaveValue("");
  });

  it("does not set the input value if resetInputOnSelect is true", () => {
    const onSelectFn = jest.fn();
    const { getByTestId } = render(
      <Typeahead
        resetInputOnSelect={true}
        items={items}
        onSelect={onSelectFn}
        textField={
          <TextInput
            id="standard.input"
            inputLabel="Standard"
            placeholder="Placeholder"
          />
        }
      />
    );

    const textInputElement = getByTestId("textInput-input");

    expect(textInputElement).toHaveValue("");

    textInputElement.focus();

    expect(onSelectFn).not.toHaveBeenCalled();

    fireEvent.keyDown(textInputElement, {
      key: "ArrowDown"
    });

    fireEvent.keyDown(textInputElement, {
      key: "Enter"
    });

    expect(textInputElement).toHaveValue("");
  });

  it("calls the input's onClick prop", () => {
    const onClickFn = jest.fn();
    const { getByTestId } = render(
      <Typeahead
        items={items}
        textField={
          <TextInput
            id="standard.input"
            inputLabel="Standard"
            placeholder="Placeholder"
            onClick={onClickFn}
          />
        }
      />
    );

    const textInputElement = getByTestId("textInput-input");

    expect(textInputElement).toHaveValue("");

    expect(onClickFn).not.toHaveBeenCalled();

    textInputElement.click();

    expect(onClickFn).toHaveBeenCalled();
  });

  it("calls the input's onFocus prop", () => {
    const onFocusFn = jest.fn();
    const { getByTestId } = render(
      <Typeahead
        items={items}
        textField={
          <TextInput
            id="standard.input"
            inputLabel="Standard"
            placeholder="Placeholder"
            onFocus={onFocusFn}
          />
        }
      />
    );

    const textInputElement = getByTestId("textInput-input");

    expect(textInputElement).toHaveValue("");
    expect(onFocusFn).not.toHaveBeenCalled();

    textInputElement.addEventListener("focus", onFocusFn);

    textInputElement.focus();

    expect(onFocusFn).toHaveBeenCalled();
  });
});
