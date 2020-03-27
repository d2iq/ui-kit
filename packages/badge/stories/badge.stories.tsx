import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import { action } from "@storybook/addon-actions";

import { Badge, BadgeButton } from "../../index";

const readme = require("../README.md");

storiesOf("Graphic elements|Badge", module)
  .addDecorator(withReadme([readme]))
  .add("Default", () => <Badge>Default</Badge>)
  .add("Success", () => <Badge appearance="success">Success</Badge>, {
    info: {
      text: "Represents something positive."
    }
  })
  .add("Primary", () => <Badge appearance="primary">Primary</Badge>, {
    info: {
      text: "Represents something more significant than a default."
    }
  })
  .add("Danger", () => <Badge appearance="danger">Danger</Badge>, {
    info: {
      text: "Represents something in a danger or error state."
    }
  })
  .add("Warning", () => <Badge appearance="warning">Warning</Badge>, {
    info: {
      text:
        "Represents something that we want to warn the user about but not quite extreme as a danger state."
    }
  })
  .add("Outline", () => <Badge appearance="outline">Outline</Badge>, {
    info: {
      text:
        "Outline badges for when we want the density of the badge to be lighter e.g. when next to data in a table cell"
    }
  })
  .add(
    "Button",
    () => (
      <BadgeButton onClick={action("badge button")}>badge button</BadgeButton>
    ),
    {
      info: {
        text: "Button badges for when we want add click event"
      }
    }
  );
