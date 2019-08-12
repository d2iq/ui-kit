import * as React from "react";
import styled, { css } from "react-emotion";
import getReactChildrenText from "../../utilities/getReactChildrenText";
import { innerCellCss, cellAlignmentCss } from "../style";

export type TextAlign = "left" | "right" | "center";
export interface CellProps {
  textAlign?: TextAlign;
  children: React.ReactElement<HTMLElement> | string;
  className?: string;
}

const alignmentStyle = (props: CellProps) => css`
  ${cellAlignmentCss(props.textAlign || "left")};
`;

const CellStyled = styled("div")`
  ${innerCellCss};
  ${alignmentStyle};
`;

const Cell = props => {
  return (
    <CellStyled
      title={getReactChildrenText(props.children) || null}
      {...props}
    />
  );
};

export default Cell;
