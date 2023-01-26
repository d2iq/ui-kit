import * as React from "react";
import { cx } from "@emotion/css";
import { listReset } from "../../shared/styles/styleUtils";
import { listMarker } from "../style";

export interface SharedListProps {
  children:
    | Array<React.ReactElement<HTMLLIElement>>
    | React.ReactElement<HTMLLIElement>;
  /**
   * Set to an ordered list `ol` or the defaulted unordered list `ul`
   */
  tag?: "ul" | "ol";
  /**
   * Human-readable selector used for writing tests
   */
  "data-cy"?: string;
  /**
   * Allows custom styling
   */
  className?: string;
}

interface ListProps extends SharedListProps {
  /**
   * The style of the text bullets. See https://www.w3.org/TR/CSS21/generate.html#list-style for more info
   */
  markerStyle?:
    | "disc"
    | "circle"
    | "decimal"
    | "decimal-leading-zero"
    | "lower-roman"
    | "upper-roman"
    | "lower-latin"
    | "upper-latin"
    | "none";
}

const List = ({
  children,
  className,
  markerStyle = "none",
  tag = "ul",
  "data-cy": dataCy = "list"
}: ListProps) => {
  const ListEl = tag;

  return (
    <ListEl
      className={cx(listReset, listMarker(markerStyle), className)}
      data-cy={dataCy}
    >
      {children}
    </ListEl>
  );
};

export default List;
