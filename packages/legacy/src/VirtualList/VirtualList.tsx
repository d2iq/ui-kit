/**
 * Largely based on the VirtualList component from
 * https://github.com/developerdizzle/react-virtual-list
 */

import React from "react";
import ReactDOM from "react-dom";
import throttle from "lodash.throttle";

import DOMUtil from "../Util/DOMUtil";
import { Column } from "../Table/Table";

const mathMax = Math.max;
const mathMin = Math.min;
const mathFloor = Math.floor;
const mathCeil = Math.ceil;
const METHODS_TO_BIND = [
  "onScroll",
  "getBox",
  "getItems",
  "getItemsToRender",
  "getVirtualState",
  "visibleItems"
];

const safeCall = f => {
  try {
    return f();
  } catch (e) {
    // tslint:disable:no-console
    console.error(e);
    //tslint:enable:no-console
  }
};

interface VirtualListProps {
  className?: string;
  items: any[];
  itemHeight: number;
  renderBufferItem: (columns: Column[], styles?: any) => Element;
  renderItem: (row: object, rowIndex: number) => JSX.Element;
  container?: Window;
  tagName?: string;
  scrollDelay?: number;
  itemBuffer?: number;
}

interface VirtualListState {
  bufferEnd: number;
  bufferStart: number;
  items: any[];
}

export default class VirtualList extends React.Component<
  VirtualListProps,
  VirtualListState
> {
  public static defaultProps: Partial<VirtualListProps> = {
    container: typeof window !== "undefined" ? window : undefined,
    itemBuffer: 0,
    scrollDelay: 0,
    tagName: "div"
  };

  private listRef = React.createRef<any>();

  constructor(props) {
    super(props);

    this.state = this.getVirtualState(this.props);

    // Replace onScroll by throttling
    if (this.props.scrollDelay && this.props.scrollDelay > 0) {
      this.onScroll = throttle(
        this.onScroll,
        this.props.scrollDelay,
        // Fire on both leading and trailing edge to minize flash of
        // un-rendered items
        { leading: true, trailing: true }
      );
    }

    METHODS_TO_BIND.forEach(method => {
      this[method] = this[method].bind(this);
    });
  }

  componentDidMount() {
    // Make sure to trigger this scroll event and make necessary adjustments
    // before (useCapture = true) any other scroll event is handled
    if (this.props.container) {
      this.props.container.addEventListener("scroll", this.onScroll, true);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.container && this.props.container !== nextProps.container) {
      this.props.container.removeEventListener("scroll", this.onScroll, true);
      // Make sure to trigger this scroll event and make necessary adjustments
      // before (useCapture = true) any other scroll event is handled
      nextProps.container.addEventListener("scroll", this.onScroll, true);
    }

    const state = this.getVirtualState(nextProps);
    this.setState(state);
  }

  componentWillUnmount() {
    if (this.props.container) {
      this.props.container.removeEventListener("scroll", this.onScroll, true);
    }
  }

  onScroll() {
    const state = this.getVirtualState(this.props);
    this.setState(state);
  }

  getBox(view, list) {
    list.height = list.height || list.bottom - list.top;

    return {
      top: mathMax(0, mathMin(view.top - list.top)),
      bottom: mathMax(0, mathMin(list.height, view.bottom - list.top))
    };
  }

  getItems(viewTop, viewHeight, listTop, itemHeight, itemCount, itemBuffer) {
    if (itemCount === 0 || itemHeight === 0) {
      return {
        firstItemIndex: 0,
        lastItemIndex: 0
      };
    }

    const listHeight = itemHeight * itemCount;

    const listBox = {
      top: listTop,
      height: listHeight,
      bottom: listTop + listHeight
    };

    const bufferHeight = itemBuffer * itemHeight;
    viewTop -= bufferHeight;
    viewHeight += bufferHeight * 2;

    const viewBox = {
      top: viewTop,
      bottom: viewTop + viewHeight
    };

    // List is below viewport
    if (viewBox.bottom < listBox.top) {
      return {
        firstItemIndex: 0,
        lastItemIndex: viewHeight / itemHeight + itemBuffer
      };
    }

    // List is above viewport
    if (viewBox.top > listBox.bottom) {
      return {
        firstItemIndex: 0,
        lastItemIndex: viewHeight / itemHeight + itemBuffer
      };
    }

    const listViewBox = this.getBox(viewBox, listBox);

    const firstItemIndex = mathMax(0, mathFloor(listViewBox.top / itemHeight));
    const lastItemIndex = mathCeil(listViewBox.bottom / itemHeight) - 1;

    const result = {
      firstItemIndex,
      lastItemIndex
    };

    return result;
  }

  getItemsToRender(props, state) {
    return state.items.map((item, index) => {
      return safeCall(() => {
        return props.renderItem(
          item,
          // Start from number of buffered items
          state.bufferStart / props.itemHeight + index
        );
      });
    });
  }

  getVirtualState(props) {
    // Default values
    const state = {
      bufferEnd: 0,
      bufferStart: 0,
      items: []
    };

    // Early return if nothing to render
    if (
      typeof props.container === "undefined" ||
      props.items.length === 0 ||
      props.itemHeight <= 0
    ) {
      return state;
    }

    const items = props.items;
    const container = props.container;
    const viewHeight = DOMUtil.getViewportHeight();

    let viewTop =
      typeof container.scrollY !== "undefined"
        ? container.scrollY
        : DOMUtil.getScrollTop(container) || 0;

    if (this.listRef && this.listRef.current) {
      const listNode = ReactDOM.findDOMNode(this.listRef.current) as Element;
      const listBounding = listNode && listNode.getBoundingClientRect();

      const elementTop =
        listBounding.top + DOMUtil.getScrollTop(container) || 0;

      viewTop -= elementTop;
    }

    const renderStats = this.getItems(
      viewTop,
      viewHeight,
      0,
      props.itemHeight,
      items.length,
      props.itemBuffer
    );

    state.items = items.slice(
      renderStats.firstItemIndex,
      renderStats.lastItemIndex + 1
    );

    state.bufferStart = renderStats.firstItemIndex * props.itemHeight;
    state.bufferEnd =
      (props.items.length - renderStats.lastItemIndex - 1) * props.itemHeight;

    return state;
  }

  // In case you need to get the currently visible items
  visibleItems() {
    return this.state.items;
  }

  render() {
    const state = this.state;
    const { renderBufferItem, tagName, className } = this.props;

    const topStyles: any = {
      height: state.bufferStart
    };

    if (!(state.bufferStart > 0)) {
      topStyles.display = "none";
    }

    const bottomStyles: any = {
      height: state.bufferEnd
    };

    if (!(state.bufferEnd > 0)) {
      bottomStyles.display = "none";
    }

    const ElTag: any = tagName;

    return (
      <ElTag ref={this.listRef} className={className}>
        {safeCall(() => renderBufferItem(topStyles))}
        {this.getItemsToRender(this.props, state)}
        {safeCall(() => renderBufferItem(bottomStyles))}
      </ElTag>
    );
  }
}
