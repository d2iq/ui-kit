import * as React from "react";

interface RenderProps {
  tooltipIsVisible: boolean;
  onCopy: () => void;
}

interface CTCButtonTooltipHelperProps {
  children: (renderProps: RenderProps) => React.ReactNode;
}

interface CTCButtonTooltipHelperState {
  tooltipIsVisible: boolean;
}

class ClickToCopyButtonTooltipHelper extends React.PureComponent<
  CTCButtonTooltipHelperProps,
  CTCButtonTooltipHelperState
> {
  constructor(props) {
    super(props);

    this.state = {
      tooltipIsVisible: false
    };

    this.handleOnCopy = this.handleOnCopy.bind(this);
  }

  public render() {
    return this.props.children({
      onCopy: this.handleOnCopy,
      tooltipIsVisible: this.state.tooltipIsVisible
    });
  }

  private handleOnCopy() {
    this.setState({ tooltipIsVisible: true });
    setTimeout(() => {
      this.setState({ tooltipIsVisible: false });
    }, 2000);
  }
}

export default ClickToCopyButtonTooltipHelper;
