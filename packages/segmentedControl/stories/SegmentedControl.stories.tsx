import * as React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { SegmentedControl } from "../index";
import SegmentedControlButton from "../components/SegmentedControlButton";
import { Icon } from "../../icon";
import { SystemIcons } from "../../icons/dist/system-icons-enum";

export default {
  title: "Forms/SegmentedControl",
  component: SegmentedControl
} as Meta;

const Template: StoryFn = args => {
  const [selectedSegment, setSelectedSegment] = React.useState<string>("");

  const handleChange = value => {
    setSelectedSegment(value);
  };

  return (
    <SegmentedControl
      id="default"
      selectedSegment={selectedSegment}
      onSelect={handleChange}
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
  );
};

export const Default = {
  render: Template
};

export const WithASelectedSegment = () => {
  const [selectedSegment, setSelectedSegment] =
    React.useState<string>("exosphere");

  const handleChange = value => {
    setSelectedSegment(value);
  };

  return (
    <SegmentedControl
      id="selectedSegment"
      selectedSegment={selectedSegment}
      onSelect={handleChange}
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
  );
};

export const IconOnlyButtonLabels = () => {
  const [selectedSegment, setSelectedSegment] = React.useState<string>("");

  const handleChange = value => {
    setSelectedSegment(value);
  };

  return (
    <SegmentedControl
      id="nontextChildren"
      selectedSegment={selectedSegment}
      onSelect={handleChange}
    >
      <SegmentedControlButton value="list">
        <Icon ariaLabel="list view" shape={SystemIcons.List} size="xs" />
      </SegmentedControlButton>
      <SegmentedControlButton value="charts">
        <Icon ariaLabel="chart view" shape={SystemIcons.Donut} size="xs" />
      </SegmentedControlButton>
    </SegmentedControl>
  );
};

export const WithTooltipContent = () => {
  const [selectedSegment, setSelectedSegment] = React.useState<string>("");

  const handleChange = value => {
    setSelectedSegment(value);
  };

  return (
    <SegmentedControl
      id="nontextChildren"
      selectedSegment={selectedSegment}
      onSelect={handleChange}
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
  );
};

export const CustomSegmentedControlButtonIdProp = () => {
  const [selectedSegment, setSelectedSegment] = React.useState<string>("");

  const handleChange = value => {
    setSelectedSegment(value);
  };

  return (
    <SegmentedControl
      id="test"
      selectedSegment={selectedSegment}
      onSelect={handleChange}
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
  );
};
