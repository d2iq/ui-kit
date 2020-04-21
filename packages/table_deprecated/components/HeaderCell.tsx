import React from "react";

import Cell, { CellProps } from "./Cell";
import styled, { cx } from "react-emotion";
import { useId } from "react-id-generator";
import { headerCellCss, headerCellInner } from "../style";
import {
  textTruncate,
  display,
  flexItem,
  padding
} from "../../shared/styles/styleUtils";
import { Icon } from "../../icon";
import { SystemIcons } from "../../icons/dist/system-icons-enum";
import {
  iconSizeXs,
  greyLightDarken2
} from "../../design-tokens/build/js/designTokens";
import { Tooltip } from "../../tooltip";

export interface HeaderCellProps extends CellProps {
  tooltipContent?: React.ReactNode;
  tooltipId?: string;
}

const HeaderCell = ({
  capitalize = true,
  children,
  tooltipContent,
  tooltipId = useId(1, "columnHeaderTooltip-")[0],
  ...other
}: HeaderCellProps) => (
  <Cell capitalize={capitalize} {...other}>
    <div className={cx(display("inline-flex"), headerCellInner)}>
      <div
        className={cx(textTruncate, flexItem("grow"), padding("right", "xxs"))}
      >
        {children}
      </div>
      {tooltipContent ? (
        <Tooltip
          id={tooltipId}
          trigger={
            <Icon
              shape={SystemIcons.CircleQuestion}
              size={iconSizeXs}
              color={greyLightDarken2}
            />
          }
        >
          {tooltipContent}
        </Tooltip>
      ) : null}
    </div>
  </Cell>
);

export default styled(HeaderCell)`
  ${headerCellCss};
`;
