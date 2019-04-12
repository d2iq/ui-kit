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
import { CloseIcon } from "../../shared/icons";

const readme = require("../README.md");

storiesOf("Buttons/Dropdown", module)
  .addDecorator(withReadme([readme]))
  .addParameters({
    info: {
      propTablesExclude: [ButtonAppearanceSample]
    }
  })
  .add(
    "PrimaryDropdownButton",
    () => <ButtonAppearanceSample buttonComponent={PrimaryDropdownButton} />,
    {
      info: {
        propTables: [PrimaryDropdownButton]
      }
    }
  )
  .add(
    "SecondaryDropdownButton",
    () => <ButtonAppearanceSample buttonComponent={SecondaryDropdownButton} />,
    {
      info: {
        propTables: [SecondaryDropdownButton]
      }
    }
  )
  .add(
    "StandardDropdownButton",
    () => <ButtonAppearanceSample buttonComponent={StandardDropdownButton} />,
    {
      info: {
        propTables: [StandardDropdownButton]
      }
    }
  )
  .add(
    "SuccessDropdownButton",
    () => <ButtonAppearanceSample buttonComponent={SuccessDropdownButton} />,
    {
      info: {
        propTables: [SuccessDropdownButton]
      }
    }
  )
  .add(
    "DangerDropdownButton",
    () => <ButtonAppearanceSample buttonComponent={DangerDropdownButton} />,
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
      <StandardDropdownButton iconStart={<CloseIcon />} isFullWidth={true}>
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
      <StandardDropdownButton iconStart={<CloseIcon />}>
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
    () => <StandardDropdownButton iconStart={<CloseIcon />} />,
    {
      info: {
        propTables: [StandardDropdownButton]
      }
    }
  );
