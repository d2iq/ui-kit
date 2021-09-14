import * as React from "react";
import { select } from "@storybook/addon-knobs";

import { Tooltip } from "../../index";
import Dropdownable, {
  Direction
} from "../../dropdownable/components/Dropdownable";
import { Box } from "../../styleUtils/modifiers";
import { Card } from "../../card";

const tooltipStoryDecorator = storyFn => (
  <div style={{ textAlign: "center" }}>
    <Box display="inline-block">{storyFn()}</Box>
  </div>
);

export default {
  title: "Overlays/Tooltip",
  decorators: [
    tooltipStoryDecorator,
    Story => (
      <div style={{ margin: "4em" }}>
        <Story />
      </div>
    )
  ],
  component: Tooltip
};

export const Default = () => (
  <Tooltip trigger="hover me" id="default">
    content
  </Tooltip>
);

export const MountedInsideDropdown = () => (
  <div>
    <Dropdownable
      isOpen={true}
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
  </div>
);

MountedInsideDropdown.storyName =
  "Mounted inside dropdown (does not portal to document.body)";

export const WithCustomDirection = () => {
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
};

export const DefaultMaxWidth = () => (
  <Tooltip trigger="if not provided, maxWidth defaults to 300" id="maxWidth">
    since my content is wider than 300px, it will wrap so that tooltip does not
    exceed a width of 300px by default
  </Tooltip>
);

export const MinOrMaxWidth = () => (
  <>
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
  </>
);

export const ContentWidth = () => (
  <Tooltip
    trigger="if maxWidth is null, tooltip width will expand to fit content"
    id="maxWidth"
    maxWidth={null}
  >
    sometimes I may want my tooltip to take up as much width as the content
    needs without having the default maxWidth
  </Tooltip>
);

export const SuppressToggle = () => (
  <Tooltip trigger="hover me" id="suppress" isOpen={true} suppress={true}>
    I won't toggle open and closed
  </Tooltip>
);
