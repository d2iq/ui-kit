import * as React from "react";
import { default as Cell, CellProps } from "./Cell";
import styled from "react-emotion";
import { textTruncate } from "../../shared/styles/styleUtils";

const NumberCell = (props: CellProps) => <Cell textAlign="right" {...props} />;

export default styled(NumberCell)`
  ${textTruncate};
`;
