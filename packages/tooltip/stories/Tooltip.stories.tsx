import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import { select } from "@storybook/addon-knobs";

import { Tooltip } from "../../index";
import Dropdownable, {
  Direction
} from "../../dropdownable/components/Dropdownable";
import { Box } from "../../styleUtils/modifiers";
import { Card } from "../../card";

const readme = require("../README.md");

const tooltipStoryDecorator = storyFn => (
  <div style={{ textAlign: "center" }}>
    <Box display="inline-block">{storyFn()}</Box>
  </div>
);

storiesOf("Overlays|Tooltip", module)
  .addDecorator(withReadme([readme]))
  .addDecorator(tooltipStoryDecorator)
  .add("default", () => (
    <Tooltip trigger="hover me" id="default">
      content
    </Tooltip>
  ))
  .add("mounted inside dropdown (does not portal to document.body)", () => (
    <Dropdownable
      open={true}
      dropdown={
        <Card>
          <Tooltip trigger="hover me" id="default" disablePortal={true}>
            content
          </Tooltip>
        </Card>
      }
    >
      Dropdown trigger
    </Dropdownable>
  ))
  .add("with custom direction", () => {
    const options = {
      BottomLeft: "bottom-start",
      BottomRight: "bottom-end",
      BottomCenter: "bottom",
      TopLeft: "top-start",
      TopRight: "top-end",
      TopCenter: "top"
    };

    const knobDirection = select("Direction", options, "BottomLeft");

    function getKeyByValue(value): string {
      return (
        Object.keys(options).find(key => options[key] === value) || "BottomLeft"
      );
    }

    return (
      <Tooltip
        trigger="hover me"
        id="customDir"
        preferredDirections={Direction[getKeyByValue(knobDirection)]}
      >
        Use the knobs to change tooltip alignment
      </Tooltip>
    );
  })
  .add("min or max width", () => (
    <React.Fragment>
      <div style={{ marginBottom: "1em" }}>
        <Tooltip trigger="maxWidth 100px" id="maxWidth" maxWidth={100}>
          content that is greater than 100px
        </Tooltip>
      </div>
      <Tooltip
        trigger="minWidth 200px"
        id="minWidth"
        minWidth={200}
        preferredDirections={[Direction.BottomCenter]}
      >
        content
      </Tooltip>
    </React.Fragment>
  ))
  .add("suppress toggle", () => (
    <Tooltip trigger="hover me" id="suppress" open={true} suppress={true}>
      I won't toggle open and closed
    </Tooltip>
  ));
