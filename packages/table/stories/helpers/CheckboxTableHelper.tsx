import * as React from "react";
import CheckboxTable, {
  CheckboxTableProps
} from "../../components/CheckboxTable";
import { DangerButton, StandardButton } from "../../../button";

interface CheckboxTableHelperState {
  items: any[];
  mutedRows?: {};
  disabledRows?: {};
  selectedRows: {};
}

interface CheckboxTableHelperProps extends CheckboxTableProps {
  showGlobalAction?: boolean;
}

class CheckboxTableHelper extends React.PureComponent<
  CheckboxTableHelperProps,
  CheckboxTableHelperState
> {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

    this.state = {
      selectedRows: props.selectedRows || [],
      items: props.data || []
    };
  }

  render() {
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
          {Boolean(this.props.showGlobalAction) && (
            <span style={{ paddingRight: "1em" }}>
              <StandardButton>Global action</StandardButton>
            </span>
          )}
          {Boolean(Object.keys(this.state.selectedRows).length) && (
            <DangerButton onClick={this.handleDelete}>
              Delete selected
            </DangerButton>
          )}
        </div>
        <CheckboxTable
          data={this.state.items}
          onChange={this.handleChange}
          selectedRows={this.state.selectedRows}
          uniqueKey={this.props.uniqueKey}
          disabledRows={this.props.disabledRows}
          mutedRows={this.props.mutedRows}
        >
          {this.props.children}
        </CheckboxTable>
      </div>
    );
  }

  private handleChange(value) {
    this.setState({ selectedRows: value });
  }

  private handleDelete() {
    const newState = this.state.items.filter(
      row => !this.state.selectedRows[row[this.props.uniqueKey]]
    );

    this.setState({ items: newState, selectedRows: {} });
  }
}

export default CheckboxTableHelper;
