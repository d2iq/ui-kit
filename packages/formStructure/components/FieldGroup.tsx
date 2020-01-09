import * as React from "react";
import { Flex, FlexItem } from "../../styleUtils/layout";
import { BreakpointConfig } from "../../shared/styles/breakpoints";

interface FieldGroupProps {
  /**
   * The direction the children are laid out in. Can be set for all viewport sizes, or configured to have different values at different viewport width breakpoints
   */
  direction?: BreakpointConfig<"column" | "row">;
}

const FieldGroup: React.SFC<FieldGroupProps> = ({ children, direction }) => (
  <Flex gutterSize="m" direction={direction}>
    {(React.Children.toArray(children) as Array<
      React.ReactElement<{ key: React.Key }>
    >).map((field, i) => (
      <FlexItem key={field.key || i}>{field}</FlexItem>
    ))}
  </Flex>
);

export default FieldGroup;
