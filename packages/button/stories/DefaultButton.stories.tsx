import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import {
  PrimaryButton,
  SecondaryButton,
  StandardButton,
  SuccessButton,
  DangerButton
} from "../../index";
import ButtonAppearanceSample from "./helpers/ButtonAppearanceSample";
import { CloseIcon } from "../../shared/icons";
import { action } from "@storybook/addon-actions";

const readme = require("../README.md");

storiesOf("Buttons/Default", module)
  .addDecorator(withReadme([readme]))
  .addParameters({
    info: {
      propTablesExclude: [ButtonAppearanceSample, React.Fragment]
    }
  })
  .add(
    "PrimaryButton",
    () => (
      <React.Fragment>
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
      </React.Fragment>
    ),
    {
      info: {
        propTables: [PrimaryButton]
      }
    }
  )
  .add(
    "SecondaryButton",
    () => (
      <React.Fragment>
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
      </React.Fragment>
    ),
    {
      info: {
        propTables: [SecondaryButton]
      }
    }
  )
  .add(
    "StandardButton",
    () => (
      <React.Fragment>
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
      </React.Fragment>
    ),
    {
      info: {
        propTables: [StandardButton]
      }
    }
  )
  .add(
    "SuccessButton",
    () => (
      <React.Fragment>
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
      </React.Fragment>
    ),
    {
      info: {
        propTables: [SuccessButton]
      }
    }
  )
  .add(
    "DangerButton",
    () => (
      <React.Fragment>
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
      </React.Fragment>
    ),
    {
      info: {
        propTables: [DangerButton]
      }
    }
  )
  .add(
    "with icon",
    () => (
      <StandardButton iconStart={<CloseIcon />}>Icon button</StandardButton>
    ),
    {
      info: {
        propTables: [StandardButton]
      }
    }
  )
  .add("only an icon", () => <StandardButton iconStart={<CloseIcon />} />, {
    info: {
      propTables: [StandardButton]
    }
  })
  .add(
    "full-width",
    () => <StandardButton isFullWidth={true}>Full-width</StandardButton>,
    {
      info: {
        propTables: [StandardButton]
      }
    }
  )
  .add(
    "full-width with icon",
    () => (
      <StandardButton isFullWidth={true} iconStart={<CloseIcon />}>
        Full-width
      </StandardButton>
    ),
    {
      info: {
        propTables: [StandardButton]
      }
    }
  )
  .add(
    "with onClick",
    () => (
      <StandardButton onClick={action("Button pressed")}>
        Click me
      </StandardButton>
    ),
    {
      info: {
        propTables: [StandardButton]
      }
    }
  )
  .add(
    "used as a link",
    () => (
      <React.Fragment>
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
      </React.Fragment>
    ),
    {
      info: {
        propTables: [StandardButton]
      }
    }
  )
  .add(
    "used as a link that opens in a new tab",
    () => (
      <React.Fragment>
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
      </React.Fragment>
    ),
    {
      info: {
        propTables: [StandardButton]
      }
    }
  );
