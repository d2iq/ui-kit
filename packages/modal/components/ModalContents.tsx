import React from "react";
import { cx } from "emotion";
import wrapWithClickOutside from "react-click-outside";
import { modalWrapper } from "../style";
import { flex } from "../../shared/styles/styleUtils";
export interface ModalContentsProps {
  isOpen: boolean;
  onClose: () => void;
  /**
   * human-readable selector used for writing tests
   */
  dataCy?: string;
}
export class ModalContentsUnwrapped extends React.Component<
  ModalContentsProps,
  {}
> {
  constructor(props) {
    super(props);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }
  render() {
    return (
      <div
        className={cx(modalWrapper, flex({ direction: "column" }))}
        data-cy={this.props.dataCy}
      >
        {this.props.children}
      </div>
    );
  }
  handleClickOutside() {
    if (this.props.isOpen) {
      this.props.onClose();
    }
  }
}
export default wrapWithClickOutside(ModalContentsUnwrapped);
