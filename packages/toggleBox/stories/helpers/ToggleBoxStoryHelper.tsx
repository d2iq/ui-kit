import * as React from "react";

interface ToggleBoxStoryHelperState {
  isActive: boolean;
}

interface RenderProps {
  changeHandler?: (event?: React.SyntheticEvent<HTMLInputElement>) => void;
  isActive?: boolean;
}
interface ToggleBoxStoryHelperProps {
  children: (renderProps: RenderProps) => React.ReactNode;
  isActive?: boolean;
}

class ToggleBoxStoryHelper extends React.PureComponent<
  ToggleBoxStoryHelperProps,
  ToggleBoxStoryHelperState
> {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      isActive: props.isActive
    };
  }

  public render() {
    return this.props.children({
      changeHandler: this.handleChange,
      isActive: this.state.isActive
    });
  }

  private handleChange(e) {
    this.setState({ isActive: e.target.checked });
  }
}

export default ToggleBoxStoryHelper;
