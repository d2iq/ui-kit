import * as React from "react";
import { Text } from "../styleUtils/typography";
import { themeTextColorSecondary } from "../design-tokens/build/js/designTokens";

export interface MutedCellProps {
  children?: React.ReactNode | React.ReactNode[];
}

export const MutedCell = ({ children }: MutedCellProps) => (
  <Text tag="div" color={themeTextColorSecondary} wrap="truncate">
    {children}
  </Text>
);
