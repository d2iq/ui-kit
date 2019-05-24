import React from "react";
import { mount } from "enzyme";
import * as emotion from "emotion";
import { createSerializer } from "jest-emotion";
import { Confirm } from "../Confirm";

expect.addSnapshotSerializer(createSerializer(emotion));

describe("Confirm", () => {
  describe("enabled", () => {
    it("calls the left button callback", () => {
      const leftButtonCallback = jest.fn();
      const component = mount(
        <Confirm
          leftButtonCallback={leftButtonCallback}
          leftButtonClassName="left-button"
        >
          content
        </Confirm>
      );

      const button = component.find(".left-button");
      button.simulate("click");
      expect(leftButtonCallback).toHaveBeenCalled();
    });

    it("calls the right button callback", () => {
      const rightButtonCallback = jest.fn();
      const component = mount(
        <Confirm
          rightButtonCallback={rightButtonCallback}
          rightButtonClassName="right-button"
        >
          content
        </Confirm>
      );

      const button = component.find(".right-button");
      button.simulate("click");
      expect(rightButtonCallback).toHaveBeenCalled();
    });
  });

  describe("disabled", () => {
    it("does call the left button callback", () => {
      const closeCallback = jest.fn();
      const component = mount(
        <Confirm
          open={true}
          disabled={true}
          leftButtonCallback={closeCallback}
          leftButtonClassName="left-button"
        >
          <div className="container-pod">
            Would you like to perform this action?
          </div>
        </Confirm>
      );

      const button = component.find(".left-button");
      button.simulate("click");
      expect(closeCallback).toHaveBeenCalled();
    });

    it("does not call the right button callback", () => {
      const confirmCallback = jest.fn();
      const component = mount(
        <Confirm
          open={true}
          disabled={true}
          rightButtonCallback={confirmCallback}
          rightButtonClassName="right-button"
        >
          <div className="container-pod">
            Would you like to perform this action?
          </div>
        </Confirm>
      );

      const button = component.find(".right-button");
      button.simulate("click");
      expect(confirmCallback).not.toHaveBeenCalled();
    });

    it("sets the disabled class on buttons", () => {
      const confirmCallback = jest.fn();
      const closeCallback = jest.fn();
      const component = mount(
        <Confirm
          open={true}
          disabled={true}
          rightButtonCallback={confirmCallback}
          rightButtonClassName="right-button"
          leftButtonCallback={closeCallback}
          leftButtonClassName="left-button"
        >
          <div className="container-pod">
            Would you like to perform this action?
          </div>
        </Confirm>
      );

      const rightButton = component.find(".right-button");
      expect(rightButton.hasClass("disabled")).toBe(true);
    });
  });
});
