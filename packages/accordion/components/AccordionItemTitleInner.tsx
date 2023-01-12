import * as React from "react";
import { cx } from "@emotion/css";
import { getAllFocusableChildNodes } from "../../utilities/getFocusableChildNodes";
import { padding } from "../../shared/styles/styleUtils";
import { flex } from "../../shared/styles/styleUtils/layout/flexbox";
import Icon from "../../icon/components/Icon";
import { SystemIcons } from "../../icons/dist/system-icons-enum";
import { fillWidth, accordionTitleInteractive } from "../style";

export interface AccordionItemTitleInnerProps {
  /**
   * Wether the accordion item is expanded by default
   */
  isExpanded?: boolean;
  /**
   * Wether the accordion is responsive to interaction
   */
  isInteractive?: boolean;
  /**
   * Human-readable selector used for writing tests
   */
  "data-cy"?: string;
  children: React.ReactNode;
}

const AccordionItemTitleInner = ({
  children,
  isExpanded,
  isInteractive,
  "data-cy": dataCy = "accordionItemTitleInner"
}: AccordionItemTitleInnerProps) => {
  const contentRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const allFocusable: HTMLElement[] = contentRef.current
      ? getAllFocusableChildNodes(contentRef.current)
      : [];

    if (!isInteractive) {
      return;
    }

    allFocusable.forEach(el => {
      el.setAttribute("style", "pointer-events: all;");
    });
  }, [contentRef, isInteractive]);

  return (
    <span
      className={cx(padding("all"), flex({ align: "center" }), {
        [accordionTitleInteractive]: isInteractive
      })}
      data-cy={dataCy}
    >
      <span className={padding("right", "xs")}>
        <Icon
          shape={
            isExpanded ? SystemIcons.TriangleDown : SystemIcons.TriangleRight
          }
          size="xs"
        />
      </span>
      <span className={fillWidth} ref={contentRef}>
        {children}
      </span>
    </span>
  );
};

export default AccordionItemTitleInner;
