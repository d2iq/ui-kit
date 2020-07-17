import * as React from "react";
import { cx } from "emotion";
import { border } from "../../shared/styles/styleUtils";
import { AccordionTitleAppearances } from "../types";
import {
  accordionTitle,
  accordionTitleDanger,
  accordionTitleExpanded
} from "../style";

interface AccordionItemTitleOuterProps {
  appearance?: AccordionTitleAppearances;
  isExpanded?: boolean;
  ["data-cy"]?: string;
}

const AccordionItemTitleOuter: React.FC<AccordionItemTitleOuterProps> = ({
  appearance,
  children,
  "data-cy": dataCy,
  isExpanded
}) => (
  <div
    className={cx(border("all"), accordionTitle, {
      [accordionTitleDanger]: appearance === "danger",
      [accordionTitleExpanded]: isExpanded
    })}
    data-cy={dataCy}
  >
    {children}
  </div>
);

export default AccordionItemTitleOuter;
