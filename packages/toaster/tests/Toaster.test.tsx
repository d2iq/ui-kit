import * as React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { Toaster, Toast } from "../";
import { DELAY_TIME } from "../components/Toaster";
import userEvent from "@testing-library/user-event";

describe("Toaster", () => {
  it("displays toast children", () => {
    const title = "I Am Toast";
    render(
      <Toaster>
        <Toast id={0} title={title} key={0} />
      </Toaster>
    );
    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it("clears timers on mouseEnter and sets timers on mouseLeave", async () => {
    const user = userEvent.setup();

    const clearTimeoutsSpy = jest.spyOn(Toaster.prototype, "clearTimeouts");
    const setTimerSpy = jest.spyOn(Toaster.prototype, "setTimer");
    render(
      <Toaster>
        <Toast id={0} title="I Am Toast" key={0} />
      </Toaster>
    );

    expect(clearTimeoutsSpy).not.toHaveBeenCalled();
    expect(setTimerSpy).toHaveBeenCalledTimes(1);

    const toasterList = screen.getByTestId("toaster-list");
    await user.hover(toasterList);

    expect(clearTimeoutsSpy).toHaveBeenCalled();

    await user.unhover(toasterList);

    expect(setTimerSpy).toHaveBeenCalledTimes(2);
  });

  it("dismisses toasts when child is clicked", async () => {
    const user = userEvent.setup();

    const title = "I Am Toast";
    const testToast = [<Toast id={0} title={title} key={0} />];
    render(<Toaster>{testToast}</Toaster>);

    await user.click(screen.getByRole("button"));

    await waitFor(() => {
      expect(screen.queryByText(title)).not.toBeInTheDocument();
    });
  });

  it("calls onDismiss callback when toast is dismissed", async () => {
    const user = userEvent.setup();

    const dismissCallback = jest.fn();
    const testToast = [
      <Toast id={0} title="I Am Toast" key={0} onDismiss={dismissCallback} />
    ];
    render(<Toaster>{testToast}</Toaster>);

    await user.click(screen.getByRole("button"));

    expect(dismissCallback).toHaveBeenCalledTimes(1);
  });

  it("dismisses autodismiss toasts after specified time", async () => {
    jest.useFakeTimers();
    const title = "I Am Toast";
    render(
      <Toaster>
        <Toast id={0} autodismiss title={title} key={0} />
      </Toaster>
    );

    expect(screen.getByText(title)).toBeDefined();

    jest.advanceTimersByTime(DELAY_TIME);

    await waitFor(() => {
      expect(screen.queryByText(title)).not.toBeInTheDocument();
    });
  });

  it("calls onDismiss callback for autodismissed toasts", () => {
    jest.useFakeTimers();
    const dismissCallback = jest.fn();
    const testToast = (
      <Toast
        id={0}
        autodismiss
        title="I Am Toast"
        key={0}
        onDismiss={dismissCallback}
      />
    );
    render(<Toaster>{testToast}</Toaster>);

    expect(dismissCallback).not.toHaveBeenCalled();

    jest.advanceTimersByTime(DELAY_TIME);

    expect(dismissCallback).toHaveBeenCalledTimes(1);
  });

  it("adds new `toast` with new toast received via props", () => {
    const testToastId = "testToastId";
    const { rerender } = render(
      <Toaster>
        <Toast title="I Am Toast" key={1} id={testToastId} />
      </Toaster>
    );

    expect(screen.getByText("I Am Toast")).toBeInTheDocument();
    const newProps = {
      children: [
        <Toast id={testToastId} key={1} title="I Am A Different Toast" />,
        <Toast id={0} key={0} title="I Am A Slightly Different Toast" />
      ]
    };

    rerender(<Toaster>{newProps.children}</Toaster>);

    expect(screen.queryByText("I Am Toast")).not.toBeInTheDocument();
    expect(screen.getByText("I Am A Different Toast")).toBeInTheDocument();
    expect(
      screen.getByText("I Am A Slightly Different Toast")
    ).toBeInTheDocument();
  });
});
