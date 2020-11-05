import * as React from "react";
import { Icon } from "../../icon";
import { SystemIcons } from "../../icons/dist/system-icons-enum";

const InlineLoadingIndicator: React.SFC = () => (
  <Icon shape={SystemIcons.Spinner} size="xs" dataCy="inlineLoadingIndicator" />
);

export default InlineLoadingIndicator;
