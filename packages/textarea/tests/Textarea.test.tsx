import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createSerializer } from "@emotion/jest";

import { Textarea } from "../";
import { InputAppearance } from "../../shared/types/inputAppearance";

expect.addSnapshotSerializer(createSerializer());

describe("Textarea", () => {
  describe("should render", () => {
    it("all appearances", () => {
      Object.keys(InputAppearance).forEach(appearance => {
        const { asFragment, unmount } = render(
          <Textarea
            id={InputAppearance[appearance]}
            inputLabel={InputAppearance[appearance]}
            appearance={InputAppearance[appearance]}
          />
        );
        expect(asFragment()).toMatchSnapshot();
        unmount();
      });
    });
    it("string inputLabel", () => {
      const { getByText } = render(
        <Textarea id="textarea" inputLabel="Test Input" />
      );
      getByText("Test Input");
    });
    it("node as inputLabel", () => {
      const { getByText } = render(
        <Textarea id="textarea" inputLabel={<span>My Test Node</span>} />
      );
      getByText("My Test Node");
    });
    it("with hidden label if `showInputLabel` is set to false", () => {
      const { queryByText } = render(
        <Textarea
          id="textarea"
          inputLabel="I'm not displayed"
          showInputLabel={false}
        />
      );
      expect(queryByText(`I'm not displayed`)).not.toBeDisabled();
    });
    it("error messages if appearance set to InputAppearance.Error", () => {
      const { getByText } = render(
        <Textarea
          id="textarea"
          inputLabel="Error Message Test"
          appearance={InputAppearance.Error}
          errors={[
            "This is an error message",
            "this is a second error message"
          ]}
        />
      );
      getByText("This is an error message");
      getByText("this is a second error message");
    });
    it("no error messages if appearance set to InputAppearance.Success", () => {
      const { queryByText } = render(
        <Textarea
          id="textarea"
          inputLabel="Error Message Test"
          appearance={InputAppearance.Success}
          errors={["I'm not displayed"]}
        />
      );
      expect(queryByText(`I'm not displayed`)).not.toBeInTheDocument();
    });
  });
  it("sets custom number of rows", () => {
    const rowCount = 5;
    const { getByRole } = render(
      <Textarea id="textarea" inputLabel="Custom rows" rows={rowCount} />
    );
    const textArea = getByRole("textbox") as HTMLTextAreaElement;
    expect(textArea.rows).toEqual(rowCount);
  });
  it("should set <label>'s `for` attribute if `id` is set", () => {
    const testId = "testId";
    const { getByText } = render(
      <Textarea id={testId} inputLabel="Custom rows" />
    );
    const inputLabelEl = getByText("Custom rows") as HTMLLabelElement;
    expect(inputLabelEl.htmlFor).toEqual(testId);
  });
  it("should call onFocus when input gains focus", () => {
    const focusFn = jest.fn();
    const { getByRole } = render(
      <Textarea id="textarea" inputLabel="Focus" onFocus={focusFn} />
    );
    const textAreaEl = getByRole("textbox");

    expect(focusFn).not.toHaveBeenCalled();
    textAreaEl.focus();
    expect(focusFn).toHaveBeenCalled();
  });
  it("should call onBlur when input loses focus", async () => {
    const blurFn = jest.fn();
    const { getByRole } = render(
      <Textarea id="textarea" inputLabel="Blur" onBlur={blurFn} />
    );
    const textAreaEl = getByRole("textbox");

    expect(blurFn).not.toHaveBeenCalled();
    textAreaEl.focus();
    expect(blurFn).not.toHaveBeenCalled();
    await userEvent.tab();
    expect(blurFn).toHaveBeenCalled();
  });
  it("should call onChange when input changes", async () => {
    const changeFn = jest.fn();
    const { getByRole } = render(
      <Textarea id="textarea" inputLabel="Change" onChange={changeFn} />
    );
    const textAreaEl = getByRole("textbox");
    const inputText = "hello";

    expect(changeFn).not.toHaveBeenCalled();
    await userEvent.type(textAreaEl, inputText);
    expect(changeFn).toHaveBeenCalledTimes(inputText.length);
    const lastOnChangeFunctionCallArgs =
      changeFn.mock.calls[changeFn.mock.calls.length - 1];

    const lastOnChangeFunctionValue =
      lastOnChangeFunctionCallArgs[0].target.value;
    expect(lastOnChangeFunctionValue).toBe(inputText);
  });
  it("should delegate onChange from parent form", async () => {
    const changeFn = jest.fn();
    const { getByRole } = render(
      <form onChange={changeFn}>
        <Textarea id="textarea" inputLabel="Change" />
      </form>
    );

    const textAreaEl = getByRole("textbox");
    const inputText = "hello";

    expect(changeFn).not.toHaveBeenCalled();
    await userEvent.type(textAreaEl, inputText);
    expect(changeFn).toHaveBeenCalledTimes(inputText.length);
    const lastOnChangeFunctionCallArgs =
      changeFn.mock.calls[changeFn.mock.calls.length - 1];

    const lastOnChangeFunctionValue =
      lastOnChangeFunctionCallArgs[0].target.value;
    expect(lastOnChangeFunctionValue).toBe(inputText);
  });
});
