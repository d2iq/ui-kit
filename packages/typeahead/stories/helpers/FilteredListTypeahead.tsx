import * as React from "react";
import Typeahead, { Item } from "../../components/Typeahead";
import { TextInput } from "../../../textInput";

interface FilteredListProps {
  items: Item[];
  menuEmptyState?: React.ReactElement<any>;
}

const FilteredList = (props: FilteredListProps) => {
  const [items, setItems] = React.useState<Item[]>(props.items || []);

  const filterList = e => {
    const val = e.target.value;

    if (!val) {
      setItems(props.items);
    } else {
      setItems(
        props.items.filter(item => item.value.match(new RegExp(val, "i")))
      );
    }
  };

  return (
    <div>
      <Typeahead
        items={items}
        textField={
          <TextInput
            id="filter"
            inputLabel="Filtering"
            placeholder="Placeholder"
            hintContent={
              props.menuEmptyState ? "Type something with no matches" : ""
            }
            onChange={filterList}
          />
        }
        menuEmptyState={props.menuEmptyState}
      />
    </div>
  );
};

export default React.memo(FilteredList);
