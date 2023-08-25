import * as React from "react";
import * as style from "./style";
import { useId } from "react-id-generator";
import { Flex, FlexItem } from "../styleUtils/layout";
import { Tooltip, TooltipIcon } from "../tooltip";
import { SystemIcons } from "../icons/dist/system-icons-enum";
import { textTruncate } from "../shared/styles/styleUtils";
import { css } from "@emotion/css";

export const iconAlign = css`
  margin-bottom: 1px;
`;

export interface TooltipHeaderCellProps {
  /**
   * Helper content that explains the content in the column.
   */
  tooltipContent?: React.ReactNode;
  /**
   * Icon to display for the tooltip.
   */
  tooltipIcon?: SystemIcons.CircleInformation | SystemIcons.CircleQuestion;
  children?: React.ReactNode;
}

export const TooltipHeaderCell = ({
  children,
  tooltipIcon,
  tooltipContent
}: TooltipHeaderCellProps) => {
  const [generatedId] = useId(1, "colTooltip");
  return (
    <Flex gutterSize="xxs" className={style.cellFlexWrapper}>
      <div className={textTruncate}>{children}</div>
      <FlexItem flex="shrink">
        <Tooltip
          id={`${generatedId}-tooltip`}
          trigger={
            <div className={iconAlign}>
              <TooltipIcon shape={tooltipIcon} />
            </div>
          }
        >
          {tooltipContent}
        </Tooltip>
      </FlexItem>
    </Flex>
  );
};
