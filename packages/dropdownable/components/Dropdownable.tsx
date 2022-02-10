import React, { CSSProperties } from "react";
import { usePopper } from "react-popper";
import { ModifierPhases } from "@popperjs/core";
import maxSize from "popper-max-size-modifier";
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
    return {};
  }
  if (preferredDirections.length > 1) {
    return {
      name: "flip",
      options: {
        fallbackPlacements: preferredDirections.slice(1)
      }
    };
  }
  return {};
};

const applyMaxSize = {
  name: "applyMaxSize",
  enabled: true,
  phase: "beforeWrite" as ModifierPhases,
  requires: ["maxSize"],
  fn({ state }) {
    // The `maxSize` modifier provides this data
    const { width, height } = state.modifiersData.maxSize;

    state.styles.popper = {
      ...state.styles.popper,
      maxWidth: `${width}px`,
      maxHeight: `${height}px`
    };
  }
};

const Dropdownable: React.FC<DropdownableProps> = ({
  isOpen,
  dropdown,
  preferredDirections,
  onClose,
  overlayRoot,
  disablePortal,
  children
}) => {
  const [referenceElement, setReferenceElement] =
    React.useState<HTMLDivElement | null>(null);
  const [popperElement, setPopperElement] =
    React.useState<HTMLDivElement | null>(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: getPreferredDirection(preferredDirections),
    modifiers: [maxSize, applyMaxSize, getFlipModifier(preferredDirections)]
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
