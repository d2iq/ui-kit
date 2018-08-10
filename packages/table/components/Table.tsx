import * as React from "react";
import { css } from "emotion";
import { AutoSizer, MultiGrid, GridCellProps } from "react-virtualized";

import { headerCss, cellCss, tableCss } from "../style";

import { IColumnProps, Column } from "./Column";
import memoizeOne from "memoize-one";

export interface ITableProps {
  /**
   * Contains all data represented in the table.
   */
  data: any[];
  children:
    | Array<React.ReactElement<IColumnProps>>
    | React.ReactElement<IColumnProps>;
}

const ROW_HEIGHT = 35;

const DEFAULT_WIDTH = 1024;
const DEFAULT_HEIGHT = 768;
export class Table<T> extends React.PureComponent<ITableProps, {}> {
  public multiGridRef: { recomputeGridSize?: any } = {};

  public getData = memoizeOne(
    (data: T[]): Array<{}> | T[] => {
      return [{}, ...data, {}];
    }
  );

  public getColumnSizes = memoizeOne(
    (
      children: Array<React.ReactElement<IColumnProps>>,
      width: number
    ): number[] => {
      const totalColumns: number = children.length;
      let remainingWidth: number = width;
      return children.map((child, currentIndex) => {
        const calculatedWidth = child.props.width({
          width,
          totalColumns,
          currentIndex,
          remainingWidth
        });
        remainingWidth -= calculatedWidth;
        return calculatedWidth;
      });
    }
  );

  constructor(props) {
    super(props);

    this.getCell = this.getCell.bind(this);
    this.setRef = this.setRef.bind(this);
    this.updateGridSize = this.updateGridSize.bind(this);
    this.getGrid = this.getGrid.bind(this);
  }

  public render() {
    return (
      <AutoSizer
        __dataThatTriggersARerenderWhenChanged={this.props.data} // passed to notify react-virtualized about updates
        className={tableCss}
        defaultWidth={DEFAULT_WIDTH}
        defaultHeight={DEFAULT_HEIGHT}
        onResize={this.updateGridSize}
      >
        {this.getGrid}
      </AutoSizer>
    );
  }

  private getGrid({ width, height }) {
    const columnCount = React.Children.count(this.props.children);
    const columnSizes = this.getColumnSizes(
      React.Children.toArray(this.props.children) as Array<
        React.ReactElement<IColumnProps>
      >,
      width
    );

    function getColumnSize({ index }) {
      return columnSizes[index];
    }

    return (
      <MultiGrid
        ref={this.setRef}
        fixedColumnCount={1}
        fixedRowCount={1}
        cellRenderer={this.getCell}
        columnWidth={getColumnSize}
        columnCount={columnCount}
        enableFixedColumnScroll={true}
        enableFixedRowScroll={true}
        height={height}
        rowHeight={ROW_HEIGHT}
        // The addition of 2 adds a `Footer` and a `Header` row.
        rowCount={this.props.data.length + 2}
        width={width}
        hideTopRightGridScrollbar={true}
        hideBottomLeftGridScrollbar={true}
      />
    );
  }

  private getHeaderCell(
    args: GridCellProps & {
      column: React.ReactElement<IColumnProps>;
    }
  ) {
    const { key, style, column } = args;
    const className = css(headerCss, {
      ...style
    });
    return (
      <div className={className} key={key}>
        {column.props.header}
      </div>
    );
  }

  private getCell(args: GridCellProps) {
    const { columnIndex, rowIndex } = args;
    const data = this.getData(this.props.data);

    const column = React.Children.toArray(this.props.children)[
      columnIndex
    ] as React.ReactElement<IColumnProps>;

    if (!column || column.type !== Column) {
      return null;
    }

    if (rowIndex === this.props.data.length + 1) {
      return (
        <div key={args.key} style={args.style}>
          &nbsp;
        </div>
      );
    }

    return rowIndex === 0
      ? this.getHeaderCell({ ...args, column })
      : this.getContentCell({ ...args, column, data });
  }

  private getContentCell(
    args: GridCellProps & {
      column: React.ReactElement<IColumnProps>;
      data: any[];
    }
  ) {
    const { style, key, column, data, rowIndex } = args;
    const className = css(cellCss, {
      ...style
    });
    return (
      <div className={className} key={key}>
        {column.props.cellRenderer(data[rowIndex])}
      </div>
    );
  }

  private updateGridSize() {
    if (this.multiGridRef.recomputeGridSize != null) {
      this.multiGridRef.recomputeGridSize();
    }
  }

  private setRef(ref: any) {
    this.multiGridRef = ref;
  }
}

export default Table;
