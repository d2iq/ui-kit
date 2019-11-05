import * as React from "react";

import { default as Cell, CellProps } from "./Cell";
import styled from "react-emotion";
import { headerCellCss, textCapitalize } from "../style";
import { textTruncate } from "../../shared/styles/styleUtils";

export interface HeaderCellProps extends CellProps {
  /**
   * lowerCase is indicating if we want the HeaderCell to be automatically capitalized.
   */
  lowerCase?: boolean;
}

export class HeaderCell extends React.PureComponent<HeaderCellProps, {}> {
  public render() {
    const HeaderCell = this.props.lowerCase
      ? styled(Cell)`
          ${headerCellCss};
          ${textTruncate};
        `
      : styled(Cell)`
          ${headerCellCss};
          ${textCapitalize};
          ${textTruncate};
        `;
    return <HeaderCell>{this.props.children}</HeaderCell>;
  }
}

export default HeaderCell;
