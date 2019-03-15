import React from "react";
import { cx } from "emotion";
import { default as Cell } from "./Cell";
import { headerCellCss } from "../style";
import { textTruncate } from "../../shared/styles/styleUtils";

export default function(props) {
  return <Cell {...props} className={cx(headerCellCss, textTruncate)} />;
}
