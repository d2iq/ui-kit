import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import { BadgeButton } from "../../index";
import { action } from "@storybook/addon-actions";

const BadgeButtonReadme = require("../README.md");

storiesOf("BadgeButton", module)
  .addDecorator(withReadme([BadgeButtonReadme]))
  .addWithInfo("Default", () => (
    <BadgeButton onClick={action("BadgeButton pressed")}>Default</BadgeButton>
  ))
  .addWithInfo("Success", "Represents something positive.", () => (
    <BadgeButton onClick={action("BadgeButton Pressed")} appearance="success">
      Success
    </BadgeButton>
  ))
  .addWithInfo(
    "Primary",
    "Represents something more significant than a default.",
    () => (
      <BadgeButton onClick={action("BadgeButton Pressed")} appearance="primary">
        Primary
      </BadgeButton>
    )
  )
  .addWithInfo(
    "Danger",
    "Represents something in a danger or error state.",
    () => (
      <BadgeButton onClick={action("BadgeButton Pressed")} appearance="danger">
        Danger
      </BadgeButton>
    )
  )
  .addWithInfo(
    "Warning",
    "Represents something that we want to warn the user about but not quite extreme as a danger state.",
    () => (
      <BadgeButton onClick={action("BadgeButton Pressed")} appearance="warning">
        Warning
      </BadgeButton>
    )
  )
  .addWithInfo(
    "Outline",
    "Outline badgeButtons for when we want the density of the badgeButton to be lighter e.g. when next to data in a table cell",
    () => (
      <BadgeButton onClick={action("BadgeButton Pressed")} appearance="outline">
        Outline
      </BadgeButton>
    )
  );
