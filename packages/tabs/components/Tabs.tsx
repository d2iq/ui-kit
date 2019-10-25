import * as React from "react";
import { Tabs as ReactTabs, TabList, TabPanel } from "react-tabs";
import { injectGlobal, cx } from "emotion";

import { TabItemProps } from "./TabItem";
import { TabTitle } from "..";
import {
  fontWeightMedium,
  themeTextColorPrimary,
  themeBrandPrimary,
  themeBgHover
} from "../../design-tokens/build/js/designTokens";
import {
  padding,
  margin,
  listReset,
  border
} from "../../shared/styles/styleUtils";
import { SpaceSizes } from "../../shared/styles/styleUtils/modifiers/modifierUtils";

const spacingSizeConfig: { [key: string]: SpaceSizes } = {
  inset: "l",
  tabPanel: "xl",
  tabList: "s",
  betweenTabs: "m",
  withinTab: "s"
};

// Copy & paste from node_modules/react-tabs/style/react-tabs.css
// Also changed to better fit the ui kit styles.
// This is needed to give the tabs a style
/* tslint:disable */
injectGlobal`
.react-tabs {
  -webkit-tap-highlight-color: transparent;
}

.react-tabs__tab-list {
  ${listReset};
}

.react-tabs__tab {
  position: relative;
  cursor: pointer;
  font-weight: ${fontWeightMedium};
  color: ${themeTextColorPrimary};
  &:after{
    content: "";
    position: absolute;
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
  flex-grow: 1;
}

.react-tabs__tab-panel--selected {
  display: block;
}

.uiKit-tabs--fullHeight {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.uiKit-tabs--horizontal {
  display: flex;
  flex-direction: column;

  .react-tabs__tab-list {
    ${border("bottom")};
    ${padding("horiz", spacingSizeConfig.inset)};
  }

  .react-tabs__tab {
    display: inline-block;
    ${padding("vert", spacingSizeConfig.withinTab)};
    ${margin("right", spacingSizeConfig.betweenTabs)};

    &:after {
      height: 2px;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }

  .react-tabs__tab-panel {
    ${margin("horiz", spacingSizeConfig.inset)};
    ${margin("vert", spacingSizeConfig.tabPanel)};
  }
}

.uiKit-tabs--vertical {
  display: flex;
  flex-direction: row;

  .react-tabs__tab-list {
    ${border("right")};
    ${padding("vert", spacingSizeConfig.inset)};
  }

  .react-tabs__tab {
    display: block;
    ${padding("horiz", spacingSizeConfig.withinTab)};
    ${margin("bottom", spacingSizeConfig.betweenTabs)};

    &:after {
      width: 2px;
      right: 0;
      top: 0;
      bottom: 0;
    }
  }

  .react-tabs__tab-panel {
    ${margin("vert", spacingSizeConfig.inset)};
    ${margin("horiz", spacingSizeConfig.tabPanel)};
  }
}
`;
/* tslint:enable */

export type TabSelected = string;
export interface TabsProps {
  children: Array<React.ReactElement<TabItemProps>>;
  selectedIndex: number;
  onSelect: (tabIndex: number) => void;
  direction?: "horiz" | "vert";
}

class Tabs extends React.PureComponent<TabsProps, {}> {
  public render() {
    const {
      children,
      selectedIndex,
      onSelect,
      direction = "horiz"
    } = this.props;

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
              ...(tabChildren.length
                ? [<TabPanel key={key}>{tabChildren}</TabPanel>]
                : [])
            ]
          };
        },
        { tabs: [], tabsContent: [] }
      );
    return (
      <ReactTabs
        className={cx("react-tabs", {
          "uiKit-tabs--fullHeight": Boolean(tabsContent.length),
          "uiKit-tabs--vertical": direction === "vert",
          "uiKit-tabs--horizontal": direction === "horiz"
        })}
        selectedIndex={selectedIndex}
        onSelect={onSelect}
        data-cy="tabs"
      >
        <TabList>{tabs}</TabList>
        {tabsContent}
      </ReactTabs>
    );
  }
}

export default Tabs;
