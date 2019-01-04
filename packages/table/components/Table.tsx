import * as React from "react";
import { css, cx } from "emotion";
import { AutoSizer, MultiGrid, GridCellProps } from "react-virtualized";

import {
  headerCss,
  cellCss,
  tableCss,
  rightGrid,
  hideScrollbarCss,
  rowHoverCss
} from "../style";

import { ColumnProps, Column } from "./Column";
import memoizeOne from "memoize-one";

export interface TableProps {
  /**
   * Contains all data represented in the table.
   */
  data: any[];
  /**
   * Has to be either an Array of Columns or one Column.
   */
  children:
    | Array<React.ReactElement<ColumnProps>>
    | React.ReactElement<ColumnProps>;
}

export interface TableState {
  isScrolling: boolean;
  hoveredRowIndex: number;
}

const ROW_HEIGHT = 35;

const DEFAULT_WIDTH = 1024;
const DEFAULT_HEIGHT = 768;
export class Table<T> extends React.PureComponent<TableProps, TableState> {
  public multiGridRef: { recomputeGridSize?: any } = {};

  public getData = memoizeOne(
    (data: T[]): Array<{}> | T[] => {
      return [{}, ...data];
    }
  );

  public getColumnSizes = memoizeOne(
    (
      children: Array<React.ReactElement<ColumnProps>>,
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
    this.onScroll = this.onScroll.bind(this);

    this.state = {
      isScrolling: false,
      hoveredRowIndex: -1
    };
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
        {({ height, width }) =>
          this.getGrid({ height, width }, this.state.isScrolling)
        }
      </AutoSizer>
    );
  }

  private onScroll({ scrollLeft }) {
    const scrollValue = Math.floor(scrollLeft);

    if (scrollValue >= 5 && !this.state.isScrolling) {
      this.setState({ isScrolling: true });
    }

    if (scrollValue < 5 && this.state.isScrolling) {
      this.setState({ isScrolling: false });
    }
  }

  private getGrid({ width, height }, isScrolling) {
    const rightGridStyles = isScrolling ? rightGrid : "";
    const columnCount = React.Children.count(this.props.children);
    const columnSizes = this.getColumnSizes(
      React.Children.toArray(this.props.children) as Array<
        React.ReactElement<ColumnProps>
      >,
      width
    );

    function getColumnSize({ index }) {
      return columnSizes[index];
    }

    return (
      <MultiGrid
        onScroll={this.onScroll}
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
        rowCount={this.props.data.length + 1}
        width={width}
        hideTopRightGridScrollbar={true}
        hideBottomLeftGridScrollbar={true}
        classNameTopRightGrid={cx(rightGridStyles, hideScrollbarCss)}
        classNameBottomRightGrid={rightGridStyles}
        classNameBottomLeftGrid={hideScrollbarCss}
      />
    );
  }

  private getHeaderCell(
    args: GridCellProps & {
      column: React.ReactElement<ColumnProps>;
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
    ] as React.ReactElement<ColumnProps>;

    if (!column || column.type !== Column) {
      return null;
    }

    return rowIndex === 0
      ? this.getHeaderCell({ ...args, column })
      : this.getContentCell({ ...args, column, data });
  }

  private getContentCell(
    args: GridCellProps & {
      column: React.ReactElement<ColumnProps>;
      data: any[];
    }
  ) {
    const { style, key, column, data, rowIndex } = args;
    const className = css(cellCss, {
      ...style
    });
    const updateHoveredRowIndex = () => {
      this.setState({ hoveredRowIndex: rowIndex });
    };

    return (
      /* tslint:disable:react-a11y-event-has-role */
      <div
        className={cx(className, {
          [rowHoverCss]: rowIndex === this.state.hoveredRowIndex
        })}
        key={key}
        onMouseOver={updateHoveredRowIndex}
      >
        {column.props.cellRenderer(data[rowIndex], style.width as number)}
      </div>
      /* tslint:enable:react-a11y-event-has-role */
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
