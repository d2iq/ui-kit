import * as React from "react";
import { FlexboxProperties } from "../shared/styles/styleUtils/layout/flexbox";
import { Flex, FlexItem } from "../styleUtils/layout";
import Pagination from "./Pagination";

const PaginationContainer: React.FC<{
  vertAlignChildren?: FlexboxProperties["align"];
}> = ({ children, vertAlignChildren }) => {
  const paginationComponent = React.Children.toArray(children).find(
    child => React.isValidElement(child) && child.type === Pagination
  );
  const additionalChildren = React.Children.toArray(children).filter(
    child => React.isValidElement(child) && child.type !== Pagination
  );

  return (
    <Flex align={vertAlignChildren} justify="flex-end" wrap="wrap">
      {Boolean(additionalChildren.length) && (
        <FlexItem>{additionalChildren}</FlexItem>
      )}
      <FlexItem flex="shrink">{paginationComponent}</FlexItem>
    </Flex>
  );
};

PaginationContainer.defaultProps = {
  vertAlignChildren: "center"
};

export default PaginationContainer;
