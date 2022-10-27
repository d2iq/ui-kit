import React from "react";
import { createSerializer } from "@emotion/jest";
import { render, fireEvent } from "@testing-library/react";

import TextInputWithIcon from "../components/TextInputWithIcon";
import { InputAppearance } from "../../shared/types/inputAppearance";
import { SystemIcons } from "../../icons/dist/system-icons-enum";

expect.addSnapshotSerializer(createSerializer());

describe("TextInputWithIcon", () => {
  it("should render all appearances with iconStart", () => {
    Object.keys(InputAppearance).forEach(appearance => {
      const { asFragment } = render(
        <TextInputWithIcon
          id={`test.icon_start_input.${InputAppearance[appearance]}`}
          inputLabel={InputAppearance[appearance]}
          appearance={InputAppearance[appearance]}
          iconStart={SystemIcons.TriangleDown}
        />
      );
      expect(asFragment()).toMatchSnapshot();
    });
  });

  it("should render all appearances with iconEnd", () => {
    Object.keys(InputAppearance).forEach(appearance => {
      const { asFragment } = render(
        <TextInputWithIcon
          id={`test.icon_end_input.${InputAppearance[appearance]}`}
          inputLabel={InputAppearance[appearance]}
          appearance={InputAppearance[appearance]}
          iconEnd={SystemIcons.Close}
        />
      );
      expect(asFragment()).toMatchSnapshot();
    });
  });

  it("should render all appearances with twoIcons", () => {
    Object.keys(InputAppearance).forEach(appearance => {
      const { asFragment } = render(
        <TextInputWithIcon
          id={`test.two_icon_input.${InputAppearance[appearance]}`}
          inputLabel={InputAppearance[appearance]}
          appearance={InputAppearance[appearance]}
          iconStart={SystemIcons.TriangleDown}
          iconEnd={SystemIcons.Close}
        />
      );
      expect(asFragment()).toMatchSnapshot();
    });
  });

  it("should call onFocus when input gains focus", () => {
    const focusFn = jest.fn();
    const { getByTestId } = render(
      <TextInputWithIcon
        id="test.input"
        inputLabel="Test Focus"
        onFocus={focusFn}
        iconStart={SystemIcons.TriangleDown}
      />
    );
    expect(focusFn).not.toHaveBeenCalled();
    fireEvent.focus(getByTestId("textInput-input"));
    expect(focusFn).toHaveBeenCalled();
  });

  it("should call onBlur when input loses focus", () => {
    const blurFn = jest.fn();
    const { getByTestId } = render(
      <TextInputWithIcon
        id="test.input"
        inputLabel="Test Blur"
        onBlur={blurFn}
        iconStart={SystemIcons.TriangleDown}
      />
    );
    const textInput = getByTestId("textInput-input");

    expect(blurFn).not.toHaveBeenCalled();
    textInput.focus();
    expect(blurFn).not.toHaveBeenCalled();
    textInput.blur();
    expect(blurFn).toHaveBeenCalled();
  });
});
