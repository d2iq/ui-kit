import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { createSerializer } from "@emotion/jest";
import userEvent from "@testing-library/user-event";

import ModalBase from "../components/ModalBase";
import DialogModalWithFooter from "../components/DialogModalWithFooter";
import FullscreenModal from "../components/FullscreenModal";
import { PrimaryButton } from "../../button";

expect.addSnapshotSerializer(createSerializer());

describe("Modal", () => {
  describe("ModalBase", () => {
    it("renders ModalBase", () => {
      const action = jest.fn();
      const { asFragment } = render(
        <ModalBase isOpen={true} onClose={action}>
          <div tabIndex={0}>I am modal content</div>
        </ModalBase>
      );
      expect(asFragment()).toMatchSnapshot();
    });
    it("calls this.props.onClose when keying 'esc'", async () => {
      const action = jest.fn();
      const { getByRole } = render(
        <ModalBase isOpen={true} onClose={action}>
          <div tabIndex={0}>I am modal content</div>
        </ModalBase>
      );
      const dialog = getByRole("dialog");

      expect(action).not.toHaveBeenCalled();
      await userEvent.type(dialog, "[Escape]");
      expect(action).toHaveBeenCalled();
    });
    it("calls this.props.onClose when clicking dark overlay", () => {
      const action = jest.fn();
      const { getByRole } = render(
        <ModalBase isOpen={true} onClose={action}>
          <div tabIndex={0}>I am modal content</div>
        </ModalBase>
      );
      const closeButton = getByRole("button");

      expect(action).not.toHaveBeenCalled();
      fireEvent.click(closeButton);
      expect(action).toHaveBeenCalled();
    });
  });
  describe("DialogModal", () => {
    it("renders DialogModal", () => {
      const closeAction = jest.fn();
      const { asFragment } = render(
        <DialogModalWithFooter
          isOpen={true}
          onClose={closeAction}
          ctaButton={<PrimaryButton>CTA</PrimaryButton>}
          closeText="Close"
          title="Title"
        >
          <div tabIndex={0}>I am modal content</div>
        </DialogModalWithFooter>
      );
      expect(asFragment()).toMatchSnapshot();
    });
    it("calls this.props.onClose when clicking the close button", () => {
      const closeAction = jest.fn();
      const { getByTestId } = render(
        <DialogModalWithFooter
          isOpen={true}
          onClose={closeAction}
          ctaButton={<PrimaryButton>CTA</PrimaryButton>}
          closeText="Close"
          title="Title"
        >
          <div tabIndex={0}>I am modal content</div>
        </DialogModalWithFooter>
      );
      const closeButton = getByTestId("secondaryButton");
      expect(closeAction).not.toHaveBeenCalled();
      fireEvent.click(closeButton);
      expect(closeAction).toHaveBeenCalled();
    });
  });
  describe("FullscreenModal", () => {
    it("renders FullscreenModal", () => {
      const closeAction = jest.fn();
      const { asFragment } = render(
        <FullscreenModal
          isOpen={true}
          onClose={closeAction}
          ctaButton={<PrimaryButton>CTA</PrimaryButton>}
          closeText="Close"
          title="Title"
        >
          <div tabIndex={0}>I am modal content</div>
        </FullscreenModal>
      );
      expect(asFragment()).toMatchSnapshot();
    });
    it("calls this.props.onClose when clicking the close button", () => {
      const closeAction = jest.fn();
      const { getByTestId } = render(
        <DialogModalWithFooter
          isOpen={true}
          onClose={closeAction}
          ctaButton={<PrimaryButton>CTA</PrimaryButton>}
          closeText="Close"
          title="Title"
        >
          <div tabIndex={0}>I am modal content</div>
        </DialogModalWithFooter>
      );
      const closeButton = getByTestId("secondaryButton");
      expect(closeAction).not.toHaveBeenCalled();
      fireEvent.click(closeButton);
      expect(closeAction).toHaveBeenCalled();
    });
  });
});
