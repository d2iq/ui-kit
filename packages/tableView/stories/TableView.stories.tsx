import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import { TableView, TableViewHeader, TableViewBody } from "..";
import DemoTable from "./helpers/DemoTable";

const readme = require("../README.md");

storiesOf("TableView", module)
  .addDecorator(withReadme([readme]))
  .addParameters({
    info: {
      propTablesExclude: [DemoTable, TableView, TableViewHeader]
    }
  })
  .add("default", () => (
    <TableView>
      <TableViewHeader>Header content</TableViewHeader>
      <TableViewBody>
        <DemoTable />
      </TableViewBody>
    </TableView>
  ))
  .add("inside 500px height wrapper", () => (
    <div style={{ height: "500px" }}>
      <TableView>
        <TableViewHeader>Header content</TableViewHeader>
        <TableViewBody>
          <DemoTable />
        </TableViewBody>
      </TableView>
    </div>
  ))
  .add("show a minimum of 6 rows", () => (
    <TableView>
      <TableViewHeader>Header content</TableViewHeader>
      <TableViewBody minRows={6}>
        <DemoTable />
      </TableViewBody>
    </TableView>
  ))
  .add("show a minimum of 6 rows w/ custom row height", () => (
    <TableView>
      <TableViewHeader>Header content</TableViewHeader>
      <TableViewBody minRows={6} rowHeight={70}>
        <DemoTable rowHeight={70} />
      </TableViewBody>
    </TableView>
  ));
