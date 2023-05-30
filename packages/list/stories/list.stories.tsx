import * as React from "react";
import { StoryFn, Meta } from "@storybook/react";
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

const Template: StoryFn = args => (
  <List {...args}>
    <li>List item</li>
    <li>List item</li>
    <li>List item</li>
  </List>
);

export const Default = {
  render: Template
};

export const NestedWithItemMarkers = {
  render: args => (
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
  )
};
