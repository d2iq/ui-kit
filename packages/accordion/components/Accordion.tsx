import * as React from "react";
import { Stack } from "../../styleUtils/layout";
import { Provider as AccordionProvider } from "./AccordionContext";
import { AccordionBaseProps } from "../types";

interface AccordionProps extends AccordionBaseProps {
  /**
   * An array of open accordion panel IDs
   */
  initialExpandedItems?: string[];
  className?: string;
  children: React.ReactNode | React.ReactNode[];
}

const Accordion = ({
  allowMultipleExpanded = false,
  "data-cy": dataCy = "accordion",
  children,
  initialExpandedItems,
  onChange,
  className
}: AccordionProps) => {
  return (
    <AccordionProvider
      allowMultipleExpanded={allowMultipleExpanded}
      initialExpandedItems={initialExpandedItems}
      onChange={onChange}
    >
      <Stack className={className} data-cy={dataCy}>
        {children}
      </Stack>
    </AccordionProvider>
  );
};

export default Accordion;
