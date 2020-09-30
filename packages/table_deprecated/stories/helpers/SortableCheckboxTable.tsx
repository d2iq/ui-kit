import * as React from "react";
import { Column, SortableHeaderCell, Cell, NumberCell } from "../..";
import { items } from "./mocks";
import CheckboxTable from "../../components/CheckboxTable";
import { DangerButton } from "../../../button";

type SortDirection = "ASC" | "DESC" | null;
interface SortableCheckboxTableDemoState {
  items: any[];
  sortDirection: SortDirection;
  sortColumn: string;
  selectedRows: {};
}

const getSortedList = (items, sortColumn) => {
  return items.sort((a, b) => {
    const textA = a[sortColumn].toString().toLowerCase();
    const textB = b[sortColumn].toString().toLowerCase();

    return textA < textB ? -1 : textA > textB ? 1 : 0;
  });
};

const nameCellRenderer = ({ name }: { name?: string }) => (
  <Cell>
    <strong>{name}</strong>
  </Cell>
);

const roleCellRenderer = ({ role }: { role?: string }) => (
  <Cell>
    <span>{role}</span>
  </Cell>
);

const zipcodeCellRenderer = ({ zipcode }: { zipcode?: string }) => (
  <NumberCell>
    <span>{zipcode}</span>
  </NumberCell>
);

class SortableCheckboxTable extends React.Component<
  {},
  SortableCheckboxTableDemoState
> {
  constructor(props) {
    super(props);

    this.state = {
      items,
      sortDirection: "DESC",
      sortColumn: "name",
      selectedRows: props.selectedRows || {}
    };

    this.handleSortClick = this.handleSortClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  render() {
    const { items, sortDirection, sortColumn } = this.state;

    return (
      <div
        style={{
          height: "200px",
          width: "100%",
          fontSize: "14px"
        }}
      >
        <div
          style={{
            minHeight: "37px",
            paddingBottom: "1em",
            textAlign: "right"
          }}
        >
          {Boolean(Object.keys(this.state.selectedRows).length) && (
            <DangerButton onClick={this.handleDelete}>
              Delete selected
            </DangerButton>
          )}
        </div>
        <CheckboxTable
          data={items.slice()}
          onChange={this.handleChange}
          selectedRows={this.state.selectedRows}
          uniqueKey="name"
        >
          <Column
            header={
              <SortableHeaderCell
                sortHandler={this.handleSortClick.bind(null, "name")}
                sortDirection={sortColumn === "name" ? sortDirection : null}
                columnContent="name"
              />
            }
            cellRenderer={nameCellRenderer}
            growToFill={true}
          />
          <Column
            header={
              <SortableHeaderCell
                sortHandler={this.handleSortClick.bind(null, "role")}
                sortDirection={sortColumn === "role" ? sortDirection : null}
                columnContent="role"
              />
            }
            cellRenderer={roleCellRenderer}
            growToFill={true}
          />
          <Column
            header={
              <SortableHeaderCell
                sortHandler={this.handleSortClick.bind(null, "zipcode")}
                sortDirection={sortColumn === "zipcode" ? sortDirection : null}
                columnContent="zip code"
                textAlign="right"
              />
            }
            cellRenderer={zipcodeCellRenderer}
            growToFill={true}
          />
        </CheckboxTable>
      </div>
    );
  }

  private updateData(
    items: any[],
    sortColumn: string,
    sortDirection: SortDirection,
    currentSortDirection?: SortDirection,
    currentSortColumn?: string
  ) {
    const copiedData = items.slice();

    if (
      sortDirection === currentSortDirection &&
      sortColumn === currentSortColumn
    ) {
      return { items: copiedData, sortDirection, sortColumn };
    }

    if (
      sortDirection !== currentSortDirection &&
      sortColumn === currentSortColumn
    ) {
      return { items: copiedData.reverse(), sortDirection, sortColumn };
    }

    return {
      items: getSortedList(copiedData, sortColumn),
      sortDirection,
      sortColumn
    };
  }

  private handleSortClick(columnName: string): void {
    const toggledDirection =
      this.state.sortDirection === "ASC" || this.state.sortColumn !== columnName
        ? "DESC"
        : "ASC";

    this.setState(
      this.updateData(
        this.state.items,
        columnName,
        toggledDirection,
        this.state.sortDirection,
        this.state.sortColumn
      )
    );
  }

  private handleChange(value) {
    this.setState({ selectedRows: value });
  }

  private handleDelete() {
    const newState = this.state.items.filter(
      row => !this.state.selectedRows[row.name]
    );

    this.setState({ items: newState, selectedRows: {} });
  }
}

export default SortableCheckboxTable;
