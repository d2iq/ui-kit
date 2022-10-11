import * as React from "react";
import nextId from "react-id-generator";
import { visuallyHidden, display } from "../../shared/styles/styleUtils";

interface RenderProps {
  isActive?: boolean;
  hasFocus?: boolean;
}

export interface ToggleWrapperProps extends React.HTMLProps<HTMLInputElement> {
  /**
   * Whether the component is in the "on" state
   */
  isActive?: boolean;
  /**
   * The value being toggled
   */
  value: string;
  /**
   * The unique identifier for the toggle
   */
  id?: string;
  /**
   * The type of boolean input element
   */
  type?: "checkbox" | "radio";
  /**
   * human-readable selector used for writing tests
   */
  ["data-cy"]?: string;
}

interface LocalToggleWrapperProps extends ToggleWrapperProps {
  children: (renderProps: RenderProps) => React.ReactNode;
}

const ToggleWrapper = ({
  id = nextId("toggleWrapper-"),
  children,
  "data-cy": dataCy = "toggleWrapper-input",
  isActive,
  onFocus,
  onBlur,
  type = "checkbox",
  value = "",
  ...other
}: LocalToggleWrapperProps) => {
  const [hasFocus, setHasFocus] = React.useState<boolean>(false);

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setHasFocus(true);

    if (onFocus) {
      onFocus(e);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setHasFocus(false);

    if (onBlur) {
      onBlur(e);
    }
  };

  delete other.checked;
  delete other.className;

  return (
    // eslint is giving an error because it can't tell that the value of `type`
    // will be "radio" or "checkbox".
    // Passing either string directly makes the error go away
    /* eslint-disable jsx-a11y/role-supports-aria-props */
    <label htmlFor={id} className={display("block")}>
      <input
        id={id}
        className={visuallyHidden}
        checked={isActive}
        aria-checked={isActive}
        data-cy={dataCy}
        onFocus={handleFocus}
        onBlur={handleBlur}
        type={type}
        value={value}
        {...other}
      />
      {children({ isActive, hasFocus })}
    </label>
    /* eslint-enable jsx-a11y/role-supports-aria-props */
  );
};

ToggleWrapper.defaultProps = {
  type: "checkbox",
  value: ""
};

export default React.memo(ToggleWrapper);
