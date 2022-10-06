import * as React from "react";
import { SpaceSize } from "../../shared/styles/styleUtils/modifiers/modifierUtils";
import { inlineBorderedItems } from "../style";

export interface InlineBorderedItemsProps {
  children:
    | Array<React.ReactElement<HTMLElement>>
    | React.ReactElement<HTMLElement>;
  gutterSize?: SpaceSize;
}

const InlineBorderedItems = ({
  children,
  gutterSize = "s"
}: InlineBorderedItemsProps) => (
  <div className={inlineBorderedItems(gutterSize!)}>{children}</div>
);

export default InlineBorderedItems;
