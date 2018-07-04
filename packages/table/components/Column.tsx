import * as React from "react";
interface IWidthArgs {
  width: number;
  totalColumns: number;
  remainingWidth: number;
  currentIndex: number;
}
export interface IColumnProps {
  /**
   * header is providing the contents for the header cell for the column.
   */
  header: string | React.ReactNode;
  /**
   * cellRenderer is the function which is creating the cell contents for this column.
   */
  cellRenderer: (data: any) => React.ReactNode;
  width: (args: IWidthArgs) => number;
}

export class Column extends React.PureComponent<IColumnProps, {}> {}

export default Column;
