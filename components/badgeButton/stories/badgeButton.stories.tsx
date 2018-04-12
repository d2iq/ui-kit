import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import { BadgeButton } from "../../index";

const BadgeButtonReadme = require("../README.md");

storiesOf("BadgeButton", module)
  .addDecorator(withReadme([BadgeButtonReadme]))
  .addWithInfo(
    "Default",
    () => <BadgeButton>Default</BadgeButton>
  )
  .addWithInfo(
    "Success",
    "Represents something positive.",
    () => <BadgeButton appearance="success">Success</BadgeButton>
  )
  .addWithInfo(
    "Primary",
    "Represents something more significant than a default.",
    () => <BadgeButton appearance="primary">Primary</BadgeButton>
  )
  .addWithInfo(
    "Danger",
    "Represents something in a danger or error state.",
    () => <BadgeButton appearance="danger">Danger</BadgeButton>
  )
  .addWithInfo(
    "Warning",
    "Represents something that we want to warn the user about but not quite extreme as a danger state.",
    () => <BadgeButton appearance="warning">Warning</BadgeButton>
  )
  .addWithInfo(
    "Outline",
    "Outline badgeButtons for when we want the density of the badgeButton to be lighter e.g. when next to data in a table cell",
    () => <BadgeButton appearance="outline">Outline</BadgeButton>
  )
