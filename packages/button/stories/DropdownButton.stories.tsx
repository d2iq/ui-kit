import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import {
  PrimaryDropdownButton,
  SecondaryDropdownButton,
  StandardDropdownButton,
  SuccessDropdownButton,
  DangerDropdownButton
} from "../../index";
import ButtonAppearanceSample from "./helpers/ButtonAppearanceSample";
import { SystemIcons } from "../../icons/dist/system-icons-enum";

const readme = require("../README.md");

storiesOf("Buttons/Dropdown", module)
  .addDecorator(withReadme([readme]))
  .addParameters({
    info: {
      propTablesExclude: [ButtonAppearanceSample, React.Fragment]
    }
  })
  .add(
    "PrimaryDropdownButton",
    () => (
      <React.Fragment>
        <ButtonAppearanceSample>
          <PrimaryDropdownButton>Button</PrimaryDropdownButton>
          <PrimaryDropdownButton disabled={true}>Button</PrimaryDropdownButton>
          <PrimaryDropdownButton isProcessing={true}>
            Button
          </PrimaryDropdownButton>
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
      </React.Fragment>
    ),
    {
      info: {
        propTables: [PrimaryDropdownButton]
      }
    }
  )
  .add(
    "SecondaryDropdownButton",
    () => (
      <React.Fragment>
        <ButtonAppearanceSample>
          <SecondaryDropdownButton>Button</SecondaryDropdownButton>
          <SecondaryDropdownButton disabled={true}>
            Button
          </SecondaryDropdownButton>
          <SecondaryDropdownButton isProcessing={true}>
            Button
          </SecondaryDropdownButton>
        </ButtonAppearanceSample>

        <ButtonAppearanceSample isInverse={true}>
          <SecondaryDropdownButton isInverse={true}>
            Button
          </SecondaryDropdownButton>
          <SecondaryDropdownButton isInverse={true} disabled={true}>
            Button
          </SecondaryDropdownButton>
          <SecondaryDropdownButton isInverse={true} isProcessing={true}>
            Button
          </SecondaryDropdownButton>
        </ButtonAppearanceSample>
      </React.Fragment>
    ),
    {
      info: {
        propTables: [SecondaryDropdownButton]
      }
    }
  )
  .add(
    "StandardDropdownButton",
    () => (
      <React.Fragment>
        <ButtonAppearanceSample>
          <StandardDropdownButton>Button</StandardDropdownButton>
          <StandardDropdownButton disabled={true}>
            Button
          </StandardDropdownButton>
          <StandardDropdownButton isProcessing={true}>
            Button
          </StandardDropdownButton>
        </ButtonAppearanceSample>

        <ButtonAppearanceSample isInverse={true}>
          <StandardDropdownButton isInverse={true}>
            Button
          </StandardDropdownButton>
          <StandardDropdownButton isInverse={true} disabled={true}>
            Button
          </StandardDropdownButton>
          <StandardDropdownButton isInverse={true} isProcessing={true}>
            Button
          </StandardDropdownButton>
        </ButtonAppearanceSample>
      </React.Fragment>
    ),
    {
      info: {
        propTables: [StandardDropdownButton]
      }
    }
  )
  .add(
    "SuccessDropdownButton",
    () => (
      <React.Fragment>
        <ButtonAppearanceSample>
          <SuccessDropdownButton>Button</SuccessDropdownButton>
          <SuccessDropdownButton disabled={true}>Button</SuccessDropdownButton>
          <SuccessDropdownButton isProcessing={true}>
            Button
          </SuccessDropdownButton>
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
      </React.Fragment>
    ),
    {
      info: {
        propTables: [SuccessDropdownButton]
      }
    }
  )
  .add(
    "DangerDropdownButton",
    () => (
      <React.Fragment>
        <ButtonAppearanceSample>
          <DangerDropdownButton>Button</DangerDropdownButton>
          <DangerDropdownButton disabled={true}>Button</DangerDropdownButton>
          <DangerDropdownButton isProcessing={true}>
            Button
          </DangerDropdownButton>
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
      </React.Fragment>
    ),
    {
      info: {
        propTables: [DangerDropdownButton]
      }
    }
  )
  .add(
    "full-width dropdown",
    () => (
      <StandardDropdownButton isFullWidth={true}>
        Full-width
      </StandardDropdownButton>
    ),
    {
      info: {
        propTables: [StandardDropdownButton]
      }
    }
  )
  .add(
    "full-width dropdown with icon",
    () => (
      <StandardDropdownButton iconStart={SystemIcons.Close} isFullWidth={true}>
        Full-width
      </StandardDropdownButton>
    ),
    {
      info: {
        propTables: [StandardDropdownButton]
      }
    }
  )
  .add(
    "dropdown with icon",
    () => (
      <StandardDropdownButton iconStart={SystemIcons.Close}>
        Icon dropdown
      </StandardDropdownButton>
    ),
    {
      info: {
        propTables: [StandardDropdownButton]
      }
    }
  )
  .add(
    "dropdown with only an icon",
    () => <StandardDropdownButton iconStart={SystemIcons.Close} />,
    {
      info: {
        propTables: [StandardDropdownButton]
      }
    }
  );
