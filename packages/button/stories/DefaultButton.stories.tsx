import * as React from "react";
import {
  PrimaryButton,
  SecondaryButton,
  StandardButton,
  SuccessButton,
  DangerButton,
  SpacingBox
} from "../../";
import {
  SpaceSize,
  BoxSides
} from "../../shared/styles/styleUtils/modifiers/modifierUtils";
import ButtonAppearanceSample from "./helpers/ButtonAppearanceSample";
import { action } from "@storybook/addon-actions";
import { SystemIcons } from "../../icons/dist/system-icons-enum";
import { withKnobs } from "@storybook/addon-knobs";

export default {
  title: "Actions/Button",
  component: StandardButton,
  decorators: [
    withKnobs,
    Story => (
      <div style={{ margin: "0 3em" }}>
        <Story />
      </div>
    )
  ]
};

export const _PrimaryButton = () => (
  <>
    <ButtonAppearanceSample>
      <PrimaryButton>Button</PrimaryButton>
      <PrimaryButton disabled={true}>Button</PrimaryButton>
      <PrimaryButton isProcessing={true}>Button</PrimaryButton>
    </ButtonAppearanceSample>
    <ButtonAppearanceSample isInverse={true}>
      <PrimaryButton isInverse={true}>Button</PrimaryButton>
      <PrimaryButton disabled={true} isInverse={true}>
        Button
      </PrimaryButton>
      <PrimaryButton isProcessing={true} isInverse={true}>
        Button
      </PrimaryButton>
    </ButtonAppearanceSample>
  </>
);

export const _SecondaryButton = () => (
  <>
    <ButtonAppearanceSample>
      <SecondaryButton>Button</SecondaryButton>
      <SecondaryButton disabled={true}>Button</SecondaryButton>
      <SecondaryButton isProcessing={true}>Button</SecondaryButton>
    </ButtonAppearanceSample>
    <ButtonAppearanceSample isInverse={true}>
      <SecondaryButton isInverse={true}>Button</SecondaryButton>
      <SecondaryButton disabled={true} isInverse={true}>
        Button
      </SecondaryButton>
      <SecondaryButton isProcessing={true} isInverse={true}>
        Button
      </SecondaryButton>
    </ButtonAppearanceSample>
  </>
);

export const _StandardButton = () => (
  <>
    <ButtonAppearanceSample>
      <StandardButton>Button</StandardButton>
      <StandardButton disabled={true}>Button</StandardButton>
      <StandardButton isProcessing={true}>Button</StandardButton>
    </ButtonAppearanceSample>
    <ButtonAppearanceSample isInverse={true}>
      <StandardButton isInverse={true}>Button</StandardButton>
      <StandardButton disabled={true} isInverse={true}>
        Button
      </StandardButton>
      <StandardButton isProcessing={true} isInverse={true}>
        Button
      </StandardButton>
    </ButtonAppearanceSample>
  </>
);

export const _SuccessButton = () => (
  <>
    <ButtonAppearanceSample>
      <SuccessButton>Button</SuccessButton>
      <SuccessButton disabled={true}>Button</SuccessButton>
      <SuccessButton isProcessing={true}>Button</SuccessButton>
    </ButtonAppearanceSample>
    <ButtonAppearanceSample isInverse={true}>
      <SuccessButton isInverse={true}>Button</SuccessButton>
      <SuccessButton disabled={true} isInverse={true}>
        Button
      </SuccessButton>
      <SuccessButton isProcessing={true} isInverse={true}>
        Button
      </SuccessButton>
    </ButtonAppearanceSample>
  </>
);

export const _DangerButton = () => (
  <>
    <ButtonAppearanceSample>
      <DangerButton>Button</DangerButton>
      <DangerButton disabled={true}>Button</DangerButton>
      <DangerButton isProcessing={true}>Button</DangerButton>
    </ButtonAppearanceSample>
    <ButtonAppearanceSample isInverse={true}>
      <DangerButton isInverse={true}>Button</DangerButton>
      <DangerButton disabled={true} isInverse={true}>
        Button
      </DangerButton>
      <DangerButton isProcessing={true} isInverse={true}>
        Button
      </DangerButton>
    </ButtonAppearanceSample>
  </>
);

export const WithIconBeforeButtonText = () => (
  <StandardButton iconStart={SystemIcons.Close}>Icon button</StandardButton>
);

export const _WithIconBeforeButtonText = () => (
  <StandardButton iconStart={SystemIcons.Close}>Icon button</StandardButton>
);

export const OnlyAnIcon = () => (
  <StandardButton ariaLabel="Close" iconStart={SystemIcons.Close} />
);

export const FullWidth = () => (
  <StandardButton isFullWidth={true}>Full-width</StandardButton>
);

export const FullWidthWithIcon = () => (
  <StandardButton isFullWidth={true} iconStart={SystemIcons.Close}>
    Full-width
  </StandardButton>
);

export const WithOnClick = () => (
  <StandardButton onClick={action("Button pressed")}>Click me</StandardButton>
);

export const WithOnFocusAndOnBlur = () => (
  <StandardButton
    onFocus={action("Button focused")}
    onBlur={action("Button blurred")}
  >
    Focus me
  </StandardButton>
);

