import * as React from "react";
import InlineBorderedItems, {
  InlineBorderedItemsProps
} from "../components/InlineBorderedItems";
import { StoryFn, Meta } from "@storybook/react";

export default {
  title: "Layout/InlineBorderedItems",
  component: InlineBorderedItems,
  argTypes: {
    gutterSize: {
      options: ["s", "m", "l", "xl"],
      control: {
        type: "select"
      }
    }
  }
} as Meta;

const Template: StoryFn<InlineBorderedItemsProps> = args => (
  <InlineBorderedItems {...args}>
    <span>3 Clusters</span>
    <span>+2 Added</span>
    <span>-1 Removed</span>
  </InlineBorderedItems>
);

export const Default = {
  render: Template
};
