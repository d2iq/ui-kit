import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
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

const readme = require("../README.md");

storiesOf("Actions|Default button", module)
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
    "with icon before button text",
    () => (
      <StandardButton iconStart={SystemIcons.Close}>Icon button</StandardButton>
    ),
    {
      info: {
        propTables: [StandardButton]
      }
    }
  )
  .add(
    "with icon before button text",
    () => (
      <StandardButton iconStart={SystemIcons.Close}>Icon button</StandardButton>
    ),
    {
      info: {
        propTables: [StandardButton]
      }
    }
  )
  .add(
    "only an icon",
    () => <StandardButton ariaLabel="Close" iconStart={SystemIcons.Close} />,
    {
      info: {
        propTables: [StandardButton]
      }
    }
  )
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
      <StandardButton isFullWidth={true} iconStart={SystemIcons.Close}>
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
    "with onFocus and onBlur",
    () => (
      <StandardButton
        onFocus={action("Button focused")}
        onBlur={action("Button blured")}
      >
        Focus me
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
    () => {
      const spacingBoxProps = {
        spacingSize: "xxl" as SpaceSize,
        side: "bottom" as BoxSides
      };
      return (
        <React.Fragment>
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
        </React.Fragment>
      );
    },
    {
      info: {
        propTablesExclude: [SpacingBox, React.Fragment]
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
