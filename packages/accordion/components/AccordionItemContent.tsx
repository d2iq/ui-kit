import * as React from "react";
import { Context as AccordionItemContext } from "./AccordionItemContext";
import { cx } from "emotion";
import { visuallyHidden } from "../../shared/styles/styleUtils";
import { getAllFocusableChildNodes } from "../../utilities/getFocusableChildNodes";

const AccordionItemContent: React.FC<{
  /**
   * human-readable selector used for writing tests
   */
  ["data-cy"]?: string;
}> = ({ children, "data-cy": dataCy }) => {
  const contentRef = React.useRef<HTMLDivElement>(null);
  const accordionItemContext = React.useContext(AccordionItemContext);
  React.useEffect(() => {
    const allFocusable = contentRef.current
      ? getAllFocusableChildNodes(contentRef.current)
      : [];

    if (!accordionItemContext?.isExpanded) {
      allFocusable.forEach(el => {
        el.setAttribute("tabindex", "-1");
      });
      return;
    }

    allFocusable.forEach(el => {
      el.removeAttribute("tabindex");
    });
  }, [contentRef, accordionItemContext?.isExpanded]);

  return (
    <div
      aria-labelledby={accordionItemContext?.headingId}
      id={accordionItemContext?.contentId}
      className={cx({ [visuallyHidden]: !accordionItemContext?.isExpanded })}
      ref={contentRef}
      hidden={!accordionItemContext?.isExpanded}
      data-cy={dataCy}
    >
      {children}
    </div>
  );
};

AccordionItemContent.defaultProps = {
  "data-cy": "accordionItemContent"
};

export default AccordionItemContent;
