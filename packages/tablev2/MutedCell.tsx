import * as React from "react";
import { Text } from "../styleUtils/typography";
import { themeTextColorSecondary } from "../design-tokens/build/js/designTokens";

export const MutedCell: React.FC = ({ children }) => (
  <Text tag="div" color={themeTextColorSecondary} wrap="truncate">
    {children}
  </Text>
);
