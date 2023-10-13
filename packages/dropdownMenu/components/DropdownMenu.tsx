import * as React from "react";
import { css, cx } from "@emotion/css";
import Downshift, { ControllerStateAndHelpers } from "downshift";
import { Dropdownable } from "../../dropdownable";
import { border, buttonReset, display } from "../../shared/styles/styleUtils";
import PopoverBox from "../../popover/components/PopoverBox";
import PopoverListItem from "../../popover/components/PopoverListItem";
import { DropdownSectionProps } from "./DropdownSection";
import { DropdownMenuItemProps } from "./DropdownMenuItem";
import { Direction } from "../../dropdownable/components/Dropdownable";
import {
  spaceM,
  themeBgPrimary
} from "../../design-tokens/build/js/designTokens";

const stickyFooter = css`
  background-color: ${themeBgPrimary};
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2px 0;
  width: 100%;
  &::before {
    content: " ";
    top: -17px;
    width: inherit;
    height: ${spaceM};
    position: absolute;
    background: linear-gradient(transparent, ${themeBgPrimary});
  }
`;

const SectionWrapper = ({ children, footer = false, sectionIndex }) => {
  return (
    <div
      key={`dropdown-${sectionIndex}`}
      className={cx(
        { [border("top")]: sectionIndex !== 0 },
        { [stickyFooter]: footer }
      )}
    >
      {children}
    </div>
  );
};

export interface DropdownMenuProps {
  /**
   * Groups of dropdown menu items
   */
  children:
    | React.ReactElement<DropdownSectionProps>
    | Array<React.ReactElement<DropdownSectionProps>>;
  /**
   * Whether the dropdown starts open
   */
  initialIsOpen?: boolean;
  /**
   * Maximum height the menu can grow to. Can accept any number value and it will add `px` or any valid maxHeight value including vh, ems, or rems.
   */
  menuMaxHeight?: React.CSSProperties["maxHeight"];
  /**
   * Maximum width the menu can grow to. Can accept any number value and it will add `px` or any valid maxWidth value including vw, ems, or rems.
   */
  menuMaxWidth?: React.CSSProperties["maxWidth"];
  /**
   * Callback for when a menu item is clicked
   */
  onSelect?: (
    selectedItem: string,
    stateAndHelpers?: ControllerStateAndHelpers<
      React.ReactElement<DropdownMenuItemProps>
    >
  ) => void;
  /**
   * Which DOM node the dropdown menu will attach to
   */
  overlayRoot?: HTMLElement;
  /**
   * The preferred direction to open the menu in relation to the trigger
   */
  preferredDirections?: Direction[];
  /**
   * The node that opens the menu when clicked
   */
  trigger: React.ReactNode;
  /**
   * Whether the dropdown node should be portalled to document.body, or open in it's parent DOM node
   */
  disablePortal?: boolean;
  /**
   * Allows custom styling
   */
  className?: string;
  /**
   * Human-readable selector used for writing tests
   */
  "data-cy"?: string;
}

const defaultItemToString = (
  item: React.ReactElement<DropdownMenuItemProps> | null
) => (item ? item.props.value : "");

const DropdownMenu = (props: DropdownMenuProps) => {
  const {
    children,
    disablePortal,
    initialIsOpen,
    menuMaxHeight,
    menuMaxWidth,
    onSelect,
    overlayRoot,
    preferredDirections = [
      Direction.BottomRight,
      Direction.BottomLeft,
      Direction.BottomCenter,
      Direction.TopRight,
      Direction.TopCenter,
      Direction.TopLeft
    ],
    trigger,
    "data-cy": dataCy = "dropdownmenu"
  } = props;

  const handleSelection = (
    selectedItem: React.ReactElement<DropdownMenuItemProps> | null,
    stateAndHelpers?: ControllerStateAndHelpers<
      React.ReactElement<DropdownMenuItemProps>
    >
  ) => {
    if (onSelect) {
      onSelect(defaultItemToString(selectedItem), stateAndHelpers);
    }
  };

  const getDropdownContents = (highlightedIndex, getItemProps) =>
    (
      React.Children.toArray(children) as Array<
        React.ReactElement<DropdownSectionProps>
      >
    ).reduce<{
      sections: React.ReactNode[];
      menuItemIndex: number;
    }>(
      (acc, item, sectionIndex) => {
        const { sections = [] } = acc;
        const { children, footer } = item.props;
        const menuItems = React.Children.toArray(
          children
        ) as React.ReactElement[];
        const childrenWithKeys = menuItems.map((child, i) => {
          acc.menuItemIndex++;

          return (
            <PopoverListItem
              listLength={menuItems.length}
              isActive={highlightedIndex === acc.menuItemIndex}
              appearance={child.props.appearance}
              index={i}
              key={child.key || `${sectionIndex}-${i}`}
              {...getItemProps({
                item: child,
                disabled: child.props.disabled
              })}
            >
              {child}
            </PopoverListItem>
          );
        });

        return {
          sections: [
            ...sections,
            <SectionWrapper
              footer={footer}
              key={`dropdown-${sectionIndex}`}
              sectionIndex={sectionIndex}
              data-cy={`${dataCy}-section-${sectionIndex}`}
            >
              {childrenWithKeys}
            </SectionWrapper>
          ],
          menuItemIndex: acc.menuItemIndex
        };
      },
      { sections: [], menuItemIndex: -1 }
    );

  return (
    <Downshift
      itemToString={defaultItemToString}
      onSelect={handleSelection}
      initialIsOpen={initialIsOpen}
    >
      {({
        getToggleButtonProps,
        getItemProps,
        getMenuProps,
        highlightedIndex,
        isOpen
      }) => (
        <div className={display("inline-block")}>
          <Dropdownable
            isOpen={isOpen}
            overlayRoot={overlayRoot}
            preferredDirections={preferredDirections}
            dropdown={
              <PopoverBox
                maxHeight={menuMaxHeight}
                maxWidth={menuMaxWidth}
                data-cy={dataCy}
                {...getMenuProps(
                  { refKey: "menuRef" },
                  // The menu is not mounted when `isOpen` is false, so Downshift's ref check fails incorrectly
                  // The menu behaves as expected, and has all the correct attributes
                  { suppressRefError: true }
                )}
              >
                {getDropdownContents(highlightedIndex, getItemProps).sections}
              </PopoverBox>
            }
            disablePortal={disablePortal}
          >
            {React.isValidElement(trigger) ? (
              React.cloneElement(trigger, {
                ...getToggleButtonProps({
                  tabIndex: 0
                })
              })
            ) : (
              <button
                {...getToggleButtonProps()}
                className={buttonReset}
                data-cy={`${dataCy}-button`}
              >
                {trigger}
              </button>
            )}
          </Dropdownable>
        </div>
      )}
    </Downshift>
  );
};

export default DropdownMenu;
