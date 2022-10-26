import * as React from "react";
import { render, screen } from "@testing-library/react";
import { createSerializer } from "@emotion/jest";
import { Toast } from "../";
import userEvent from "@testing-library/user-event";

expect.addSnapshotSerializer(createSerializer());

describe("Toast", () => {
  it("renders default", () => {
    const { asFragment } = render(<Toast title="I Am Toast" key={0} id={0} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders with description", () => {
    const { asFragment } = render(
      <Toast title="I Am Toast" description="Description" key={0} id={0} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders with actions", () => {
    const { asFragment } = render(
      <Toast
        primaryAction={<button>primaryAction</button>}
        secondaryAction={<button>secondaryAction</button>}
        title="I Am Toast"
        key={0}
        id={0}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("calls dismissToast when the dismiss button is clicked", async () => {
    const user = userEvent.setup();

    const dismissToastSpy = jest.fn();
    render(
      <Toast dismissToast={dismissToastSpy} title="I Am Toast" key={0} id={0} />
    );
    expect(dismissToastSpy).not.toHaveBeenCalled();

    const dismissBtn = screen.getByRole("button");
    await user.click(dismissBtn);
    expect(dismissToastSpy).toHaveBeenCalled();
  });
});
