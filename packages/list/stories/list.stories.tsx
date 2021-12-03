import * as React from "react";
import { SharedListProps } from "../components/List";
import { List } from "../index";
import { Story, Meta } from "@storybook/react";

const markerStyles = {
  disc: "disc",
  circle: "circle",
  upperRoman: "upper-roman",
  lowerRoman: "lower-roman",
  upperLatin: "upper-latin",
  lowerLatin: "lower-latin"
};
export default {
  title: "Data Listing/List",
  component: List,
  argTypes: {
    markerStyle: {
      options: Object.values(markerStyles),
      control: {
        type: "select"
      }
    }
  }
} as Meta;

const Template: Story<SharedListProps> = args => (
  <List {...args}>
    <li>List Item</li>
    <li>List Item</li>
    <li>List Item</li>
  </List>
);

export const Default = Template.bind({});
