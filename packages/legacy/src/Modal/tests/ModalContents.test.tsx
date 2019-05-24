import React from "react";
import { mount } from "enzyme";
import * as emotion from "emotion";
import { createSerializer } from "jest-emotion";
import toJson from "enzyme-to-json";
import ModalContents from "../ModalContents";

expect.addSnapshotSerializer(createSerializer(emotion));

describe("ModalContents", () => {
  it("renders", () => {
    const onClose = jest.fn();
    const component = mount(
      <ModalContents open={true} onClose={onClose}>
        content
      </ModalContents>
    );
    expect(toJson(component)).toMatchSnapshot();
  });

  it("renders with a footer", () => {
    const onClose = jest.fn();
    const component = mount(
      <ModalContents open={true} onClose={onClose} showFooter={true}>
        content
      </ModalContents>
    );
    expect(toJson(component)).toMatchSnapshot();
  });

  it("renders with a close button", () => {
    const onClose = jest.fn();
    const component = mount(
      <ModalContents
        open={true}
        onClose={onClose}
        closeButton={<button>Close</button>}
      >
        content
      </ModalContents>
    );
    expect(toJson(component)).toMatchSnapshot();
  });

  describe("#onClose", () => {
    it("should call onClose when the modal closes", () => {
      const onClose = jest.fn();
      const component = mount(
        <ModalContents open={true} onClose={onClose}>
          content
        </ModalContents>
      );

      expect(onClose).not.toHaveBeenCalled();
      component.find(".modal-backdrop").simulate("click");
      expect(onClose).toHaveBeenCalled();
    });

    it("does not call onClose if closeByBackdropClick is false", () => {
      const onClose = jest.fn();
      const component = mount(
        <ModalContents
          open={true}
          onClose={onClose}
          closeByBackdropClick={false}
        >
          content
        </ModalContents>
      );

      component.find(".modal-backdrop").simulate("click");
      expect(onClose).not.toHaveBeenCalled();
    });
  });

  describe("#handleWindowResize", () => {
    beforeEach(() => {
      jest
        .spyOn(window, "requestAnimationFrame")
        .mockImplementation(cb => cb());
    });

    it("should store the last viewport height on the instance", () => {
      const onClose = jest.fn();
      const component = mount(
        <ModalContents open={true} onClose={onClose}>
          content
        </ModalContents>
      );

      const instance = component.instance() as ModalContents;
      Object.defineProperty(window, "innerHeight", {
        writable: true,
        configurable: true,
        value: 500
      });
      window.dispatchEvent(new Event("resize"));

      expect(instance.lastViewportHeight).toEqual(500);
    });

    it("should reset the height stored in state to null when the viewport height is shrinking", () => {
      const onClose = jest.fn();
      const component = mount(
        <ModalContents open={true} onClose={onClose}>
          content
        </ModalContents>
      );
      const instance = component.instance() as ModalContents;

      instance.setState({ height: 300 });

      expect(component.state("height")).toBe(300);

      Object.defineProperty(window, "innerHeight", {
        writable: true,
        configurable: true,
        value: 500
      });
      window.dispatchEvent(new Event("resize"));

      Object.defineProperty(window, "innerHeight", {
        writable: true,
        configurable: true,
        value: 400
      });
      window.dispatchEvent(new Event("resize"));

      expect(component.state("height")).toBe(null);
    });
  });

  describe("overflow hidden on body", () => {
    it("should toggle no-overflow on body when updated to open", () => {
      const onClose = jest.fn();
      const component = mount(
        <ModalContents open={true} onClose={onClose}>
          content
        </ModalContents>
      );
      const classToggleSpy = spyOn(document.body.classList, "toggle");
      component.setProps({ open: false });

      expect(classToggleSpy).toHaveBeenCalledWith("no-overflow");
    });

    it("should toggle no-overflow on body when updated to close", () => {
      const onClose = jest.fn();
      const component = mount(
        <ModalContents open={false} onClose={onClose}>
          content
        </ModalContents>
      );
      const classToggleSpy = spyOn(document.body.classList, "toggle");
      component.setProps({ open: true });

      expect(classToggleSpy).toHaveBeenCalledWith("no-overflow");
    });

    it("should not change class on body when mounted close", () => {
      const onClose = jest.fn();
      const component = mount(
        <ModalContents open={false} onClose={onClose}>
          content
        </ModalContents>
      );
      const classAddSpy = spyOn(document.body.classList, "add");
      component.mount();

      expect(classAddSpy).not.toHaveBeenCalledWith("no-overflow");
    });

    it("should remove no-overflow on body when unmounted", () => {
      const onClose = jest.fn();
      const component = mount(
        <ModalContents open={true} onClose={onClose}>
          content
        </ModalContents>
      );
      const classRemoveSpy = spyOn(document.body.classList, "remove");
      component.unmount();

      expect(classRemoveSpy).toHaveBeenCalledWith("no-overflow");
    });
  });
});
