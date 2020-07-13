import React, { createContext } from "react";

interface AccordionProviderProps {
  id: string;
  expandedItems: string[];
}

type AccordionItemContext = {
  baseId: string;
  contentId: string;
  headingId: string;
  isExpanded: boolean;
};

export const Context = createContext<AccordionItemContext | null>(null);

export const Provider: React.FC<AccordionProviderProps> = ({
  children,
  expandedItems,
  id: baseId
}) => (
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
