import * as React from "react";
import { SpaceSize } from "../../shared/styles/styleUtils/modifiers/modifierUtils";
import { inlineBorderedItems } from "../style";

interface InlineBorderedItemsProps {
  children:
    | Array<React.ReactElement<HTMLElement>>
    | React.ReactElement<HTMLElement>;
  gutterSize?: SpaceSize;
}

const InlineBorderedItems: React.SFC<InlineBorderedItemsProps> = ({
  children,
  gutterSize
}) => <div className={inlineBorderedItems(gutterSize!)}>{children}</div>;

InlineBorderedItems.defaultProps = {
  gutterSize: "s"
};

export default InlineBorderedItems;
