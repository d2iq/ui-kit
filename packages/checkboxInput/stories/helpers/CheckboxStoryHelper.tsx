import * as React from "react";

interface CheckboxStoryHelperState {
  isChecked: boolean;
}

interface RenderProps {
  changeHandler: (event?: React.SyntheticEvent<HTMLInputElement>) => void;
  isChecked: boolean;
}
interface CheckboxStoryHelperProps {
  children: (renderProps: RenderProps) => React.ReactNode;
  isChecked?: boolean;
}

class CheckboxStoryHelper extends React.PureComponent<
  CheckboxStoryHelperProps,
  CheckboxStoryHelperState
> {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      isChecked: props.isChecked
    };
  }

  public render() {
    return this.props.children({
      changeHandler: this.handleChange,
      isChecked: this.state.isChecked
    });
  }

  private handleChange(e) {
    this.setState({ isChecked: e.target.checked });
  }
}

export default CheckboxStoryHelper;
