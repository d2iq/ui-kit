import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import { IWidthArgs } from "../components/Column";
import { Table, Column, Cell, HeaderCell, TextCell, NumberCell } from "..";
import ChangingTable from "./helpers/ChangingTable";
import SortableTable from "./helpers/SortableTable";
import { items, width } from "./helpers/mocks";

const readme = require("../README.md");

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
  .addWithInfo("width-aware render", () => {
    const stateWidth = (args: IWidthArgs): number =>
      Math.min(100, Math.max(200, args.width / args.totalColumns));
    const fillRemainingWidth = (args: IWidthArgs): number =>
      args.remainingWidth;
    const nameCellRendererWithWidth = (
      { name }: { name: string },
      width: number
    ) => {
      return (
        <Cell>
          <strong>
            {width > 200 ? name : `${name.charAt(0)}. ${name.split(" ")[1]}`}
          </strong>
        </Cell>
      );
    };

    return (
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
            cellRenderer={nameCellRendererWithWidth}
            width={width}
          />
          <Column
            header={<HeaderCell>state</HeaderCell>}
            cellRenderer={stateCellRenderer}
            width={stateWidth}
          />
          <Column
            header={<HeaderCell>Very Long</HeaderCell>}
            cellRenderer={veryLongRenderer}
            width={fillRemainingWidth}
          />
        </Table>
      </div>
    );
  })
  .addWithInfo("with sortable column", () => (
    <div
      style={{
        height: "175px",
        width: "100%",
        fontSize: "14px"
      }}
    >
      <SortableTable />
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
