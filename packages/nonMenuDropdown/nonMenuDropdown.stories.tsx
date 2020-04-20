import * as React from "react";
import { storiesOf } from "@storybook/react";
import { select } from "@storybook/addon-knobs";
import { withReadme } from "storybook-readme";
import { NonMenuDropdown } from ".";
import { Direction } from "../dropdownable/components/Dropdownable";
import { PrimaryDropdownButton } from "../button";

const readme = require("./README.md");

storiesOf("Overlays|NonMenuDropdown", module)
  .addDecorator(withReadme([readme]))
  .add("default", () => (
    <NonMenuDropdown
      trigger={<PrimaryDropdownButton>open dropdown</PrimaryDropdownButton>}
    >
      <div>dropdown content</div>
    </NonMenuDropdown>
  ))
  .add("with focusable content", () => (
    <NonMenuDropdown
      trigger={<PrimaryDropdownButton>open dropdown</PrimaryDropdownButton>}
      maxWidth={300}
    >
      <div>
        <p>
          If the dropdown is opened via keyboard navigation,{" "}
          <a href="http://google.com/">this link</a> should get focus first,
          then <a href="http://google.com/">this link</a> should get focus.
        </p>
        <p>Focus should not leave the dropdown until it is closed</p>
      </div>
    </NonMenuDropdown>
  ))
  .add("initialIsOpen", () => (
    <NonMenuDropdown
      initialIsOpen={true}
      trigger={<PrimaryDropdownButton>open dropdown</PrimaryDropdownButton>}
    >
      <div>dropdown content</div>
    </NonMenuDropdown>
  ))
  .add("with custom direction", () => {
    const options = {
      BottomLeft: "bottom-left",
      BottomRight: "bottom-right",
      BottomCenter: "bottom-center",
      TopLeft: "top-left",
      TopRight: "top-right",
      TopCenter: "top-center"
    };

    const knobDirection = select("Direction", options, "BottomLeft");

    function getKeyByValue(value): string {
      return (
        Object.keys(options).find(key => options[key] === value) || "BottomLeft"
      );
    }

    return (
      <NonMenuDropdown
        trigger={<PrimaryDropdownButton>open dropdown</PrimaryDropdownButton>}
        preferredDirections={[Direction[getKeyByValue(knobDirection)]]}
      >
        Use the knobs to change dropdown alignment
      </NonMenuDropdown>
    );
  })
  .add("with maxHeight", () => (
    <NonMenuDropdown
      maxHeight={80}
      trigger={<PrimaryDropdownButton>open dropdown</PrimaryDropdownButton>}
    >
      <div>dropdown content</div>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </p>
    </NonMenuDropdown>
  ))
  .add("with maxWidth", () => (
    <NonMenuDropdown
      maxWidth={300}
      trigger={<PrimaryDropdownButton>open dropdown</PrimaryDropdownButton>}
    >
      <div>dropdown content</div>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </p>
    </NonMenuDropdown>
  ));
