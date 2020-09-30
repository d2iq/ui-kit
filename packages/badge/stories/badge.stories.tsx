import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import { action } from "@storybook/addon-actions";
import { select, withKnobs } from "@storybook/addon-knobs";
import { ColorCodedBadge } from "../";
import {
  textColorPrimary,
  textColorSecondary,
  red,
  yellow,
  green,
  blue,
  purple
} from "../../design-tokens/build/js/designTokens";
import { SystemIcons } from "../../icons/dist/system-icons-enum";

import { Badge, BadgeButton } from "../../index";

const readme = require("../README.md");

const colors = {
  textColorPrimary,
  textColorSecondary,
  red,
  yellow,
  green,
  blue,
  purple
};

const shapes = {
  ["SystemIcons.CircleCheck"]: SystemIcons.CircleCheck,
  ["SystemIcons.Check"]: SystemIcons.Check,
  ["SystemIcons.Close"]: SystemIcons.Close,
  ["SystemIcons.Folder"]: SystemIcons.Folder,
  ["SystemIcons.Gear"]: SystemIcons.Gear,
  ["SystemIcons.Services"]: SystemIcons.Services,
  ["SystemIcons.Users"]: SystemIcons.Users
};

storiesOf("Graphic elements|Badge", module)
  .addDecorator(withReadme([readme]))
  .addDecorator(withKnobs)
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
    "BadgeButton",
    () => (
      <BadgeButton onClick={action("badge button")}>badge button</BadgeButton>
    ),
    {
      info: {
        text: "Button badges for when we want add click event"
      }
    }
  )
  .add("ColorCodedBadge", () => {
    const color = select("Color", colors, blue);
    return (
      <>
        <p>Use Storybook's knobs to change the color</p>
        <ColorCodedBadge color={color}>Color coded topic</ColorCodedBadge>
      </>
    );
  })
  .add("ColorCodedBadge w/ icon", () => {
    const color = select("Color", colors, blue);
    const shape = select("Shape", shapes, SystemIcons.CircleCheck);
    return (
      <>
        <p>Use Storybook's knobs to change the color or icon</p>
        <ColorCodedBadge color={color} iconShape={shape}>
          Default
        </ColorCodedBadge>
      </>
    );
  });
