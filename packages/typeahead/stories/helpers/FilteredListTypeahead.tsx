import * as React from "react";
import Typeahead, { TypeaheadProps, Item } from "../../components/Typeahead";
import { TextInput } from "../../../textInput";

interface FilteredListProps {
  items: Item[];
  menuEmptyState?: React.ReactElement<any>;
}

interface FilteredListState {
  items: Item[];
}

class FilteredList extends React.PureComponent<
  FilteredListProps,
  FilteredListState
> {
  constructor(props) {
    super(props);

    this.filterList = this.filterList.bind(this);

    this.state = {
      items: props.items || []
    };
  }

  filterList(e) {
    const val = e.target.value;

    if (!val) {
      this.setState({ items: this.props.items });
    } else {
      this.setState({
        items: this.props.items.filter(item =>
          item.value.match(new RegExp(val, "i"))
        )
      });
    }
  }

  render() {
    return (
      <div>
        <Typeahead
          items={this.state.items}
          textField={
            <TextInput
              id="filter"
              inputLabel="Filtering"
              placeholder="Placeholder"
              hintContent={
                this.props.menuEmptyState
                  ? "Type something with no matches"
                  : ""
              }
              onChange={this.filterList}
            />
          }
          menuEmptyState={this.props.menuEmptyState}
        >
          default
        </Typeahead>
      </div>
    );
  }
}

export default FilteredList;
