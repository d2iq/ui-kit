import { Component } from "react";

interface DropdownTriggerProps {
  onTrigger?: (event?: React.SyntheticEvent<HTMLElement>) => void;
  disabled?: boolean;
}

export default class DropdownTrigger<
  P extends DropdownTriggerProps,
  S extends {}
> extends Component<P, S> {
  constructor(props) {
    super(props);

    this.handleTrigger = this.handleTrigger.bind(this);
  }

  handleTrigger(event) {
    if (!this.props.disabled && this.props.onTrigger) {
      this.props.onTrigger(event);
    }
  }
}
