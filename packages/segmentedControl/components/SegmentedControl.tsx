import * as React from "react";
import { segmentedControlContainer } from "../style";
import { SegmentedControlButtonProps } from "../components/SegmentedControlButton";

export interface SegmentedControlProps {
  /**
   * The buttons that make up the segmented control
   */
  children: Array<React.ReactElement<SegmentedControlButtonProps>>;
  /**
   * A unique identifier for the segmented control
   */
  id: string;
  /**
   * Callback for when a user makes a selection. The active segment value is the first parameter
   */
  onSelect?: (selectedSegment: string) => void;
  /**
   * The value of the selected segment input
   */
  selectedSegment?: string;
}

const SegmentedControl = (props: SegmentedControlProps) => {
  const { children, id, selectedSegment, onSelect } = props;
  const handleChange = (onChangeFn, e) => {
    if (onSelect) {
      onSelect(e.target.value);
    }
    if (onChangeFn) {
      onChangeFn(e);
    }
  };

  return (
    <div className={segmentedControlContainer} data-cy="segmentedControl">
      {children.map((segment, i) => {
        return React.cloneElement(segment, {
          isActive: selectedSegment === segment.props.value,
          onChange: handleChange.bind(null, segment.props.onChange),
          name: id,
          key: segment.props.id || i
        });
      })}
    </div>
  );
};

export default SegmentedControl;
