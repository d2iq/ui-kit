import * as React from "react";
import { cx } from "emotion";
import * as style from "./style";
import { Draggable, Sorter } from "./Util";
import { ResetButton } from "../button";
import { useIntersect } from "../utilities/useIntersect";

export type Column<A, B = string> = {
  /**
   * An id given to that column. Needed for persistence.
   */
  id: B;

  /**
   * Renderer for the cells of that column.
   */
  render: (a: A) => React.ReactNode;

  /**
   * Render a header cell
   */
  header?: React.ReactNode;

  /**
   * A function to sort the entries of the table.
   * It first needs to handle a direction and then has to compare two elements.
   * e.g. (dir: "asc" | "desc", dirAsNum: 1 | -1) => (a: number, b: number ) => dirAsNum * (a - b)
   */
  sorter?: Sorter<A>;

  /**
   * The initial width of that column. Will be interpolated to a grid-template:
   * https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns
   * Fine:
   * - `"20px"`
   * - `"10%"`
   * - `"1fr"`
   * - `"mixmax(100px, 1fr)"`
   * - ...
   * Note that each row calculates its own grid, so using e.g max-content might not be a good idea.
   */
  initialWidth?: string;

  /**
   * Text alignment for cells in the column
   */
  textAlign?: React.CSSProperties["textAlign"];
};

type TableProps<A, B = string, C extends B = B> = {
  /**
   * Table columns
   */
  columns: Array<Column<A, B>>;

  /**
   * The ID and direction to initially sort by.
   */
  initialSorter?: { by: C; order?: "asc" | "desc" };

  /**
   * A callback invoked whenever the internal state of the table is changed.
   * Have a look at the State type to see what's in there.
   */
  onStateChange?: (a: State) => void;

  /**
   * Whether the first column shall be sticky. Defaults to true.
   */
  stickyFirstCol?: boolean;

  /**
   * A function that provides a stable and unique ID for entries in the table.
   */
  toId: (a: A) => string;
};

// DON'T put stuff here that you don't want persisted.
type State = {
  sortBy: string | null;
  order: "asc" | "desc";
  columns: Array<{
    id: string;
    width: string;
  }>;
};

const getCellClassName = (
  gridTemplateFragments: string[],
  stickyFirstCol?: boolean
) =>
  cx(style.row(gridTemplateFragments), {
    [style.rowWithStickyColumn]: stickyFirstCol
  });

type HeaderCellProps<Entry> = {
  column: Column<Entry>;
  id: string;
  state: State;
  textAlign?: "left" | "right" | "center";
  update: (a: Partial<State>) => void;
  showScrollShadow?: boolean;
};

const ariaSortStringMap: { asc: "ascending"; desc: "descending" } = {
  asc: "ascending",
  desc: "descending"
};

function HeaderCell<Entry>({
  column,
  id,
  update,
  state,
  showScrollShadow
}: HeaderCellProps<Entry>) {
  // -- WIDTH --
  const cell = React.useRef<HTMLDivElement>(null);
  const [width, setWidth] = React.useState(0);
  const onRelativeXChange = (change: number) => {
    const newWidth = Math.max(width + change, 50);
    state.columns.find(c => c.id === id)!.width = `${newWidth}px`;
    update({ columns: state.columns.slice(0) });
  };
  React.useEffect(() => setWidth(cell.current?.clientWidth ?? 0));

  // -- SORTING --
  const order = state.sortBy === id ? state.order : null;
  const onClick =
    column.sorter &&
    (() => update({ sortBy: id, order: order === "asc" ? "desc" : "asc" }));

  return (
    <div
      className={cx(style.headerCell(column.textAlign), {
        [style.makeSpaceForSortIndicator]: Boolean(column.sorter),
        [style.sortable(order)]: Boolean(column.sorter),
        [style.rowScrollShadow]: showScrollShadow
      })}
      id={id}
      ref={cell}
      role="columnheader"
      aria-sort={order ? ariaSortStringMap[order] : "none"}
    >
      {column.sorter ? (
        <>
          <ResetButton onClick={onClick} className={style.sortableButton}>
            {column.header}
          </ResetButton>
          <Draggable onRelativeXChange={onRelativeXChange} />
        </>
      ) : (
        <>
          {column.header}
          <Draggable onRelativeXChange={onRelativeXChange} />
        </>
      )}
    </div>
  );
}

