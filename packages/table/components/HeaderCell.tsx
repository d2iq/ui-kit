import React from "react";

import Cell, { CellProps } from "./Cell";
import styled from "react-emotion";
import { headerCellCss } from "../style";
import { textTruncate } from "../../shared/styles/styleUtils";

// Make capitalize false only if it is explicitly passed as false.
// If it is undefned, make it true.
const HeaderCell = (props: CellProps) => (
  <Cell capitalize={props.capitalize === false ? false : true} {...props} />
);

export default styled(HeaderCell)`
  ${headerCellCss};
  ${textTruncate};
`;
