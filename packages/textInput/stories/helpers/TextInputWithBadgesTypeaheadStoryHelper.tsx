import * as React from "react";
import { Item } from "../../../typeahead/components/Typeahead";
import { BadgeDatum } from "../../components/TextInputWithBadges";

interface RenderProps {
  selectedItems: string[];
  selectHandler: (selectedItems: string[], lastSelectedItem?: string) => void;
  badges: BadgeDatum[];
  badgeChangeHandler: (
    badges: BadgeDatum[],
    lastAddedBadge: BadgeDatum
  ) => void;
  items: Item[];
}

interface Props {
  badges?: BadgeDatum[];
  children: (renderProps: RenderProps) => React.ReactNode;
  items: Item[];
}

interface State {
  selectedItems: string[];
  badges: BadgeDatum[];
  items: Item[];
}

class TextInputWithBadgesTypeaheadStoryHelper extends React.PureComponent<
  Props,
  State
> {
  constructor(props) {
    super(props);

    this.badgeChangeHandler = this.badgeChangeHandler.bind(this);
    this.selectHandler = this.selectHandler.bind(this);

    this.state = {
      selectedItems: props.selectedItems || [],
      badges: props.badges || [],
      items: props.items || []
    };
  }

  selectHandler(selectedItems, lastSelectedItem) {
    const itemDataFromItemsArray = () => {
      if (!this.state.badges.some(badge => badge.value === lastSelectedItem)) {
        return this.props.items.filter(item => item.value === lastSelectedItem);
      }
      return [];
    };

    this.setState({
      selectedItems,
      badges: [
        ...this.state.badges.filter(item => item.value !== lastSelectedItem),
        ...itemDataFromItemsArray()
      ]
    });
  }

  badgeChangeHandler(badges) {
    this.setState({
      badges,
      selectedItems: badges.map(badge => badge.value)
    });
  }

  getItems(value, checked) {
    const selectedItems = this.state.items || [];

    if (checked) {
      return [...items, value];
    }

    return selectedItems.filter(selectedItem => selectedItem !== value);
  }

  render() {
    const { children } = this.props;
    const { selectedItems, badges, items } = this.state;

    return children({
      selectHandler: this.selectHandler,
      badgeChangeHandler: this.badgeChangeHandler,
      badges,
      selectedItems,
      items
    });
  }
}

export default TextInputWithBadgesTypeaheadStoryHelper;
