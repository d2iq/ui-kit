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
      propTablesExclude: [ButtonAppearanceSample]
    }
  })
  .add(
    "PrimaryButton",
    () => <ButtonAppearanceSample buttonComponent={PrimaryButton} />,
    {
      info: {
        propTables: [PrimaryButton]
      }
    }
  )
  .add(
    "SecondaryButton",
    () => <ButtonAppearanceSample buttonComponent={SecondaryButton} />,
    {
      info: {
        propTables: [SecondaryButton]
      }
    }
  )
  .add(
    "StandardButton",
    () => <ButtonAppearanceSample buttonComponent={StandardButton} />,
    {
      info: {
        propTables: [StandardButton]
      }
    }
  )
  .add(
    "SuccessButton",
    () => <ButtonAppearanceSample buttonComponent={SuccessButton} />,
    {
      info: {
        propTables: [SuccessButton]
      }
    }
  )
  .add(
    "DangerButton",
    () => <ButtonAppearanceSample buttonComponent={DangerButton} />,
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
  );
