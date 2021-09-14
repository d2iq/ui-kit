import * as React from "react";
import { ToggleBox } from "../index";
import ToggleBoxStoryHelper from "./helpers/ToggleBoxStoryHelper";

export default {
  title: "Forms/ToggleBox",
  component: ToggleBox
};

export const Default = () => (
  <ToggleBoxStoryHelper>
    {({ isActive, changeHandler }) => (
      <ToggleBox
        value="default"
        id="default"
        isActive={isActive}
        onChange={changeHandler}
      >
        default
      </ToggleBox>
    )}
  </ToggleBoxStoryHelper>
);

export const IsActive = () => (
  <ToggleBoxStoryHelper isActive={true}>
    {({ isActive, changeHandler }) => (
      <ToggleBox
        value="isActive"
        id="isActive"
        isActive={isActive}
        onChange={changeHandler}
      >
        isActive
      </ToggleBox>
    )}
  </ToggleBoxStoryHelper>
);

export const Disabled = () => (
  <ToggleBoxStoryHelper>
    {({ isActive, changeHandler }) => (
      <ToggleBox
        value="disabled"
        id="disabled"
        isActive={isActive}
        onChange={changeHandler}
        disabled={true}
      >
        disabled
      </ToggleBox>
    )}
  </ToggleBoxStoryHelper>
);
