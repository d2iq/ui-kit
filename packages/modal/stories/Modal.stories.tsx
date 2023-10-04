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

export const _DialogModal = args => {
  const [isOpen, setIsOpen] = React.useState(false);

  function handleChange() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <PrimaryButton onClick={handleChange}>Open Modal</PrimaryButton>
      </div>
      <DialogModal
        isOpen={isOpen}
        onClose={handleChange}
        title="I am modal"
        {...args}
      >
        <ModalContent />
      </DialogModal>
    </div>
  );
};

const confirmIcon = {
  shape: SystemIcons.CircleInformation,
  color: blue
};

export const DialogModalWithIcon = args => {
  const [isOpen, setIsOpen] = React.useState(false);

  function handleChange() {
    setIsOpen(!isOpen);
  }
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <PrimaryButton onClick={handleChange}>Open Modal</PrimaryButton>
      </div>
      <DialogModal
        isOpen={isOpen}
        onClose={handleChange}
        title="Info: Lorem Ipsum"
        icon={confirmIcon}
        {...args}
      >
        <ModalContent />
      </DialogModal>
    </div>
  );
};

export const _SmallDialogModal = args => {
  const [isOpen, setIsOpen] = React.useState(false);

  function handleChange() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <PrimaryButton onClick={handleChange}>Open Modal</PrimaryButton>
      </div>
      <SmallDialogModal
        isOpen={isOpen}
        onClose={handleChange}
        title="I am modal"
        {...args}
      >
        <ModalContent />
      </SmallDialogModal>
    </div>
  );
};

export const _LargeDialogModal = args => {
  const [isOpen, setIsOpen] = React.useState(false);

  function handleChange() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <PrimaryButton onClick={handleChange}>Open Modal</PrimaryButton>
      </div>
      <LargeDialogModal
        isOpen={isOpen}
        onClose={handleChange}
        title="I am modal"
        {...args}
      >
        <ModalContent />
      </LargeDialogModal>
    </div>
  );
};

export const DialogModalWithFlushedContent = args => {
  const [isOpen, setIsOpen] = React.useState(false);
  function handleChange() {
    setIsOpen(!isOpen);
  }
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <PrimaryButton onClick={handleChange}>Open Modal</PrimaryButton>
      </div>
      <DialogModal
        isOpen={isOpen}
        onClose={handleChange}
        title="I am modal"
        isContentFlush={true}
        {...args}
      >
        <BorderedModalContent horizPadding="24px" />
      </DialogModal>
    </div>
  );
};

export const _DialogModalWithFooter = args => {
  const [isOpen, setIsOpen] = React.useState(false);

  function handleChange() {
    setIsOpen(!isOpen);
  }
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <PrimaryButton onClick={handleChange}>Open Modal</PrimaryButton>
      </div>
      <DialogModalWithFooter
        isOpen={isOpen}
        onClose={handleChange}
        title="I am modal"
        ctaButton={
          <PrimaryButton onClick={action("handling CTA")} aria-haspopup={true}>
            Continue
          </PrimaryButton>
        }
        closeText="Dismiss"
        {...args}
      >
        <ModalContent />
      </DialogModalWithFooter>
    </div>
  );
};

export const _SmallDialogModalWithFooter = args => {
  const [isOpen, setIsOpen] = React.useState(false);

  function handleChange() {
    setIsOpen(!isOpen);
  }
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <PrimaryButton onClick={handleChange}>Open Modal</PrimaryButton>
      </div>
      <SmallDialogModalWithFooter
        isOpen={isOpen}
        onClose={handleChange}
        title="I am modal"
        ctaButton={
          <PrimaryButton onClick={action("handling CTA")} aria-haspopup={true}>
            Continue
          </PrimaryButton>
        }
        closeText="Dismiss"
        {...args}
      >
        <ModalContent />
      </SmallDialogModalWithFooter>
    </div>
  );
};

