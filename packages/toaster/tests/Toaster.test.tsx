import * as React from "react";
import {
  act,
  fireEvent,
  render,
  waitFor,
  waitForElementToBeRemoved
} from "@testing-library/react";
import { Toaster, Toast } from "../";
import { DEFAULT_DELAY_TIME } from "../components/Toaster";
import userEvent from "@testing-library/user-event";

describe("Toaster", () => {
  afterEach(() => {
    jest.useRealTimers();
  });

  it("displays toast children", () => {
    const title = "I Am Toast";
    const { getByText } = render(
      <Toaster>
        <Toast id={0} title={title} key={0} />
      </Toaster>
    );
    expect(getByText(title)).toBeInTheDocument();
  });

  it("dismisses toasts when child is clicked", async () => {
    const user = userEvent.setup();

    const title = "I Am Toast";
    const testToast = [<Toast id={0} title={title} key={0} />];
    const { getByRole, queryByText } = render(<Toaster>{testToast}</Toaster>);

    await user.click(getByRole("button"));

    await waitFor(() => {
      expect(queryByText(title)).not.toBeInTheDocument();
    });
  });

  it("calls onDismiss callback when toast is dismissed", async () => {
    const user = userEvent.setup();

    const dismissCallback = jest.fn();
    const testToast = [
      <Toast id={0} title="I Am Toast" key={0} onDismiss={dismissCallback} />
    ];
    const { getByRole } = render(<Toaster>{testToast}</Toaster>);

    await user.click(getByRole("button"));

    expect(dismissCallback).toHaveBeenCalledTimes(1);
  });

  it("dismisses autodismiss toasts after a default time", async () => {
    jest.useFakeTimers();
    const title = "I Am Toast";
    const { getByText, queryByText } = render(
      <Toaster>
        <Toast id={0} autodismiss title={title} key={0} />
      </Toaster>
    );

    expect(getByText(title)).toBeDefined();

    await waitFor(() => {
      expect(queryByText(title)).toBeInTheDocument();
    });

    act(() => {
      jest.advanceTimersByTime(DEFAULT_DELAY_TIME);
    });

    await waitFor(() => {
      expect(queryByText(title)).not.toBeInTheDocument();
    });
  });

  it("dismisses autodismiss toasts after specified time", async () => {
    jest.useFakeTimers();
    const title = "I Am Toast";
    const { getByText, queryByText } = render(
      <Toaster dismissTime={8000}>
        <Toast id={0} autodismiss title={title} key={0} />
      </Toaster>
    );

    expect(getByText(title)).toBeDefined();

    await waitFor(() => {
      expect(queryByText(title)).toBeInTheDocument();
    });

    act(() => {
      jest.advanceTimersByTime(8000);
    });

    await waitFor(() => {
      expect(queryByText(title)).not.toBeInTheDocument();
    });
  });

  it("pauses autodismiss if user hovers on item", async () => {
    jest.useFakeTimers();
    const title = "I Am Toast";
    const { getByTestId, queryByText } = render(
      <Toaster>
        <Toast id={0} autodismiss title={title} key={0} />
      </Toaster>
    );

    const toasterList = getByTestId("toaster-list");
    // for some reason using RTL user event and jest timers didn't work
    fireEvent.mouseEnter(toasterList);

    act(() => {
      jest.advanceTimersByTime(DEFAULT_DELAY_TIME);
    });

    // is never removed because timeout was cleared
    await expect(
      waitForElementToBeRemoved(() => queryByText(title))
    ).rejects.toThrow();

    fireEvent.mouseLeave(toasterList);

    act(() => {
      jest.advanceTimersByTime(DEFAULT_DELAY_TIME);
    });

    await waitFor(() => {
      expect(queryByText(title)).not.toBeInTheDocument();
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

    act(() => {
      jest.advanceTimersByTime(DEFAULT_DELAY_TIME);
    });

    expect(dismissCallback).toHaveBeenCalledTimes(1);
  });

  it("adds new `toast` with new toast received via props", () => {
    const testToastId = "testToastId";
    const { rerender, getByText, queryByText } = render(
      <Toaster>
        <Toast title="I Am Toast" key={1} id={testToastId} />
      </Toaster>
    );

    expect(getByText("I Am Toast")).toBeInTheDocument();
    const newProps = {
      children: [
        <Toast id={testToastId} key={1} title="I Am A Different Toast" />,
        <Toast id={0} key={0} title="I Am A Slightly Different Toast" />
      ]
    };

    rerender(<Toaster>{newProps.children}</Toaster>);

    expect(queryByText("I Am Toast")).not.toBeInTheDocument();
    expect(getByText("I Am A Different Toast")).toBeInTheDocument();
    expect(getByText("I Am A Slightly Different Toast")).toBeInTheDocument();
  });
});
