import * as React from "react";
import Clickable from "../../clickable/components/clickable";
import { style } from "../style";

export interface IToggleContentState {
  isOn: boolean;
}

export interface IToggleContentProps {
  contentOn: JSX.Element | string;
  contentOff: JSX.Element | string;
  tabIndex?: string | number;
}

export class ToggleContent extends React.PureComponent<
  IToggleContentProps,
  IToggleContentState
> {
  static defaultProps = {
    tabIndex: -1
  };

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.state = {
      isOn: true
    };
  }

  public handleClick(): void {
    this.setState({
      isOn: !this.state.isOn
    });
  }

  public render() {
    const { tabIndex, contentOn, contentOff } = this.props;
    let content = contentOn;

    if (!this.state.isOn) {
      content = contentOff;
    }

    return (
      <Clickable tabIndex={tabIndex} action={this.handleClick}>
        <div className={style}>{content}</div>
      </Clickable>
    );
  }
}

export default ToggleContent;
