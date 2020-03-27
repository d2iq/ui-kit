import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, select } from "@storybook/addon-knobs";
import { withReadme } from "storybook-readme";
import { List } from "../index";

const readme = require("../README.md");

storiesOf("Data listing|List", module)
  .addDecorator(withReadme([readme]))
  .addDecorator(withKnobs)
  .add("default", () => (
    <List>
      <li>List item</li>
      <li>List item</li>
      <li>List item</li>
    </List>
  ))
  .add("markerStyle", () => {
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
  })
  .add("nested with item markers", () => (
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
  ));
