import { cx } from "@emotion/css";
import React from "react";
import IconPropAdapter from "../../../icon/components/IconPropAdapter";
import {
  getIconAppearanceStyle,
  inputIconWrapper
} from "../../../shared/styles/formStyles";
import { flex, flexItem, flush } from "../../../shared/styles/styleUtils";

interface IconEndProps {
  iconEnd?: string;
  appearance: string;
}

export const IconEnd = ({ iconEnd, appearance }: IconEndProps) => {
  if (!iconEnd) {
    return null;
  }

  const iconEndClasses = cx(
    flex({ align: "center", justify: "center" }),
    flexItem("shrink"),
    flush("left"),
    getIconAppearanceStyle(appearance),
    inputIconWrapper
  );

  return (
    <span className={iconEndClasses}>
      <IconPropAdapter icon={iconEnd!} size="xs" color="inherit" />
    </span>
  );
};
