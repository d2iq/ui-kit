import * as React from "react";
import { cx } from "@emotion/css";
import { SpaceSize } from "../../shared/styles/styleUtils/modifiers/modifierUtils";
import { inlineBorderedItems } from "../style";

export interface InlineBorderedItemsProps {
  children:
    | Array<React.ReactElement<HTMLElement>>
    | React.ReactElement<HTMLElement>;
  gutterSize?: SpaceSize;
  className?: string;
}

const InlineBorderedItems = ({
  children,
  className,
  gutterSize = "s"
}: InlineBorderedItemsProps) => (
  <div className={cx(inlineBorderedItems(gutterSize!), className)}>
    {children}
  </div>
);

export default InlineBorderedItems;
