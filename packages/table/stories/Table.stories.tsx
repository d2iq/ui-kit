import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import {
  Table,
  Column,
  Cell,
  HeaderCell,
  TextCell,
  NumberCell
} from "../index";

const readme = require("../README.md");

const items = [
  {
    name: "Brian Vaughn",
    role: "Software Engineer",
    city: "San Jose",
    state: "CA",
    zipcode: 95125
  },
  {
    name: "Jon Doe",
    role: "Product engineer",
    city: "Mountain View",
    state: "CA",
    zipcode: 95125
  },
  {
    name: "Jane Doe",
    role: "UX Designer",
    city: "San Francisco",
    state: "CA",
    zipcode: 95125
  }
];

const nameCellRenderer = ({ name }: { name?: string }) => (
  <Cell>
    <strong>{name}</strong>
  </Cell>
);
const cityCellRenderer = ({ city }: { city?: string }) => (
  <Cell>
    <strong>{city}</strong>
  </Cell>
);
const roleCellRenderer = ({ role }: { role?: string }) => (
  <Cell>
    <span>{role}</span>
  </Cell>
);
const stateCellRenderer = ({ state }: { state?: string }) => (
  <Cell>
    <span>{state}</span>
  </Cell>
);
const zipcodeCellRenderer = ({ zipcode }: { zipcode?: string }) => (
  <NumberCell>
    <span>{zipcode}</span>
  </NumberCell>
);
const veryLongRenderer = () => (
  <TextCell>
    <span>
      {Array(100)
        .fill("VeryLongWord")
        .join("")}
    </span>
  </TextCell>
);

const empty = () => <Cell>empty</Cell>;
const width = ({ width: totalWidth }: { width?: number }) =>
  totalWidth ? totalWidth * 0.3 : 100;

const itemCellRenderer = item => (
  <Cell>
    <span>{item}</span>
  </Cell>
);

const randomNumbers = n => new Array(n).fill(0).map(() => Math.random() * 100);

class ChangingTable extends React.Component<{}, { items: number[] }> {
  constructor(props) {
    super(props);
    this.state = {
      items: randomNumbers(20)
    };

    setInterval(() => {
      this.setState({
        items: randomNumbers(20)
      });
    }, 100);
  }

  render() {
    return (
      <Table data={this.state.items}>
        <Column
          header={<HeaderCell>name</HeaderCell>}
          cellRenderer={itemCellRenderer}
          width={width}
        />
      </Table>
    );
  }
}

storiesOf("Table", module)
  .addDecorator(withReadme([readme]))
  .addWithInfo("default", () => (
    <div
      style={{
        height: "175px",
        width: "100%",
        fontSize: "14px"
      }}
    >
      <Table data={items}>
        <Column
          header={<HeaderCell>name</HeaderCell>}
          cellRenderer={nameCellRenderer}
          width={width}
        />
        <Column
          header={<HeaderCell>role</HeaderCell>}
          cellRenderer={roleCellRenderer}
          width={width}
        />
        <Column
          header={<HeaderCell>state</HeaderCell>}
          cellRenderer={stateCellRenderer}
          width={width}
        />
        <Column header="" cellRenderer={empty} width={width} />
        <Column
          header={<HeaderCell>Very Long</HeaderCell>}
          cellRenderer={veryLongRenderer}
          width={width}
        />
        <Column
          header={<HeaderCell>zip code</HeaderCell>}
          cellRenderer={zipcodeCellRenderer}
          width={width}
        />
        <Column
          header={<HeaderCell>city</HeaderCell>}
          cellRenderer={cityCellRenderer}
          width={width}
        />
      </Table>
    </div>
  ))
  .addWithInfo("no scroll", () => (
    <div
      style={{
        height: "175px",
        width: "100%",
        fontSize: "14px"
      }}
    >
      <Table data={items}>
        <Column
          header={<HeaderCell>name</HeaderCell>}
          cellRenderer={nameCellRenderer}
          width={width}
        />
        <Column
          header={<HeaderCell>role</HeaderCell>}
          cellRenderer={roleCellRenderer}
          width={width}
        />
        <Column
          header={<HeaderCell>state</HeaderCell>}
          cellRenderer={stateCellRenderer}
          width={width}
        />
      </Table>
    </div>
  ))
  .addWithInfo("changing values", () => (
    <div
      style={{
        height: "175px",
        width: "100%",
        fontSize: "14px"
      }}
    >
      <ChangingTable />
    </div>
  ));
