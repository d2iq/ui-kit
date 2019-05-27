import * as React from "react";

import { default as Breadcrumb } from "../../breadcrumb/components/Breadcrumb";

import { flush } from "../../shared/styles/styleUtils";

import { style } from "../style";

export interface PageHeaderProps {
  breadcrumbElements: React.ReactNodeArray;
  actions?: Array<React.ReactElement<any>>;
}

class PageHeader extends React.PureComponent<PageHeaderProps, {}> {
  public render() {
    const { breadcrumbElements, actions = [] } = this.props;

    return (
      <div className={style}>
        <Breadcrumb>{breadcrumbElements}</Breadcrumb>
        <ul className={flush("all")}>
          {actions.map(action => {
            return <li key={`${action.key}`}>{action}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default PageHeader;
