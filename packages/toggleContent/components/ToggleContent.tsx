import * as React from "react";
import Clickable from "../../clickable/components/clickable";
import { style } from "../style";

export interface ToggleContentState {
  isOn: boolean;
}

export interface ToggleContentProps {
  /**
   * Content to be rendered when isOn is true.
   */
  contentOn: JSX.Element | string;
  /**
   * Content to be rendered when isOn is false.
   */
  contentOff: JSX.Element | string;
  /**
   * The tabIndex is passed down and is the same as the native tabIndex.
   */
  tabIndex?: string | number;
  /**
   * Human-readable selector used for writing tests.
   */
  "data-cy"?: string;
}

const ToggleContent = ({
  tabIndex = "-1",
  contentOn,
  contentOff,
  "data-cy": dataCy = "toggleContent"
}: ToggleContentProps) => {
  const [isOn, setIsOn] = React.useState(true);
  const content = isOn ? contentOn : contentOff;

  const handleClick = () => {
    const windowSelection = window.getSelection() as Selection;
    if (!windowSelection.toString()) {
      setIsOn(!isOn);
    }
  };

  return (
    <Clickable tabIndex={tabIndex} action={handleClick} data-cy={dataCy}>
      <span className={style}>{content}</span>
    </Clickable>
  );
};

export default React.memo(ToggleContent);
