import * as React from "react";
import { cx } from "@emotion/css";
import { action } from "@storybook/addon-actions";
import {
  DialogModal,
  SmallDialogModal,
  LargeDialogModal,
  DialogModalWithFooter,
  SmallDialogModalWithFooter,
  LargeDialogModalWithFooter,
  FullscreenModal
} from "../../index";
import ModalStoryContainer from "./helpers/ModalStoryContainer";
import { ModalContent, BorderedModalContent } from "./helpers/modalContents";
import PrimaryButton from "../../button/components/PrimaryButton";
import {
  flex,
  flexItem,
  padding,
  textSize,
  tintContentSecondary
} from "../../shared/styles/styleUtils";
import { SecondaryButton } from "../../button";
import { TextInput } from "../../textInput";
import { fullscreenModalTitle } from "../../fullscreenView/style";

export default {
  title: "Overlays/Modal",
  component: DialogModal,
  subcomponents: {
    SmallDialogModal,
    LargeDialogModal,
    DialogModalWithFooter,
    SmallDialogModalWithFooter,
    LargeDialogModalWithFooter,
    FullscreenModal
  }
};

export const _DialogModal = () => (
  <ModalStoryContainer>
    {({ isOpen, onClose }) => (
      <DialogModal isOpen={isOpen} onClose={onClose} title="I am modal">
        <ModalContent />
      </DialogModal>
    )}
  </ModalStoryContainer>
);

export const _SmallDialogModal = () => (
  <ModalStoryContainer>
    {({ isOpen, onClose }) => (
      <SmallDialogModal isOpen={isOpen} onClose={onClose} title="I am modal">
        <ModalContent />
      </SmallDialogModal>
    )}
  </ModalStoryContainer>
);

export const _LargeDialogModal = () => (
  <ModalStoryContainer>
    {({ isOpen, onClose }) => (
      <LargeDialogModal isOpen={isOpen} onClose={onClose} title="I am modal">
        <ModalContent />
      </LargeDialogModal>
    )}
  </ModalStoryContainer>
);

export const DialogModalWithFlushedContent = () => (
  <ModalStoryContainer>
    {({ isOpen, onClose }) => (
      <DialogModal
        isOpen={isOpen}
        onClose={onClose}
        title="I am modal"
        isContentFlush={true}
      >
        <BorderedModalContent horizPadding="24px" />
      </DialogModal>
    )}
  </ModalStoryContainer>
);

export const _DialogModalWithFooter = () => (
  <ModalStoryContainer>
    {({ isOpen, onClose }) => (
      <DialogModalWithFooter
        isOpen={isOpen}
        onClose={onClose}
        title="I am modal"
        ctaButton={
          <PrimaryButton onClick={action("handling CTA")} aria-haspopup={true}>
            Continue
          </PrimaryButton>
        }
        closeText="Dismiss"
      >
        <ModalContent />
      </DialogModalWithFooter>
    )}
  </ModalStoryContainer>
);

export const _SmallDialogModalWithFooter = () => (
  <ModalStoryContainer>
    {({ isOpen, onClose }) => (
      <SmallDialogModalWithFooter
        isOpen={isOpen}
        onClose={onClose}
        title="I am modal"
        ctaButton={
          <PrimaryButton onClick={action("handling CTA")} aria-haspopup={true}>
            Continue
          </PrimaryButton>
        }
        closeText="Dismiss"
      >
        <ModalContent />
      </SmallDialogModalWithFooter>
    )}
  </ModalStoryContainer>
);

export const _LargeDialogModalWithFooter = () => (
  <ModalStoryContainer>
    {({ isOpen, onClose }) => (
      <LargeDialogModalWithFooter
        isOpen={isOpen}
        onClose={onClose}
        title="I am modal"
        ctaButton={
          <PrimaryButton onClick={action("handling CTA")} aria-haspopup={true}>
            Continue
          </PrimaryButton>
        }
        closeText="Dismiss"
      >
        <ModalContent />
      </LargeDialogModalWithFooter>
    )}
  </ModalStoryContainer>
);

