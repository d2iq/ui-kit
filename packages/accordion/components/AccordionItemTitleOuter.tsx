import * as React from "react";
import { cx } from "@emotion/css";
import { border } from "../../shared/styles/styleUtils";
import { AccordionTitleAppearances } from "../types";
import {
  accordionTitle,
  accordionTitleDanger,
  accordionTitleExpanded,
  accordionTitleDisabled
} from "../style";

interface AccordionItemTitleOuterProps {
  appearance?: AccordionTitleAppearances;
  disabled?: boolean;
  isExpanded?: boolean;
  ["data-cy"]?: string;
  children?: React.ReactNode;
}

const AccordionItemTitleOuter = ({
  appearance,
  children,
  "data-cy": dataCy = "accordionItemTitleOuter",
  disabled,
  isExpanded
}: AccordionItemTitleOuterProps) => (
  <div
    className={cx(border("all"), accordionTitle, {
      [accordionTitleDanger]: appearance === "danger",
      [accordionTitleExpanded]: isExpanded,
      [accordionTitleDisabled]: disabled
    })}
    data-cy={dataCy}
  >
    {children}
  </div>
);

export default AccordionItemTitleOuter;
