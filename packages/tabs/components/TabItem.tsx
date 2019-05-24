import * as React from "react";

export interface TabItemProps {
  children?: React.ReactNode;
}

class TabItem extends React.PureComponent<TabItemProps, {}> {
  public render() {
    const { children } = this.props;

    return children;
  }
}

export default TabItem;
