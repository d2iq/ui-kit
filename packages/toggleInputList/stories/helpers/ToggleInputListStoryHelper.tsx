import * as React from "react";

interface ToggleInputListStoryHelperState {
  selectedItems: string[];
}

interface RenderProps {
  changeHandler: (selectedItems: string[]) => void;
  selectedItems: string[];
}
interface ToggleInputListStoryHelperProps {
  children: (renderProps: RenderProps) => React.ReactNode;
  selectedItems?: string[];
}

class ToggleInputListStoryHelper extends React.PureComponent<
  ToggleInputListStoryHelperProps,
  ToggleInputListStoryHelperState
> {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      selectedItems: props.selectedItems || []
    };
  }

  public render() {
    return this.props.children({
      changeHandler: this.handleChange,
      selectedItems: this.state.selectedItems
    });
  }

  private handleChange(value) {
    this.setState({ selectedItems: value });
  }
}

export default ToggleInputListStoryHelper;
