import * as React from "react";
import { Story, Meta } from "@storybook/react";
import { List } from "../index";

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
  component: List
} as Meta;

const Template: Story = args => (
  <List {...args}>
    <li>List item</li>
    <li>List item</li>
    <li>List item</li>
  </List>
);

export const Default = Template.bind({});

export const NestedWithItemMarkers = args => (
  <List markerStyle="disc">
    <li>List item</li>
    <li>List item</li>
    <li>
      Nested List
      <List markerStyle="circle" {...args}>
        <li>List item</li>
        <li>List item</li>
        <li>List item</li>
      </List>
    </li>
    <li>List item</li>
    <li>List item</li>
  </List>
);
