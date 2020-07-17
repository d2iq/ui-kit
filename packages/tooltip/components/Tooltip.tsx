import * as React from "react";
import Dropdownable, {
  Direction
} from "../../dropdownable/components/Dropdownable";
import TooltipContent from "./TooltipContent";
import { getFirstFocusableChildNode } from "../../utilities/getFocusableChildNodes";

export interface BaseTooltipProps {
  children: React.ReactNode | string;
  id: string;
  maxWidth?: number;
  minWidth?: number;
}
export interface TooltipProps extends BaseTooltipProps {
  ariaLabel?: string;
  preferredDirections?: Direction[];
  open?: boolean;
  suppress?: boolean;
  trigger: React.ReactNode;
  onClose?: () => void;
  disablePortal?: boolean;
}

export interface TooltipState {
  open: boolean;
  triggerNode: HTMLElement | null;
}

const Tooltip = ({
  ariaLabel,
  children,
  disablePortal,
  id,
  maxWidth,
  minWidth,
  onClose,
  open = false,
  preferredDirections,
  suppress,
  trigger
}: TooltipProps) => {
  const triggerRef: React.MutableRefObject<HTMLElement | null> = React.useRef<
    HTMLElement
  >(null);
  const [isOpen, setIsOpen] = React.useState<boolean>(open);

  if (suppress && open !== isOpen) {
    setIsOpen(open);
  }

  const setTriggerNode = (node: HTMLElement | null) => {
    if (node == null) {
      triggerRef.current = null;
      return;
    }

    triggerRef.current = node;
  };

  const handleOpen = () => {
    if (suppress) {
      return;
    }

    setIsOpen(true);
  };

  const handleClose = () => {
    if (suppress) {
      return;
    }

    setIsOpen(false);

    if (onClose) {
      onClose();
    }
  };

  React.useEffect(() => {
    const firstFocusable = triggerRef.current
      ? getFirstFocusableChildNode(triggerRef.current)
      : null;
    const nodeToFocus = firstFocusable || triggerRef.current;

    if (!nodeToFocus) {
      return;
    }

    nodeToFocus.setAttribute("tabindex", "0");
    nodeToFocus.setAttribute("aria-describedby", id);
  });

  const triggerProps = {
    ["aria-label"]: ariaLabel,
    onMouseOver: handleOpen,
    onMouseLeave: handleClose,
    onFocus: handleOpen,
    onBlur: handleClose,
    ["data-cy"]: "tooltip",
    ref: setTriggerNode
  };

  return (
    <span {...(!disablePortal ? triggerProps : {})}>
      <Dropdownable
        open={isOpen}
        dropdown={
          <TooltipContent
            id={id}
            open={isOpen}
            minWidth={minWidth}
            maxWidth={maxWidth}
          >
            {children}
          </TooltipContent>
        }
        preferredDirections={
          preferredDirections || [
            Direction.TopCenter,
            Direction.TopLeft,
            Direction.TopRight,
            Direction.BottomCenter,
            Direction.BottomLeft,
            Direction.BottomRight
          ]
        }
        disablePortal={disablePortal}
      >
        {disablePortal ? <span {...triggerProps}>{trigger}</span> : trigger}
      </Dropdownable>
    </span>
  );
};

export default Tooltip;
