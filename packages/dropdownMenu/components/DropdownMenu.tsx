import * as React from "react";
import { useId } from "react-id-generator";
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
  onSelect?: (selectedItem: string) => void;
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
  const [menuId] = useId(1, "menu");
  const [isOpen, setIsOpen] = React.useState(initialIsOpen || false);
  const [highlightedIndex, setHighlightedIndex] = React.useState<number | null>(
    null
  );
  const defaultItemToString = (
    item: React.ReactElement<DropdownMenuItemProps>
  ) => (item ? item.props.value : "");
  const handleSelection = (
    selectedItem: React.ReactElement<DropdownMenuItemProps>
  ) => {
    if (onSelect) {
      onSelect(defaultItemToString(selectedItem));
    }
  };

  const arrayChildren = React.Children.toArray(children) as Array<
    React.ReactElement<DropdownSectionProps>
  >;
  const flatItems = arrayChildren.flatMap(section => section.props.children);

  const handleButtonClick = e => {
    e.preventDefault();

    setIsOpen(!isOpen);
    setHighlightedIndex(null);
  };

  const resetState = () => {
    setIsOpen(initialIsOpen || false);
    setHighlightedIndex(null);
  };

  const handleEnter = event => {
    if (isOpen && highlightedIndex != null) {
      event.preventDefault();

      const item = flatItems[highlightedIndex];
      // do nothing for disabled items
      if (item == null || item.props.disabled) {
        return;
      }

      handleSelection(item);
    }
  };

  const handleArrowUp = event => {
    event.preventDefault();
    if (isOpen && flatItems.length) {
      if (highlightedIndex === null || highlightedIndex === 0) {
        // jump to bottom of menu if on first one
        setHighlightedIndex(flatItems.length - 1);
      } else {
        // decrement index
        setHighlightedIndex(highlightedIndex - 1);
      }
    } else {
      setIsOpen(true);
      if (flatItems.length) {
        // start at bottom if opening with arrow up
        setHighlightedIndex(flatItems.length - 1);
      }
    }
  };

  const handleArrowDown = event => {
    event.preventDefault();
    if (isOpen && flatItems.length) {
      if (
        highlightedIndex === null ||
        highlightedIndex === flatItems.length - 1
      ) {
        // jump back to top of menu if at the end
        setHighlightedIndex(0);
      } else {
        // increment index
        setHighlightedIndex(highlightedIndex + 1);
      }
    } else {
      setIsOpen(true);
      if (flatItems.length) {
        // when opening menu, highlight first one
        setHighlightedIndex(0);
      }
    }
  };

  const handleButtonKeyDown = event => {
    const { keyCode } = event;

    switch (keyCode) {
      case 13:
        // enter key
        return handleEnter(event);
      case 27:
        // escape key
        event.preventDefault();
        return resetState();
      case 32:
        // spacebar behaves the same as a click
        return handleButtonClick(event);
      case 38:
        // arrow up
        return handleArrowUp(event);
      case 40:
        // arrow down
        return handleArrowDown(event);
    }
  };

  const toggleProps = {
    "aria-haspopup": true,
    "aria-label": isOpen ? "close menu" : "open menu",
    "data-toggle": true,
    role: "button",
    onBlur: resetState,
    onClick: handleButtonClick,
    onKeyUp: e => e.preventDefault(),
    onKeyDown: handleButtonKeyDown
  };

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
            role="listbox"
            id={menuId}
            aria-labelledby={`${menuId}-label`}
          >
            {
              arrayChildren.reduce<{
                sections: React.ReactNodeArray;
                menuItemIndex: number;
              }>(
                (acc, section, sectionIndex) => {
                  const { children: sectionChildren } = section.props;
                  const menuItems = React.Children.toArray(sectionChildren);

                  // should be DropdownSections
                  const newSection = React.cloneElement(section, {
                    sectionIndex,
                    children: menuItems.map((child, index) => {
                      acc.menuItemIndex++;

                      // set this as a variable for future reference
                      const itemIndex = acc.menuItemIndex;
                      const isActive = highlightedIndex === itemIndex;

                      const handleHighlighted = () => {
                        if (isActive) {
                          return;
                        }
                        setHighlightedIndex(itemIndex);
                      };

                      // should be DropdownMenuItems
                      return React.cloneElement(child, {
                        listLength: menuItems.length,
                        index,
                        isActive,
                        onMouseMove: handleHighlighted,
                        onClick: () => handleSelection(child),
                        id: `${menuId}-item-${itemIndex}`
                      });
                    })
                  });

                  return {
                    sections: [...acc.sections, newSection],
                    menuItemIndex: acc.menuItemIndex
                  };
                },
                { sections: [], menuItemIndex: -1 }
              ).sections
            }
          </PopoverBox>
        }
        disablePortal={disablePortal}
      >
        {React.isValidElement(trigger) ? (
          React.cloneElement(trigger, {
            ...toggleProps,
            tabIndex: 0
          })
        ) : (
          <button type="button" {...toggleProps} className={buttonReset}>
            {trigger}
          </button>
        )}
      </Dropdownable>
    </div>
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
