import classNames from "classnames";
import React from "react";
import ReactDOM from "react-dom";

import DOMUtil from "../Util/DOMUtil";
import Util from "../Util/Util";
import VirtualList from "../VirtualList/VirtualList";

import { injectTableStyles } from "./style";

export interface Column {
  attributes?: object;
  className?: string;
  defaultContent?: string;
  cacheCell?: boolean;
  heading?: React.ReactNode;
  prop?: string | number;
  sortable?: boolean;
  sortFunction?: (prop: any) => (a: any, b: any) => 1 | -1 | 0;
}

export interface SortBy {
  order?: "asc" | "desc";
  prop?: string | number;
}

interface TableProps {
  buildRowOptions?: (row: object) => object;
  className: string;
  colGroup: JSX.Element;
  columns: Column[];
  containerSelector?: string;
  data: any[];
  emptyMessage?: React.ReactNode;
  itemHeight?: number;
  onSortCallback?: (sortBy: SortBy) => void;
  sortBy?: SortBy;
}

interface TableState {
  itemHeight?: number;
  sortBy?: SortBy;
}

const MAX_CACHE_SIZE = 10000;

const sortData = (columns, data, sortBy) => {
  if (sortBy.order === undefined || sortBy.prop === undefined) {
    return data;
  }

  let sortFunction;

  columns.forEach(column => {
    if (column.prop === sortBy.prop) {
      sortFunction = column.sortFunction;
    }
  });

  data = sortFunction
    ? Util.sortBy(data, sortFunction(sortBy.prop, sortBy.order))
    : Util.sortBy(data, sortBy.prop);

  if (sortBy.order === "desc") {
    data.reverse();
  }

  return data;
};

const getClassName = (column, sortBy, data, columns) => {
  if (Util.isFunction(column.className)) {
    return column.className(column.prop, sortBy, data, columns);
  }

  return column.className || "";
};

export class Table extends React.Component<TableProps, TableState> {
  public static defaultProps: Partial<TableProps> = {
    buildRowOptions: () => {
      return {};
    },
    sortBy: {},
    emptyMessage: "No data"
  };

  private cachedCells = {};
  private cachedIDs: any[] = [];
  private container = window;

  private containerRef = React.createRef<any>();
  private headersRef = React.createRef<any>();
  private itemHeightContainer = React.createRef<any>();

  constructor(props) {
    super(props);

    this.state = {
      sortBy: {}
    };
  }

  componentWillMount() {
    if (this.props.sortBy != null) {
      this.setState(
        { sortBy: this.props.sortBy },
        this.handleSort.bind(this, this.props.sortBy.prop, { toggle: false })
      );
    }
  }

  componentDidMount() {
    this.updateHeight();
  }

  componentWillReceiveProps() {
    this.updateHeight();

    if (this.props.sortBy && this.props.sortBy.prop) {
      this.handleSort(this.props.sortBy.prop, { toggle: false });
    }
  }

  checkFullCache() {
    if (this.cachedIDs.length < MAX_CACHE_SIZE) {
      return;
    }

    const lastID: any = this.cachedIDs.shift();
    delete this.cachedCells[lastID];
  }

  addToCache(id, element) {
    this.cachedCells[id] = element;
    this.cachedIDs.push(id);
    this.checkFullCache();
  }

  updateHeight() {
    if (this.props.containerSelector && this.container === window) {
      this.container =
        DOMUtil.closest(
          ReactDOM.findDOMNode(this),
          this.props.containerSelector
        ) || window;
    }

    if (
      this.props.itemHeight == null &&
      this.state.itemHeight == null &&
      this.itemHeightContainer &&
      this.itemHeightContainer.current
    ) {
      // Calculate content height only once and when node is ready
      const itemHeightContainerCurrent: any = ReactDOM.findDOMNode(
        this.itemHeightContainer.current
      );
      if (itemHeightContainerCurrent) {
        const itemHeight = DOMUtil.getComputedDimensions(
          itemHeightContainerCurrent.querySelector("tr")
        ).height;
        this.setState({ itemHeight: parseInt(itemHeight, 10) });
      }
    }
  }

  buildUniqueID(cellClassName, cellValue, prop) {
    return prop + cellClassName + cellValue;
  }

