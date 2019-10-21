import * as React from "react";
import { FlexItem } from "../../styleUtils/layout";

export interface TableViewHeaderProps {
  children: React.ReactNode;
}

const TableViewHeader: React.SFC<TableViewHeaderProps> = ({ children }) => (
  <FlexItem flex="shrink">{children}</FlexItem>
);

export default TableViewHeader;
