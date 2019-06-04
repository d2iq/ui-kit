import * as React from "react";
import { Table, Column } from "../../";

export interface ConfigurationMapProps {
  data: { [key: string]: string | number };
}

const cellRenderer = column => data => <span>{data[column]}</span>;
const keyRenderer = cellRenderer(0);
const valueRenderer = cellRenderer(1);

class ConfigurationMap extends React.PureComponent<ConfigurationMapProps, {}> {
  public render() {
    const { data } = this.props;

    const tableData = Object.entries(data);

    return (
      <Table data={tableData}>
        <Column header="" cellRenderer={keyRenderer} />
        <Column header="" cellRenderer={valueRenderer} />
      </Table>
    );
  }
}

export default ConfigurationMap;
