import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createSerializer } from "@emotion/jest";
import { css, cx } from "@emotion/css";

import TextInput from "../components/TextInput";
import { InputAppearance } from "../../shared/types/inputAppearance";

expect.addSnapshotSerializer(createSerializer());

describe("TextInput", () => {
  it("should render all appearances with props", () => {
    Object.keys(InputAppearance).forEach(appearance => {
      const { asFragment } = render(
        <TextInput
          id={`test.input.${InputAppearance[appearance]}`}
          inputLabel={InputAppearance[appearance]}
          appearance={InputAppearance[appearance]}
        />
      );
      expect(asFragment()).toMatchSnapshot();
    });
  });

  it("should render all appearances focus", () => {
    Object.keys(InputAppearance).forEach(appearance => {
      const { getByRole, asFragment, unmount } = render(
        <TextInput id="test.input" appearance={InputAppearance[appearance]} />
      );
      const inputEl = getByRole("textbox");
      inputEl.focus();
      expect(asFragment()).toMatchSnapshot();
      unmount();
    });
  });

  it("should render string inputLabel", () => {
    const { getByText } = render(
      <TextInput id="test.input" inputLabel="Test Input" />
    );
    getByText("Test Input");
  });

  it("should render node as inputLabel", () => {
    const { getByText } = render(
      <TextInput id="test.input" inputLabel={<span>My Test Node</span>} />
    );
    getByText("My Test Node");
  });

  it("should id attribute to input element", () => {
    const inputId = "test.input.0";
    const { getByRole } = render(<TextInput id={inputId} />);
    const inputEl = getByRole("textbox") as HTMLInputElement;
    expect(inputEl.id).toEqual(inputId);
  });

  it("should set label `for` attribute if input id set", () => {
    const inputId = "test.input.0";
    const { getByText } = render(
      <TextInput id={inputId} inputLabel="Test Input" />
    );
    const labelEl = getByText("Test Input") as HTMLLabelElement;
    expect(labelEl.htmlFor).toEqual(inputId);
  });

  it("should set tabIndex on input element", async () => {
    const { getByRole } = render(<TextInput id="test.input" tabIndex={-2} />);

    const inputEl = getByRole("textbox");
    await userEvent.tab();
    expect(inputEl).not.toHaveFocus();
  });

  it("should call onFocus when input gains focus", () => {
    const focusFn = jest.fn();
    const { getByRole } = render(
      <TextInput id="test.input" onFocus={focusFn} />
    );
    const inputEl = getByRole("textbox");

    expect(focusFn).not.toHaveBeenCalled();
    inputEl.focus();
    expect(focusFn).toHaveBeenCalled();
  });

  it("should call onBlur when input loses focus", async () => {
    const blurFn = jest.fn();
    const { getByRole } = render(<TextInput id="test.input" onBlur={blurFn} />);

    const inputEl = getByRole("textbox");
    expect(blurFn).not.toHaveBeenCalled();
    inputEl.focus();
    expect(blurFn).not.toHaveBeenCalled();
    await userEvent.tab();
    expect(blurFn).toHaveBeenCalled();
  });

  it("should call onChange when input changes", async () => {
    const changeFn = jest.fn();
    const { getByRole } = render(
      <TextInput id="test.input" onChange={changeFn} />
    );

    const inputEl = getByRole("textbox");
    expect(changeFn).not.toHaveBeenCalled();

    const userInputText = "hello";
    await userEvent.type(inputEl, userInputText);

    expect(changeFn).toHaveBeenCalledTimes(userInputText.length);
  });

  it("should pass className to container div", () => {
    const widthTest = css`
      width: 200px;
    `;
    const { getByTestId } = render(
      <TextInput id="1" className={cx(widthTest)} />
    );

    const containerEl = getByTestId("textInput textInput.standard");
    expect(containerEl.className).toEqual(widthTest);
  });

  it("should hide label if `showInputLabel` set to false", () => {
    render(
      <TextInput
        id="input.with.hidden.label"
        inputLabel="I'm not displayed"
        showInputLabel={false}
      />
    );
    expect(screen.queryByText(`I'm not displayed`)).not.toBeVisible();
  });

  it("should display validation message if set & appearance == Error", () => {
    const { getByText } = render(
      <TextInput
        id="input.error.with.message"
        inputLabel="Error Message Test"
        appearance={InputAppearance.Error}
        errors={["This is an error message", "this is a second error message"]}
      />
    );

    getByText("This is an error message");
    getByText("this is a second error message");
  });

  it("should not display validation message if set & appearance == Success", () => {
    const { queryByText } = render(
      <TextInput
        id="input.success.without.message"
        inputLabel="No Error Message Test"
        appearance={InputAppearance.Success}
        errors={["This is an error message"]}
      />
    );
    expect(queryByText("This is an error message")).not.toBeInTheDocument();
  });

  it("should display icon with tooltip if tooltipText is set", async () => {
    const { getByTestId, getByText } = render(
      <TextInput
        id="input.with.tooltip"
        inputLabel="Tooltip Message Test"
        tooltipContent="Example Tooltip"
      />
    );

    const questionIcon = getByTestId("icon");
    await userEvent.hover(questionIcon);

    getByText("Example Tooltip");
  });

  it("should generate an ID if one is not passed", () => {
    const { getByRole } = render(<TextInput inputLabel="Test Input" />);
    expect((getByRole("textbox") as HTMLInputElement).id).toBeDefined();
  });
});
