import * as React from "react";
import nextId from "react-id-generator";
import { Context as AccordionContext } from "./AccordionContext";
import { Provider as AccordionItemProvider } from "./AccordionItemContext";

export interface AccordionItemProps {
  /**
   * human-readable selector used for writing tests
   */
  ["data-cy"]?: string;
  /**
   * A custom ID for the accordion panel
   */
  id?: string;
  children?: React.ReactNode;
}

const AccordionItem = ({
  children,
  "data-cy": dataCy = "accordionItem",
  id = nextId("accordionItem-")
}: AccordionItemProps) => {
  const accordionContext = React.useContext(AccordionContext);
  const isExpanded = accordionContext?.expandedItems.includes(id);

  return (
    <AccordionItemProvider
      expandedItems={accordionContext?.expandedItems || []}
      id={id}
    >
      <div
        data-cy={[dataCy, ...(isExpanded ? [`${dataCy}.expanded`] : [])].join(
          " "
        )}
      >
        {children}
      </div>
    </AccordionItemProvider>
  );
};

export default AccordionItem;
