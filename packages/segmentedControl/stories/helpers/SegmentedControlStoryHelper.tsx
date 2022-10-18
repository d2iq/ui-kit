import * as React from "react";

interface RenderProps {
  changeHandler: (selectedSegment: string) => void;
  selectedSegment: string;
}
interface SegmentedControlStoryHelperProps {
  children: (renderProps: RenderProps) => React.ReactElement;
  selectedSegment?: string;
}

const SegmentedControlStoryHelper = (
  props: SegmentedControlStoryHelperProps
) => {
  const [selectedSegment, setSelectedSegment] = React.useState<string>(
    props.selectedSegment || ""
  );

  const handleChange = value => {
    setSelectedSegment(value);
  };

  return props.children({
    changeHandler: handleChange,
    selectedSegment
  });
};

export default React.memo(SegmentedControlStoryHelper);
