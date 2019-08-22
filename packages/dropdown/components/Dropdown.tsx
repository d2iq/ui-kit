import * as React from "react";
import { cx } from "emotion";
import Downshift, { ControllerStateAndHelpers } from "downshift";
import { Dropdownable } from "../../dropdownable";
import { border, buttonReset, display } from "../../shared/styles/styleUtils";
import DropdownMenu from "../../dropdowMenu/components/DropdownMenu";
import DropdownMenuItem from "../../dropdowMenu/components/DropdownMenuItem";
import { DropdownActionsProps } from "../components/DropdownActions";
import { DropdownActionItemProps } from "../components/DropdownActionItem";
import { Direction } from "../../dropdownable/components/Dropdownable";

export interface DropdownProps {
  /**
   * Groups of dropdown menu items
   */
  children:
    | React.ReactElement<DropdownActionsProps>
    | Array<React.ReactElement<DropdownActionsProps>>;
  /**
   * Whether the dropdown starts open
   */
  initialIsOpen?: boolean;
  /**
   * Maximum height the menu can grow to
   */
  menuMaxHeight?: number;
  /**
   * callback for when a menu item is clicked
   */
  onSelect?: (
    selectedItem: string,
    stateAndHelpers?: ControllerStateAndHelpers<
      React.ReactElement<DropdownActionItemProps>
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
}

const Dropdown: React.SFC<DropdownProps> = props => {
  const {
    children,
    initialIsOpen,
    menuMaxHeight,
    onSelect,
    overlayRoot,
    preferredDirections,
    trigger
  } = props;
  const defaultItemToString = (
    item: React.ReactElement<DropdownActionItemProps>
  ) => (item ? item.props.value : "");
  const handleSelection = (
    selectedItem: React.ReactElement<DropdownActionItemProps>,
    stateAndHelpers?: ControllerStateAndHelpers<
      React.ReactElement<DropdownActionItemProps>
    >
  ) => {
    if (onSelect) {
      onSelect(defaultItemToString(selectedItem), stateAndHelpers);
    }
  };

  const getDropdownContents = (highlightedIndex, getItemProps) =>
    (React.Children.toArray(children) as Array<
      React.ReactElement<DropdownActionsProps>
    >).reduce<{
      sections: React.ReactNodeArray;
      menuItemIndex: number;
    }>(
      (acc, item, sectionIndex) => {
        const { sections = [] } = acc;
        const { children } = item.props;
        const menuItems = React.Children.toArray(children) as Array<
          React.ReactElement<DropdownActionItemProps>
        >;
        const childrenWithKeys = menuItems.map((child, i) => {
          acc.menuItemIndex++;

          return (
            <DropdownMenuItem
              listLength={menuItems.length}
              isActive={highlightedIndex === acc.menuItemIndex}
              appearance={child.props.appearance}
              index={i}
              key={child.key || `${sectionIndex}-${i}`}
              {...getItemProps({
                item: child
              })}
            >
              {child}
            </DropdownMenuItem>
          );
        });

        return {
          sections: [...sections, childrenWithKeys],
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
            open={isOpen}
            overlayRoot={overlayRoot}
            preferredDirections={preferredDirections}
            dropdown={
              <DropdownMenu
                maxHeight={menuMaxHeight}
                {...getMenuProps({ refKey: "menuRef" })}
              >
                {getDropdownContents(
                  highlightedIndex,
                  getItemProps
                ).sections.map((sectionContent, i) => (
                  <div
                    key={`dropdown-${i}`}
                    className={cx({ [border("top")]: i !== 0 })}
                  >
                    {sectionContent}
                  </div>
                ))}
              </DropdownMenu>
            }
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
      )}
    </Downshift>
  );
};

Dropdown.defaultProps = {
  preferredDirections: [
    Direction.BottomRight,
    Direction.BottomLeft,
    Direction.BottomCenter,
    Direction.TopRight,
    Direction.TopCenter,
    Direction.TopLeft
  ]
};

export default Dropdown;
