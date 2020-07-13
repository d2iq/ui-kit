import * as React from "react";
import { cx } from "emotion";
import { borderRadius, border } from "../../shared/styles/styleUtils";
import { AccordionTitleAppearances } from "../types";
import { accordionTitle, accordionTitleDanger } from "../style";

interface AccordionItemTitleOuterProps {
  appearance?: AccordionTitleAppearances;
  ["data-cy"]?: string;
}

const AccordionItemTitleOuter: React.FC<AccordionItemTitleOuterProps> = ({
  appearance,
  children,
  "data-cy": dataCy
}) => (
  <div
    className={cx(borderRadius("small"), border("all"), accordionTitle, {
      [accordionTitleDanger]: appearance === "danger"
    })}
    data-cy={dataCy}
  >
    {children}
  </div>
);

export default AccordionItemTitleOuter;
