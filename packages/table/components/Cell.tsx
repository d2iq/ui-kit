import styled, { css } from "react-emotion";
import { innerCellCss, cellAlignmentCss } from "../style";

export type TextAlign = "left" | "right" | "center";
export interface ICellProps {
  textAlign?: TextAlign;
  children: React.ReactElement<HTMLElement> | string;
  className?: string;
}

const alignmentStyle = (props: ICellProps) => css`
  ${cellAlignmentCss(props.textAlign || "left")};
`;

export default styled("div")`
  ${innerCellCss};
  ${alignmentStyle};
`;