export const UsedAsALink = () => {
  const spacingBoxProps = {
    spacingSize: "xxl" as SpaceSize,
    side: "bottom" as BoxSides
  };
  return (
    <>
      <SpacingBox {...spacingBoxProps}>
        <ButtonAppearanceSample>
          <PrimaryButton url="http://google.com">Button</PrimaryButton>
          <PrimaryButton url="http://google.com" disabled={true}>
            Button
          </PrimaryButton>
          <PrimaryButton url="http://google.com" isProcessing={true}>
            Button
          </PrimaryButton>
        </ButtonAppearanceSample>
        <ButtonAppearanceSample isInverse={true}>
          <PrimaryButton url="http://google.com" isInverse={true}>
            Button
          </PrimaryButton>
          <PrimaryButton
            url="http://google.com"
            disabled={true}
            isInverse={true}
          >
            Button
          </PrimaryButton>
          <PrimaryButton
            url="http://google.com"
            isProcessing={true}
            isInverse={true}
          >
            Button
          </PrimaryButton>
        </ButtonAppearanceSample>
      </SpacingBox>
      <SpacingBox {...spacingBoxProps}>
        <ButtonAppearanceSample>
          <SecondaryButton url="http://google.com">Button</SecondaryButton>
          <SecondaryButton url="http://google.com" disabled={true}>
            Button
          </SecondaryButton>
          <SecondaryButton url="http://google.com" isProcessing={true}>
            Button
          </SecondaryButton>
        </ButtonAppearanceSample>
        <ButtonAppearanceSample isInverse={true}>
          <SecondaryButton url="http://google.com" isInverse={true}>
            Button
          </SecondaryButton>
          <SecondaryButton
            url="http://google.com"
            disabled={true}
            isInverse={true}
          >
            Button
          </SecondaryButton>
          <SecondaryButton
            url="http://google.com"
            isProcessing={true}
            isInverse={true}
          >
            Button
          </SecondaryButton>
        </ButtonAppearanceSample>
      </SpacingBox>
      <SpacingBox {...spacingBoxProps}>
        <ButtonAppearanceSample>
          <StandardButton url="http://google.com">Button</StandardButton>
          <StandardButton url="http://google.com" disabled={true}>
            Button
          </StandardButton>
          <StandardButton url="http://google.com" isProcessing={true}>
            Button
          </StandardButton>
        </ButtonAppearanceSample>
        <ButtonAppearanceSample isInverse={true}>
          <StandardButton url="http://google.com" isInverse={true}>
            Button
          </StandardButton>
          <StandardButton
            url="http://google.com"
            disabled={true}
            isInverse={true}
          >
            Button
          </StandardButton>
          <StandardButton
            url="http://google.com"
            isProcessing={true}
            isInverse={true}
          >
            Button
          </StandardButton>
        </ButtonAppearanceSample>
      </SpacingBox>
      <SpacingBox {...spacingBoxProps}>
        <ButtonAppearanceSample>
          <SuccessButton url="http://google.com">Button</SuccessButton>
          <SuccessButton url="http://google.com" disabled={true}>
            Button
          </SuccessButton>
          <SuccessButton url="http://google.com" isProcessing={true}>
            Button
          </SuccessButton>
        </ButtonAppearanceSample>
        <ButtonAppearanceSample isInverse={true}>
          <SuccessButton url="http://google.com" isInverse={true}>
            Button
          </SuccessButton>
          <SuccessButton
            url="http://google.com"
            disabled={true}
            isInverse={true}
          >
            Button
          </SuccessButton>
          <SuccessButton
            url="http://google.com"
            isProcessing={true}
            isInverse={true}
          >
            Button
          </SuccessButton>
        </ButtonAppearanceSample>
      </SpacingBox>
      <SpacingBox {...spacingBoxProps}>
        <ButtonAppearanceSample>
          <DangerButton url="http://google.com">Button</DangerButton>
          <DangerButton url="http://google.com" disabled={true}>
            Button
          </DangerButton>
          <DangerButton url="http://google.com" isProcessing={true}>
            Button
          </DangerButton>
        </ButtonAppearanceSample>
        <ButtonAppearanceSample isInverse={true}>
          <DangerButton url="http://google.com" isInverse={true}>
            Button
          </DangerButton>
          <DangerButton
            url="http://google.com"
            disabled={true}
            isInverse={true}
          >
            Button
          </DangerButton>
          <DangerButton
            url="http://google.com"
            isProcessing={true}
            isInverse={true}
          >
            Button
          </DangerButton>
        </ButtonAppearanceSample>
      </SpacingBox>
    </>
  );
};

export const UsedAsALinkThatOpensInANewTab = () => (
  <>
    <ButtonAppearanceSample>
      <StandardButton url="http://google.com" openInNewTab={true}>
        Button
      </StandardButton>
      <StandardButton
        url="http://google.com"
        openInNewTab={true}
        disabled={true}
      >
        Button
      </StandardButton>
      <StandardButton
        url="http://google.com"
        openInNewTab={true}
        isProcessing={true}
      >
        Button
      </StandardButton>
    </ButtonAppearanceSample>
    <ButtonAppearanceSample isInverse={true}>
      <StandardButton
        url="http://google.com"
        openInNewTab={true}
        isInverse={true}
      >
        Button
      </StandardButton>
      <StandardButton
        url="http://google.com"
        openInNewTab={true}
        disabled={true}
        isInverse={true}
      >
        Button
      </StandardButton>
      <StandardButton
        url="http://google.com"
        openInNewTab={true}
        isProcessing={true}
        isInverse={true}
      >
        Button
      </StandardButton>
    </ButtonAppearanceSample>
  </>
);
