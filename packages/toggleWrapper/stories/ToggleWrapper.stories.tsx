import * as React from "react";
import { ToggleWrapper } from "../index";

export default {
  title: "Utils/ToggleWrapper",
  component: ToggleWrapper
};

export const Default = () => (
  <ToggleWrapper>
    {({ isActive }) => (
      <div>
        the isActive render prop returns:
        <pre>{`${isActive}`}</pre>
      </div>
    )}
  </ToggleWrapper>
);

export const IsActive = () => (
  <ToggleWrapper isActive={true}>
    {({ isActive }) => (
      <div>
        the isActive render prop returns:
        <pre>{`${isActive}`}</pre>
      </div>
    )}
  </ToggleWrapper>
);
