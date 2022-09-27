import * as React from "react";
import Downshift from "downshift";
import Dropdownable from "../../dropdownable/components/Dropdownable";
import PopoverBox from "../../popover/components/PopoverBox";
import PopoverListItem from "../../popover/components/PopoverListItem";
import { margin } from "../../shared/styles/styleUtils";
import resizeEventManager from "../../utilities/resizeEventManager";
import TextInputWithBadges from "../../textInput/components/TextInputWithBadges";

export interface Item {
  value: string;
  label: React.ReactNode;
  disabled?: boolean;
}

export interface TypeaheadProps {
  /**
   * items to render into the menu
   */
  items: Item[];
  /**
   * the text input element
   */
  textField: React.ReactElement<any>;
  /**
   * what is displayed when there are no items
   */
  menuEmptyState?: React.ReactElement<any>;
  /**
   * maximum height the menu can grow to
   */
  menuMaxHeight?: number;
  /**
   * whether more than one item can be selected
   */
  multiSelect?: boolean;
  /**
   * callback for when an item is selected
   */
  onSelect?: (selectedItems: string[], lastSelectedItem?: string) => void;
  /**
   * which DOM node the dropdown menu will attach to
   */
  overlayRoot?: HTMLElement;
  /**
   * an array of item values that are selected
   */
  selectedItems?: string[];
  /**
   * whether the menu stays open on select
   */
  keepOpenOnSelect?: boolean;
  /**
   * whether the selected item's value is set as the input's value
   */
  resetInputOnSelect?: boolean;
  /**
   * Whether the dropdown node should be portalled to document.body, or open in it's parent DOM node
   */
  disablePortal?: boolean;
}

const defaultItemToString = item => (item ? item.value : "");

const getSelectedItems = (value, checked, selectedItems) => {
  if (checked) {
    return [...selectedItems, value];
  }

  return selectedItems.filter(selectedItem => selectedItem !== value);
};

const Typeahead = React.memo(
  ({
    disablePortal,
    items,
    menuEmptyState,
    menuMaxHeight = 300,
    overlayRoot,
    textField,
    selectedItems,
    multiSelect,
    keepOpenOnSelect,
    resetInputOnSelect,
    onSelect
  }: TypeaheadProps) => {
    const { value, ...textFieldProps } = textField.props;
    delete textFieldProps.onFocus;
    delete textFieldProps.onClick;

    const [menuWidth, setMenuWidth] = React.useState<number | null>(null);

    const containerRef = React.createRef<HTMLDivElement>();

    const setContainerWidth = () => {
      const container = containerRef.current;

      if (container && container.getBoundingClientRect().width) {
        setMenuWidth(container.getBoundingClientRect().width);
      }
    };

    React.useEffect(() => {
      resizeEventManager.add(setContainerWidth);

      return () => {
        resizeEventManager.remove(setContainerWidth);
      };
    }, []);

    function handleSelection(selectedItem) {
      const isItemSelected =
        selectedItems && selectedItems.includes(selectedItem.value);

      if (onSelect) {
        onSelect(
          getSelectedItems(
            selectedItem.value,
            !isItemSelected,
            selectedItems ?? []
          ),
          selectedItem.value
        );
      }
    }

    function stateReducer(state, changes) {
      switch (changes.type) {
        case Downshift.stateChangeTypes.keyDownEnter:
        case Downshift.stateChangeTypes.clickItem:
          handleSelection(changes.selectedItem);

          return {
            ...changes,
            selectedItem: [changes.selectedItem.value],
            isOpen: multiSelect && !(keepOpenOnSelect === false),
            inputValue:
              multiSelect || resetInputOnSelect ? "" : changes.inputValue
          };

        case Downshift.stateChangeTypes.changeInput:
          return {
            ...changes,
            // Manually setting `isOpen` to make sure the menu closes after the user has made a selection
            //
            // By default, Downshift changes it's internal `isOpen` state to `false` when an input changes,
            // but there are cases where we need the <input> to dispatch an `onChange` event on item selection
            // so that `onChange` bubbles up to the parent <form> element's `onChange` event
            isOpen:
              multiSelect ||
              ((state.inputValue || changes.inputValue) &&
                changes.inputValue !== state.inputValue),
            selectedItem:
              changes.inputValue === state.inputValue ? state.selectedItem : ""
          };

        case Downshift.stateChangeTypes.blurInput:
        case Downshift.stateChangeTypes.mouseUp:
          return {
            ...changes,
            inputValue: state.inputValue
          };

        default:
          return changes;
      }
    }

    function handleInputActivation(
      stateAndHelpers: {
        openMenu: (cb?: () => void) => void;
        isOpen: boolean;
      },
      e
    ) {
      const { openMenu, isOpen } = stateAndHelpers;

      if (textField.props.onFocus && e.nativeEvent.type === "focus") {
        textField.props.onFocus(e);
      } else if (textField.props.onClick && e.nativeEvent.type === "click") {
        textField.props.onClick(e);
      }

      if (!isOpen) {
        setContainerWidth();
        openMenu();
      }
    }

    return (
      <div ref={containerRef} data-cy="typeahead">
        <Downshift
          itemToString={defaultItemToString}
          selectedItem={selectedItems}
          stateReducer={stateReducer}
        >
          {({
            getInputProps,
            getItemProps,
            getMenuProps,
            isOpen,
            highlightedIndex,
            openMenu,
            selectedItem,
            inputValue,
            ...other
          }) => {
            return (
              <div>
                <Dropdownable
                  isOpen={isOpen}
                  overlayRoot={overlayRoot}
                  dropdown={
                    <div data-cy="typeahead-dropdown">
                      {!items.length && !menuEmptyState ? null : (
                        <div className={margin("top", "xxs")}>
                          <PopoverBox
                            width={menuWidth}
                            maxHeight={menuMaxHeight}
                            {...getMenuProps(
                              { refKey: "menuRef" },
                              // The menu is not mounted when `isOpen` is false, so Downshift's ref check fails incorrectly
                              // The menu behaves as expected, and has all the correct attributes
                              { suppressRefError: true }
                            )}
                          >
                            {items.length ? (
                              items.map((item: Item, index: number) => (
                                <PopoverListItem
                                  key={item.value}
                                  listLength={items.length}
                                  isActive={highlightedIndex === index}
                                  isSelected={
                                    selectedItem &&
                                    selectedItem.includes(item.value)
                                  }
                                  index={index}
                                  {...getItemProps({
                                    // results from upstream bug in downshift typings (https://github.com/downshift-js/downshift/pull/1382)
                                    item: item as any,
                                    disabled: item.disabled
                                  })}
                                >
                                  {item.label}
                                </PopoverListItem>
                              ))
                            ) : (
                              <div>{menuEmptyState}</div>
                            )}
                          </PopoverBox>
                        </div>
                      )}
                    </div>
                  }
                  disablePortal={disablePortal}
                >
                  {React.cloneElement(
                    textField,
                    getInputProps({
                      onFocus: e => {
                        handleInputActivation({ isOpen, openMenu }, e);
                      },
                      onClick: e => {
                        handleInputActivation({ isOpen, openMenu }, e);
                      },
                      value: value ?? inputValue ?? "",
                      ...(textField.type === TextInputWithBadges && {
                        downshiftReset: other.reset
                      }),
                      ...textFieldProps
                    })
                  )}
                </Dropdownable>
              </div>
            );
          }}
        </Downshift>
      </div>
    );
  }
);

export default Typeahead;
