import * as React from "react";
import CheckboxInput from "../../components/CheckboxInput";
import { ToggleInputProps } from "../../../toggleInput/components/ToggleInput";
import { InputAppearance } from "../../../shared/types/inputAppearance";

export interface CheckboxInputState {
  isChecked: boolean;
}

class CheckboxStoryHelper extends React.PureComponent<
  ToggleInputProps,
  CheckboxInputState
> {
  public static defaultProps: Partial<ToggleInputProps> = {
    appearance: InputAppearance.Standard
  };

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      isChecked: props.checked || false
    };
  }

  public render() {
    const {
      appearance,
      disabled,
      id,
      inputLabel,
      showInputLabel,
      value,
      vertAlign
    } = this.props;

    return (
      <CheckboxInput
        appearance={appearance}
        checked={this.state.isChecked}
        disabled={disabled}
        id={id}
        inputLabel={inputLabel}
        onChange={this.handleChange}
        showInputLabel={showInputLabel}
        value={value}
        vertAlign={vertAlign}
      />
    );
  }

  private handleChange(e) {
    this.setState({ isChecked: e.target.checked });
  }
}

export default CheckboxStoryHelper;
