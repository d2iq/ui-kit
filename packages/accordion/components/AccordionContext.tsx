import React, { createContext, useState } from "react";

interface AccordionProviderProps {
  initialExpandedItems?: string[];
  allowMultipleExpanded?: boolean;
  onChange?: (expandedItems: string[]) => void;
}

type AccordionContext = {
  expandedItems: string[];
  setExpandedItems: (toggledItem: string, isExpanded?: boolean) => void;
};

export const Context = createContext<AccordionContext | null>(null);

export const Provider: React.FC<AccordionProviderProps> = ({
  allowMultipleExpanded,
  children,
  initialExpandedItems = [],
  onChange
}) => {
  const [expandedItems, setExpanded] = useState(initialExpandedItems);
  const setExpandedItems = (toggledItem, isExpanded) => {
    if (!isExpanded) {
      allowMultipleExpanded
        ? setExpanded([...expandedItems, toggledItem])
        : setExpanded([toggledItem]);
      return;
    }

    setExpanded(
      expandedItems.filter(expandedItem => expandedItem !== toggledItem)
    );
  };

  React.useEffect(() => {
    if (onChange) {
      onChange(expandedItems);
    }
  }, [expandedItems]);

  return (
    <Context.Provider
      value={{
        expandedItems,
        setExpandedItems
      }}
    >
      {children}
    </Context.Provider>
  );
};
