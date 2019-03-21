import * as React from "react";
import { cx, css } from "emotion";
import styled from "react-emotion";
import { AutoSizer, MultiGrid, GridCellProps } from "react-virtualized";

import {
  headerCss,
  cellCss,
  tableCss,
  rightGrid,
  hideScrollbarCss,
  rowHoverStyles,
  tableWrapper,
  scrollbarMeas
} from "../style";

import { ColumnProps, Column } from "./Column";
import memoizeOne from "memoize-one";
import { vAlignChildren } from "../../shared/styles/styleUtils";
import { textColorSecondary } from "../../design-tokens/build/js/designTokens";

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
  /**
   * How many columns do not scroll
   */
  fixedColumnCount?: number;
  /**
   * Set the row height
   */
  rowHeight?: number;
}

export interface TableState {
  isScrolling: boolean;
  hoveredRowIndex: number;
}

const ROW_HEIGHT = 35;

const DEFAULT_WIDTH = 1024;
const DEFAULT_HEIGHT = 768;

export const clampWidth = (
  baseWidth: number,
  minWidth: number,
  maxWidth: number
): number => Math.min(Math.max(baseWidth, minWidth), maxWidth);

export const fillColumns = (
  columns: Array<React.ReactElement<ColumnProps>>,
  colWidths: number[],
  width: number
): number[] => {
  let copiedColWidths = [...colWidths];
  const filledArea = columns
    .filter(child => !child.props.growToFill)
    .map(col => copiedColWidths[columns.indexOf(col)])
    .reduce((acc, curr) => acc + curr, 0);
  const widthToFill = width - filledArea;
  const fillWidthColsIdxArr: number[] = columns
    .filter(child => child.props.growToFill)
    .map(col => columns.indexOf(col));

  fillWidthColsIdxArr.forEach(colIdx => {
    const oldWidth = copiedColWidths[colIdx];
    const newWidth = widthToFill / fillWidthColsIdxArr.length;

    if (newWidth <= oldWidth) {
      return;
    }

    copiedColWidths[colIdx] = clampWidth(
      newWidth,
      columns[colIdx].props.minWidth || 0,
      columns[colIdx].props.maxWidth || width
    );
  });

  if (copiedColWidths.reduce((acc, curr) => acc + curr, 0) < width) {
    const widthToRedistribute =
      width - copiedColWidths.reduce((acc, curr) => acc + curr, 0);
    const colsToRedistributeTo = columns.filter(
      col => col.props.growToFill && !col.props.maxWidth
    );

    return columns.map((col, i) => {
      if (col.props.growToFill && !col.props.maxWidth) {
        return (
          widthToRedistribute / colsToRedistributeTo.length + copiedColWidths[i]
        );
      } else {
        return copiedColWidths[i];
      }
    });
  } else {
    return copiedColWidths;
  }
};

const ContentCell = styled("div")`
  ${props => {
    return `${
      props.theme.coloredRows &&
      props.theme.coloredRows[props["data-rowindex"] - 1]
        ? rowHoverStyles
        : ""
    }
  ${
    props.theme.mutedRows && props.theme.mutedRows[props["data-rowindex"] - 1]
      ? `color: ${textColorSecondary};`
      : ""
  }`;
  }};
`;

export class Table<T> extends React.PureComponent<TableProps, TableState> {
  public multiGridRef: { recomputeGridSize?: any } = {};
  public scrollMeasRef = React.createRef<HTMLDivElement>();

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
      let remainingWidth: number = width;
      let scrollbarWidth: number = 0;
      const scrollbarMeasEl = this.scrollMeasRef.current;
      if (scrollbarMeasEl) {
        scrollbarWidth =
          scrollbarMeasEl.offsetWidth - scrollbarMeasEl.clientWidth;
      }
      const scrollbarAdjustedWidth = width - scrollbarWidth;

      const totalColumns: number = children.length;
      const colWidths = children.map((child, currentIndex) => {
        const calculatedWidth = child.props.width
          ? child.props.width({
              width,
              totalColumns,
              currentIndex,
              remainingWidth
            })
          : scrollbarAdjustedWidth / totalColumns;

        const clampedWidth = clampWidth(
          calculatedWidth,
          child.props.minWidth || 0,
          child.props.maxWidth || width
        );
        remainingWidth -= clampedWidth;
        return clampedWidth;
      });

      if (children.filter(child => child.props.growToFill).length) {
        return fillColumns(children, colWidths, scrollbarAdjustedWidth) || [];
      }

      return colWidths;
    }
  );

  constructor(props) {
    super(props);

    this.getCell = this.getCell.bind(this);
    this.setRef = this.setRef.bind(this);
    this.updateGridSize = this.updateGridSize.bind(this);
    this.getGrid = this.getGrid.bind(this);
    this.onScroll = this.onScroll.bind(this);
    this.cellRenderer = this.cellRenderer.bind(this);

    this.state = {
      isScrolling: false,
      hoveredRowIndex: -1
    };
  }

  public render() {
    return (
      <div className={tableWrapper}>
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
        {/*
          Used to get scrollbar width to
          accurately calculate column widths
        */}
        <div className={scrollbarMeas} ref={this.scrollMeasRef} />
      </div>
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
        fixedColumnCount={this.props.fixedColumnCount || 1}
        fixedRowCount={1}
        cellRenderer={this.cellRenderer}
        columnWidth={getColumnSize}
        columnCount={columnCount}
        enableFixedColumnScroll={true}
        enableFixedRowScroll={true}
        height={height}
        rowHeight={this.props.rowHeight || ROW_HEIGHT}
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
    return (
      <div className={cx(headerCss, vAlignChildren)} style={style} key={key}>
        {column.props.header}
      </div>
    );
  }

  private cellRenderer(args: GridCellProps) {
    return this.getCell(args);
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
    const updateHoveredRowIndex = () => {
      this.setState({ hoveredRowIndex: rowIndex });
    };

    return (
      /* tslint:disable:react-a11y-event-has-role */
      <ContentCell
        className={cx(cellCss, vAlignChildren, {
          [css`
            ${rowHoverStyles};
          `]: rowIndex === this.state.hoveredRowIndex
        })}
        style={style}
        key={key}
        onMouseOver={updateHoveredRowIndex}
        data-rowindex={rowIndex}
      >
        {column.props.cellRenderer(data[rowIndex], style.width as number)}
      </ContentCell>
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
