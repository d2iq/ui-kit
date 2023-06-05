import * as React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { SegmentedControl } from "../index";
import SegmentedControlButton from "../components/SegmentedControlButton";
import SegmentedControlStoryHelper from "./helpers/SegmentedControlStoryHelper";
import { Icon } from "../../icon";
import { SystemIcons } from "../../icons/dist/system-icons-enum";

export default {
  title: "Forms/SegmentedControl",
  component: SegmentedControl
} as Meta;

const Template: StoryFn = args => (
  <SegmentedControlStoryHelper>
    {({ changeHandler, selectedSegment }) => (
      <SegmentedControl
        id="default"
        selectedSegment={selectedSegment}
        onSelect={changeHandler}
      >
        <SegmentedControlButton value="exosphere">
          Exosphere
        </SegmentedControlButton>
        <SegmentedControlButton value="thermosphere">
          Thermosphere
        </SegmentedControlButton>
        <SegmentedControlButton value="mesosphere">
          Mesosphere
        </SegmentedControlButton>
        <SegmentedControlButton value="stratosphere">
          Stratosphere
        </SegmentedControlButton>
      </SegmentedControl>
    )}
  </SegmentedControlStoryHelper>
);

export const Default = {
  render: Template
};

export const WithASelectedSegment = () => (
  <SegmentedControlStoryHelper selectedSegment="exosphere">
    {({ changeHandler, selectedSegment }) => (
      <SegmentedControl
        id="selectedSegment"
        selectedSegment={selectedSegment}
        onSelect={changeHandler}
      >
        <SegmentedControlButton value="exosphere">
          Exosphere
        </SegmentedControlButton>
        <SegmentedControlButton value="thermosphere">
          Thermosphere
        </SegmentedControlButton>
        <SegmentedControlButton value="mesosphere">
          Mesosphere
        </SegmentedControlButton>
        <SegmentedControlButton value="stratosphere">
          Stratosphere
        </SegmentedControlButton>
      </SegmentedControl>
    )}
  </SegmentedControlStoryHelper>
);

export const IconOnlyButtonLabels = () => (
  <SegmentedControlStoryHelper>
    {({ changeHandler, selectedSegment }) => (
      <SegmentedControl
        id="nontextChildren"
        selectedSegment={selectedSegment}
        onSelect={changeHandler}
      >
        <SegmentedControlButton value="list">
          <Icon ariaLabel="list view" shape={SystemIcons.List} size="xs" />
        </SegmentedControlButton>
        <SegmentedControlButton value="charts">
          <Icon ariaLabel="chart view" shape={SystemIcons.Donut} size="xs" />
        </SegmentedControlButton>
      </SegmentedControl>
    )}
  </SegmentedControlStoryHelper>
);

export const WithTooltipContent = () => (
  <SegmentedControlStoryHelper>
    {({ changeHandler, selectedSegment }) => (
      <SegmentedControl
        id="nontextChildren"
        selectedSegment={selectedSegment}
        onSelect={changeHandler}
      >
        <SegmentedControlButton value="list" tooltipContent="Turn on the list">
          <Icon ariaLabel="list view" shape={SystemIcons.List} size="xs" />
        </SegmentedControlButton>
        <SegmentedControlButton
          value="charts"
          tooltipContent="Turn on the charts"
        >
          <Icon ariaLabel="chart view" shape={SystemIcons.Donut} size="xs" />
        </SegmentedControlButton>
      </SegmentedControl>
    )}
  </SegmentedControlStoryHelper>
);

export const CustomSegmentedControlButtonIdProp = () => (
  <SegmentedControlStoryHelper>
    {({ changeHandler, selectedSegment }) => (
      <SegmentedControl
        id="test"
        selectedSegment={selectedSegment}
        onSelect={changeHandler}
      >
        <SegmentedControlButton id="btn.exosphere" value="exosphere">
          Exosphere
        </SegmentedControlButton>
        <SegmentedControlButton id="btn.thermosphere" value="thermosphere">
          Thermosphere
        </SegmentedControlButton>
        <SegmentedControlButton id="btn.mesosphere" value="mesosphere">
          Mesosphere
        </SegmentedControlButton>
        <SegmentedControlButton id="btn.stratosphere" value="stratosphere">
          Stratosphere
        </SegmentedControlButton>
      </SegmentedControl>
    )}
  </SegmentedControlStoryHelper>
);
