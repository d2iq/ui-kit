import * as React from "react";

interface RenderProps {
  changeHandler: (selectedItems: string[]) => void;
  selectedItems: string[];
}
interface ToggleInputListStoryHelperProps {
  children: (renderProps: RenderProps) => React.ReactElement;
  selectedItems?: string[];
}

const ToggleInputListStoryHelper = (props: ToggleInputListStoryHelperProps) => {
  const [selectedItems, setSelectedItems] = React.useState<string[]>(
    props.selectedItems || []
  );
  const changeHandler = value => {
    setSelectedItems(value);
  };
  return props.children({
    changeHandler,
    selectedItems
  });
};

export default ToggleInputListStoryHelper;
