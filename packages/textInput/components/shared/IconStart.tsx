import { cx } from "@emotion/css";
import React from "react";
import { IconShapes } from "../../../icon/components/Icon";
import IconPropAdapter from "../../../icon/components/IconPropAdapter";
import {
  getIconAppearanceStyle,
  inputIconWrapper
} from "../../../shared/styles/formStyles";
import { padding, flex, flexItem } from "../../../shared/styles/styleUtils";

interface IconStartProps {
  iconStart?: IconShapes | React.ReactElement<HTMLElement>;
  appearance: string;
}

export const IconStart = ({ iconStart, appearance }: IconStartProps) => {
  if (!iconStart) {
    return null;
  }

  const iconStartClasses = cx(
    padding("right", "xs"),
    flex({ align: "center", justify: "center" }),
    flexItem("shrink"),
    getIconAppearanceStyle(appearance),
    inputIconWrapper
  );

  return (
    <span className={iconStartClasses}>
      <IconPropAdapter icon={iconStart} size="xs" color="inherit" />
    </span>
  );
};
