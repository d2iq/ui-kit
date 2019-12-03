import * as React from "react";
import { Icon } from "../../icon";
import { SystemIcons } from "../../icons/dist/system-icons-enum";
import { iconSizeXs } from "../../design-tokens/build/js/designTokens";

const InlineLoadingIndicator: React.SFC = () => (
  <Icon shape={SystemIcons.Spinner} size={iconSizeXs} />
);

export default InlineLoadingIndicator;