export const _FullscreenModal = () => (
  <ModalStoryContainer>
    {({ isOpen, onClose }) => (
      <FullscreenModal
        isOpen={isOpen}
        onClose={onClose}
        title="I am modal"
        subtitle="Optional subtitle"
        closeText="Dismiss"
        ctaButton={
          <PrimaryButton onClick={action("handling CTA")} aria-haspopup={true}>
            Continue
          </PrimaryButton>
        }
      >
        <ModalContent />
      </FullscreenModal>
    )}
  </ModalStoryContainer>
);

export const FullscreenModalWithAdditionalHeaderContent = () => {
  const HeaderContent = ({ ctaButton, closeText, title, onClose }) => (
    <div className={cx(flex({ align: "center" }), flexItem("shrink"))}>
      <div className={flexItem("grow")}>
        <SecondaryButton onClick={onClose}>{closeText}</SecondaryButton>
      </div>
      <div className={cx(fullscreenModalTitle, flexItem("grow"))}>
        <div className={textSize("l")}>{title}</div>
        <div className={cx(tintContentSecondary, textSize("s"))}>
          Some subheader
        </div>
      </div>
      <div className={flexItem("grow")}>
        <div className={cx(flex({ align: "center", justify: "flex-end" }))}>
          <div className={flexItem("shrink")}>
            <input type="checkbox" id="fauxToggle" />
            <label htmlFor="fauxToggle">Faux toggle</label>
          </div>
          <div className={cx(flexItem("shrink"), padding("left", "s"))}>
            {ctaButton}
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <ModalStoryContainer>
      {({ isOpen, onClose }) => (
        <FullscreenModal
          isOpen={isOpen}
          onClose={onClose}
          title="I am modal"
          closeText="Dismiss"
          ctaButton={
            <PrimaryButton
              onClick={action("handling CTA")}
              aria-haspopup={true}
            >
              Continue
            </PrimaryButton>
          }
          headerComponent={HeaderContent}
        >
          <ModalContent />
        </FullscreenModal>
      )}
    </ModalStoryContainer>
  );
};

export const FullscreenModalWithFlushedContent = () => (
  <ModalStoryContainer>
    {({ isOpen, onClose }) => (
      <FullscreenModal
        isOpen={isOpen}
        onClose={onClose}
        title="I am modal"
        closeText="Dismiss"
        isContentFlush={true}
        ctaButton={
          <PrimaryButton onClick={action("handling CTA")} aria-haspopup={true}>
            Continue
          </PrimaryButton>
        }
      >
        <BorderedModalContent horizPadding="32px" />
      </FullscreenModal>
    )}
  </ModalStoryContainer>
);

export const FullscreenModalWithDialogModal = () => {
  return (
    <ModalStoryContainer>
      {({ isOpen, onClose }) => (
        <FullscreenModal
          isOpen={isOpen}
          onClose={onClose}
          title="I am modal"
          subtitle="Optional subtitle"
          closeText="Dismiss"
          ctaButton={
            <PrimaryButton
              onClick={action("handling CTA")}
              aria-haspopup={true}
            >
              Continue
            </PrimaryButton>
          }
          id="testId"
        >
          <ModalStoryContainer>
            {({ isOpen, onClose }) => (
              <DialogModal
                isOpen={isOpen}
                onClose={onClose}
                title="I am modal"
                overlayRoot={document.querySelector("#testId")}
              >
                <ModalContent />
              </DialogModal>
            )}
          </ModalStoryContainer>
        </FullscreenModal>
      )}
    </ModalStoryContainer>
  );
};

export const CustomFocusedElement = () => (
  <ModalStoryContainer>
    {({ isOpen, onClose }) => (
      <DialogModal
        isOpen={isOpen}
        onClose={onClose}
        title="I am modal"
        initialFocus="#focus-input"
      >
        <div>
          <ModalContent />
          <div className={padding("top", "m")}>
            <TextInput inputLabel="I get focus" id="focus-input" />
          </div>
        </div>
      </DialogModal>
    )}
  </ModalStoryContainer>
);
