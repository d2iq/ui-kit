import * as React from "react";

interface FieldListHelperState {
  items: any[];
}

interface RenderProps {
  removeItemHander: (rowIndex) => () => void;
  fieldUpdateHandler: (rowIndex, dataKey) => (e) => void;
  addItemHandler: (newItem) => void;
  items: any[];
}
interface FieldListHelperProps {
  children: (renderProps: RenderProps) => React.ReactNode;
  items: any[];
}

const updateIndex = (ts, i, obj) =>
  ts.map((t, j) => (i === j ? { ...t, ...obj } : t));

class FieldListHelper extends React.PureComponent<
  FieldListHelperProps,
  FieldListHelperState
> {
  constructor(props) {
    super(props);

    this.handleFieldUpdate = this.handleFieldUpdate.bind(this);
    this.handleRemoveItem = this.handleRemoveItem.bind(this);
    this.addItemHandler = this.addItemHandler.bind(this);

    this.state = {
      items: props.items
    };
  }

  public render() {
    return this.props.children({
      items: this.state.items,
      fieldUpdateHandler: this.handleFieldUpdate,
      removeItemHander: this.handleRemoveItem,
      addItemHandler: this.addItemHandler
    });
  }

  private handleFieldUpdate(rowIndex, valueKey) {
    const { items } = this.state;
    return e => {
      this.setState({
        items: updateIndex(items, rowIndex, {
          ...items[rowIndex],
          ...{ [valueKey]: e.currentTarget.value }
        })
      });
    };
  }

  private handleRemoveItem(rowIndex) {
    const { items } = this.state;
    return () => {
      this.setState({
        items: items.filter((_n, i) => rowIndex !== i)
      });
    };
  }

  private addItemHandler(newItem) {
    const { items } = this.state;
    this.setState({
      items: [...items, newItem]
    });
  }
}

export default FieldListHelper;
