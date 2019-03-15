import React from "react";
import { default as Cell } from "./Cell";
import { headerCellCss } from "../style";

export default function(props) {
  return <Cell {...props} className={headerCellCss} />;
}
