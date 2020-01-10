import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import { withKnobs, select } from "@storybook/addon-knobs";
import { ToggleBox, ToggleBoxGroup } from "../index";
import ToggleBoxGroupStoryHelper from "./helpers/ToggleBoxGroupStoryHelper";
import { SpaceSize } from "../../shared/styles/styleUtils/modifiers/modifierUtils";

const readme = require("../README.md");

storiesOf("Forms/ToggleBoxGroup", module)
  .addDecorator(withReadme([readme]))
  .addDecorator(withKnobs)
  .add("default", () => (
    <ToggleBoxGroupStoryHelper>
      {({ changeHandler, selectedItems }) => (
        <ToggleBoxGroup
          onChange={changeHandler}
          selectedItems={selectedItems}
          id="default"
        >
          <ToggleBox id="exosphere" value="exosphere">
            Exosphere
          </ToggleBox>
          <ToggleBox id="thermosphere" value="thermosphere">
            Thermosphere
          </ToggleBox>
          <ToggleBox id="mesosphere" value="mesosphere">
            Mesosphere
          </ToggleBox>
        </ToggleBoxGroup>
      )}
    </ToggleBoxGroupStoryHelper>
  ))
  .add("multiSelect", () => (
    <ToggleBoxGroupStoryHelper>
      {({ changeHandler, selectedItems }) => (
        <ToggleBoxGroup
          onChange={changeHandler}
          selectedItems={selectedItems}
          multiSelect={true}
          id="multiselect"
        >
          <ToggleBox id="exosphere" value="exosphere">
            Exosphere
          </ToggleBox>
          <ToggleBox id="thermosphere" value="thermosphere">
            Thermosphere
          </ToggleBox>
          <ToggleBox id="mesosphere" value="mesosphere">
            Mesosphere
          </ToggleBox>
        </ToggleBoxGroup>
      )}
    </ToggleBoxGroupStoryHelper>
  ))
  .add("with selectedItems", () => (
    <ToggleBoxGroupStoryHelper selectedItems={["exosphere", "thermosphere"]}>
      {({ changeHandler, selectedItems }) => (
        <ToggleBoxGroup
          onChange={changeHandler}
          selectedItems={selectedItems}
          multiSelect={true}
          id="selectedItems"
        >
          <ToggleBox id="exosphere" value="exosphere">
            Exosphere
          </ToggleBox>
          <ToggleBox id="thermosphere" value="thermosphere">
            Thermosphere
          </ToggleBox>
          <ToggleBox id="mesosphere" value="mesosphere">
            Mesosphere
          </ToggleBox>
        </ToggleBoxGroup>
      )}
    </ToggleBoxGroupStoryHelper>
  ))
  .add(
    "custom direction",
    () => {
      const directions = {
        column: "column",
        row: "row",
        columnReverse: "column-reverse",
        rowReverse: "row-reverse"
      };
      const direction = select("directions", directions, "column");

      return (
        <ToggleBoxGroupStoryHelper>
          {({ changeHandler, selectedItems }) => (
            <ToggleBoxGroup
              onChange={changeHandler}
              selectedItems={selectedItems}
              direction={direction as React.CSSProperties["flexDirection"]}
              id="columnDirection"
            >
              <ToggleBox id="exosphere" value="exosphere">
                Exosphere
              </ToggleBox>
              <ToggleBox id="thermosphere" value="thermosphere">
                Thermosphere
              </ToggleBox>
              <ToggleBox id="mesosphere" value="mesosphere">
                Mesosphere
              </ToggleBox>
            </ToggleBoxGroup>
          )}
        </ToggleBoxGroupStoryHelper>
      );
    },
    {
      info: {
        text:
          "Use the knobs panel to customize the direction that the ToggleBoxes are laid out"
      }
    }
  )
  .add(
    "custom gutter size",
    () => {
      const gutterSizes = {
        xxs: "xxs",
        xs: "xs",
        s: "s",
        m: "m",
        l: "l",
        xl: "xl",
        xxl: "xxl",
        none: "none"
      };
      const gutterSize = select("gutterSizes", gutterSizes, "xl");

      return (
        <ToggleBoxGroupStoryHelper>
          {({ changeHandler, selectedItems }) => (
            <ToggleBoxGroup
              onChange={changeHandler}
              selectedItems={selectedItems}
              id="default"
              gutterSize={gutterSize as SpaceSize}
            >
              <ToggleBox id="exosphere" value="exosphere">
                Exosphere
              </ToggleBox>
              <ToggleBox id="thermosphere" value="thermosphere">
                Thermosphere
              </ToggleBox>
              <ToggleBox id="mesosphere" value="mesosphere">
                Mesosphere
              </ToggleBox>
            </ToggleBoxGroup>
          )}
        </ToggleBoxGroupStoryHelper>
      );
    },
    {
      info: {
        text: "Use the knobs panel to customize the spacing between ToggleBoxes"
      }
    }
  );
