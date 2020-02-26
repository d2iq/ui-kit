import * as React from "react";

export interface TabItemProps {
  children?: React.ReactNode;
}

class TabItem extends React.PureComponent<TabItemProps, {}> {
  public render() {
    return this.props.children;
  }
}

export default TabItem;
