import React, { CSSProperties } from "react";
import { usePopper } from "react-popper";
import { Placement, Modifier } from "@popperjs/core";
import Overlay from "../../shared/components/Overlay";
import DropdownContents from "./DropdownContents";
import { zIndexDropdownable } from "../../design-tokens/build/js/designTokens";

export enum Direction {
  BottomLeft = "bottom-start",
  BottomRight = "bottom-end",
  BottomCenter = "bottom",
  TopLeft = "top-start",
  TopRight = "top-end",
  TopCenter = "top"
}

export interface DropdownableProps {
  /** Whether the Dropdownable overlay is visible */
  open: boolean;
  /** Element to render in the Dropdownable overlay */
  dropdown: React.ReactElement<any>;
  /** Which direction the Dropdownable should open in relation to the Dropdownable children */
  preferredDirections?: Direction | Direction[];
  /** Function that is called when a user clicks outside of the Dropdownable overlay or children */
  onClose?: () => void;
  /** Which element the Dropdownable overlay is mounted in. Defaults to the default element created by the Overlay component */
  overlayRoot?: HTMLElement;
  /** Whether the Dropdownable overlay should open in it's parent element instead of `overlayRoot` */
  disablePortal?: boolean;
}

const getPlacementConfig = (
  preferredDirections?: Direction | Direction[]
): {
  placement: Placement;
  modifiers?: Array<
    Pick<
      Modifier<"flip", { fallbackPlacements: Direction[] }>,
      "name" | "options"
    >
  >;
} => {
  if (!preferredDirections || !preferredDirections.length) {
    return { placement: Direction.BottomLeft };
  }
  if (typeof preferredDirections === "string") {
    return {
      placement: preferredDirections
    };
  }

  if (preferredDirections.length === 1) {
    return {
      placement: preferredDirections[0]
    };
  }

  return {
    placement: preferredDirections[0],
    modifiers: [
      {
        name: "flip",
        options: {
          fallbackPlacements: preferredDirections.slice(1)
        }
      }
    ]
  };
};

const Dropdownable: React.FC<DropdownableProps> = ({
  open,
  dropdown,
  preferredDirections,
  onClose,
  overlayRoot,
  disablePortal,
  children
}) => {
  const [
    referenceElement,
    setReferenceElement
  ] = React.useState<HTMLDivElement | null>(null);
  const [
    popperElement,
    setPopperElement
  ] = React.useState<HTMLDivElement | null>(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    ...getPlacementConfig(preferredDirections)
  });
  const popperAttributes = {
    ref: setPopperElement,
    style: {
      zIndex: parseInt(zIndexDropdownable, 10),
      ...(attributes.popper &&
        attributes.popper["data-popper-reference-hidden"] && {
          visibility: "hidden",
          pointerEvents: "none"
        }),
      ...styles.popper
    } as CSSProperties,
    ...attributes.popper
  };
  const getDropdown = () => {
    if (attributes.popper) {
      return React.cloneElement(dropdown, {
        direction: attributes.popper["data-popper-placement"]
      });
    }
    return dropdown;
  };

  return (
    <>
      <div ref={setReferenceElement}>{children}</div>

      {open && (
        <DropdownContents open={open} onClose={onClose}>
          {!disablePortal ? (
            <Overlay overlayRoot={overlayRoot} {...popperAttributes}>
              {getDropdown()}
            </Overlay>
          ) : (
            <div {...popperAttributes}>{getDropdown()}</div>
          )}
        </DropdownContents>
      )}
    </>
  );
};

export default Dropdownable;
