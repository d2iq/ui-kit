import * as React from "react";
import { borderedListStyle } from "../style";
import { cx } from "@emotion/css";
import { SharedListProps } from "./List";
import { listReset } from "../../shared/styles/styleUtils";

const BorderedList = ({
  tag = "ul",
  children,
  className,
  "data-cy": dataCy = "borderedList"
}: SharedListProps) => {
  const BorderedListEl = tag;

  return (
    <BorderedListEl
      className={cx(listReset, borderedListStyle, className)}
      data-cy={dataCy}
    >
      {children}
    </BorderedListEl>
  );
};

export default BorderedList;
