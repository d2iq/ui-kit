import * as React from "react";
import { Context as AccordionContext } from "./AccordionContext";
import { Provider as AccordionItemProvider } from "./AccordionItemContext";

export interface AccordionItemProps {
  /**
   * Human-readable selector used for writing tests
   */
  "data-cy"?: string;
  /**
   * A custom ID for the accordion panel
   */
  id?: string;
  /**
   * Allows custom styling
   */
  className?: string;
  children?: React.ReactNode;
}

const AccordionItem = ({
  children,
  "data-cy": dataCy = "accordionItem",
  id,
  className
}: AccordionItemProps) => {
  const generatedId = `accordionItem-${React.useId()}`;
  const accordionItemId = id || generatedId;
  const accordionContext = React.useContext(AccordionContext);
  const isExpanded = accordionContext?.expandedItems.includes(accordionItemId);

  return (
    <AccordionItemProvider
      expandedItems={accordionContext?.expandedItems || []}
      id={accordionItemId}
    >
      <div
        data-cy={[dataCy, ...(isExpanded ? [`${dataCy}.expanded`] : [])].join(
          " "
        )}
        className={className}
      >
        {children}
      </div>
    </AccordionItemProvider>
  );
};

export default AccordionItem;
