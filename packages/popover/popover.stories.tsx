import * as React from "react";
import { Story, Meta } from "@storybook/react";

import { Popover } from "../";
import { PrimaryDropdownButton } from "../button";
import { PopoverProps } from "./components/PopoverBox";
import {
  directionsValues,
  directionsValuesLabels
} from "../storybookHelpers/controlConstants";

export default {
  title: "Overlays/Popover",
  decorators: [Story => <div style={{ padding: "4em" }}>{Story()}</div>],
  component: Popover,
  argTypes: {
    preferredDirections: {
      options: directionsValues,
      mapping: directionsValuesLabels
    },
    trigger: {
      control: { disable: true }
    },
    ariaLabel: {
      control: { disable: true }
    },
    id: {
      control: { disable: true }
    },
    "data-cy": {
      control: { disable: true }
    }
  }
} as Meta;

const Template: Story<PopoverProps> = args => (
  <Popover
    trigger={<PrimaryDropdownButton>Open Popover</PrimaryDropdownButton>}
    {...args}
  >
    <div>Dropdown Content</div>
  </Popover>
);

export const Default = Template.bind({});

export const InitialIsOpen = Template.bind({});
InitialIsOpen.args = {
  initialIsOpen: true
};

export const WithMaxHeight = args => (
  <Popover
    maxHeight={80}
    trigger={<PrimaryDropdownButton>open popover</PrimaryDropdownButton>}
    {...args}
  >
    <div>dropdown content</div>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged.
    </p>
  </Popover>
);

export const WithMaxWidth = args => (
  <Popover
    maxWidth={300}
    trigger={<PrimaryDropdownButton>open popover</PrimaryDropdownButton>}
    {...args}
  >
    <div>dropdown content</div>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged.
    </p>
  </Popover>
);
