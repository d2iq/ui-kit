import * as React from "react";
import { BorderedList } from "../index";

export default {
  title: "Data Listing/BorderedList",
  component: BorderedList
};

export const Default = () => (
  <BorderedList tag="ul">
    <li>List item</li>
    <li>List item</li>
    <li>List item</li>
  </BorderedList>
);
