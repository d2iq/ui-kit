import React from "react";
import { cx } from "emotion";
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
export class ModalContents extends React.Component<ModalContentsProps, {}> {
  constructor(props) {
    super(props);
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
}
export default ModalContents;
