import * as React from "react";

interface ToggleBoxGroupStoryHelperState {
  selectedItems: string[];
}

interface RenderProps {
  changeHandler: (selectedItems: string[]) => void;
  selectedItems: string[];
}
interface ToggleBoxGroupStoryHelperProps {
  children: (renderProps: RenderProps) => React.ReactNode;
  selectedItems?: string[];
}

class ToggleBoxGroupStoryHelper extends React.PureComponent<
  ToggleBoxGroupStoryHelperProps,
  ToggleBoxGroupStoryHelperState
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

export default ToggleBoxGroupStoryHelper;
