import React from "react";
import styled from "@emotion/styled";
import { cx } from "emotion";
import { innerCellCss, cellAlignmentCss } from "../style";

export type TextAlign = "left" | "right" | "center";
export interface CellProps {
  textAlign?: TextAlign;
  children: React.ReactElement<HTMLElement> | string;
  className?: string;
}

const alignmentStyle = (props: CellProps) =>
  cellAlignmentCss(props.textAlign || "left");

const Component = styled.div();
export default function(props) {
  return (
    <Component
      {...props}
      className={cx(props.className, innerCellCss, alignmentStyle(props))}
    />
  );
}
