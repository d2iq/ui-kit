import React, { createContext } from "react";
import nextId from "react-id-generator";

interface AccordionProviderProps {
  id?: string;
  expandedItems: string[];
  children: React.ReactNode;
}

type AccordionItemContext = {
  baseId: string;
  contentId: string;
  headingId: string;
  isExpanded: boolean;
};

export const Context = createContext<AccordionItemContext | null>(null);

export const Provider = ({
  children,
  expandedItems,
  id: baseId = nextId("accordionProvider-")
}: AccordionProviderProps) => (
  <Context.Provider
    value={{
      baseId,
      contentId: `${baseId}-content`,
      headingId: `${baseId}-heading`,
      isExpanded: expandedItems.includes(baseId)
    }}
  >
    {children}
  </Context.Provider>
);
