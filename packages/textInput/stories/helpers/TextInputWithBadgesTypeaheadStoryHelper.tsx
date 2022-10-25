import * as React from "react";
import { Item } from "../../../typeahead/components/Typeahead";
import { BadgeDatum } from "../../components/TextInputWithBadges";

interface RenderProps {
  selectedItems: string[];
  selectHandler: (selectedItems: string[], lastSelectedItem?: string) => void;
  badges: BadgeDatum[];
  badgeChangeHandler: (badges: BadgeDatum[]) => void;
  items: Item[];
}

interface TextInputWithBadgesTypeaheadStoryHelperProps {
  badges?: BadgeDatum[];
  children: (renderProps: RenderProps) => React.ReactElement;
  items: Item[];
  selectedItems?: string[];
}

const TextInputWithBadgesTypeaheadStoryHelper = (
  props: TextInputWithBadgesTypeaheadStoryHelperProps
) => {
  const [badges, setBadges] = React.useState<BadgeDatum[]>(props.badges || []);
  const [selectedItems, setSelectedItems] = React.useState<string[]>(
    props.selectedItems || []
  );

  const selectHandler = (
    selectedItems: string[],
    lastSelectedItem?: string
  ) => {
    const itemDataFromItemsArray = () => {
      if (!badges.some(badge => badge.value === lastSelectedItem)) {
        return props.items.filter(item => item.value === lastSelectedItem);
      }
      return [];
    };

    setSelectedItems(selectedItems);
    setBadges([
      ...badges.filter(badge => badge.value !== lastSelectedItem),
      ...itemDataFromItemsArray()
    ]);
  };

  const badgeChangeHandler = (badges: BadgeDatum[]) => {
    setSelectedItems(badges.map(badge => badge.value));
    setBadges(badges);
  };

  return props.children({
    selectHandler,
    badgeChangeHandler,
    badges,
    selectedItems,
    items: props.items
  });
};

export default TextInputWithBadgesTypeaheadStoryHelper;
