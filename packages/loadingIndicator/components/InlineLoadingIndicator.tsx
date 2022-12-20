import * as React from "react";
import { Icon } from "../../icon";
import { SystemIcons } from "../../icons/dist/system-icons-enum";
import { IconSize } from "../../shared/types/iconSize";

const DEFAULT_ICON_SIZE: IconSize = "xs";

export interface InlineLoadingIndicatorProps {
  /**
   * The fill color of the spinner.
   */
  color?: string;
  /** Which icon size to use for the width and height of the icon. */
  size?: IconSize;
  /** Human-readable selector used for writing tests. */
  "data-cy"?: string;
}

const InlineLoadingIndicator = ({
  size = DEFAULT_ICON_SIZE,
  "data-cy": dataCy = "inlineLoadingIndicator",
  color = "inherit"
}) => (
  <Icon
    shape={SystemIcons.Spinner}
    size={size}
    data-cy={dataCy}
    color={color}
  />
);

export default InlineLoadingIndicator;
