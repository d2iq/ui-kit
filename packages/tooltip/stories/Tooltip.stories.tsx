import * as React from "react";
import { Tooltip } from "../../index";
import Dropdownable, {
  Direction
} from "../../dropdownable/components/Dropdownable";
import { Box } from "../../styleUtils/modifiers";
import { Card } from "../../card";
import { StoryFn, Meta } from "@storybook/react";
import { TooltipProps } from "../components/Tooltip";
import {
  directionsValues,
  directionsValuesLabels
} from "../../storybookHelpers/controlConstants";
import TooltipIcon from "../components/TooltipIcon";

const tooltipStoryDecorator = storyFn => (
  <div style={{ textAlign: "center" }}>
    <Box display="inline-block">{storyFn()}</Box>
  </div>
);

export default {
  title: "Overlays/Tooltip",
  component: Tooltip,
  decorators: [
    tooltipStoryDecorator,
    Story => <div style={{ margin: "4em" }}>{Story()}</div>
  ],
  argTypes: {
    preferredDirections: {
      options: directionsValues,
      mapping: directionsValuesLabels
    }
  }
} as Meta;

const Template: StoryFn<TooltipProps> = args => (
  <Tooltip id="default" {...args}>
    Tooltip Content
  </Tooltip>
);

export const Default = {
  render: Template,
  args: { trigger: "Hover Me" }
};

export const MountedInsideDropdown = {
  render: args => (
    <div>
      <Dropdownable
        isOpen={true}
        dropdown={
          <Card>
            <Tooltip
              trigger="Hover Me"
              id="default"
              disablePortal={true}
              {...args}
            >
              Tooltip Content
            </Tooltip>
          </Card>
        }
      >
        Dropdown Trigger
      </Dropdownable>
    </div>
  )
};

export const DefaultMaxWidth = {
  render: args => (
    <Tooltip
      trigger="If not provided, maxWidth defaults to 300."
      id="maxWidth"
      {...args}
    >
      since my content is wider than 300px, it will wrap so that tooltip does
      not exceed a width of 300px by default
    </Tooltip>
  )
};

export const MinOrMaxWidth = {
  render: args => (
    <>
      <div style={{ marginBottom: "1em" }}>
        <Tooltip
          trigger="maxWidth 100px"
          id="maxWidth"
          maxWidth={100}
          {...args}
        >
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
  )
};

export const ContentWidth = {
  render: args => (
    <Tooltip
      trigger="if maxWidth is null, tooltip width will expand to fit content"
      id="maxWidth"
      maxWidth={null}
      {...args}
    >
      sometimes I may want my tooltip to take up as much width as the content
      needs without having the default maxWidth
    </Tooltip>
  )
};

export const WithTooltipIcon = {
  render: Template,
  args: { trigger: <TooltipIcon /> }
};
