import * as React from "react";

import { default as Breadcrumb } from "../../breadcrumb/components/Breadcrumb";

import {
  listReset,
  flex,
  flexItem,
  padding,
  display,
  border
} from "../../shared/styles/styleUtils";
import { cx } from "emotion";

export interface PageHeaderProps {
  breadcrumbElements: React.ReactNodeArray;
  actions?: Array<React.ReactElement<any>>;
}

class PageHeader extends React.PureComponent<PageHeaderProps, {}> {
  public render() {
    const { breadcrumbElements, actions = [] } = this.props;

    return (
      <div
        className={cx(
          flex({ align: "center" }),
          padding("all", "l"),
          border("bottom")
        )}
      >
        <div className={flexItem("grow")}>
          <Breadcrumb>{breadcrumbElements}</Breadcrumb>
        </div>
        <div className={flexItem("shrink")}>
          <ul className={cx(listReset, flex({ align: "center" }))}>
            {actions.map(action => {
              return (
                <li
                  className={cx(padding("left", "s"), display("inherit"))}
                  key={`${action.key}`}
                >
                  {action}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default PageHeader;
