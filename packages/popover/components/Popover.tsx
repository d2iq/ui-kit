import * as React from "react";
import { useId } from "react-id-generator";
import FocusLock from "react-focus-lock";
import { css } from "emotion";
import { Dropdownable } from "../../dropdownable";
import PopoverBox from "./PopoverBox";
import { SpacingBox } from "../../styleUtils/modifiers";
import {
  DropdownableProps,
  Direction
} from "../../dropdownable/components/Dropdownable";
import { ResetButton } from "../../button";
import { display } from "../../shared/styles/styleUtils";

interface PopoverProps
  extends Omit<DropdownableProps, "open" | "dropdown" | "onClose"> {
  /**
   * A unique identifier to help screenreaders or UI testing tools associate the dropdown content with it's trigger button. If an ID prop is not provided, an arbitrary ID will be generated.
   */
  id?: string;
  /**
   * Whether the dropdown starts open
   */
  initialIsOpen?: boolean;
  /** The maximum height of the dropdown overlay, represented by number of pixels. */
  maxHeight?: number;
  /** The maximum width of the dropdown overlay, represented by number of pixels. */
  maxWidth?: number;
  /**
   * The node that opens the menu when clicked
   */
  trigger: React.ReactNode;
  /**
   * human-readable selector used for writing tests
   */
  ["data-cy"]?: string;
}

const Popover: React.StatelessComponent<PopoverProps> = ({
  children,
  "data-cy": dataCy,
  id,
  initialIsOpen,
  maxHeight,
  maxWidth,
  overlayRoot,
  preferredDirections,
  trigger
}) => {
  const [generatedDropdownId] = useId(1, "dropdown");
  const containerRef = React.useRef<HTMLDivElement>(null);
  const triggerRef = React.useRef<HTMLDivElement>(null);
  const [open, setOpen] = React.useState<boolean>(Boolean(initialIsOpen));
  const handleTriggerBlur = () => {
    setTimeout(() => {
      if (containerRef?.current?.contains(document.activeElement)) {
        return;
      }
      setOpen(false);
    }, 0);
  };
  const handleClickOutside = e => {
    if (
      containerRef?.current?.contains(e.target) ||
      triggerRef.current?.contains(e.target) ||
      triggerRef.current === e.target
    ) {
      return;
    }

    setOpen(false);
  };

  const handleEscKey = e => {
    if (e.key === "Escape") {
      setOpen(false);
    }
  };

  const handleTriggerKeyDown = e => {
    if (["ArrowDown", " ", "Enter"].includes(e.key)) {
      // prevents page from scrolling when using down arrow or spacebar
      e.preventDefault();
      setOpen(true);
    }
  };

  const sharedTriggerProps = {
    onClick: () => {
      setOpen(!open);
    },
    onKeyDown: handleTriggerKeyDown,
    onBlur: handleTriggerBlur,
    "aria-owns": id || generatedDropdownId,
    "aria-expanded": open
  };

  React.useEffect(() => {
    if (open) {
      document.addEventListener("mouseup", handleClickOutside);
      document.addEventListener("keyup", handleEscKey);
    } else {
      document.removeEventListener("mouseup", handleClickOutside);
      document.removeEventListener("keyup", handleEscKey);
    }

    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
      document.removeEventListener("keyup", handleEscKey);
    };
  }, [open]);

  return (
    <div className={display("inline-block")} ref={triggerRef}>
      <Dropdownable
        open={open}
        preferredDirections={
          preferredDirections || [
            Direction.BottomCenter,
            Direction.TopCenter,
            Direction.TopLeft,
            Direction.TopRight,
            Direction.BottomLeft,
            Direction.BottomRight
          ]
        }
        dropdown={
          <PopoverBox
            role="dialog"
            id={id || generatedDropdownId}
            maxHeight={maxHeight}
            maxWidth={maxWidth}
            data-cy={dataCy}
            showPointerCaret={true}
          >
            <FocusLock disabled={!open}>
              <div
                tabIndex={-1}
                ref={containerRef}
                className={css`
                  &:focus {
                    outline: none;
                  }
                `}
              >
                <SpacingBox>{children}</SpacingBox>
              </div>
            </FocusLock>
          </PopoverBox>
        }
        overlayRoot={overlayRoot}
      >
        {React.isValidElement(trigger) ? (
          React.cloneElement(trigger, {
            ...sharedTriggerProps,
            tabIndex: 0
          })
        ) : (
          <ResetButton {...sharedTriggerProps}>{trigger}</ResetButton>
        )}
      </Dropdownable>
    </div>
  );
};

Popover.defaultProps = {
  ["data-cy"]: "popover"
};

export default Popover;
