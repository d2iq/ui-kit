import React from "react";

import ButtonBase, { ButtonAppearances } from "../components/ButtonBase";
import { SystemIcons } from "../../icons/dist/system-icons-enum";
import { createSerializer } from "@emotion/jest";
import userEvent from "@testing-library/user-event";
import { render, screen, fireEvent } from "@testing-library/react";

expect.addSnapshotSerializer(createSerializer());

describe("ButtonBase", () => {
  it("renders all appearances with props", () => {
    Object.keys(ButtonAppearances).forEach(appearance => {
      const { asFragment } = render(
        <ButtonBase
          appearance={ButtonAppearances[appearance]}
          isFullWidth={true}
          type="submit"
          ariaHaspopup={true}
          disabled={true}
          isProcessing={true}
          iconStart={SystemIcons.Check}
          iconEnd={SystemIcons.Check}
        >
          Button
        </ButtonBase>
      );
      expect(asFragment()).toMatchSnapshot();
    });
  });
  it("calls onClick prop when clicked", async () => {
    const someFn = jest.fn();
    const user = userEvent.setup();

    const { getByText } = render(
      <ButtonBase appearance={ButtonAppearances.Standard} onClick={someFn}>
        Button
      </ButtonBase>
    );

    expect(someFn).not.toHaveBeenCalled();
    await user.click(getByText("Button"));
    expect(someFn).toHaveBeenCalled();
  });

  it("does not call onClick prop when disabled", async () => {
    const anotherFn = jest.fn();

    render(
      <ButtonBase
        appearance={ButtonAppearances.Standard}
        disabled={true}
        onClick={anotherFn}
        data-cy="button"
      >
        Button
      </ButtonBase>
    );
    expect(anotherFn).not.toHaveBeenCalled();
    const element = screen.getByTestId("button");
    fireEvent.click(element);
    expect(anotherFn).not.toHaveBeenCalled();
  });
});