  getHeaders(headers, sortBy) {
    const buildSortAttributes = header => {
      const sortEvent = this.handleSort.bind(this, header.prop);

      return {
        onClick: sortEvent,
        tabIndex: 0,
        "aria-sort": this.state.sortBy ? this.state.sortBy.order : null,
        "aria-label": `${header.prop}: activate to sort column ${
          this.state.sortBy ? this.state.sortBy.order : null
        }`
      };
    };

    return headers.map((header, index) => {
      let order, heading;
      let attributes: any = {};

      // Only add sorting events if the column has a value for 'prop'
      // and the 'sorting' property is true.
      if (header.sortable !== false && "prop" in header) {
        attributes = buildSortAttributes(header);
        order = this.state.sortBy ? this.state.sortBy.order : null;
      }

      // If the heading property is a method, then pass to it the options and
      // render the result. Otherwise, display the value.
      heading = Util.isFunction(header.heading)
        ? header.heading(header.prop, order, sortBy)
        : header.heading;

      attributes.className = getClassName(
        header,
        this.state.sortBy,
        null,
        this.props.columns
      );

      return (
        <th key={index} {...attributes}>
          {heading}
        </th>
      );
    });
  }

  getBufferItem(columns, styles): any {
    return (
      <tr style={styles}>
        <td colSpan={columns.length} />
      </tr>
    );
  }

  getEmptyRowCell(columns) {
    return (
      <tr>
        <td colSpan={columns.length}>{this.props.emptyMessage}</td>
      </tr>
    );
  }

  getCellValue(row, prop, column) {
    const { getValue } = column;
    if (getValue && typeof getValue === "function") {
      return getValue(row, prop);
    }

    return row[prop];
  }

  getRowCells(columns, sortBy, buildRowOptions, row, rowIndex) {
    const rowCells = columns.map((column, index) => {
      let cellClassName = getClassName(column, sortBy, row, columns);
      const prop = column.prop;
      let cellValue = this.getCellValue(row, prop, column);
      let cellID;

      if (column.cacheCell === true) {
        cellID = this.buildUniqueID(cellClassName, cellValue, prop);
      }

      // Skip build cell if we have it memoized
      if (cellID === undefined || this.cachedCells[cellID] == null) {
        if (column.render) {
          cellValue = column.render(prop, row);
        }

        if (cellValue === undefined) {
          cellValue = column.defaultContent;
          cellClassName += " empty-cell";
        }

        const cellElement = (
          <td {...column.attributes} className={cellClassName} key={index}>
            {cellValue}
          </td>
        );

        if (!column.cacheCell) {
          return cellElement;
        }

        this.addToCache(cellID, cellElement);
      }

      return this.cachedCells[cellID];
    });

    return (
      <tr key={rowIndex} {...buildRowOptions(row, this)}>
        {rowCells}
      </tr>
    );
  }

  handleSort(prop, options) {
    const sortBy = this.state.sortBy;
    const onSortCallback = this.props.onSortCallback;
    options = Util.extend(
      {
        toggle: true
      },
      options
    );

    if (options.toggle) {
      const order =
        (sortBy && sortBy.order === "desc") || (sortBy && sortBy.prop !== prop)
          ? "asc"
          : "desc";

      this.setState({
        sortBy: { order, prop }
      });
    }

    if (sortBy && onSortCallback && Util.isFunction(onSortCallback)) {
      onSortCallback(sortBy);
    }
  }

  getTBody(columns, data, sortBy, itemHeight) {
    const buildRowOptions = this.props.buildRowOptions;
    let childToMeasure;

    if (itemHeight === 0 && data.length) {
      childToMeasure = this.getRowCells(
        columns,
        sortBy,
        buildRowOptions,
        data[0],
        -1
      );

      return <tbody ref={this.itemHeightContainer}>{childToMeasure}</tbody>;
    }

    if (data.length === 0) {
      return <tbody>{this.getEmptyRowCell(columns)}</tbody>;
    }

    return (
      <VirtualList
        className="table-virtual-list"
        container={this.container}
        itemBuffer={70}
        itemHeight={itemHeight}
        items={sortData(columns, data, sortBy)}
        renderBufferItem={this.getBufferItem.bind(this, columns)}
        renderItem={this.getRowCells.bind(
          this,
          columns,
          sortBy,
          buildRowOptions
        )}
        scrollDelay={200}
        tagName="tbody"
      />
    );
  }

  render() {
    const { columns, data } = this.props;
    const classes = classNames(this.props.className, "flush-bottom");
    const sortBy = this.state.sortBy;
    const itemHeight = this.state.itemHeight || this.props.itemHeight || 0;

    injectTableStyles();

    return (
      <div ref={this.containerRef}>
        <table ref={this.headersRef} className={classes}>
          {this.props.colGroup}
          <thead>
            <tr>{this.getHeaders(columns, sortBy)}</tr>
          </thead>
          {this.getTBody(columns, data, sortBy, itemHeight)}
        </table>
      </div>
    );
  }
}
