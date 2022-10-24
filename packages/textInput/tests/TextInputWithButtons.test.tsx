import React from "react";
import { createSerializer } from "@emotion/jest";
import { render } from "@testing-library/react";

import TextInputWithButtons from "../components/TextInputWithButtons";
import { SystemIcons } from "../../icons/dist/system-icons-enum";
import { TextInputButton } from "../../textInputButton";

expect.addSnapshotSerializer(createSerializer());

describe("TextInputWithIcon", () => {
  it("renders", () => {
    const { asFragment, getByText, getByRole, getByTestId } = render(
      <TextInputWithButtons
        id="renders"
        inputLabel="Label"
        buttons={[
          <TextInputButton
            key={0}
            shape={SystemIcons.Close}
            data-cy="closeButton"
          />,
          <TextInputButton
            key={1}
            shape={SystemIcons.Funnel}
            data-cy="funnelButton"
          />
        ]}
      />
    );
    getByText("Label");
    getByRole("textbox");
    getByTestId("closeButton");
    getByTestId("funnelButton");
    expect(asFragment()).toMatchSnapshot();
  });
  it("renders with colored button", () => {
    const { asFragment } = render(
      <TextInputWithButtons
        id="renders.coloredBtn"
        inputLabel="Label"
        buttons={[
          <TextInputButton key={0} shape={SystemIcons.Close} color="red" />
        ]}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("calls function passed to button", () => {
    const buttonFn = jest.fn();
    const { getByTestId } = render(
      <TextInputWithButtons
        id="callsFn"
        inputLabel="Label"
        buttons={[
          <TextInputButton
            key={0}
            shape={SystemIcons.Close}
            onClick={buttonFn}
            data-cy="closeButton"
          />
        ]}
      />
    );

    expect(buttonFn).not.toHaveBeenCalled();
    const closeBtnEl = getByTestId("closeButton");
    closeBtnEl.click();
    expect(buttonFn).toHaveBeenCalled();
  });
});
