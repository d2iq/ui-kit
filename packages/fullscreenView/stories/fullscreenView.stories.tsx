import * as React from "react";
import FullscreenView from "../components/FullscreenView";
import { Meta } from "@storybook/react";
import { cx } from "@emotion/css";

import {
  flex,
  flexItem,
  textSize,
  tintContentSecondary,
  padding
} from "../../shared/styles/styleUtils";
import { Container } from "../../styleUtils/layout";
import { fullscreenModalTitle } from "../style";
import { SecondaryButton, PrimaryButton } from "../../button";
import { action } from "@storybook/addon-actions";
import {
  ModalContent,
  BorderedModalContent
} from "../../modal/stories/helpers/modalContents";
import { InfoBoxBanner } from "../../infobox/index";
import { container } from "../../styleUtils/layout/container/style";

const onClose = () => {
  alert("calling onClose");
};

export default {
  title: "Page Structure/Fullscreen View",
  component: FullscreenView
} as Meta;

export const Default = () => (
  <div style={{ height: "500px" }}>
    <FullscreenView closeText="Close" title="Title" onClose={onClose}>
      <ModalContent />
    </FullscreenView>
  </div>
);
export const WithAdditionalHeaderContent = () => {
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
    <div style={{ height: "500px" }}>
      <FullscreenView
        onClose={onClose}
        title="Title"
        closeText="Close"
        ctaButton={
          <PrimaryButton onClick={action("handling CTA")} aria-haspopup>
            Continue
          </PrimaryButton>
        }
        headerComponent={HeaderContent}
      >
        <ModalContent />
      </FullscreenView>
    </div>
  );
};

export const WithFlushedContent = () => (
  <div style={{ height: "500px" }}>
    <FullscreenView
      onClose={onClose}
      title="Title"
      closeText="Close"
      isContentFlush
      ctaButton={
        <PrimaryButton onClick={action("handling CTA")} aria-haspopup>
          Continue
        </PrimaryButton>
      }
    >
      <BorderedModalContent horizPadding="32px" />
    </FullscreenView>
  </div>
);

export const ScrollingBody = () => (
  <div style={{ height: "500px" }}>
    <FullscreenView closeText="Close" title="Title" onClose={onClose}>
      <BorderedModalContent horizPadding="32px" />
      <BorderedModalContent horizPadding="32px" />
      <BorderedModalContent horizPadding="32px" />
    </FullscreenView>
  </div>
);

export const WithBanner = () => (
  <div style={{ height: "600px" }}>
    <FullscreenView
      closeText="Close"
      title="Title"
      onClose={onClose}
      bannerComponent={
        <InfoBoxBanner message="This is a message for the user." />
      }
    >
      <BorderedModalContent horizPadding="32px" />
      <BorderedModalContent horizPadding="32px" />
      <BorderedModalContent horizPadding="32px" />
      <BorderedModalContent horizPadding="32px" />
      <BorderedModalContent horizPadding="32px" />
      <BorderedModalContent horizPadding="32px" />
      <BorderedModalContent horizPadding="32px" />
      <BorderedModalContent horizPadding="32px" />
      <BorderedModalContent horizPadding="32px" />
    </FullscreenView>
  </div>
);

export const WithHeaderClassName = () => (
  <div style={{ height: "500px" }}>
    <FullscreenView
      closeText="Close"
      title="Title"
      onClose={onClose}
      ctaButton={<PrimaryButton type="button">Click</PrimaryButton>}
      subtitle={
        <>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </>
      }
      headerClassName={container}
    >
      <Container>
        <ModalContent />
      </Container>
    </FullscreenView>
  </div>
);
