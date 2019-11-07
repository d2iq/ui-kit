import * as React from "react";
import ReactDOM from "react-dom";
import { cx } from "emotion";
import { innerCellCss, cellAlignmentCss, textCapitalize } from "../style";

export type TextAlign = "left" | "right" | "center";
export interface CellProps {
  textAlign?: TextAlign;
  lowerCase?: boolean;
  children: React.ReactElement<HTMLElement> | string;
  className?: string;
  role?: string;
  onMouseEnter?: (event?: React.SyntheticEvent<HTMLElement>) => void;
  onMouseLeave?: (event?: React.SyntheticEvent<HTMLElement>) => void;
  onFocus?: (event?: React.SyntheticEvent<HTMLElement>) => void;
  onBlur?: (event?: React.SyntheticEvent<HTMLElement>) => void;
}

interface CellState {
  renderedTextContent?: string | null;
}

class Cell extends React.PureComponent<CellProps, CellState> {
  constructor(props) {
    super(props);

    this.state = {
      renderedTextContent: null
    };
  }

  getTextContent() {
    const node = ReactDOM.findDOMNode(this);
    if (node) {
      return node.textContent;
    }
  }

  componentDidMount() {
    this.setState({ renderedTextContent: this.getTextContent() });
  }

  componentDidUpdate() {
    if (this.getTextContent() !== this.state.renderedTextContent) {
      this.setState({ renderedTextContent: this.getTextContent() });
    }
  }

  render() {
    const { children, className, textAlign, lowerCase, ...other } = this.props;

    return (
      <div
        title={this.state.renderedTextContent || undefined}
        className={cx(
          innerCellCss,
          cellAlignmentCss(textAlign || "left"),
          lowerCase ? null : textCapitalize,
          className
        )}
        {...other}
      >
        {children}
      </div>
    );
  }
}

export default Cell;
