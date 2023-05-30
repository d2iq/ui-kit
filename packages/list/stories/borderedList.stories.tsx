import * as React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { BorderedList } from "../index";

export default {
  title: "Data Listing/BorderedList",
  component: BorderedList
} as Meta;

const Template: StoryFn = args => (
  <BorderedList tag="ul" {...args}>
    <li>List Item</li>
    <li>List Item</li>
    <li>List Item</li>
  </BorderedList>
);

export const Default = {
  render: Template
};
