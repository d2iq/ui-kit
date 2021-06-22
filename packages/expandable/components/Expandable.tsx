import * as React from "react";
import { cx } from "emotion";
import { visuallyHidden } from "../../shared/styles/styleUtils";
import { toggler } from "../style";
import { ResetButton } from "../../button";
import { Icon } from "../../icon";
import { SystemIcons } from "../../icons/dist/system-icons-enum";
import { Flex, FlexItem } from "../../styleUtils/layout";

export interface ExpandableProps {
  children: React.ReactElement<HTMLElement> | string;
  controlledIsOpen?: boolean;
  indicatorPosition?: "left" | "right";
  isOpen?: boolean;
  label: React.ReactElement<HTMLElement> | string;
  labelClassName?: string;
  onChange?: (open: boolean) => void;
}

const Expandable: React.FC<ExpandableProps> = ({
  labelClassName,
  children,
  label,
  isOpen,
  controlledIsOpen,
  onChange,
  indicatorPosition
}) => {
  const [open, setOpen] = React.useState(Boolean(isOpen));

  React.useEffect(() => {
    if (typeof controlledIsOpen !== "undefined") {
      setOpen(controlledIsOpen);
    }
  }, [controlledIsOpen]);

  const handleToggle = () => {
    const newOpen = !open;

    if (typeof controlledIsOpen === "undefined") {
      setOpen(newOpen);
    }

    if (onChange) {
      onChange(newOpen);
    }
  };

  return (
    <div>
      <ResetButton
        className={cx(labelClassName, toggler)}
        aria-expanded={open}
        onClick={handleToggle}
      >
        <Flex
          align="center"
          direction={
            indicatorPosition && indicatorPosition === "left"
              ? "row"
              : "row-reverse"
          }
        >
          <FlexItem flex="shrink">
            <Icon
              shape={
                open ? SystemIcons.TriangleDown : SystemIcons.TriangleRight
              }
              size="xs"
            />
          </FlexItem>
          <FlexItem>{label}</FlexItem>
        </Flex>
      </ResetButton>
      <div className={cx(!open && visuallyHidden)} aria-hidden={!open}>
        {children}
      </div>
    </div>
  );
};

Expandable.defaultProps = {
  indicatorPosition: "left"
};

export default Expandable;
