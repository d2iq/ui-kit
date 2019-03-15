import * as React from "react";
import { default as Cell, CellProps } from "./Cell";
import { textTruncate } from "../../shared/styles/styleUtils";

const NumberCell = (props: CellProps) => (
  <Cell textAlign="right" {...props} className={textTruncate} />
);

export default NumberCell;
