import * as React from "react";
import { FlexItem } from "../../styleUtils/layout";
import { css } from "emotion";
import { ROW_HEIGHT } from "../../table/components/Table";

export interface TableViewBodyProps {
  children: React.ReactNode;
  /** The height of the table's rows in pixels. Used with `minRows` to calculate the minimum row height. **Not needed unless your table has a custom row height.** */
  rowHeight?: number;
  /** The minimum number of rows the table should show, no matter how high the viewport is. */
  minRows?: number;
}

const setMinTableHeight = (rowHeight: number, minRows: number) => css`
  min-height: ${rowHeight * minRows}px;
`;

const TableViewBody: React.SFC<TableViewBodyProps> = ({
  children,
  rowHeight = ROW_HEIGHT,
  minRows = 5
}) => (
  <FlexItem flex="grow" className={setMinTableHeight(rowHeight, minRows)}>
    {children}
  </FlexItem>
);

export default TableViewBody;
