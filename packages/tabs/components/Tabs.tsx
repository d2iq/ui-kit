import * as React from "react";
import { Tabs as ReactTabs, TabList, TabPanel } from "react-tabs";
import { injectGlobal } from "emotion";

import { TabItemProps } from "./TabItem";
import { TabTitle } from "..";

// Copy & paste from node_modules/react-tabs/style/react-tabs.css
// This is needed to give the tabs a style
/* tslint:disable */
injectGlobal`
.react-tabs {
  -webkit-tap-highlight-color: transparent;
}

.react-tabs__tab-list {
  border-bottom: 1px solid #aaa;
  margin: 0 0 10px;
  padding: 0;
}

.react-tabs__tab {
  display: inline-block;
  border: 1px solid transparent;
  border-bottom: none;
  bottom: -1px;
  position: relative;
  list-style: none;
  padding: 6px 12px;
  cursor: pointer;
}

.react-tabs__tab--selected {
  background: #fff;
  border-color: #aaa;
  color: black;
  border-radius: 5px 5px 0 0;
}

.react-tabs__tab--disabled {
  color: GrayText;
  cursor: default;
}

.react-tabs__tab:focus {
  box-shadow: 0 0 5px hsl(208, 99%, 50%);
  border-color: hsl(208, 99%, 50%);
  outline: none;
}

.react-tabs__tab:focus:after {
  content: "";
  position: absolute;
  height: 5px;
  left: -4px;
  right: -4px;
  bottom: -5px;
  background: #fff;
}

.react-tabs__tab-panel {
  display: none;
}

.react-tabs__tab-panel--selected {
  display: block;
}
`;
/* tslint:enable */

export type TabSelected = string;
export interface TabsProps {
  children: Array<React.ReactElement<TabItemProps>>;
  selectedIndex: number;
  onSelect: (tabIndex: number) => void;
}

class Tabs extends React.PureComponent<TabsProps, {}> {
  public render() {
    const { children, selectedIndex, onSelect } = this.props;

    const { tabs, tabsContent } = (React.Children.toArray(children) as Array<
      React.ReactElement<TabItemProps>
    >)
      .filter(item => React.isValidElement<TabItemProps>(item))
      .reduce<{
        tabs: React.ReactNodeArray;
        tabsContent: React.ReactNodeArray;
      }>(
        (acc, item) => {
          const { tabs = [], tabsContent = [] } = acc;
          const { children } = item.props;
          const key = item.key ? item.key : undefined;

          const title = React.Children.toArray(children).find(
            child =>
              React.isValidElement<TabTitle>(child) && child.type === TabTitle
          );
          const tabChildren = React.Children.toArray(children).filter(
            child => !(React.isValidElement(child) && child.type === TabTitle)
          );
          return {
            tabs: [...tabs, title],
            tabsContent: [
              ...tabsContent,
              <TabPanel key={key}>{tabChildren}</TabPanel>
            ]
          };
        },
        { tabs: [], tabsContent: [] }
      );

    return (
      <ReactTabs selectedIndex={selectedIndex} onSelect={onSelect}>
        <TabList>{tabs}</TabList>
        {tabsContent}
      </ReactTabs>
    );
  }
}

export default Tabs;
