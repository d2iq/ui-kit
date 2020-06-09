import * as React from "react";
import Downshift from "downshift";
import Dropdownable from "../../dropdownable/components/Dropdownable";
import PopoverBox from "../../popover/components/PopoverBox";
import PopoverListItem from "../../popover/components/PopoverListItem";
import { margin } from "../../shared/styles/styleUtils";
import resizeEventManager from "../../utilities/resizeEventManager";

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

interface TypeaheadState {
  menuWidth: number | null;
}

class Typeahead extends React.PureComponent<TypeaheadProps, TypeaheadState> {
  public static defaultProps: Partial<TypeaheadProps> = {
    menuMaxHeight: 300
  };
  private readonly containerRef = React.createRef<HTMLDivElement>();

  constructor(props) {
    super(props);

    this.state = {
      menuWidth: null
    };

    this.getSelectedItems = this.getSelectedItems.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
    this.setContainerWidth = this.setContainerWidth.bind(this);
    this.stateReducer = this.stateReducer.bind(this);
  }

  public render() {
    const {
      disablePortal,
      items,
      menuEmptyState,
      menuMaxHeight,
      overlayRoot,
      textField,
      selectedItems
    } = this.props;
    const defaultItemToString = item => (item ? item.value : "");
    const { value, ...textFieldProps } = textField.props;
    delete textFieldProps.onFocus;
    delete textFieldProps.onClick;

    return (
      <div ref={this.containerRef} data-cy="typeahead">
        <Downshift
          itemToString={defaultItemToString}
          selectedItem={selectedItems}
          stateReducer={this.stateReducer}
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
                  open={isOpen}
                  overlayRoot={overlayRoot}
                  dropdown={
                    <div data-cy="typeahead-dropdown">
                      {!items.length && !menuEmptyState ? null : (
                        <div className={margin("top", "xxs")}>
                          <PopoverBox
                            width={this.state.menuWidth}
                            maxHeight={menuMaxHeight}
                            {...getMenuProps(
                              { refKey: "menuRef" },
                              // The menu is not mounted when `isOpen` is false, so Downshift's ref check fails incorrectly
                              // The menu behaves as expected, and has all the correct attributes
                              { suppressRefError: true }
                            )}
                          >
                            {items.length ? (
                              items.map((item, index) => (
                                <PopoverListItem
                                  listLength={items.length}
                                  isActive={highlightedIndex === index}
                                  isSelected={
                                    selectedItem &&
                                    selectedItem.includes(item.value)
                                  }
                                  index={index}
                                  {...getItemProps({
                                    key: item.value,
                                    item,
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
                        this.handleInputActivation.call(
                          this,
                          { isOpen, openMenu },
                          e
                        );
                      },
                      onClick: e => {
                        this.handleInputActivation.call(
                          this,
                          { isOpen, openMenu },
                          e
                        );
                      },
                      value: value === undefined ? inputValue : value,
                      downshiftReset: other.reset,
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

  public componentDidMount() {
    resizeEventManager.add(this.setContainerWidth);
  }

  public componentWillUnmount() {
    resizeEventManager.remove(this.setContainerWidth);
  }

  private setContainerWidth() {
    const container = this.containerRef.current;

    if (container && container.getBoundingClientRect().width) {
      this.setState({ menuWidth: container.getBoundingClientRect().width });
    }
  }

  private handleInputActivation(
    stateAndHelpers: {
      openMenu: (cb?: () => void) => void;
      isOpen: boolean;
    },
    e
  ) {
    const { textField } = this.props;
    const { openMenu, isOpen } = stateAndHelpers;

    if (textField.props.onFocus && e.nativeEvent.type === "focus") {
      textField.props.onFocus(e);
    } else if (textField.props.onClick && e.nativeEvent.type === "click") {
      textField.props.onClick(e);
    }

    if (!isOpen) {
      this.setContainerWidth();
      openMenu();
    }
  }

  private handleSelection(selectedItem) {
    const isItemSelected =
      this.props.selectedItems &&
      this.props.selectedItems.includes(selectedItem.value);

    if (this.props.onSelect) {
      this.props.onSelect(
        this.getSelectedItems(selectedItem.value, !isItemSelected),
        selectedItem.value
      );
    }
  }

  private stateReducer(state, changes) {
    switch (changes.type) {
      case Downshift.stateChangeTypes.keyDownEnter:
      case Downshift.stateChangeTypes.clickItem:
        this.handleSelection(changes.selectedItem);

        return {
          ...changes,
          selectedItem: [changes.selectedItem.value],
          isOpen:
            this.props.multiSelect && !(this.props.keepOpenOnSelect === false),
          inputValue:
            this.props.multiSelect || this.props.resetInputOnSelect
              ? ""
              : changes.inputValue
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
            this.props.multiSelect ||
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

  private getSelectedItems(value, checked) {
    const selectedItems = this.props.selectedItems || [];

    if (checked) {
      return [...selectedItems, value];
    }

    return selectedItems.filter(selectedItem => selectedItem !== value);
  }
}

export default Typeahead;
