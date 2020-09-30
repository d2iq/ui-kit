import * as React from "react";
import { Stack } from "../../styleUtils/layout";
import { Provider as AccordionProvider } from "./AccordionContext";

interface AccordionProps {
  /**
   * Whether multiple accordion items can be open at once
   */
  allowMultipleExpanded?: boolean;
  /**
   * human-readable selector used for writing tests
   */
  ["data-cy"]?: string;
  /**
   * An array of the IDs
   */
  initialExpandedItems?: string[];
  /**
   * A function that gets called when an accordion item is expanded or closed
   */
  onChange?: (expandedItems: string[]) => void;
}

const Accordion: React.FC<AccordionProps> = ({
  allowMultipleExpanded,
  "data-cy": dataCy,
  children,
  initialExpandedItems,
  onChange
}) => {
  return (
    <AccordionProvider
      allowMultipleExpanded={allowMultipleExpanded}
      initialExpandedItems={initialExpandedItems}
      onChange={onChange}
    >
      <Stack data-cy={dataCy}>{children}</Stack>
    </AccordionProvider>
  );
};

Accordion.defaultProps = {
  allowMultipleExpanded: false,
  "data-cy": "accordion"
};

export default Accordion;
