import * as React from "react";
import DropdownMenu, {
  DropdownMenuProps
} from "../dropdownMenu/components/DropdownMenu";
import { ResetButton } from "../button";
import { Icon } from "../icon";
import { SystemIcons } from "../icons/dist/system-icons-enum";
import * as dt from "../design-tokens/build/js/designTokens";
import { css } from "emotion";

const style = css`
  display: flex;
  justify-content: flex-end;
`;

const trigger = (
  <ResetButton>
    <Icon shape={SystemIcons.EllipsisVertical} size={dt.iconSizeXs} />
  </ResetButton>
);

export const DropdownMenuCell: React.StatelessComponent<Omit<
  DropdownMenuProps,
  "trigger"
>> = props => (
  <div className={style}>
    <DropdownMenu trigger={trigger} {...props} />
  </div>
);
