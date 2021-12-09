import * as React from "react";
import { Story, Meta } from "@storybook/react";

import Dropdownable from "../components/Dropdownable";
import DropdownStory from "./helpers/DropdownStory";
import DropdownStoryFit from "./helpers/DropdownStoryFit";

export default {
  title: "Utils/Dropdownable",
  component: Dropdownable,
  argTypes: {
    preferredDirections: {
      options: ["bottom-start", "bottom-end", "top-start", "top-end"],
      control: {
        type: "select"
      }
    },
    dropdown: {
      control: { disable: true }
    },
    overlayRoot: {
      control: { disable: true }
    },
    className: {
      control: { disable: true }
    },
    "data-cy": {
      control: { disable: true }
    }
  }
} as Meta;

const Template: Story = args => (
  <DropdownStory {...args}>
    Change dropdown orientation using Controls
  </DropdownStory>
);

export const Default = Template.bind({});
export const WithMultipleDirectionPreferences = args => {
  return (
    <DropdownStoryFit {...args}>
      Open the dropdown before and after expanding the height
    </DropdownStoryFit>
  );
};
