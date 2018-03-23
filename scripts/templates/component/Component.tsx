import * as React from "react";
import { style } from "./style";

export interface IComponentProps {
  children?: React.ReactNode | string;
}

class Component extends React.PureComponent<IComponentProps, {}> {
  public render() {
    const { children } = this.props;

    return <span className={style}>{children}</span>;
  }
}

export default Component;
