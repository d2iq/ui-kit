import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import { Table, Column, Cell, HeaderCell, TextCell } from "../index";

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
    <em>{role}</em>
  </Cell>
);
const stateCellRenderer = ({ state }: { state?: string }) => (
  <Cell>
    <span>{state}</span>
  </Cell>
);
const zipcodeCellRenderer = ({ zipcode }: { zipcode?: string }) => (
  <Cell>
    <span>{zipcode}</span>
  </Cell>
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
          header={<HeaderCell>zipcode</HeaderCell>}
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
  ));
