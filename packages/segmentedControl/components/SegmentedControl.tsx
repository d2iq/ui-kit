import * as React from "react";
import nextId from "react-id-generator";
import { cx } from "@emotion/css";
import { segmentedControlContainer } from "../style";
import { SegmentedControlButtonProps } from "../components/SegmentedControlButton";

export interface SegmentedControlProps {
  /**
   * The buttons that make up the segmented control
   */
  children: Array<React.ReactElement<SegmentedControlButtonProps>>;
  /**
   * Allows custom styling
   */
  className?: string;
  /**
   * A unique identifier for the segmented control
   */
  id?: string;
  /**
   * Callback for when a user makes a selection. The active segment value is the first parameter
   */
  onSelect?: (selectedSegment: string) => void;
  /**
   * The value of the selected segment input
   */
  selectedSegment?: string;
  /**
   * human-readable selector used for writing tests
   */
  ["data-cy"]?: string;
}

const SegmentedControl = (props: SegmentedControlProps) => {
  const {
    children,
    className,
    id = nextId("segmentedControl-"),
    selectedSegment,
    onSelect,
    "data-cy": dataCy = "segmentedControl"
  } = props;
  const handleChange = (onChangeFn, e) => {
    if (onSelect) {
      onSelect(e.target.value);
    }
    if (onChangeFn) {
      onChangeFn(e);
    }
  };

  return (
    <div className={cx(segmentedControlContainer, className)} data-cy={dataCy}>
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
