import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import { select } from "@storybook/addon-knobs";

const readme = require("../README.md");

import Dropdownable, { Direction } from "../components/Dropdownable";
import DropdownStory from "./helpers/DropdownStory";
import DropdownStoryFit from "./helpers/DropdownStoryFit";

storiesOf("Dropdownable", module)
  .addDecorator(withReadme([readme]))
  .addParameters({
    info: {
      propTablesExclude: [DropdownStory, DropdownStoryFit]
    }
  })
  .add(
    "with custom direction",
    () => {
      const options = {
        BottomLeft: "bottom-left",
        BottomRight: "bottom-right",
        TopLeft: "top-left",
        TopRight: "top-right"
      };

      const knobDirection = select("Direction", options, "BottomLeft");

      function getKeyByValue(value): string {
        return (
          Object.keys(options).find(key => options[key] === value) ||
          "BottomLeft"
        );
      }

      return (
        <DropdownStory
          preferredDirections={[Direction[getKeyByValue(knobDirection)]]}
        >
          Change dropdown orientation using knobs
        </DropdownStory>
      );
    },
    {
      info: {
        propTables: [Dropdownable]
      }
    }
  )
  .add(
    "with multiple direction preferences",
    () => {
      return (
        <DropdownStoryFit>
          Open the dropdown before and after expanding the height
        </DropdownStoryFit>
      );
    },
    {
      info: {
        propTables: [Dropdownable]
      }
    }
  );
