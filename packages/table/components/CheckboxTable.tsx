import * as React from "react";
import { ThemeProvider } from "emotion-theming";
import { Table, Column, Cell, HeaderCell } from "..";
import { TableProps } from "./Table";
import CheckboxInput from "../../checkboxInput/components/CheckboxInput";

export interface CheckboxTableProps extends TableProps {
  /**
   * Callback for when a user makes a selection. Passes selected row data as a parameter
   */
  onChange?: (selectedRows: {}) => void;
  /**
   * Selected row data
   */
  selectedRows?: {};
  /**
   * Rows that cannot be selected
   */
  disabledRows?: {};
  /**
   * Rows that are in some incomplete state. Typically used with disabledRows
   */
  mutedRows?: {};
  /**
   * The unique key in each row's data object.
   *
   * Ideally, the value of this key in your table's data
   * should be a number or string
   */
  uniqueKey: string;
}

export interface CheckboxTableState {
  headerChecked: boolean;
}

class CheckboxTable extends React.PureComponent<
  CheckboxTableProps,
  CheckboxTableState
> {
  static getDerivedStateFromProps(props: CheckboxTableProps) {
    const { data, selectedRows = {}, disabledRows = {} } = props;

    return {
      headerChecked:
        Object.keys(selectedRows).length &&
        Object.keys(selectedRows).length ===
          data.length - Object.keys(disabledRows).length
    };
  }

  constructor(props) {
    super(props);

    this.state = {
      headerChecked: false
    };

    this.getSelectedRows = this.getSelectedRows.bind(this);
    this.checkboxCellRenderer = this.checkboxCellRenderer.bind(this);
    this.getHeaderCheckbox = this.getHeaderCheckbox.bind(this);
  }

  render() {
    const { selectedRows = {}, mutedRows = {}, uniqueKey, data } = this.props;
    const theme = {
      coloredRows: data.map(item => selectedRows[item[uniqueKey]]),
      mutedRows: data.map(item => mutedRows[item[uniqueKey]])
    };

    return (
      <ThemeProvider theme={theme}>
        <Table data={this.props.data} fixedColumnCount={2}>
          <Column
            header={<HeaderCell>{this.getHeaderCheckbox()}</HeaderCell>}
            cellRenderer={this.checkboxCellRenderer}
          />
          {this.props.children as any}
        </Table>
      </ThemeProvider>
    );
  }

  private checkboxCellRenderer(rowData) {
    const {
      data,
      onChange,
      uniqueKey,
      selectedRows = {},
      disabledRows = {}
    } = this.props;
    const rowId = rowData[uniqueKey];
    const rowIndex = data.indexOf(rowData);
    const handleOnChange = e => {
      if (onChange) {
        onChange(this.getSelectedRows(rowId, e.target.checked));
      }
    };

    if (disabledRows[rowId]) {
      return null;
    }

    return (
      <Cell>
        <CheckboxInput
          id={rowIndex.toString()}
          inputLabel={`Toggle row ${rowIndex}`}
          showInputLabel={false}
          checked={Boolean(selectedRows[rowId])}
          onChange={handleOnChange}
        />
      </Cell>
    );
  }

  private getHeaderCheckbox() {
    const {
      data,
      uniqueKey,
      onChange,
      selectedRows = {},
      disabledRows = {}
    } = this.props;
    const selectedLength = Object.keys(selectedRows).length;
    const selectableRows = data.filter(
      datum => !disabledRows[datum[uniqueKey]]
    );
    const allSelected = selectableRows.reduce((acc, curr) => {
      acc[curr[uniqueKey]] = true;
      return acc;
    }, {});
    const maxSelectedLength = data.length - Object.keys(disabledRows).length;

    const handleChange = e => {
      if (onChange) {
        onChange(e.target.checked ? allSelected : {});
      }
      this.setState({ headerChecked: e.target.checked });
    };

    return (
      <CheckboxInput
        id="headerCheckbox"
        inputLabel="Toggle all rows"
        showInputLabel={false}
        checked={
          (Boolean(selectedLength) && selectedLength === maxSelectedLength) ||
          this.state.headerChecked
        }
        indeterminate={
          Boolean(selectedLength) && selectedLength < maxSelectedLength
        }
        disabled={!Boolean(maxSelectedLength)}
        onChange={handleChange}
      />
    );
  }

  private getSelectedRows(rowId: string, checked) {
    const selectedRows: { [key: string]: boolean } =
      this.props.selectedRows || {};

    if (checked) {
      return { ...selectedRows, ...{ [rowId]: true } };
    }

    const { [rowId]: _omit, ...newSelected } = selectedRows;
    return newSelected;
  }
}

export default CheckboxTable;
