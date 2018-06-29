import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import { Table } from "../../index";
import { Column } from "../components/Column";

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
  <strong>{name}</strong>
);
const cityCellRenderer = ({ city }: { city?: string }) => (
  <strong>{city}</strong>
);
const roleCellRenderer = ({ role }: { role?: string }) => <em>{role}</em>;
const stateCellRenderer = ({ state }: { state?: string }) => (
  <span>{state}</span>
);
const zipcodeCellRenderer = ({ zipcode }: { zipcode?: string }) => (
  <span>{zipcode}</span>
);
const empty = () => "empty";
const width = ({ width: totalWidth }: { width?: number }) =>
  totalWidth ? totalWidth * 0.3 : 100;

storiesOf("Table", module)
  .addDecorator(withReadme([readme]))
  .addWithInfo("default", () => (
    <div
      style={{
        height: "175px",
        width: "100%"
      }}
    >
      <Table data={items}>
        <Column header="name" cellRenderer={nameCellRenderer} width={width} />
        <Column header="role" cellRenderer={roleCellRenderer} width={width} />
        <Column header="state" cellRenderer={stateCellRenderer} width={width} />
        <Column header="" cellRenderer={empty} width={width} />
        <Column
          header="zipcode"
          cellRenderer={zipcodeCellRenderer}
          width={width}
        />
        <Column header="city" cellRenderer={cityCellRenderer} width={width} />
      </Table>
    </div>
  ));
