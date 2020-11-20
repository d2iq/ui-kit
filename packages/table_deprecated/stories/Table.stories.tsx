import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import { WidthArgs } from "../components/Column";
import {
  Table_Deprecated,
  Column,
  Cell,
  HeaderCell,
  TextCell,
  NumberCell
} from "..";
import ChangingTable from "./helpers/ChangingTable";
import SortableTable from "./helpers/SortableTable";
import ResizableTableOnResizeDemo from "./helpers/ResizableTableOnResizeDemo";
import { items, width } from "./helpers/mocks";
import { StandardButton } from "../../button";

import readme from "../README.md";

const nameCellRenderer = ({ name }: { name?: string }) => (
  <TextCell>
    <strong>{name}</strong>
  </TextCell>
);
const cityCellRenderer = ({ city }: { city?: string }) => (
  <TextCell>
    <strong>{city}</strong>
  </TextCell>
);
const roleCellRenderer = ({ role }: { role?: string }) => (
  <TextCell>
    <span>{role}</span>
  </TextCell>
);
const stateCellRenderer = ({ state }: { state?: string }) => (
  <TextCell>
    <span>{state}</span>
  </TextCell>
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

storiesOf("Data listing|Table_Deprecated", module)
  .addParameters({
    readme: {
      sidebar: readme,
    },
  })
  .add("collection table", () => (
    <div
      style={{
        height: "175px",
        width: "100%",
        fontSize: "14px"
      }}
    >
      <Table_Deprecated data={items}>
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
          header={<HeaderCell textAlign="right">zip code</HeaderCell>}
          cellRenderer={zipcodeCellRenderer}
          width={width}
        />
        <Column
          header={<HeaderCell>city</HeaderCell>}
          cellRenderer={cityCellRenderer}
          width={width}
        />
      </Table_Deprecated>
    </div>
  ))
  .add("default column widths", () => (
    <div
      style={{
        height: "175px",
        width: "100%",
        fontSize: "14px"
      }}
    >
      <Table_Deprecated data={items}>
        <Column
          header={<HeaderCell>name</HeaderCell>}
          cellRenderer={nameCellRenderer}
        />
        <Column
          header={<HeaderCell>role</HeaderCell>}
          cellRenderer={roleCellRenderer}
        />
        <Column
          header={<HeaderCell>state</HeaderCell>}
          cellRenderer={stateCellRenderer}
        />
        <Column
          header={<HeaderCell>Very Long</HeaderCell>}
          cellRenderer={veryLongRenderer}
        />
        <Column
          header={<HeaderCell textAlign="right">zip code</HeaderCell>}
          cellRenderer={zipcodeCellRenderer}
        />
      </Table_Deprecated>
    </div>
  ))
  .add("column width fill remaining", () => (
    <div
      style={{
        height: "175px",
        width: "100%",
        fontSize: "14px"
      }}
    >
      <Table_Deprecated data={items}>
        <Column
          header={<HeaderCell>name</HeaderCell>}
          cellRenderer={nameCellRenderer}
          growToFill={true}
          minWidth={100}
          maxWidth={150}
        />
        <Column
          header={<HeaderCell>role</HeaderCell>}
          cellRenderer={roleCellRenderer}
          growToFill={true}
        />
        <Column
          header={<HeaderCell>state</HeaderCell>}
          cellRenderer={stateCellRenderer}
          growToFill={true}
          minWidth={100}
          maxWidth={150}
        />
        <Column
          header={<HeaderCell>Very Long</HeaderCell>}
          cellRenderer={veryLongRenderer}
          growToFill={true}
        />
        <Column
          header={<HeaderCell textAlign="right">zip code</HeaderCell>}
          cellRenderer={zipcodeCellRenderer}
          growToFill={true}
          minWidth={100}
          maxWidth={150}
        />
      </Table_Deprecated>
    </div>
  ))
  .add("width-aware render", () => {
    const stateWidth = (args: WidthArgs): number =>
      Math.min(100, Math.max(200, args.width / args.totalColumns));
    const fillRemainingWidth = (args: WidthArgs): number => args.remainingWidth;
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
        <Table_Deprecated data={items}>
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
        </Table_Deprecated>
      </div>
    );
  })
  .add(
    "with sortable column",
    () => (
      <div
        style={{
          height: "175px",
          width: "100%",
          fontSize: "14px"
        }}
      >
        <SortableTable />
      </div>
    ),
    {
      info: {
        propTables: [Table_Deprecated, Column],
        propTablesExclude: [SortableTable]
      }
    }
  )
  .add("no scroll", () => (
    <div
      style={{
        height: "175px",
        width: "100%",
        fontSize: "14px"
      }}
    >
      <Table_Deprecated data={items}>
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
      </Table_Deprecated>
    </div>
  ))
  .add(
    "changing values",
    () => (
      <div
        style={{
          height: "175px",
          width: "100%",
          fontSize: "14px"
        }}
      >
        <ChangingTable />
      </div>
    ),
    {
      info: {
        propTables: [Table_Deprecated, Column],
        propTablesExclude: [ChangingTable]
      }
    }
  )
  .add("with global action", () => (
    <div
      style={{
        height: "175px",
        width: "100%",
        fontSize: "14px"
      }}
    >
      <div
        style={{
          paddingBottom: "1em",
          textAlign: "right"
        }}
      >
        <StandardButton>Global action</StandardButton>
      </div>
      <Table_Deprecated data={items}>
        <Column
          header={<HeaderCell>name</HeaderCell>}
          cellRenderer={nameCellRenderer}
        />
        <Column
          header={<HeaderCell>role</HeaderCell>}
          cellRenderer={roleCellRenderer}
          growToFill={true}
        />
        <Column
          header={<HeaderCell>state</HeaderCell>}
          cellRenderer={stateCellRenderer}
        />
        <Column
          header={<HeaderCell>Very Long</HeaderCell>}
          cellRenderer={veryLongRenderer}
          maxWidth={300}
        />
        <Column
          header={<HeaderCell textAlign="right">zip code</HeaderCell>}
          cellRenderer={zipcodeCellRenderer}
        />
        <Column
          header={<HeaderCell>city</HeaderCell>}
          cellRenderer={cityCellRenderer}
          growToFill={true}
        />
      </Table_Deprecated>
    </div>
  ))
  .add("with custom row height", () => (
    <div
      style={{
        height: "300px",
        width: "100%",
        fontSize: "14px"
      }}
    >
      <Table_Deprecated data={items} rowHeight={60}>
        <Column
          header={<HeaderCell>name</HeaderCell>}
          cellRenderer={nameCellRenderer}
        />
        <Column
          header={<HeaderCell>role</HeaderCell>}
          cellRenderer={roleCellRenderer}
          growToFill={true}
        />
        <Column
          header={<HeaderCell>state</HeaderCell>}
          cellRenderer={stateCellRenderer}
        />
        <Column
          header={<HeaderCell>Very Long</HeaderCell>}
          cellRenderer={veryLongRenderer}
          maxWidth={300}
        />
        <Column
          header={<HeaderCell textAlign="right">zip code</HeaderCell>}
          cellRenderer={zipcodeCellRenderer}
        />
        <Column
          header={<HeaderCell>city</HeaderCell>}
          cellRenderer={cityCellRenderer}
          growToFill={true}
        />
      </Table_Deprecated>
    </div>
  ))
  .add("resizeable + default column widths", () => (
    <div
      style={{
        height: "175px",
        width: "100%",
        fontSize: "14px"
      }}
    >
      <Table_Deprecated data={items}>
        <Column
          header={<HeaderCell>name</HeaderCell>}
          cellRenderer={nameCellRenderer}
          resizable={true}
        />
        <Column
          header={<HeaderCell>role</HeaderCell>}
          cellRenderer={roleCellRenderer}
          resizable={true}
        />
        <Column
          header={<HeaderCell>state</HeaderCell>}
          cellRenderer={stateCellRenderer}
          resizable={true}
        />
        <Column
          header={<HeaderCell>Very Long</HeaderCell>}
          cellRenderer={veryLongRenderer}
          resizable={true}
        />
        <Column
          header={<HeaderCell textAlign="right">zip code</HeaderCell>}
          cellRenderer={zipcodeCellRenderer}
          resizable={true}
        />
      </Table_Deprecated>
    </div>
  ))
  .add("resizable + column width fill remaining", () => (
    <div
      style={{
        height: "175px",
        width: "100%",
        fontSize: "14px"
      }}
    >
      <Table_Deprecated data={items}>
        <Column
          header={<HeaderCell>name</HeaderCell>}
          cellRenderer={nameCellRenderer}
          growToFill={true}
          resizable={true}
          minWidth={100}
          maxWidth={150}
        />
        <Column
          header={<HeaderCell>role</HeaderCell>}
          cellRenderer={roleCellRenderer}
          growToFill={true}
          resizable={true}
        />
        <Column
          header={<HeaderCell>state</HeaderCell>}
          cellRenderer={stateCellRenderer}
          growToFill={true}
          resizable={true}
          minWidth={100}
          maxWidth={150}
        />
        <Column
          header={<HeaderCell>Very Long</HeaderCell>}
          cellRenderer={veryLongRenderer}
          growToFill={true}
          resizable={true}
        />
        <Column
          header={<HeaderCell textAlign="right">zip code</HeaderCell>}
          cellRenderer={zipcodeCellRenderer}
          growToFill={true}
          resizable={true}
          minWidth={100}
          maxWidth={150}
        />
      </Table_Deprecated>
    </div>
  ))
  .add("resizeable onResize demo", () => <ResizableTableOnResizeDemo />, {
    info: {
      propTables: [Table_Deprecated, Column],
      propTablesExclude: [ResizableTableOnResizeDemo]
    }
  })
  .add("with lower-case header cells", () => (
    <div
      style={{
        height: "175px",
        width: "100%",
        fontSize: "14px"
      }}
    >
      <Table_Deprecated data={items}>
        <Column
          header={<HeaderCell capitalize={false}>name</HeaderCell>}
          cellRenderer={nameCellRenderer}
          width={width}
        />
        <Column
          header={<HeaderCell capitalize={false}>role</HeaderCell>}
          cellRenderer={roleCellRenderer}
          width={width}
        />
        <Column
          header={<HeaderCell capitalize={false}>state</HeaderCell>}
          cellRenderer={stateCellRenderer}
          width={width}
        />
        <Column header="" cellRenderer={empty} width={width} />
        <Column
          header={<HeaderCell capitalize={false}>Very Long</HeaderCell>}
          cellRenderer={veryLongRenderer}
          width={width}
        />
        <Column
          header={
            <HeaderCell capitalize={false} textAlign="right">
              zip code
            </HeaderCell>
          }
          cellRenderer={zipcodeCellRenderer}
          width={width}
        />
        <Column
          header={<HeaderCell capitalize={false}>city</HeaderCell>}
          cellRenderer={cityCellRenderer}
          width={width}
        />
      </Table_Deprecated>
    </div>
  ))
  .add("with column header tooltips", () => (
    <div
      style={{
        height: "175px",
        width: "100%",
        fontSize: "14px"
      }}
    >
      <Table_Deprecated data={items}>
        <Column
          resizable={true}
          header={<HeaderCell tooltipContent="I am a tooltip">name</HeaderCell>}
          cellRenderer={nameCellRenderer}
        />
        <Column
          resizable={true}
          header={<HeaderCell tooltipContent="I am a tooltip">role</HeaderCell>}
          cellRenderer={roleCellRenderer}
        />
        <Column
          resizable={true}
          header={
            <HeaderCell tooltipContent="I am a tooltip">state</HeaderCell>
          }
          cellRenderer={stateCellRenderer}
        />
        <Column
          resizable={true}
          header={
            <HeaderCell tooltipContent="I am a tooltip">
              very long header cell that truncates
            </HeaderCell>
          }
          cellRenderer={veryLongRenderer}
        />
        <Column
          resizable={true}
          header={
            <HeaderCell tooltipContent="I am a tooltip" textAlign="right">
              zip code
            </HeaderCell>
          }
          cellRenderer={zipcodeCellRenderer}
        />
      </Table_Deprecated>
    </div>
  ));
