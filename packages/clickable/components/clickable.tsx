import { cx } from "emotion";
import * as React from "react";
import { outline } from "../style";

export interface IClickableProps {
  /**
   * Children should be a HTML element.
   */
  children: React.ReactElement<HTMLElement>;
  /**
   * Action is a event handler for the onClick and onKeypress events
   */
  action: (event?: React.SyntheticEvent<HTMLElement>) => void;
  /**
   * The tabIndex is passed down and is the same as the native tabIndex
   */
  tabIndex?: number | string;
}

export class Clickable extends React.PureComponent<IClickableProps, {}> {
  public static defaultProps: Partial<IClickableProps> = {
    tabIndex: -1
  };

  constructor(props: IClickableProps) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  public render() {
    const { children, action, tabIndex } = this.props;
    const { className = "" } = children.props;

    return React.cloneElement(React.Children.only(children), {
      onClick: action,
      className: cx(className, outline),
      role: "button",
      tabIndex,
      onKeyPress: this.handleKeyPress
    });
  }

  public handleKeyPress(event: React.KeyboardEvent<HTMLElement>): void {
    if (event.key === " " || event.key === "Enter") {
      this.props.action(event);
    }
  }
}

export default Clickable;
