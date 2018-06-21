import * as React from "react";
interface IWidthArgs {
  width: number;
  totalColumns: number;
  remainingWidth: number;
  currentIndex: number;
}
export interface IColumnProps {
  header: string | React.ReactNode;
  cellRenderer: (data: any) => React.ReactNode;
  width: (args: IWidthArgs) => number;
}

export class Column extends React.PureComponent<IColumnProps, {}> {}

export default Column;
