import * as React from "react";
import { cx } from "@emotion/css";
import {
  flex,
  flexItem,
  padding,
  textWeight
} from "../../../shared/styles/styleUtils";

interface RenderProps {
  selectedItems: string[];
  onSelect: (selectedItems: string[]) => void;
}

interface MultiselectTypeaheadProps {
  children: (renderProps: RenderProps) => React.ReactNode;
}

const MultiSelectTypeahead = ({ children }: MultiselectTypeaheadProps) => {
  const [selectedItems, setSelectedItems] = React.useState<string[]>([]);

  const handleSelect = newlySelectedItems => {
    setSelectedItems(newlySelectedItems);
  };

  return (
    <div className={flex()}>
      <div className={flexItem("grow")}>
        {children({
          selectedItems,
          onSelect: handleSelect
        })}
      </div>
      <div className={cx(flexItem("grow"), padding("left"))}>
        <span className={textWeight("medium")}>Selections:</span>
        <ul>
          {selectedItems.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default React.memo(MultiSelectTypeahead);
