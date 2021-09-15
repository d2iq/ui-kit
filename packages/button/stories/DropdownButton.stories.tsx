import * as React from "react";
import {
  PrimaryDropdownButton,
  SecondaryDropdownButton,
  StandardDropdownButton,
  SuccessDropdownButton,
  DangerDropdownButton
} from "../../index";
import ButtonAppearanceSample from "./helpers/ButtonAppearanceSample";
import { SystemIcons } from "../../icons/dist/system-icons-enum";

export default {
  title: "Actions/Dropdown Button",
  component: StandardDropdownButton
};

export const _PrimaryDropdownButton = () => (
  <>
    <ButtonAppearanceSample>
      <PrimaryDropdownButton>Button</PrimaryDropdownButton>
      <PrimaryDropdownButton disabled={true}>Button</PrimaryDropdownButton>
      <PrimaryDropdownButton isProcessing={true}>Button</PrimaryDropdownButton>
    </ButtonAppearanceSample>

    <ButtonAppearanceSample isInverse={true}>
      <PrimaryDropdownButton isInverse={true}>Button</PrimaryDropdownButton>
      <PrimaryDropdownButton isInverse={true} disabled={true}>
        Button
      </PrimaryDropdownButton>
      <PrimaryDropdownButton isInverse={true} isProcessing={true}>
        Button
      </PrimaryDropdownButton>
    </ButtonAppearanceSample>
  </>
);

export const _SecondaryDropdownButton = () => (
  <>
    <ButtonAppearanceSample>
      <SecondaryDropdownButton>Button</SecondaryDropdownButton>
      <SecondaryDropdownButton disabled={true}>Button</SecondaryDropdownButton>
      <SecondaryDropdownButton isProcessing={true}>
        Button
      </SecondaryDropdownButton>
    </ButtonAppearanceSample>

    <ButtonAppearanceSample isInverse={true}>
      <SecondaryDropdownButton isInverse={true}>Button</SecondaryDropdownButton>
      <SecondaryDropdownButton isInverse={true} disabled={true}>
        Button
      </SecondaryDropdownButton>
      <SecondaryDropdownButton isInverse={true} isProcessing={true}>
        Button
      </SecondaryDropdownButton>
    </ButtonAppearanceSample>
  </>
);

export const _StandardDropdownButton = () => (
  <>
    <ButtonAppearanceSample>
      <StandardDropdownButton>Button</StandardDropdownButton>
      <StandardDropdownButton disabled={true}>Button</StandardDropdownButton>
      <StandardDropdownButton isProcessing={true}>
        Button
      </StandardDropdownButton>
    </ButtonAppearanceSample>

    <ButtonAppearanceSample isInverse={true}>
      <StandardDropdownButton isInverse={true}>Button</StandardDropdownButton>
      <StandardDropdownButton isInverse={true} disabled={true}>
        Button
      </StandardDropdownButton>
      <StandardDropdownButton isInverse={true} isProcessing={true}>
        Button
      </StandardDropdownButton>
    </ButtonAppearanceSample>
  </>
);

export const _SuccessDropdownButton = () => (
  <>
    <ButtonAppearanceSample>
      <SuccessDropdownButton>Button</SuccessDropdownButton>
      <SuccessDropdownButton disabled={true}>Button</SuccessDropdownButton>
      <SuccessDropdownButton isProcessing={true}>Button</SuccessDropdownButton>
    </ButtonAppearanceSample>

    <ButtonAppearanceSample isInverse={true}>
      <SuccessDropdownButton isInverse={true}>Button</SuccessDropdownButton>
      <SuccessDropdownButton isInverse={true} disabled={true}>
        Button
      </SuccessDropdownButton>
      <SuccessDropdownButton isInverse={true} isProcessing={true}>
        Button
      </SuccessDropdownButton>
    </ButtonAppearanceSample>
  </>
);

export const _DangerDropdownButton = () => (
  <>
    <ButtonAppearanceSample>
      <DangerDropdownButton>Button</DangerDropdownButton>
      <DangerDropdownButton disabled={true}>Button</DangerDropdownButton>
      <DangerDropdownButton isProcessing={true}>Button</DangerDropdownButton>
    </ButtonAppearanceSample>

    <ButtonAppearanceSample isInverse={true}>
      <DangerDropdownButton isInverse={true}>Button</DangerDropdownButton>
      <DangerDropdownButton isInverse={true} disabled={true}>
        Button
      </DangerDropdownButton>
      <DangerDropdownButton isInverse={true} isProcessing={true}>
        Button
      </DangerDropdownButton>
    </ButtonAppearanceSample>
  </>
);

export const FullWidthDropdown = () => (
  <StandardDropdownButton isFullWidth={true}>Full-width</StandardDropdownButton>
);

export const FullWidthDropdownWithIcon = () => (
  <StandardDropdownButton iconStart={SystemIcons.Close} isFullWidth={true}>
    Full-width
  </StandardDropdownButton>
);

export const DropdownWithIcon = () => (
  <StandardDropdownButton iconStart={SystemIcons.Close}>
    Icon dropdown
  </StandardDropdownButton>
);

export const DropdownWithOnlyAnIcon = () => (
  <StandardDropdownButton iconStart={SystemIcons.Close} />
);
