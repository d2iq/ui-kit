import * as React from "react";
import { withKnobs, select } from "@storybook/addon-knobs";
import { ToggleBox, ToggleBoxGroup } from "../index";
import ToggleBoxGroupStoryHelper from "./helpers/ToggleBoxGroupStoryHelper";
import { SpaceSize } from "../../shared/styles/styleUtils/modifiers/modifierUtils";

export default {
  title: "Forms/ToggleBoxGroup",
  decorators: [withKnobs],
  component: ToggleBoxGroup
};

export const Default = () => (
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
);

export const WithLabel = () => (
  <ToggleBoxGroupStoryHelper>
    {({ changeHandler, selectedItems }) => (
      <ToggleBoxGroup
        onChange={changeHandler}
        selectedItems={selectedItems}
        id="withLabel"
        label="Atmosphere layer"
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

export const MultiSelect = () => (
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
);

export const WithSelectedItems = () => (
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
);

export const CustomDirection = () => {
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
};

export const CustomGutterSize = () => {
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
};
