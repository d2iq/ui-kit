import * as React from "react";
import { Flex } from "../../styleUtils/layout";
import { TableViewBodyProps } from "./TableViewBody";
import { TableViewHeaderProps } from "./TableViewHeader";

interface TableViewProps {
  children:
    | Array<React.ReactElement<TableViewBodyProps | TableViewHeaderProps>>
    | React.ReactElement<TableViewBodyProps | TableViewHeaderProps>;
}

const TableView: React.SFC<TableViewProps> = ({ children }) => (
  <Flex direction="column">{children}</Flex>
);

export default TableView;
