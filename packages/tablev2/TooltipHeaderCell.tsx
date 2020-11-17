import * as React from "react";
import * as style from "./style";
import { useId } from "react-id-generator";
import { greyLightDarken2 } from "../design-tokens/build/js/designTokens";
import { Flex, FlexItem } from "../styleUtils/layout";
import { Tooltip } from "../tooltip";
import { Icon } from "../icon";
import { SystemIcons } from "../icons/dist/system-icons-enum";
import { textTruncate } from "../shared/styles/styleUtils";

export const TooltipHeaderCell: React.StatelessComponent<{
  /**
   * Helper content that explains the content in the column.
   */
  tooltipContent?: React.ReactNode;
}> = ({ children, tooltipContent }) => {
  const [generatedId] = useId(1, "colTooltip");
  return (
    <Flex gutterSize="xxs" className={style.cellFlexWrapper}>
      <FlexItem>
        <div className={textTruncate}>{children}</div>
      </FlexItem>
      <FlexItem flex="shrink">
        <Tooltip
          id={`${generatedId}-tooltip`}
          trigger={
            <Icon
              shape={SystemIcons.CircleInformation}
              size="xs"
              color={greyLightDarken2}
            />
          }
        >
          {tooltipContent}
        </Tooltip>
      </FlexItem>
    </Flex>
  );
};
