import React from "react";
import { default as Cell } from "./Cell";
import { textTruncate } from "../../shared/styles/styleUtils";

export default function(props) {
  return <Cell {...props} className={textTruncate} />;
}
