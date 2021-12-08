import * as React from "react";
import InlineBorderedItems, {
  InlineBorderedItemsProps
} from "../components/InlineBorderedItems";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Layout/InlineBorderedItems",
  component: InlineBorderedItems,
  argTypes: {
    gutterSize: {
      options: ["s", "m", "l", "xl"],
      control: {
        type: "select"
      },
      defaultValue: "s"
    }
  }
} as Meta;

const Template: Story<InlineBorderedItemsProps> = args => (
  <InlineBorderedItems {...args}>
    <span>3 Clusters</span>
    <span>+2 Added</span>
    <span>-1 Removed</span>
  </InlineBorderedItems>
);

export const Default = Template.bind({});
