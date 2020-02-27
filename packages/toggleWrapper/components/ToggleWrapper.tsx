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
  id: string;
  /**
   * The type of boolean input element
   */
  type?: "checkbox" | "radio";
}

interface LocalToggleWrapperProps extends ToggleWrapperProps {
  children: (renderProps: RenderProps) => React.ReactNode;
}

interface ToggleWrapperState {
  hasFocus: boolean;
}

class ToggleWrapper extends React.PureComponent<
  LocalToggleWrapperProps,
  ToggleWrapperState
> {
  public static defaultProps: Partial<ToggleWrapperProps> = {
    type: "checkbox"
  };

  constructor(props: LocalToggleWrapperProps) {
    super(props);

    this.state = {
      hasFocus: false
    };

    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  public render() {
    const { children, id, isActive, ...other } = this.props;
    const { hasFocus } = this.state;
    delete other.checked;
    delete other.className;
    delete other.onFocus;
    delete other.onBlur;

    return (
      // tslint is giving an error because it can't tell that the value of `type`
      // will be "radio" or "checkbox".
      // Passing either string directly makes the error go away
      // tslint:disable react-a11y-role-supports-aria-props
      <label htmlFor={id} className={display("block")}>
        <input
          id={id}
          className={visuallyHidden}
          defaultChecked={isActive}
          aria-checked={isActive}
          data-cy="toggleWrapper-input"
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          {...other}
        />
        {children({ isActive, hasFocus })}
      </label>
      // tslint:enable
    );
  }

  private handleFocus(e) {
    this.setState({ hasFocus: true });

    if (this.props.onFocus) {
      this.props.onFocus(e);
    }
  }

  private handleBlur(e) {
    this.setState({ hasFocus: false });

    if (this.props.onBlur) {
      this.props.onBlur(e);
    }
  }
}

export default ToggleWrapper;