type HeaderRowProps<Entry> = {
  columns: Array<Column<Entry>>;
  stickyFirstCol?: boolean;
  state: State;
  update: (a: Partial<State>) => void;
  showScrollShadow: boolean;
};

function HeaderRow<Entry>({
  columns,
  state,
  stickyFirstCol = true,
  update,
  showScrollShadow
}: HeaderRowProps<Entry>) {
  const toHeaderCell = ({ id }) => (
    <HeaderCell
      key={id}
      id={id}
      column={columns.find(c => c.id === id)!}
      update={update}
      state={state}
      showScrollShadow={showScrollShadow}
    />
  );

  const className = cx(
    getCellClassName(
      state.columns.map(c => c.width),
      stickyFirstCol
    ),
    style.headerRow
  );
  return (
    <div role="row" className={className} key="headerRow">
      {state.columns.map(toHeaderCell)}
    </div>
  );
}

type DivProps = React.HTMLAttributes<HTMLDivElement>;
export function Table<Entry, ColIDs extends string, Sort extends ColIDs>({
  data,
  columns,
  initialSorter,
  onStateChange,
  stickyFirstCol = true,
  toId,
  children,
  ...divProps
}: { data: Entry[] } & DivProps & TableProps<Entry, ColIDs, Sort>) {
  const [state, setState] = React.useState<State>({
    columns: columns.map(c => ({
      id: c.id,
      width: c.initialWidth ?? "1fr"
    })),
    order: initialSorter?.order ?? "asc",
    sortBy: initialSorter?.by ?? null
  });
  const tableRef = React.useRef<HTMLDivElement>(null);
  const [ref, entry] = useIntersect({
    root: tableRef.current
  });

  const update = (x: Partial<State>) => {
    setState({ ...state, ...x });
    onStateChange?.({ ...state, ...x });
  };
  const col = columns.find(c => c.id === state.sortBy);
  const sort =
    col?.sorter?.(state.order, state.order === "asc" ? 1 : -1) ?? (() => 0);
  const sortedData = data.sort(sort);
  const toRow = (el: Entry) => (
    <Row
      key={"row-" + toId(el)}
      columns={columns}
      colWidths={state.columns.map(c => c.width)}
      el={el}
      toId={toId}
      stickyFirstCol={stickyFirstCol}
      showScrollShadow={
        Boolean(entry) && !entry?.isIntersecting && stickyFirstCol
      }
    />
  );

  return (
    <div {...divProps} className={style.table} role="grid" ref={tableRef}>
      <HeaderRow
        columns={columns}
        stickyFirstCol={stickyFirstCol}
        state={state}
        update={update}
        showScrollShadow={
          Boolean(entry) && !entry?.isIntersecting && stickyFirstCol
        }
      />

      {sortedData.map(toRow)}
      <div ref={ref} className={style.tableScrollObserver} />
    </div>
  );
}

type RowProps<Data> = {
  colWidths: string[];
  columns: Array<Column<Data>>;
  el: Data;
  stickyFirstCol: boolean;
  toId: TableProps<Data>["toId"];
  showScrollShadow: boolean;
};
const Row = React.memo(function Row<A>({
  colWidths,
  columns,
  el,
  stickyFirstCol,
  toId,
  showScrollShadow = false
}: RowProps<A>) {
  const rowId = toId(el);
  const className = cx(
    getCellClassName(colWidths, stickyFirstCol),
    style.contentRow
  );

  return (
    <div role="row" className={className} key={`row-${rowId}`}>
      {columns.map(({ id: colID, render, textAlign, sorter }) => (
        <div
          key={rowId + colID}
          aria-describedby={colID}
          className={cx(style.cell(textAlign), {
            [style.makeSpaceForSortIndicator]:
              Boolean(sorter) && textAlign === "right",
            [style.rowScrollShadow]: showScrollShadow
          })}
          role="gridcell"
        >
          {render(el)}
        </div>
      ))}
    </div>
  );
});
