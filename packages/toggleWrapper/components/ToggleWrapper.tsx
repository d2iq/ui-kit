import * as React from "react";
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
  "data-cy"?: string;
}

interface ToggleWrapperWithRenderProps
  extends Omit<ToggleWrapperProps, "children"> {
  children: (renderProps: RenderProps) => React.ReactNode;
}

const ToggleWrapper = ({
  id,
  children,
  "data-cy": dataCy = "toggleWrapper-input",
  isActive,
  onFocus,
  onBlur,
  type = "checkbox",
  value = "",
  ...other
}: ToggleWrapperWithRenderProps) => {
  const generatedId = `toggleWrapper-${React.useId()}`;
  const toggleWrapperId = id || generatedId;
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
    <label htmlFor={toggleWrapperId} className={display("block")}>
      <input
        id={toggleWrapperId}
        className={visuallyHidden}
        defaultChecked={isActive}
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

export default React.memo(ToggleWrapper);
