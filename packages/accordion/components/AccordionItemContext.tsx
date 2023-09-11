import React, { createContext } from "react";

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
  id
}: AccordionProviderProps) => {
  const generatedId = `accordionProvider-${React.useId()}`;
  const baseId = id || generatedId;

  return (
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
};
