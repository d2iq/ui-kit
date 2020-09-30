import * as React from "react";
import { useId } from "react-id-generator";
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
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  children,
  "data-cy": dataCy,
  id
}) => {
  const [generatedId] = useId(1, "accordionItem");
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
      >
        {children}
      </div>
    </AccordionItemProvider>
  );
};

AccordionItem.defaultProps = {
  "data-cy": "accordionItem"
};

export default AccordionItem;
