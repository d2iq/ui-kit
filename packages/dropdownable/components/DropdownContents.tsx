import React from "react";
import wrapWithClickOutside from "react-click-outside";

interface DropdownContentsProps {
  isOpen: boolean;
  onClose: () => void;
}

class DropdownContents extends React.Component<DropdownContentsProps, {}> {
  constructor(props) {
    super(props);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  render() {
    return this.props.children;
  }

  handleClickOutside() {
    if (this.props.isOpen && this.props.onClose) {
      this.props.onClose();
    }
  }
}

export default wrapWithClickOutside(DropdownContents);
