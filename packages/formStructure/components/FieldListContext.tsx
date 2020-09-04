import * as React from "react";
import { FieldListProps } from "./FieldList";

interface FieldListProviderProps extends Omit<FieldListProps, "disabledRows"> {
  setData: React.Dispatch<React.SetStateAction<Array<Record<string, any>>>>;
}

type FieldListContext = {
  addListItem: (
    rowId?: string | number,
    itemToAdd?: Record<string, any>
  ) => void;
  removeListItem: (rowIndex: number) => () => void;
};

export const Context = React.createContext<FieldListContext | null>(null);

export const FieldListProvider: React.FC<FieldListProviderProps> = ({
  onAddItem,
  children,
  data,
  pathToUniqueKey,
  onRemoveItem,
  setData
}) => {
  const addListItem = (
    rowId?: string | number,
    itemToAdd?: Record<string, any>
  ) => {
    const rowToAdd =
      itemToAdd ||
      Object.keys(data[0] || {}).reduce(
        (acc, curr) => ((acc[curr] = ""), acc),
        {}
      );
    if (pathToUniqueKey && !Boolean(rowToAdd[pathToUniqueKey])) {
      rowToAdd[pathToUniqueKey] = rowId || data.length;
    }

    if (onAddItem) {
      onAddItem(rowToAdd);
    } else {
      setData([...data, rowToAdd]);
    }
  };

  const removeListItem = (rowIndex: number) => {
    if (onRemoveItem) {
      return onRemoveItem(rowIndex);
    }

    return () => {
      setData(data.filter((_, i) => rowIndex !== i));
    };
  };

  return (
    <Context.Provider
      value={{
        addListItem,
        removeListItem
      }}
    >
      {children}
    </Context.Provider>
  );
};