export const _LargeDialogModalWithFooter = args => {
  const [isOpen, setIsOpen] = React.useState(false);

  function handleChange() {
    setIsOpen(!isOpen);
  }
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <PrimaryButton onClick={handleChange}>Open Modal</PrimaryButton>
      </div>
      <LargeDialogModalWithFooter
        isOpen={isOpen}
        onClose={handleChange}
        title="I am modal"
        ctaButton={
          <PrimaryButton onClick={action("handling CTA")} aria-haspopup={true}>
            Continue
          </PrimaryButton>
        }
        closeText="Dismiss"
        {...args}
      >
        <ModalContent />
      </LargeDialogModalWithFooter>
    </div>
  );
};

export const _FullscreenModal = args => {
  const [isOpen, setIsOpen] = React.useState(false);

  function handleChange() {
    setIsOpen(!isOpen);
  }
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <PrimaryButton onClick={handleChange}>Open Modal</PrimaryButton>
      </div>
      <FullscreenModal
        isOpen={isOpen}
        onClose={handleChange}
        title="I am modal"
        subtitle="Optional subtitle"
        closeText="Dismiss"
        ctaButton={
          <PrimaryButton onClick={action("handling CTA")} aria-haspopup={true}>
            Continue
          </PrimaryButton>
        }
        {...args}
      >
        <ModalContent />
      </FullscreenModal>
    </div>
  );
};

export const FullscreenModalWithAdditionalHeaderContent = args => {
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
  const [isOpen, setIsOpen] = React.useState(false);

  function handleChange() {
    setIsOpen(!isOpen);
  }
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <PrimaryButton onClick={handleChange}>Open Modal</PrimaryButton>
      </div>
      <FullscreenModal
        isOpen={isOpen}
        onClose={handleChange}
        title="I am modal"
        closeText="Dismiss"
        ctaButton={
          <PrimaryButton onClick={action("handling CTA")} aria-haspopup={true}>
            Continue
          </PrimaryButton>
        }
        headerComponent={HeaderContent}
        {...args}
      >
        <ModalContent />
      </FullscreenModal>
    </div>
  );
};

export const FullscreenModalWithFlushedContent = args => {
  const [isOpen, setIsOpen] = React.useState(false);
  function handleChange() {
    setIsOpen(!isOpen);
  }
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <PrimaryButton onClick={handleChange}>Open Modal</PrimaryButton>
      </div>
      <FullscreenModal
        isOpen={isOpen}
        onClose={handleChange}
        title="I am modal"
        closeText="Dismiss"
        isContentFlush={true}
        ctaButton={
          <PrimaryButton onClick={action("handling CTA")} aria-haspopup={true}>
            Continue
          </PrimaryButton>
        }
        {...args}
      >
        <BorderedModalContent horizPadding="32px" />
      </FullscreenModal>
    </div>
  );
};

export const FullscreenModalWithDialogModal = args => {
  const [isOpen, setIsOpen] = React.useState(false);

  function handleChange() {
    setIsOpen(!isOpen);
  }

  const [isOpen1, setIsOpen1] = React.useState(false);

  function handleChange1() {
    setIsOpen1(!isOpen1);
  }
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <PrimaryButton onClick={handleChange}>Open Modal</PrimaryButton>
      </div>
      <FullscreenModal
        isOpen={isOpen}
        onClose={handleChange}
        title="I am modal"
        subtitle="Optional subtitle"
        closeText="Dismiss"
        ctaButton={
          <PrimaryButton onClick={action("handling CTA")} aria-haspopup={true}>
            Continue
          </PrimaryButton>
        }
        id="testId"
        {...args}
      >
        <div>
          <div style={{ textAlign: "center" }}>
            <PrimaryButton onClick={handleChange1}>Open Modal</PrimaryButton>
          </div>
          <DialogModal
            isOpen={isOpen1}
            onClose={handleChange1}
            title="I am modal"
            overlayRoot={document.querySelector("#testId")}
          >
            <ModalContent />
          </DialogModal>
        </div>
      </FullscreenModal>
    </div>
  );
};

export const CustomFocusedElement = args => {
  const [isOpen, setIsOpen] = React.useState(false);

  function handleChange() {
    setIsOpen(!isOpen);
  }
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <PrimaryButton onClick={handleChange}>Open Modal</PrimaryButton>
      </div>
      <DialogModal
        isOpen={isOpen}
        onClose={handleChange}
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
    </div>
  );
};
