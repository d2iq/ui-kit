import React, { createContext, useState } from "react";

interface AccordionProviderProps {
  allowMultipleExpanded?: boolean;
  controlledExpandedItems?: string[];
  initialExpandedItems?: string[];
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
  controlledExpandedItems,
  initialExpandedItems = [],
  onChange
}) => {
  const [expandedItems, setExpanded] = useState<string[]>(
    controlledExpandedItems ? controlledExpandedItems : initialExpandedItems
  );
  const setExpandedItems = (toggledItem, isExpanded) => {
    const setExpandedItemHandler = (
      handler: (expandedItems: string[]) => void,
      items: string[] = []
    ) => {
      if (!isExpanded) {
        allowMultipleExpanded
          ? handler([...items, toggledItem])
          : handler([toggledItem]);
        return;
      }

      handler(items.filter(expandedItem => expandedItem !== toggledItem));
    };

    if (controlledExpandedItems && onChange) {
      setExpandedItemHandler(onChange, controlledExpandedItems);
      return;
    }

    setExpandedItemHandler(setExpanded, expandedItems);
  };

  React.useEffect(() => {
    if (onChange) {
      onChange(expandedItems);
    }
  }, [expandedItems]);

  return (
    <Context.Provider
      value={{
        expandedItems: controlledExpandedItems
          ? controlledExpandedItems
          : expandedItems,
        setExpandedItems
      }}
    >
      {children}
    </Context.Provider>
  );
};
