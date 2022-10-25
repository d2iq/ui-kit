import React from "react";
import Clickable from "../components/clickable";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Clickable", () => {
  it("has role attribute", () => {
    const { getByRole } = render(
      <Clickable action={jest.fn()}>
        <span>onClick</span>
      </Clickable>
    );

    getByRole("button");
  });
  it("has onClick function", async () => {
    const user = userEvent.setup();

    const action = jest.fn();
    const { getByRole } = render(
      <Clickable action={action}>
        <span>onClick</span>
      </Clickable>
    );

    expect(action).not.toHaveBeenCalled();

    const buttonElement = getByRole("button");

    await user.click(buttonElement);
    expect(action).toHaveBeenCalled();
  });

  it("has onKeyPress function and reacts on space", async () => {
    const action = jest.fn();
    const { getByRole } = render(
      <Clickable action={action}>
        <span>onKeyPress</span>
      </Clickable>
    );

    const buttonElement = getByRole("button");

    buttonElement.focus();
    await userEvent.keyboard("[Space]");
    expect(action).toHaveBeenCalled();
  });

  it("has onKeyPress function and reacts on Enter", async () => {
    const action = jest.fn();
    const { getByRole } = render(
      <Clickable action={action}>
        <span>onKeyPress</span>
      </Clickable>
    );

    const buttonElement = getByRole("button");

    buttonElement.focus();
    await userEvent.keyboard("[Enter]");
    expect(action).toHaveBeenCalled();
  });
  it("does not react on e keypress", async () => {
    const action = jest.fn();
    const { getByRole } = render(
      <Clickable action={action}>
        <span>onKeyPress</span>
      </Clickable>
    );

    const buttonElement = getByRole("button");

    buttonElement.focus();
    await userEvent.keyboard("[KeyE]");
    expect(action).not.toHaveBeenCalled();
  });
  describe("tabIndex", () => {
    it("default value", async () => {
      const action = jest.fn();
      const { getByRole } = render(
        <Clickable action={action}>
          <span>onKeyPress</span>
        </Clickable>
      );

      const spanElement = getByRole("button");

      await userEvent.tab();
      expect(spanElement).not.toHaveFocus();
    });

    it("takes 0 as a value", async () => {
      const action = jest.fn();
      const { getByRole } = render(
        <Clickable action={action} tabIndex="0">
          <span>default tabIndex</span>
        </Clickable>
      );

      const spanElement = getByRole("button");

      await userEvent.tab();
      expect(spanElement).toHaveFocus();
    });
  });
});
