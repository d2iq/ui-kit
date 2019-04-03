import * as React from "react";
export interface WidthArgs {
  width: number;
  totalColumns: number;
  remainingWidth: number;
  currentIndex: number;
}

interface OverloadedProps {
  [key: string]: unknown;
}

export interface ColumnProps {
  /**
   * header is providing the contents for the header cell for the column.
   */
  header: React.ReactNode;
  /**
   * cellRenderer is the function which is creating the cell contents for this column.
   */
  cellRenderer: (
    data: any,
    width: number,
    additionalProps: OverloadedProps
  ) => React.ReactNode;
  /**
   * width should return a column width in pixels.
   * If no function is provided, columns will distribute
   * their width evenly
   */
  width?: (args: WidthArgs) => number;
  /**
   * the minimum width a column should be
   */
  minWidth?: number;
  /**
   * the maximum width a column can be
   */
  maxWidth?: number;
  /**
   * whether the column should grow to fill remaining space
   */
  growToFill?: boolean;

  [key: string]: unknown;
}

export class Column extends React.PureComponent<ColumnProps, {}> {}

export default Column;
