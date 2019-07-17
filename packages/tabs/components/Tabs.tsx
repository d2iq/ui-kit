import * as React from "react";
import { Tabs as ReactTabs, TabList, TabPanel } from "react-tabs";
import { injectGlobal } from "emotion";

import { TabItemProps } from "./TabItem";
import { TabTitle } from "..";
import {
  themeBorder,
  fontWeightMedium,
  themeTextColorPrimary,
  themeBrandPrimary,
  themeBgHover
} from "../../design-tokens/build/js/designTokens";
import { padding, margin } from "../../shared/styles/styleUtils";

// Copy & paste from node_modules/react-tabs/style/react-tabs.css
// Also changed to better fit the ui kit styles.
// This is needed to give the tabs a style
/* tslint:disable */
injectGlobal`
.react-tabs {
  -webkit-tap-highlight-color: transparent;
}

.react-tabs__tab-list {
  border-bottom: 1px solid ${themeBorder};
  ${margin("bottom", "s")}
  ${padding("vert", "none")}
  ${padding("horiz", "l")}
}

.react-tabs__tab {
  display: inline-block;
  position: relative;
  list-style: none;
  ${padding("vert", "s")}
  ${margin("right", "s")}
  cursor: pointer;
  font-weight: ${fontWeightMedium};
  color: ${themeTextColorPrimary};
  &:after{
    content: "";
    height: 2px;
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    background: ${themeBrandPrimary};
    display:none;
  }
}

.react-tabs__tab:focus {
  outline: none;
  background: ${themeBgHover}
}

.react-tabs__tab--selected {
  &:after{
    display: block;
  }
  color: ${themeBrandPrimary};
}

.react-tabs__tab--disabled {
  color: GrayText;
  cursor: default;
}

.react-tabs__tab-panel {
  display: none;
  ${margin("horiz", "l")}
  ${margin("vert", "xl")}
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
          const childrenWithKeys = React.Children.toArray(children).map(
            child =>
              React.isValidElement<TabTitle>(child)
                ? React.cloneElement(child, { key })
                : child
          );

          const title = childrenWithKeys.find(
            child =>
              React.isValidElement<TabTitle>(child) && child.type === TabTitle
          );
          const tabChildren = childrenWithKeys.filter(
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
