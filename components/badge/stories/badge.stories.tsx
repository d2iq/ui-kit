import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import { action } from '@storybook/addon-actions';
import { Badge } from "../../index";

const BadgeReadme = require("../README.md");

storiesOf("Badge", module)
  .addDecorator(withReadme([BadgeReadme]))
  .addWithInfo(
    "Default",
    () => <Badge>Default</Badge>
  )
  .addWithInfo(
    "Success",
    "Represents something positive.",
    () => <Badge appearance="success">Success</Badge>
  )
  .addWithInfo(
    "Primary",
    "Represents something more significant than a default.",
    () => <Badge appearance="primary">Primary</Badge>
  )
  .addWithInfo(
    "Danger",
    "Represents something in a danger or error state.",
    () => <Badge appearance="danger">Danger</Badge>
  )
  .addWithInfo(
    "Warning",
    "Represents something that we want to warn the user about but not quite extreme as a danger state.",
    () => <Badge appearance="warning">Warning</Badge>
  )
  .addWithInfo(
    "Outline",
    "Outline badges for when we want the density of the badge to be lighter e.g. when next to data in a table cell",
    () => <Badge appearance="outline">Outline</Badge>
  )
  .addWithInfo(
    "OnClick event",
    () => <Badge onClick={action("OnClick event")}>onClick</Badge>
  )
