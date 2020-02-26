import React from "react";
import ReactDOM from "react-dom";

interface OverlayProps {
  overlayRoot?: HTMLElement;
  className?: string;
}

class Overlay extends React.Component<OverlayProps> {
  public static defaultProps: Partial<OverlayProps> = {
    overlayRoot: document.body
  };

  private readonly el: HTMLElement;

  constructor(props) {
    super(props);
    this.el = document.createElement("div");
  }

  componentDidMount() {
    if (this.props.overlayRoot) {
      this.props.overlayRoot.appendChild(this.el);
    }
  }

  componentWillUnmount() {
    if (this.props.overlayRoot) {
      this.props.overlayRoot.removeChild(this.el);
    }
  }

  getContents() {
    const { className, children } = this.props;

    return <div className={className}>{children}</div>;
  }

  render() {
    return ReactDOM.createPortal(this.getContents(), this.el);
  }
}

export default Overlay;
