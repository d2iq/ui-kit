import * as React from "react";

interface SegmentedControlStoryHelperState {
  selectedSegment: string;
}

interface RenderProps {
  changeHandler: (selectedSegment: string) => void;
  selectedSegment: string;
}
interface SegmentedControlStoryHelperProps {
  children: (renderProps: RenderProps) => React.ReactNode;
  selectedSegment?: string;
}

class SegmentedControlStoryHelper extends React.PureComponent<
  SegmentedControlStoryHelperProps,
  SegmentedControlStoryHelperState
> {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      selectedSegment: props.selectedSegment || []
    };
  }

  public render() {
    return this.props.children({
      changeHandler: this.handleChange,
      selectedSegment: this.state.selectedSegment
    });
  }

  private handleChange(value) {
    this.setState({
      selectedSegment: value
    });
  }
}

export default SegmentedControlStoryHelper;
