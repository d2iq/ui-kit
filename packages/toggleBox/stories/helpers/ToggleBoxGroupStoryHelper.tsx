import * as React from "react";
import { useState } from "react";

interface RenderProps {
  changeHandler: (selectedItems: string[]) => void;
  selectedItems: string[];
}

interface ToggleBoxGroupStoryHelperProps {
  children: (renderProps: RenderProps) => React.ReactElement;
  selectedItems?: string[];
}

const ToggleBoxGroupStoryHelper = ({
  children
}: ToggleBoxGroupStoryHelperProps) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  function handleChange(value) {
    setSelectedItems(value);
  }

  return children({
    changeHandler: handleChange,
    selectedItems
  });
};

export default ToggleBoxGroupStoryHelper;
