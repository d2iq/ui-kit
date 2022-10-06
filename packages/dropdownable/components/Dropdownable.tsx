import React, { CSSProperties } from "react";
import { usePopper } from "react-popper";
import { Modifier } from "@popperjs/core";
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
  isOpen: boolean;
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
  children?: React.ReactNode | React.ReactNode[];
}

const getPreferredDirection = (
  preferredDirections?: Direction | Direction[]
) => {
  if (!preferredDirections || !preferredDirections.length) {
    return Direction.BottomLeft;
  }
  if (typeof preferredDirections === "string") {
    return preferredDirections;
  }

  return preferredDirections[0];
};

const getFlipModifier = (preferredDirections?: Direction | Direction[]) => {
  if (!preferredDirections || !preferredDirections.length) {
    return null;
  }
  if (preferredDirections.length > 1) {
    return {
      name: "flip",
      options: {
        fallbackPlacements: preferredDirections.slice(1)
      }
    };
  }
  return null;
};

const Dropdownable = ({
  isOpen,
  dropdown,
  preferredDirections,
  onClose,
  overlayRoot,
  disablePortal,
  children
}: DropdownableProps) => {
  const [referenceElement, setReferenceElement] =
    React.useState<HTMLDivElement | null>(null);
  const [popperElement, setPopperElement] =
    React.useState<HTMLDivElement | null>(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: getPreferredDirection(preferredDirections),
    modifiers: [
      getFlipModifier(preferredDirections)
      // we need valid modifiers here otherwise we get a bunch of console errors
    ].filter(Boolean) as Array<Partial<Modifier<string, object>>>
  });
  const { maxHeight, maxWidth, ...popperStyles } = styles.popper;
  const popperAttributes = {
    ref: setPopperElement,
    style: {
      zIndex: parseInt(zIndexDropdownable, 10),
      ...(attributes.popper &&
        attributes.popper["data-popper-reference-hidden"] && {
          visibility: "hidden",
          pointerEvents: "none"
        }),
      ...popperStyles
    } as CSSProperties,
    ...attributes.popper
  };
  const getDropdown = () => {
    if (attributes.popper) {
      return React.cloneElement(dropdown, {
        direction: attributes.popper["data-popper-placement"],
        style: {
          overflow: "auto",
          maxHeight: dropdown.props.maxHeight || maxHeight,
          maxWidth: dropdown.props.maxWidth || maxWidth
        }
      });
    }
    return dropdown;
  };

  return (
    <>
      <div ref={setReferenceElement}>{children}</div>

      {isOpen && (
        <DropdownContents isOpen={isOpen} onClose={onClose}>
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
