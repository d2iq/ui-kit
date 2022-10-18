import * as React from "react";

interface RenderProps {
  onRemoveItem: (rowIndex) => () => void;
  onFieldUpdate: (rowIndex, dataKey) => (e) => void;
  onAddItem: (newItem) => void;
  items: any[];
}
interface FieldListHelperProps {
  children: (renderProps: RenderProps) => React.ReactElement;
  items: any[];
}

const updateIndex = (ts, i, obj) =>
  ts.map((t, j) => (i === j ? { ...t, ...obj } : t));

const FieldListHelper = (props: FieldListHelperProps) => {
  const [items, setItems] = React.useState<any[]>(props.items);

  const handleFieldUpdate = (rowIndex, valueKey) => {
    return e => {
      const updatedItems = updateIndex(items, rowIndex, {
        ...items[rowIndex],
        ...{ [valueKey]: e.currentTarget.value }
      });
      setItems(updatedItems);
    };
  };

  const handleRemoveItem = rowIndex => {
    return () => {
      setItems(items.filter((_n, i) => rowIndex !== i));
    };
  };

  const handleAddItem = newItem => {
    setItems([...items, newItem]);
  };

  return props.children({
    items,
    onFieldUpdate: handleFieldUpdate,
    onRemoveItem: handleRemoveItem,
    onAddItem: handleAddItem
  });
};

export default React.memo(FieldListHelper);
