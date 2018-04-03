import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
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
    () => <Badge theme="success">Success</Badge>
  )
  .addWithInfo(
    "Primary",
    "Represents something more significant than a default.",
    () => <Badge theme="primary">Primary</Badge>
  )
  .addWithInfo(
    "Danger",
    "Represents something in a danger or error state.",
    () => <Badge theme="danger">Danger</Badge>
  )
  .addWithInfo(
    "Warning",
    "Represents something that we want to warn the user about but not quite extreme as a danger state.",
    () => <Badge theme="warning">Warning</Badge>
  )
  .addWithInfo(
    "Outline",
    "Outline badges for when we want the density of the badge to be lighter e.g. when next to data in a table cell",
    () => <Badge theme="outline">Outline</Badge>
  )
