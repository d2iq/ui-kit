import * as React from "react";

import { separator } from "../style";

export interface BreadcrumbProps {
  children?: React.ReactNode | string;
}

class Breadcrumb extends React.PureComponent<BreadcrumbProps, {}> {
  public render() {
    const { children } = this.props;

    return <div className={separator}>{React.Children.toArray(children)}</div>;
  }
}

export default Breadcrumb;
