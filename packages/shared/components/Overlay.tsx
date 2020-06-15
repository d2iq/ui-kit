import React, { HTMLAttributes } from "react";
import ReactDOM from "react-dom";

interface OverlayProps {
  innerRef?: React.Ref<HTMLDivElement>;
  overlayRoot?: HTMLElement;
}

type AllOverlayProps = OverlayProps & HTMLAttributes<HTMLDivElement>;

class Overlay extends React.Component<AllOverlayProps> {
  public static defaultProps: Partial<AllOverlayProps> = {
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
    const { children, overlayRoot, innerRef, ...other } = this.props;

    return (
      <div ref={innerRef} {...other}>
        {children}
      </div>
    );
  }

  render() {
    return ReactDOM.createPortal(this.getContents(), this.el);
  }
}

export default React.forwardRef<HTMLDivElement, AllOverlayProps>(
  (props, ref) => <Overlay innerRef={ref} {...props} />
);
