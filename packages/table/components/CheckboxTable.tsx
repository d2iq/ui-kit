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
    const selectedLength = props.selectedRows
      ? Object.keys(props.selectedRows).length
      : 0;

    return {
      headerChecked: selectedLength === props.data.length
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
    const { selectedRows = {}, uniqueKey, data } = this.props;
    const theme = {
      coloredRows: data.map(item => selectedRows[item[uniqueKey]])
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
    const { data, onChange, uniqueKey, selectedRows = {} } = this.props;
    const rowId = rowData[uniqueKey];
    const rowIndex = data.indexOf(rowData);
    const handleOnChange = e => {
      if (onChange) {
        onChange(this.getSelectedRows(rowId, e.target.checked));
      }
    };

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
    const { data, uniqueKey, onChange, selectedRows = {} } = this.props;
    const selectedLength = Object.keys(selectedRows).length;
    const allSelected = data.reduce((acc, curr) => {
      acc[curr[uniqueKey]] = true;
      return acc;
    }, {});

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
          (Boolean(selectedLength) &&
            selectedLength === this.props.data.length) ||
          this.state.headerChecked
        }
        indeterminate={
          Boolean(selectedLength) && selectedLength < this.props.data.length
        }
        disabled={!Boolean(this.props.data.length)}
        onChange={handleChange}
      />
    );
  }

  private getSelectedRows(rowId, checked) {
    const selectedRows = this.props.selectedRows || {};

    if (checked) {
      return { ...selectedRows, ...{ [rowId]: true } };
    }

    const { [rowId]: _omit, ...newSelected } = selectedRows;
    return newSelected;
  }
}

export default CheckboxTable;
