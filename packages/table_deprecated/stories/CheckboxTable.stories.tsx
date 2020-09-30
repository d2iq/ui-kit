import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import {
  Column,
  HeaderCell,
  TextCell,
  NumberCell,
  CheckboxTable_Deprecated
} from "..";
import SortableCheckboxTable from "./helpers/SortableCheckboxTable";
import { items } from "./helpers/mocks";
import CheckboxTableHelper from "./helpers/CheckboxTableHelper";

const readme = require("../README.md");

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

storiesOf("Data listing|Table_Deprecated/CheckboxTable", module)
  .addDecorator(withReadme([readme]))
  .addParameters({
    info: {
      propTablesExclude: [CheckboxTableHelper],
      propTables: [CheckboxTable_Deprecated, Column]
    }
  })
  .add("default", () => (
    <CheckboxTableHelper data={items} uniqueKey="name">
      <Column
        header={<HeaderCell>name</HeaderCell>}
        cellRenderer={nameCellRenderer}
        growToFill={true}
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
      />
      <Column
        header={<HeaderCell>Very Long</HeaderCell>}
        cellRenderer={veryLongRenderer}
        maxWidth={300}
      />
      <Column
        header={<HeaderCell textAlign="right">zip code</HeaderCell>}
        cellRenderer={zipcodeCellRenderer}
        growToFill={true}
      />
      <Column
        header={<HeaderCell>city</HeaderCell>}
        cellRenderer={cityCellRenderer}
        growToFill={true}
      />
    </CheckboxTableHelper>
  ))
  .add("w/ global action + group action", () => (
    <CheckboxTableHelper data={items} showGlobalAction={true} uniqueKey="name">
      <Column
        header={<HeaderCell>name</HeaderCell>}
        cellRenderer={nameCellRenderer}
        growToFill={true}
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
      />
      <Column
        header={<HeaderCell>Very Long</HeaderCell>}
        cellRenderer={veryLongRenderer}
        maxWidth={300}
      />
      <Column
        header={<HeaderCell textAlign="right">zip code</HeaderCell>}
        cellRenderer={zipcodeCellRenderer}
        growToFill={true}
      />
      <Column
        header={<HeaderCell>city</HeaderCell>}
        cellRenderer={cityCellRenderer}
        growToFill={true}
      />
    </CheckboxTableHelper>
  ))
  .add("w/ checked row", () => (
    <CheckboxTableHelper
      data={items}
      selectedRows={{ [items[0].name]: true }}
      uniqueKey="name"
    >
      <Column
        header={<HeaderCell>name</HeaderCell>}
        cellRenderer={nameCellRenderer}
        growToFill={true}
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
      />
      <Column
        header={<HeaderCell>Very Long</HeaderCell>}
        cellRenderer={veryLongRenderer}
        maxWidth={300}
      />
      <Column
        header={<HeaderCell textAlign="right">zip code</HeaderCell>}
        cellRenderer={zipcodeCellRenderer}
        growToFill={true}
      />
      <Column
        header={<HeaderCell>city</HeaderCell>}
        cellRenderer={cityCellRenderer}
        growToFill={true}
      />
    </CheckboxTableHelper>
  ))
  .add("w/ disabled row", () => (
    <CheckboxTableHelper
      data={items}
      disabledRows={{ [items[0].name]: true }}
      mutedRows={{ [items[0].name]: true }}
      uniqueKey="name"
    >
      <Column
        header={<HeaderCell>name</HeaderCell>}
        cellRenderer={nameCellRenderer}
        growToFill={true}
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
      />
      <Column
        header={<HeaderCell>Very Long</HeaderCell>}
        cellRenderer={veryLongRenderer}
        maxWidth={300}
      />
      <Column
        header={<HeaderCell textAlign="right">zip code</HeaderCell>}
        cellRenderer={zipcodeCellRenderer}
        growToFill={true}
      />
      <Column
        header={<HeaderCell>city</HeaderCell>}
        cellRenderer={cityCellRenderer}
        growToFill={true}
      />
    </CheckboxTableHelper>
  ))
  .add("sortable", () => <SortableCheckboxTable />, {
    info: {
      propTablesExclude: [SortableCheckboxTable]
    }
  });
