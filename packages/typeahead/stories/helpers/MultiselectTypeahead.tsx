import * as React from "react";
import { cx } from "emotion";
import Typeahead, { TypeaheadProps } from "../../components/Typeahead";
import {
  flex,
  flexItem,
  padding,
  textWeight
} from "../../../shared/styles/styleUtils";

interface MultiselectTypeaheadState {
  selectedItems: string[];
}

class MultiselectTypeahead extends React.PureComponent<
  TypeaheadProps,
  MultiselectTypeaheadState
> {
  constructor(props) {
    super(props);

    this.selectHandler = this.selectHandler.bind(this);

    this.state = {
      selectedItems: props.selectedItems || []
    };
  }

  selectHandler(selectedItems) {
    this.setState({ selectedItems });
  }

  render() {
    const { items, textField } = this.props;

    return (
      <div className={flex()}>
        <div className={flexItem("grow")}>
          <Typeahead
            items={items}
            selectedItems={this.state.selectedItems}
            multiSelect={true}
            textField={textField}
            onSelect={this.selectHandler}
          />
        </div>
        <div className={cx(flexItem("grow"), padding("left"))}>
          <span className={textWeight("medium")}>Selections:</span>
          <ul>
            {this.state.selectedItems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default MultiselectTypeahead;
