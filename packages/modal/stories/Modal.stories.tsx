import * as React from "react";
import { cx } from "@emotion/css";
import { action } from "@storybook/addon-actions";
import { Meta } from "@storybook/react";
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
import { blue } from "../../design-tokens/build/js/designTokens";
import { SystemIcons } from "../../icons/dist/system-icons-enum";

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
  },
  argTypes: {
    footerContent: {
      control: { disable: true }
    },
    title: {
      control: { disable: true }
    },
    icon: {
      control: { disable: true }
    },
    initialFocus: {
      control: { disable: true }
    },
    id: {
      control: { disable: true }
    },
    overlayRoot: {
      control: { disable: true }
    },
    className: {
      control: { disable: true }
    },
    "data-cy": {
      control: { disable: true }
    }
  }
} as Meta;

export const _DialogModal = {
  render: args => (
    <ModalStoryContainer>
      {({ isOpen, onClose }) => (
        <DialogModal
          isOpen={isOpen}
          onClose={onClose}
          title="I am modal"
          {...args}
        >
          <ModalContent />
        </DialogModal>
      )}
    </ModalStoryContainer>
  )
};

const confirmIcon = {
  shape: SystemIcons.CircleInformation,
  color: blue
};

export const DialogModalWithIcon = {
  render: args => (
    <ModalStoryContainer>
      {({ isOpen, onClose }) => (
        <DialogModal
          isOpen={isOpen}
          onClose={onClose}
          title="Info: Lorem Ipsum"
          icon={confirmIcon}
          {...args}
        >
          <ModalContent />
        </DialogModal>
      )}
    </ModalStoryContainer>
  )
};

export const _SmallDialogModal = {
  render: args => (
    <ModalStoryContainer>
      {({ isOpen, onClose }) => (
        <SmallDialogModal
          isOpen={isOpen}
          onClose={onClose}
          title="I am modal"
          {...args}
        >
          <ModalContent />
        </SmallDialogModal>
      )}
    </ModalStoryContainer>
  )
};

export const _LargeDialogModal = {
  render: args => (
    <ModalStoryContainer>
      {({ isOpen, onClose }) => (
        <LargeDialogModal
          isOpen={isOpen}
          onClose={onClose}
          title="I am modal"
          {...args}
        >
          <ModalContent />
        </LargeDialogModal>
      )}
    </ModalStoryContainer>
  )
};

export const DialogModalWithFlushedContent = {
  render: args => (
    <ModalStoryContainer>
      {({ isOpen, onClose }) => (
        <DialogModal
          isOpen={isOpen}
          onClose={onClose}
          title="I am modal"
          isContentFlush={true}
          {...args}
        >
          <BorderedModalContent horizPadding="24px" />
        </DialogModal>
      )}
    </ModalStoryContainer>
  )
};

export const _DialogModalWithFooter = {
  render: args => (
    <ModalStoryContainer>
      {({ isOpen, onClose }) => (
        <DialogModalWithFooter
          isOpen={isOpen}
          onClose={onClose}
          title="I am modal"
          ctaButton={
            <PrimaryButton
              onClick={action("handling CTA")}
              aria-haspopup={true}
            >
              Continue
            </PrimaryButton>
          }
          closeText="Dismiss"
          {...args}
        >
          <ModalContent />
        </DialogModalWithFooter>
      )}
    </ModalStoryContainer>
  )
};

export const _SmallDialogModalWithFooter = {
  render: args => (
    <ModalStoryContainer>
      {({ isOpen, onClose }) => (
        <SmallDialogModalWithFooter
          isOpen={isOpen}
          onClose={onClose}
          title="I am modal"
          ctaButton={
            <PrimaryButton
              onClick={action("handling CTA")}
              aria-haspopup={true}
            >
              Continue
            </PrimaryButton>
          }
          closeText="Dismiss"
          {...args}
        >
          <ModalContent />
        </SmallDialogModalWithFooter>
      )}
    </ModalStoryContainer>
  )
};

export const _LargeDialogModalWithFooter = {
  render: args => (
    <ModalStoryContainer>
      {({ isOpen, onClose }) => (
        <LargeDialogModalWithFooter
          isOpen={isOpen}
          onClose={onClose}
          title="I am modal"
          ctaButton={
            <PrimaryButton
              onClick={action("handling CTA")}
              aria-haspopup={true}
            >
              Continue
            </PrimaryButton>
          }
          closeText="Dismiss"
          {...args}
        >
          <ModalContent />
        </LargeDialogModalWithFooter>
      )}
    </ModalStoryContainer>
  )
};

export const _FullscreenModal = {
  render: args => (
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
          {...args}
        >
          <ModalContent />
        </FullscreenModal>
      )}
    </ModalStoryContainer>
  )
};

export const FullscreenModalWithAdditionalHeaderContent = {
  render: args => {
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
            {...args}
          >
            <ModalContent />
          </FullscreenModal>
        )}
      </ModalStoryContainer>
    );
  }
};

export const FullscreenModalWithFlushedContent = {
  render: args => (
    <ModalStoryContainer>
      {({ isOpen, onClose }) => (
        <FullscreenModal
          isOpen={isOpen}
          onClose={onClose}
          title="I am modal"
          closeText="Dismiss"
          isContentFlush={true}
          ctaButton={
            <PrimaryButton
              onClick={action("handling CTA")}
              aria-haspopup={true}
            >
              Continue
            </PrimaryButton>
          }
          {...args}
        >
          <BorderedModalContent horizPadding="32px" />
        </FullscreenModal>
      )}
    </ModalStoryContainer>
  )
};

export const FullscreenModalWithDialogModal = {
  render: args => {
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
            {...args}
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
  }
};

export const CustomFocusedElement = {
  render: args => (
    <ModalStoryContainer>
      {({ isOpen, onClose }) => (
        <DialogModal
          isOpen={isOpen}
          onClose={onClose}
          title="I am modal"
          initialFocus="#focus-input"
          {...args}
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
  )
};
