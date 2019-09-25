import * as React from "react";
import { cx } from "emotion";
import Toggle from "react-toggled";
import { buttonReset, display, flex } from "../../shared/styles/styleUtils";
import { toggler } from "../style";

export interface ExpandableProps {
  children: React.ReactElement<HTMLElement> | string;
  controlledIsOpen?: boolean;
  isOpen?: boolean;
  label: React.ReactElement<HTMLElement> | string;
  labelClassName?: string;
}

class Expandable extends React.PureComponent<ExpandableProps, {}> {
  public render() {
    const {
      labelClassName,
      children,
      label,
      isOpen,
      controlledIsOpen
    } = this.props;

    return (
      <Toggle defaultOn={Boolean(isOpen)} on={controlledIsOpen}>
        {({ on, getTogglerProps }) => (
          <div>
            <button
              {...getTogglerProps({
                className: cx(
                  buttonReset,
                  labelClassName,
                  toggler(on),
                  flex({ align: "center", justify: "space-between" })
                )
              })}
            >
              {label}
            </button>
            {/* TODO: investigate whether display: none is a11y-friendly in this situation */}
            <div className={cx({ [display("none")]: !on })}>{children}</div>
          </div>
        )}
      </Toggle>
    );
  }
}

export default Expandable;
