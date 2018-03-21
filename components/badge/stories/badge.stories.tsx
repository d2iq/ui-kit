import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import Badge from "../badge";

const BadgeReadme = require("../README.md");

storiesOf("Badge", module)
  .addDecorator(withReadme([BadgeReadme]))
  .addWithInfo("default", () => <Badge>default</Badge>)
  .addWithInfo("success", () => <Badge appearance="success">success</Badge>)
  .addWithInfo("information", () => <Badge appearance="information">information</Badge>)
  .addWithInfo("warning", () => <Badge appearance="warning">warning</Badge>)
  .addWithInfo("danger", () => <Badge appearance="danger">danger</Badge>)
