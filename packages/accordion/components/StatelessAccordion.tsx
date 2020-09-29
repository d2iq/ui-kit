import * as React from "react";
import { Stack } from "../../styleUtils/layout";
import { Provider as AccordionProvider } from "./AccordionContext";
import { AccordionBaseProps } from "../types";

interface AccordionProps extends AccordionBaseProps {
  /**
   * An array of open accordion panel IDs
   */
  expandedItems?: string[];
}

const Accordion: React.FC<AccordionProps> = ({
  allowMultipleExpanded,
  "data-cy": dataCy,
  children,
  expandedItems = [],
  onChange
}) => {
  //   React.useEffect(() => {
  //     if (onChange) {
  //       onChange(expandedItems);
  //     }
  //   }, [expandedItems]);
  //   console.log("expandedItems", expandedItems);
  return (
    <AccordionProvider
      allowMultipleExpanded={allowMultipleExpanded}
      controlledExpandedItems={expandedItems}
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
