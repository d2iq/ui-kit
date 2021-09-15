import React from "react";
import Clickable from "../components/clickable";
import { action } from "@storybook/addon-actions";

export default {
  title: "Utils/Clickable",
  component: Clickable
};

export const Default = () => (
  <Clickable action={action("action trigger")} tabIndex="0">
    <span>Click me!</span>
  </Clickable>
);
