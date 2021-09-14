import * as React from "react";
import { withKnobs, select } from "@storybook/addon-knobs";
import { List } from "../index";

export default {
  title: "Data Listing/List",
  decorators: [withKnobs],
  component: List
};

export const Default = () => (
  <List>
    <li>List item</li>
    <li>List item</li>
    <li>List item</li>
  </List>
);

export const MarkerStyle = () => {
  const markerStyles = {
    disc: "disc",
    circle: "circle",
    upperRoman: "upper-roman",
    lowerRoman: "lower-roman",
    upperLatin: "upper-latin",
    lowerLatin: "lower-latin"
  };
  const markerStyle = select("align", markerStyles, "disc");

  return (
    <List markerStyle={markerStyle}>
      <li>List item</li>
      <li>List item</li>
      <li>List item</li>
    </List>
  );
};

export const NestedWithItemMarkers = () => (
  <List markerStyle="disc">
    <li>List item</li>
    <li>List item</li>
    <li>
      Nested List
      <List markerStyle="circle">
        <li>List item</li>
        <li>List item</li>
        <li>List item</li>
      </List>
    </li>
    <li>List item</li>
    <li>List item</li>
  </List>
);
