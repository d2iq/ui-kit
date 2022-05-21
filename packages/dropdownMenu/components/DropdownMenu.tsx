import * as React from "react";
import Downshift, { ControllerStateAndHelpers } from "downshift";
import { Dropdownable } from "../../dropdownable";
import { buttonReset, display } from "../../shared/styles/styleUtils";
import PopoverBox from "../../popover/components/PopoverBox";
import { DropdownSectionProps } from "./DropdownSection";
import { DropdownMenuItemProps } from "./DropdownMenuItem";
import { Direction } from "../../dropdownable/components/Dropdownable";

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
   * Maximum height the menu can grow to
   */
  menuMaxHeight?: number;
  /**
   * Maximum width the menu can grow to
   */
  menuMaxWidth?: number;
  /**
   * callback for when a menu item is clicked
   */
  onSelect?: (
    selectedItem: string,
    stateAndHelpers?: ControllerStateAndHelpers<
      React.ReactElement<DropdownMenuItemProps>
    >
  ) => void;
  /**
   * which DOM node the dropdown menu will attach to
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
}

const DropdownMenu = (props: DropdownMenuProps) => {
  const {
    children,
    disablePortal,
    initialIsOpen,
    menuMaxHeight,
    menuMaxWidth,
    onSelect,
    overlayRoot,
    preferredDirections,
    trigger
  } = props;
  const defaultItemToString = (
    item: React.ReactElement<DropdownMenuItemProps>
  ) => (item ? item.props.value : "");
  const handleSelection = (
    selectedItem: React.ReactElement<DropdownMenuItemProps>,
    stateAndHelpers?: ControllerStateAndHelpers<
      React.ReactElement<DropdownMenuItemProps>
    >
  ) => {
    if (onSelect) {
      onSelect(defaultItemToString(selectedItem), stateAndHelpers);
    }
  };

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
      }) => {
        let menuItemIndex: number = -1;
        return (
          <div className={display("inline-block")}>
            <Dropdownable
              isOpen={isOpen}
              overlayRoot={overlayRoot}
              preferredDirections={preferredDirections}
              dropdown={
                <PopoverBox
                  maxHeight={menuMaxHeight}
                  maxWidth={menuMaxWidth}
                  {...getMenuProps(
                    { refKey: "menuRef" },
                    // The menu is not mounted when `isOpen` is false, so Downshift's ref check fails incorrectly
                    // The menu behaves as expected, and has all the correct attributes
                    { suppressRefError: true }
                  )}
                >
                  {(
                    React.Children.toArray(children) as Array<
                      React.ReactElement<DropdownSectionProps>
                    >
                  ).map((section, sectionIndex) => {
                    const { children } = section.props;
                    const menuItems = React.Children.toArray(children);

                    return React.cloneElement(section, {
                      sectionIndex,
                      children: menuItems.map((child, i) => {
                        // this value captures the index amongst all DropdownMenuItems
                        // irrespective of which section they are in
                        menuItemIndex++;

                        return React.cloneElement(child, {
                          listLength: menuItems.length,
                          isActive: highlightedIndex === menuItemIndex,
                          index: i,
                          ...getItemProps({
                            item: child
                          })
                        });
                      })
                    });
                  })}
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
                <button {...getToggleButtonProps()} className={buttonReset}>
                  {trigger}
                </button>
              )}
            </Dropdownable>
          </div>
        );
      }}
    </Downshift>
  );
};

DropdownMenu.defaultProps = {
  preferredDirections: [
    Direction.BottomRight,
    Direction.BottomLeft,
    Direction.BottomCenter,
    Direction.TopRight,
    Direction.TopCenter,
    Direction.TopLeft
  ]
};

export default DropdownMenu;
