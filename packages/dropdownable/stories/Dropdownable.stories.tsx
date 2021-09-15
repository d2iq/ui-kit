import * as React from "react";
import { select } from "@storybook/addon-knobs";

import Dropdownable, { Direction } from "../components/Dropdownable";
import DropdownStory from "./helpers/DropdownStory";
import DropdownStoryFit from "./helpers/DropdownStoryFit";

export default {
  title: "Utils/Dropdownable",
  component: Dropdownable
};

export const WithCustomDirection = () => {
  const options = {
    BottomLeft: "bottom-start",
    BottomRight: "bottom-end",
    TopLeft: "top-start",
    TopRight: "top-end"
  };

  const knobDirection = select("Direction", options, "BottomLeft");

  function getKeyByValue(value): string {
    return (
      Object.keys(options).find(key => options[key] === value) || "BottomLeft"
    );
  }

  return (
    <DropdownStory
      preferredDirections={[Direction[getKeyByValue(knobDirection)]]}
    >
      Change dropdown orientation using knobs
    </DropdownStory>
  );
};

export const WithMultipleDirectionPreferences = () => {
  return (
    <DropdownStoryFit>
      Open the dropdown before and after expanding the height
    </DropdownStoryFit>
  );
};
