import React from "react";
import DropdownTrigger from "./DropdownTrigger";
import { MenuItem } from "./Dropdown";

interface DropdownListTriggerProps {
  className?: string;
  placeholder?: string;
  selectedItem?: MenuItem;
  onTrigger?: () => void;
  disabled?: boolean;
}

export default class DropdownListTrigger extends DropdownTrigger<
  DropdownListTriggerProps,
  {}
> {
  render() {
    const { className, disabled, selectedItem } = this.props;
    const html = selectedItem
      ? selectedItem.selectedHtml || selectedItem.html
      : this.props.placeholder || null;

    return (
      <button
        className={className}
        disabled={disabled}
        onClick={this.handleTrigger}
        type="button"
      >
        {html}
      </button>
    );
  }
}
