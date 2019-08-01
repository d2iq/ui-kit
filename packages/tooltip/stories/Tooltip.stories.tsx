import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import { select } from "@storybook/addon-knobs";

import { Tooltip } from "../../index";
import { Direction } from "../../dropdownable/components/Dropdownable";
import { Box } from "../../styleUtils/modifiers";

const readme = require("../README.md");

const tooltipStoryDecorator = storyFn => (
  <div style={{ textAlign: "center" }}>
    <Box display="inline-block">{storyFn()}</Box>
  </div>
);

storiesOf("Tooltip", module)
  .addDecorator(withReadme([readme]))
  .addDecorator(tooltipStoryDecorator)
  .add("default", () => (
    <Tooltip trigger="hover me" id="default">
      content
    </Tooltip>
  ))
  .add("with custom direction", () => {
    const options = {
      BottomLeft: "bottom-left",
      BottomRight: "bottom-right",
      BottomCenter: "bottom-center",
      TopLeft: "top-left",
      TopRight: "top-right",
      TopCenter: "top-center"
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
        preferredDirections={[Direction[getKeyByValue(knobDirection)]]}
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
